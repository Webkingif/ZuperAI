"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const result = await signIn("credentials", {
            username: formData.get("username"),
            password: formData.get("password"),
            redirect: false
        });

        if (result?.error) {
            setError("Invalid username or password");
        } else {
            window.location.href = "/";
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <Link href="/register">Don't have an account? Sign up</Link>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}