import { mount } from "@vue/test-utils";
import ErrorLabel from "./ErrorLabel.vue";
import { describe, expect, test } from "vitest";

describe("ErrorLabelのテスト", () => {
  test("レンダリングのテスト", () => {
    const wrapper = mount(ErrorLabel, {
      props: {
        error: "名前を入力してください",
      },
    });

    expect(wrapper.find(".error_label").exists()).toBe(true);
    expect(wrapper.find(".error_label").text()).toBe("名前を入力してください");
  });
});
