import { createAuthClient } from "better-auth/react"

const BaseURL = process.env.BETTER_AUTH_URL;
if(!BaseURL) {
    throw new Error("Missing baseURL");
}

export const authClient = createAuthClient({
    baseURL: BaseURL
})

export const { signIn, signUp, useSession } = createAuthClient();
