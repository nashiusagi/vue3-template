import { describe, test, expect } from "vitest";
import { ref } from "vue";
import { usePaginationBar } from "./usePaginationBar";

describe("setPaginationItems", () => {
  const { setPaginationItems } = usePaginationBar();

  test("正常に値を入れることができる", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 1, 12, 1);

    expect(pageItems.value).toStrictEqual(["1", "2", "...", "12"]);
  });

  test("1ページ目でpadding=2のとき、1,2,12ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 1, 12, 2);

    expect(pageItems.value).toStrictEqual(["1", "2", "3", "...", "12"]);
  });

  test("最終ページ目でmaxPage=12,padding=1のとき、1,11,12ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 12, 12, 1);

    expect(pageItems.value).toStrictEqual(["1", "...", "11", "12"]);
  });

  test("最終ページ目でmaxPage=12,padding=2のとき、1,10,11,12ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 12, 12, 2);

    expect(pageItems.value).toStrictEqual(["1", "...", "10", "11", "12"]);
  });

  test("5ページ目でmaxPage=12,padding=1のとき、1,4,5,6,12ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 5, 12, 1);

    expect(pageItems.value).toStrictEqual([
      "1",
      "...",
      "4",
      "5",
      "6",
      "...",
      "12",
    ]);
  });

  test("5ページ目でmaxPage=12,padding=2のとき、1,3,4,5,6,7,12ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 5, 12, 2);

    expect(pageItems.value).toStrictEqual([
      "1",
      "...",
      "3",
      "4",
      "5",
      "6",
      "7",
      "...",
      "12",
    ]);
  });

  test("1ページ目でmaxPage=1のとき、1ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 1, 1, 1);

    expect(pageItems.value).toStrictEqual(["1"]);
  });

  test("1ページ目でmaxPage=2, padding=2のとき、1,2ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 1, 2, 2);

    expect(pageItems.value).toStrictEqual(["1", "2"]);
  });

  test("1ページ目でmaxPage=4, padding=1のとき、1,2,4ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 1, 4, 1);

    expect(pageItems.value).toStrictEqual(["1", "2", "...", "4"]);
  });

  test("2ページ目でmaxPage=4, padding=2のとき、1,2,3,4ページ目が表示される", () => {
    const pageItems = ref<string[]>([]);
    setPaginationItems(pageItems.value, 2, 4, 2);

    expect(pageItems.value).toStrictEqual(["1", "2", "3", "4"]);
  });
});
