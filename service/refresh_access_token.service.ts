import {APIRequestContext} from "@playwright/test";

const url = "https://test.api.oneid.com.bd/api/v1/auth/refresh";
export interface RefreshAccessToken{
    refresh_token:string
}

export async function refreshAccessToken(request:APIRequestContext, refresh_token:RefreshAccessToken){
    const responseData = await request.post(url, 
        {
            data:refresh_token,
            headers:{'Content-Type':'application/json'}
        })
    const response = await responseData.json();
    return response;
}

