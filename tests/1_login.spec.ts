import { test, expect } from "@playwright/test";
import * as dotenv from 'dotenv';
import { LoginPayload, loginRequest } from "../service/login.service";
import {saveEnvVar } from "../utils/utils";

dotenv.config();

test("User can login successfully with valid credentials", async ({ request }) => {
    
    const payLoad: LoginPayload = {
        username: process.env.OneID_username as string,
        password: process.env.PASSWORD as string,
        recaptcha_token: process.env.RECAPTCHA_TOKEN as string
    };

    const response = await loginRequest(request, payLoad);
    console.log(response)
    expect(response.success).toBe(true);
    expect(response.message).toContain("Login successful");
    const refreshToken = response.data.refresh_token; // Get the refresh token value from the API response
    saveEnvVar("refresh_token",refreshToken); // Save the refresh_token key in the .env file with the new value
    
})