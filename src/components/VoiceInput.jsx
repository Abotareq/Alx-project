import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { VoiceContext } from "../context/voiceContext";
import { ElevenLabsClient } from "elevenlabs";
function VoiceInput() {
  let { responseText, setResponseText } = useContext(VoiceContext);
  const client = new ElevenLabsClient({
    apiKey: "sk_f8a13f952558ed7a1c33d7701031c9c0ecb30cc6b2ef0a81",
  });
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    // Initialize Web Speech API
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = true;
      recog.interimResults = true;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setTranscript(text);
      };

      recog.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      recog.onend = () => {
        setIsRecording(false);
      };

      setRecognition(recog);
    } else {
      console.warn("Speech Recognition API not supported in this browser.");
    }
  }, []);

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

        // Create a downloadable file
        /*   const audioUrl = URL.createObjectURL(audioBlob);
        const link = document.createElement("a");
        link.href = audioUrl;
        link.download = `recording-${Date.now()}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(audioUrl); */

        // Optionally, send to backend
        /*      const formData = new FormData();
        formData.append('audio', audioBlob, `recording-${Date.now()}.mp3`);
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            console.log('Audio uploaded successfully');
          } else {
            console.error('Upload failed');
          }
        } catch (error) {
          console.error('Error uploading audio:', error);
        } */

        let voiceTotext = await client.speechToText.convert({
          model_id: "scribe_v1",
          file: audioBlob,
          language_code: "eng",
          audio_format: "mp3",
        });
        ///console.log(voiceTotext);
        setResponseText(voiceTotext.text);
        console.log(responseText);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      recognition?.start();
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
    recognition?.stop();
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
        <div className="mt-4 p-4 bg-gray-50 rounded-md min-h-[100px]">
          <p className="text-gray-700">
            {transcript || "Speak to see your text here..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VoiceInput;
