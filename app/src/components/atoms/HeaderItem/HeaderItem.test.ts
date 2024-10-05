import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import HeaderItem from "./HeaderItem.vue";

describe("HeaderItemのテスト", () => {
  test("タイトルが表示される", () => {
    const wrapper = mount(HeaderItem, {
      props: {
        link: "https://example.com",
        title: "テスト",
      },
    });

    expect(wrapper.find(".header_title").exists()).toBe(true);
    expect(wrapper.find(".header_title").text()).toBe("テスト");
  });
});
