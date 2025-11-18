import { test, expect, APIResponse } from "@playwright/test";
import { loginRequest } from "../service/login.service";

test("User can login successfully with valid credentials", async ({ baseURL, request }) => {
    const response = await loginRequest(request, "/api/v1/auth/login");

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.message).toContain("Login successful");
})