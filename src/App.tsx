import { useState } from "react";
import "./App.css";

const hackerNames = [
  "ShadowRoot",
  "GhostPacket",
  "ZeroDay",
  "DarkNode",
  "CipherWolf",
  "RootAccess",
  "NullPointer",
  "SilentProxy",
  "QuantumByte",
  "HexHunter"
];

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const randomName =
      hackerNames[Math.floor(Math.random() * hackerNames.length)];

    const newMessage = `[${randomName}] > ${input}`;

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="chat-room">
      <h1>🛡️ CyberSec Command Center</h1>

      <div className="messages">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            {message}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          TRANSMIT
        </button>
      </div>
    </div>
  );
};

export default App;
