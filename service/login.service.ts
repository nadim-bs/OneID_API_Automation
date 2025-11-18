import { APIRequestContext, APIResponse } from "@playwright/test";


export interface LoginPayload {
    username: string,
    password: string,
    recaptcha_token: string
}

export async function loginRequest(request: APIRequestContext, endpoint: string) {
    return await request.post(endpoint,
        {
            data: {
                username: process.env.USER_NAME as string,
                password: process.env.PASSWORD as string,
                recaptcha_token: "123456"
            },
            headers: { 'Content-Type': 'application/json' }
        });
}