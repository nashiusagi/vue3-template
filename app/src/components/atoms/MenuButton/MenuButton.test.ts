import { mount } from "@vue/test-utils";
import MenuButton from "./MenuButton.vue";
import { describe, expect, test } from "vitest";

describe("MenuButtonのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(MenuButton);

    expect(wrapper.find("button").exists()).toBe(true);
  });
});
