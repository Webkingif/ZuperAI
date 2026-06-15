"use client";
import { useState } from "react";
import { registerUser } from "@/server/actions/auth";

export default function RegisterPage() {
    const [error, setError] = useState("");

    async function handleSubmit(formData: FormData) {
        try {
            await registerUser(formData);
        } catch (err) {
            setError("Registration failed. Username or email may already exist.");
        }
    }

    return (
        <form action={handleSubmit}>
            <input name="username" placeholder="Username" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Register</button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}