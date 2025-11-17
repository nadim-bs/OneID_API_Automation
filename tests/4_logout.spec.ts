import {test, expect} from "@playwright/test";
import * as dotenv from "dotenv";
import { logout, LogoutPayload } from "../service/logout.service";
dotenv.config();

test("Logout a user using their refresh token", async ({request})=>{
    const payLoad: LogoutPayload ={
        refresh_token:process.env.refresh_token as string  
    }

    const response = await logout(request, payLoad);
    console.log(response)
    expect(response.success).toBe(true);
    expect(response.message).toContain("Successfully logged out");
})
