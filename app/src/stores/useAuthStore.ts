import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth", 
  () => {
    const isLoggedIn = ref(false);
    const accessToken = ref("");
    const refreshToken = ref("");

    function login(newAccessToken: string, newRefreshToken: string): void {
      isLoggedIn.value = true;
      accessToken.value = newAccessToken;
      refreshToken.value = newRefreshToken;
    }

    function logout(): void {
      isLoggedIn.value = false;
      accessToken.value = "";
      refreshToken.value = "";
    }

    function $reset() {
      isLoggedIn.value = false;
      accessToken.value = "";
      refreshToken.value = "";
    }

    return { isLoggedIn, accessToken, refreshToken, login, logout, $reset };
  },
  {
    persist: true
  },
);
