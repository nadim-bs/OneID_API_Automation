import { APIRequestContext } from "@playwright/test";

const logoutUrl = "https://test.api.oneid.com.bd/api/v1/auth/logout";
export interface LogoutPayload{
    refresh_token:string
}

export async function logout(request:APIRequestContext, refresh_token:LogoutPayload){
    const responseData = await request.post(logoutUrl, 
        {
            data:refresh_token,
            headers:{'Content-Type':'application/json'}
        })
    const response = await responseData.json();
    return response;
}
