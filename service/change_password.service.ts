import { APIRequestContext } from "@playwright/test";

const changePasswordUrl = "https://test.api.oneid.com.bd/api/v1/auth/change-password";
export interface ChangePasswordPayload {
    old_password: string,
    new_password: string
}

export async function changePasswordRequest(request: APIRequestContext, endpoint: string, payload: ChangePasswordPayload, accessToken?: string) {
    return await request.post(endpoint,
        {
            data: payload,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` }
        }
    )
}