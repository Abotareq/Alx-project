import React, { useState, useRef } from "react";
import { useContext } from "react";
import { VoiceContext } from "../context/voiceContext";
import { ElevenLabsClient } from "elevenlabs";

function VoiceInput() {
  let { responseText, setResponseText } = useContext(VoiceContext);
  const client = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_API_KEY_ELEVENLABS,
  });
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      // Request microphone access
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
        console.log(audioBlob);

        let voiceTotext = await client.speechToText.convert({
          model_id: "scribe_v1",
          file: audioBlob,
          language_code: "eng",
          audio_format: "mp3",
        });
        setResponseText(voiceTotext.text);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Voice Input
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
      </div>
    </div>
  );
}

export default VoiceInput;