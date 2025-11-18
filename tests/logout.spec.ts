import { test, expect } from "@playwright/test";
import { logout, LogoutPayload } from "../service/logout.service";
import { loginRequest } from "../service/login.service";

test("Logout a user using their refresh token", async ({ request }) => {

    // retrive login refresh token
    const response = await loginRequest(request, "/api/v1/auth/login");
    const body = await response.json();
    expect(body.message).toContain("Login successful");

    // generate logout payload
    const payLoad: LogoutPayload = {
        refresh_token: body.data.refresh_token as string
    }

    // Api call for logout
    const logoutRes = await logout(request, "/api/v1/auth/logout", payLoad);
    const logBody = await logoutRes.json();

    // Verify logout success
    expect(logBody.success).toBe(true);
    expect(logBody.message).toContain("Successfully logged out");
})
