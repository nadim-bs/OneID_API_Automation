import {test, expect} from "@playwright/test";
import {saveEnvVar } from "../utils/utils"; 
import * as dotenv from "dotenv";
import { RefreshAccessToken, refreshAccessToken } from "../service/refresh_access_token.service";
dotenv.config();

test("Refresh access token using refresh token", async ({request})=>{
    const payLoad: RefreshAccessToken ={
        refresh_token:process.env.refresh_token as string
    }

    const response = await refreshAccessToken(request, payLoad);
    expect(response.success).toBe(true);
    expect(response.message).toContain("Token refreshed successfully");
    const newRefreshToken = response.data.refresh_token; // Extract the new refresh token value from the API response
    saveEnvVar("refresh_token", newRefreshToken); // Update the "refresh_token" entry in the .env file with this new value
})
