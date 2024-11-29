import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "./LoginForm.vue";
import ElementPlus from "element-plus";
import { beforeEach } from "node:test";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from '@pinia/testing'

describe("LoginFormのテスト", () => {
  beforeEach(()=>{
    setActivePinia(createPinia())
  })
  test("正常に表示がされる", () => {
    const wrapper = mount(LoginForm, {
      global: {
        plugins: [
          ElementPlus,
          createTestingPinia({
            initialState: {
              auth: {
                isLoggedIn: false,
                accessToken: "",
                refreshToken: ""
              }
            },
            createSpy: vi.fn
          })
        ],
      },
      attachTo: document.body,
    });
    const inputForms = wrapper.findAll(".el-input__wrapper");

    expect(inputForms.length).toBe(2)
  })

})
