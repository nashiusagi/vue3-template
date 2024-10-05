import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import TheHeader from "./TheHeader.vue";

describe("TheHeaderのテスト", () => {
  test("レンダリングされる", () => {
    const wrapper = mount(TheHeader, {});

    expect(wrapper.findAll(".header_title").length).toBe(4);
  });
});
