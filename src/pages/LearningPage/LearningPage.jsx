import React, { useState, useRef, useContext } from "react";
import { GoogleGenAI } from "@google/genai";
import { ElevenLabsClient } from "elevenlabs";
import { VoiceContext } from "../../context/voiceContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
import { Cloudinary } from "@cloudinary/url-gen/index";
export default function LearningPage() {
  const { responseText, setResponseText } = useContext(VoiceContext);
  ///const [inputValue, setInputValue] = useState("");
  const [response_text, setResponse] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  /*   const getAllMedia = async () => {
    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/resources/image?max_results=500`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${import.meta.env.VITE_CLOUDINARY_USER_NAME}:${
            import.meta.env.VITE_CLOUDINARY_PASSWORD
          }`
        ).toString("base64")}`,
      },
      params: {
        max_results: 500,
      },
    });

    return response.data.resources; // array of media objects
  }; */
/*   const getAllMedia = async () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const username = import.meta.env.VITE_CLOUDINARY_USER_NAME;
    const password = import.meta.env.VITE_CLOUDINARY_PASSWORD;

    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.resources;
  };

  getAllMedia().then(console.log).catch(console.error); */
  const { title } = useParams();
  console.log("Page title:", title);
  /*  const getCloudinaryAuthHeader = () => {
    const token = Buffer.from(${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}).toString('base64');
    return Basic ${token};
  };
  
  const fetchCloudinaryImages = async (maxResults = 500) => {
    const url = `https://api.cloudinary.com/v1_1/${}/resources/image`;
    const headers = {
      Authorization: getCloudinaryAuthHeader()
    };
    const params = {
      max_results: maxResults
    };
  
    const response = await axios.get(url, { headers, params });
    return response.data;
  }; */
  const client = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_API_KEY_ELEVENLABS,
  });

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_API_KEY_GOOGLE,
  });

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mp3",
        });
        audioChunksRef.current = [];

        try {
          let voiceToText = await client.speechToText.convert({
            model_id: "scribe_v1",
            file: audioBlob,
            language_code: "eng",
            audio_format: "mp3",
          });

          setResponseText(voiceToText.text);
        } catch (error) {
          console.error("Speech to text conversion error:", error);
          setResponseText("Error converting speech to text. Please try again.");
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Microphone access error:", error);
      setResponseText("Error accessing microphone. Please ensure microphone permissions are granted.");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    generateResponse();
  };

  const generateResponse = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: responseText }],
    });

    setResponse(response.text);
    console.log("Gemini Response:", response.text);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Learning Page: {title}
        </h2>

        <button
          onClick={toggleRecording}
          className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${
            isRecording
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit to Gemini
          </button>
        </form>

        <textarea
          value={response_text}
          readOnly
          rows={5}
          placeholder="Gemini response will appear here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 resize-none"
        ></textarea>
      </div>
    </div>
  );
}
