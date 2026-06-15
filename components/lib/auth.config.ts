import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnHomepage = nextUrl.pathname === "/";
            if (isOnHomepage && !isLoggedIn) return false;
            return true;
        },
    },
} satisfies NextAuthConfig;