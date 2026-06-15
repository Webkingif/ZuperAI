"use server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const registerSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

export async function registerUser(formData: FormData) {
    const validated = registerSchema.parse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password")
    });

    const hashedPassword = await hash(validated.password, 12);

    await prisma.user.create({
        data: {
            username: validated.username,
            email: validated.email,
            password: hashedPassword
        }
    });

    await signIn("credentials", {
        username: validated.username,
        password: validated.password,
        redirectTo: "/"
    });
}