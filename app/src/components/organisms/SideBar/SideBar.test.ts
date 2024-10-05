import { mount } from "@vue/test-utils";
import { describe, expect, suite, test } from "vitest";
import SideBar from "./SideBar.vue";
import ElementPlus from "element-plus";
import { nextTick } from "vue";

describe("", () => {
  suite("handleOpenのテスト", () => {
    test("メニューアイテムを一度クリックすると、サブアイテムが表示される", async () => {
      const wrapper = mount(SideBar, {
        global: {
          plugins: [ElementPlus],
        },
        attachTo: document.body,
      });
      const navigations = wrapper.findAll(".el-sub-menu");

      await navigations[0].find(".el-sub-menu__title").trigger("click");

      expect(navigations[0].exists()).toBeTruthy();
      expect(navigations[0].find(".el-menu--inline").isVisible()).toBeTruthy();
    });
  });

  suite("handleCloseのテスト", () => {
    test("メニューアイテムを二度クリックすると、サブアイテムが隠される", async () => {
      const wrapper = mount(SideBar, {
        global: {
          plugins: [ElementPlus],
        },
        attachTo: document.body,
      });
      const navigations = wrapper.findAll(".el-sub-menu");

      await navigations[0].find("div").trigger("click");
      await nextTick();
      await navigations[0].find("div").trigger("click");

      expect(navigations[0].exists()).toBeTruthy();
      expect(navigations[0].find(".el-menu--inline").isVisible()).toBeFalsy();
    });
  });
});
