import { test, expect } from "@playwright/test";
import { ChangePasswordPayload, changePasswordRequest } from "../service/change_password.service";
import { loginRequest } from "../service/login.service";

test.skip("update password", async ({ request }) => {
    // Api call for login token
    const response = await loginRequest(request, "/api/v1/auth/login");
    const body = await response.json();

    // Get the access token value from the API response
    expect(body.message).toContain("Login successful");
    const access_token = body.data.access_token;

    // Generate payload for password update
    const payLoad = {
        old_password: process.env.PASSWORD as string,
        new_password: "123@Nadim"
    }

    // Api call for changed password
    const updatePassRes = await changePasswordRequest(request, "/v1/auth/change-password", payLoad, access_token);
    const updatePassBody = await updatePassRes.json();
    expect(updatePassBody.success).toBe(true);
});
