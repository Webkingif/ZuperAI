"use server"

import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from "@/components/chat";

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

export async function sendMessage(history: ChatMessage[]) {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: history,
        config: {
            systemInstruction: "You are a helpful assistant called Zuper AI. You were created by Idowu Femi and you answer questions accurately."
        }
    });

    return response.text;
}