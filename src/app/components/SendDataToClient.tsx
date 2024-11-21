"use client";

import React, { useState } from "react";
import Button from "../../components/Button";

const SendDataToClient = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendData = async () => {
    try {
      const response = await fetch("/api/sendClientData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),       // send data
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Error sending data:", error);
      setResponseMessage("Error sending data to API route");
    }
  };

  return (
    <div>
      <h1>Send Data to C# Application</h1>

      <div className="flex flex-row space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your message"
          className="border p-2 rounded flex-grow h-12 text-black"
        />

        <Button
          label="Send Data"
          size="lg"
          assign="primary"
          onClick={sendData}
        />
      </div>
      <p>Response: {responseMessage}</p>
    </div>
  );
};

export default SendDataToClient;
