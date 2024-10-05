import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import PostCard from "./PostCard.vue";

describe("PostCardのテスト", ()=> {
  test("正常に表示がされる", () => {
    const wrapper = mount(PostCard, {
      props: {
        post: {
          id: 1,
          title: "title 1",
          body: "body 1"
        }
      }
    })

    expect(wrapper.find(".post_link").exists()).toBe(true)
    expect(wrapper.find(".post_link").text()).toBe("title 1")
    expect(wrapper.find(".post_link").attributes("href")).toBe("/post/1")
    expect(wrapper.find("p").text()).toBe("body 1")
  })
})
