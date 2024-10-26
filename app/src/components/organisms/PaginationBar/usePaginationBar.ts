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
    if (currentPageNum - padding > 2) {
      paginationItems.push("...");
    }
    for (let idx = -1 * padding; idx <= padding; idx++) {
      if (currentPageNum + idx > 1 && currentPageNum + idx < maxPageNum) {
        pushNumberItem(paginationItems, String(currentPageNum + idx));
      }
    }
    if (currentPageNum + padding < maxPageNum - 1) {
      paginationItems.push("...");
    }
    pushNumberItem(paginationItems, String(maxPageNum));
  };

  return { setPaginationItems };
}
