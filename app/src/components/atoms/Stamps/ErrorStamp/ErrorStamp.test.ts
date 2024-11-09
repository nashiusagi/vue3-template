import { mount } from "@vue/test-utils";
import ErrorStamp from "./ErrorStamp.vue";
import { describe, expect, test } from "vitest";

describe("ErrorStampのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(ErrorStamp);

    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("span").text()).toBe("!");
  });
});
