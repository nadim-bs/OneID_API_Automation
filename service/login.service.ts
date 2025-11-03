import { APIRequestContext } from "@playwright/test";

const loginUrl = "https://dev.api.oneid.com.bd/api/v1/auth/login";
export interface LoginPayload{
    username:string,
    password:string,
    recaptcha_token:string
}

export async function loginRequest(request:APIRequestContext, payLoad:LoginPayload){
    const responseData = await request.post(loginUrl,
         {
            data:payLoad,
            headers:{'Content-Type':'application/json'}
        });
    const response = await responseData.json();
    return response;
}