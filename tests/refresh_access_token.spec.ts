import { test, expect } from "@playwright/test";
import { RefreshAccessToken, refreshAccessToken } from "../service/refresh_access_token.service";
import { loginRequest } from "../service/login.service";

test("Refresh access token using refresh token", async ({ request }) => {

    // retrive login refresh token
    const response = await loginRequest(request, "/api/v1/auth/login");
    const body = await response.json();
    expect(body.message).toContain("Login successful");

    // Generate refresh token payload
    const payLoad: RefreshAccessToken = {
        refresh_token: body.data.refresh_token as string
    }

    // Api call for refresh token
    const refreshRes = await refreshAccessToken(request, "/api/v1/auth/refresh", payLoad);
    const refreshBody = await refreshRes.json();

    // Verify success message
    expect(refreshBody.success).toBe(true);
    expect(refreshBody.message).toContain("Token refreshed successfully");
})
