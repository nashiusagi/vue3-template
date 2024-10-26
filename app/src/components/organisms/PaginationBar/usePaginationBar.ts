export function usePaginationBar() {
  const pushNumberItem = (array: string[], numberItem: string) => {
    if (array.indexOf(numberItem) === -1) {
      array.push(numberItem);
    }
    return true;
  };

  const setPaginationItems = (
    paginationItems: string[],
    currentPageNum: number,
    maxPageNum: number,
    padding: number,
  ) => {
    paginationItems.length = 0;
    paginationItems.push("1");

    if (currentPageNum === 1) {
      paginationItems.push("2", "3", "...", String(maxPageNum));
    } else if (currentPageNum === maxPageNum) {
      paginationItems.push(
        "...",
        String(maxPageNum - 2),
        String(maxPageNum - 1),
        String(maxPageNum),
      );
    } else {
      if (currentPageNum - 2 * padding > 1) {
        paginationItems.push("...");
      }
      pushNumberItem(paginationItems, String(currentPageNum - 1));
      pushNumberItem(paginationItems, String(currentPageNum));
      pushNumberItem(paginationItems, String(currentPageNum + 1));

      if (currentPageNum + 2 * padding < maxPageNum) {
        paginationItems.push("...");
      }
    }
    pushNumberItem(paginationItems, String(maxPageNum));
  };

  return { setPaginationItems };
}
