import { sendCsvDataAction } from "@/app/actions/sendCsvDataAction";
import Button from "@/components/Button";
import React from "react";

export const SendCsvButton = ({ data }: { data: any }) => {
    const sendData = async () => {
        try {
            const response = await sendCsvDataAction(data); // データ送信
            console.log(await response.json()); // レスポンス確認
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <Button
            label="Send Data"
            size="md"
            assign="primary"
            onClick={() => sendData()} // ラップして関数を渡す
        />
    );
};
