import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useAuthStore } from "./useAuthStore";
import { beforeEach, describe, expect, test } from "vitest";

describe("Auth Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("login", () => {
    const authStore = useAuthStore();
    const { isLoggedIn, accessToken, refreshToken } = storeToRefs(authStore);
    const { login } = authStore;

    expect(isLoggedIn.value).toBe(false);
    expect(accessToken.value).toBe("");
    expect(refreshToken.value).toBe("");

    login("sampleToken", "sampleRefreshToken");

    expect(isLoggedIn.value).toBe(true);
    expect(accessToken.value).toBe("sampleToken");
    expect(refreshToken.value).toBe("sampleRefreshToken");
  });

  test("logout", () => {
    const authStore = useAuthStore();
    const { isLoggedIn, accessToken, refreshToken } = storeToRefs(authStore);
    const { login, logout } = authStore;

    expect(isLoggedIn.value).toBe(false);
    expect(accessToken.value).toBe("");
    expect(refreshToken.value).toBe("");

    login("sampleToken", "sampleRefreshToken");
    logout();

    expect(isLoggedIn.value).toBe(false);
    expect(accessToken.value).toBe("");
    expect(refreshToken.value).toBe("");
  });
});
