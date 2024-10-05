import { test, expect } from "vitest";
import { getUrl } from "./getUrl";

test("正常にURLが取得できる", () => {
  expect(getUrl("localhost:5173/", "index")).toBe("localhost:5173/index");
});
