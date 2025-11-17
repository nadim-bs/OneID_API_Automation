import {test, expect} from "@playwright/test";
import { saveEnvVar } from "../utils/utils";
import { ChangePasswordPayload, changePasswordRequest } from "../service/change_password.service";
import * as dotenv from 'dotenv';
dotenv.config();

test("Users can change their password using old password", async ({request})=>{
    const access_token = process.env.access_token as string;
    const new_password = process.env.NEW_PASSWORD as string;
    const old_password = process.env.PASSWORD as string;
    const payLoad:ChangePasswordPayload={
        old_password:old_password,
        new_password:new_password
    }
    const response = await changePasswordRequest(request,payLoad,access_token);
    console.log(response);
    expect(response.success).toBe(true);
    saveEnvVar("NEW_PASSWORD", old_password); // update the old password 
    saveEnvVar("PASSWORD",new_password ); // update the new password in .env file
    

})
