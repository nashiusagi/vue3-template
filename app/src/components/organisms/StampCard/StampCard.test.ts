import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ElementPlus from "element-plus";
import StampCard from "./StampCard.vue";

describe("StampCardのテスト", () => {
  test("正常に表示がされる", () => {
    const wrapper = mount(StampCard, {
      props: {
        stampContents: [
          {
            text: "1",
            status: "Checked",
          },
        ],
      },
      global: {
        plugins: [ElementPlus],
      },
      attachTo: document.body,
    });

    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.findAll("span").length).toBe(1);
  });

  test("3種類すべて正常に表示がされる", () => {
    const wrapper = mount(StampCard, {
      props: {
        stampContents: [
          {
            text: "1",
            status: "Checked",
          },
          {
            text: "2",
            status: "Error",
          },
          {
            text: "3",
            status: "NotChecked",
          },
        ],
      },
      global: {
        plugins: [ElementPlus],
      },
      attachTo: document.body,
    });

    expect(wrapper.findAll("svg").length).toBe(1);
    expect(wrapper.findAll("span").length).toBe(3);
  });
});
