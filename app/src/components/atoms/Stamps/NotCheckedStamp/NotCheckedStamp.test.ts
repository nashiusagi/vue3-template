import { mount } from "@vue/test-utils";
import NotCheckedStamp from "./NotCheckedStamp.vue";
import { describe, expect, test } from "vitest";

describe("NotCheckedStampのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(NotCheckedStamp, {
      props: {
        text: "1",
      },
    });

    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("span").text()).toBe("1");
  });
});
