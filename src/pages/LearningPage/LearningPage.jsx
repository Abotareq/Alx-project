import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { useContext } from "react";
import { VoiceContext } from "../../context/voiceContext";
export default function LearningPage() {
  let { responseText, setResponseText } = useContext(VoiceContext);
  const [inputValue, setInputValue] = useState("");
  const [response_text, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an API response

    main();
  };
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyDoKPvvZTzORNW3iH7ie5YwZrsgkfX8yuE",
  });

  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: responseText }],
    });
    setResponse(response.text);
    console.log(response.text);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <textarea
        value={response_text}
        readOnly
        rows={5}
        placeholder="API response will appear here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 resize-none"
      ></textarea>
    </div>
  );
}
