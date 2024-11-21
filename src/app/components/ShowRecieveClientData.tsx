"use client";

import React, { useEffect, useState } from "react";

const ShowRecieveClientData = () => {
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => {
    const fetchData = async () => {
      try {
            const response = await fetch("/api/receiveClientData");
            if (response.ok) {
                const result = await response.json();
                setResponseMessage(result.data);
            }
      } catch (error) {
        console.error("Error fetching machine info:", error);
      }
    };

    fetchData();
  }, []);

    return (
        <div>
           <p>Response: {responseMessage}</p>
        </div>
    );
};

export default ShowRecieveClientData;