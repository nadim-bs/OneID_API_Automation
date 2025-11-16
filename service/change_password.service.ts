import { APIRequestContext } from "@playwright/test";

const changePasswordUrl = "https://test.api.oneid.com.bd/api/v1/auth/change-password";
export interface ChangePasswordPayload{
    old_password:string,
    new_password:string
}

export async function changePasswordRequest(request:APIRequestContext, payload:ChangePasswordPayload, accessToken?:string) {
    const responseData = await request.post(changePasswordUrl,
        {
            data:payload,
            headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${accessToken}`}
        }
    )
    const response = await responseData.json();
    return response;
    
}