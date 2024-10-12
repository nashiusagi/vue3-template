import { mount } from "@vue/test-utils";
import DarkModeToggleButton from "./DarkModeToggleButton.vue";
import { describe, expect, test } from "vitest";
import ElementPlus from "element-plus";
import { ref } from "vue";
import { useDark } from "@vueuse/core";

describe("DarkModeToggleButtonのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(DarkModeToggleButton, {
      global: {
        plugins: [ElementPlus],
      },
      attachTo: document.body,
    });

    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.find(".el-switch").exists()).toBe(true);
    expect(wrapper.find(".el-switch__input").attributes("role")).toBe("switch");
  });

  test("一回クリックするとダークモードになる", async () => {
    const wrapper = mount(DarkModeToggleButton, {
      global: {
        plugins: [ElementPlus],
      },
      attachTo: document.body,
    });

    const isDark = ref(useDark());
    await wrapper.find(".el-switch").trigger("click");

    expect(isDark.value).toBe(true);
  });
});
