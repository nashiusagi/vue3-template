import { mount } from "@vue/test-utils";
import MainLayout from "./MainLayout.vue";
import { describe, expect, test } from "vitest";

describe("MainLayoutのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(MainLayout, {
    });

    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.find("aside").exists()).toBe(true);
    expect(wrapper.find("section").exists()).toBe(true);
  });
});
