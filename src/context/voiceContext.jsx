import { createContext, useState } from "react";
 const VoiceContext = createContext();
const VoiceProvider = ({ children }) => {
  const [responseText, setResponseText] = useState("");

  return (
    <VoiceContext.Provider
      value={{
        responseText,
        setResponseText,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
};
export { VoiceContext, VoiceProvider };
