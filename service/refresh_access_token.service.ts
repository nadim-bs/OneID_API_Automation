import { APIRequestContext } from "@playwright/test";

export interface RefreshAccessToken {
    refresh_token: string
}

export async function refreshAccessToken(request: APIRequestContext, endpoint: string, refresh_token: RefreshAccessToken) {
    return await request.post(endpoint,
        {
            data: refresh_token,
            headers: { 'Content-Type': 'application/json' }
        })

}

