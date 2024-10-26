import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import PaginationBar from "./PaginationBar.vue";
import { nextTick } from "vue";

describe("PaginationBarのテスト", () => {
  test("表示のテスト", async () => {
    const wrapper = mount(PaginationBar, {
      props: {
        maxPage: 12,
      },
    });
    console.log(wrapper.html());
    await nextTick();
    expect(wrapper.findAll("li").length).toBe(4);
  });
});
