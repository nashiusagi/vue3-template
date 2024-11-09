import { mount } from "@vue/test-utils";
import CheckedStamp from "./CheckedStamp.vue";
import { describe, expect, test } from "vitest";

describe("CheckedStampのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(CheckedStamp);

    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});
