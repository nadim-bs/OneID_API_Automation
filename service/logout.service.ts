import { APIRequestContext } from "@playwright/test";

export interface LogoutPayload {
    refresh_token: string
}

export async function logout(request: APIRequestContext, endpoint: string, refresh_token: LogoutPayload) {
    return await request.post(endpoint,
        {
            data: refresh_token,
            headers: { 'Content-Type': 'application/json' }
        })
}
