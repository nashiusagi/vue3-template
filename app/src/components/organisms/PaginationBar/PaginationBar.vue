<script setup lang="ts">
import { type Ref, ref, onMounted, watch } from "vue";

const props = defineProps<{
  maxPage: number;
}>();

const pad = 1;
const pageNum: Ref<number> = ref(1);
const pageItem: Ref<string[]> = ref([]);

const emits = defineEmits(["change"]);

const showByPageNum = (index: number) => {
  pageNum.value = index;
  emits("change", pageNum.value);
};

const showPreviousPage = () => {
  pageNum.value = pageNum.value > 1 ? pageNum.value - 1 : 1;
  emits("change", pageNum.value);
};

const showNextPage = () => {
  pageNum.value =
    pageNum.value < props.maxPage ? pageNum.value + 1 : props.maxPage;
  emits("change", pageNum.value);
};

const pushNumberItem = (array: string[], numberItem: string) => {
  if (array.indexOf(numberItem) === -1) {
    array.push(numberItem);
  }
  return true;
};

const setPageItem = () => {
  // reinitialize
  pageItem.value.length = 0;

  pageItem.value.push("1");
  if (pageNum.value === 1) {
    pageItem.value.push("2", "3", "...", String(props.maxPage));
  } else if (pageNum.value === props.maxPage) {
    pageItem.value.push(
      "...",
      String(props.maxPage - 2),
      String(props.maxPage - 1),
      String(props.maxPage),
    );
  } else {
    if (pageNum.value - 2 * pad > 1) {
      pageItem.value.push("...");
    }
    pushNumberItem(pageItem.value, String(pageNum.value - 1));
    pushNumberItem(pageItem.value, String(pageNum.value));
    pushNumberItem(pageItem.value, String(pageNum.value + 1));

    if (pageNum.value + 2 * pad < props.maxPage) {
      pageItem.value.push("...");
    }
  }
  pushNumberItem(pageItem.value, String(props.maxPage));
  console.log(pageNum.value)
};

watch(pageNum, setPageItem);
onMounted(setPageItem);
</script>

<template>
  <div :class="$style.pagination_bar_container">
    <nav :class="$style.bar">
      <ul :class="$style.pagination_buttons">
        <li :class="$style.pagination_button">
          <a @click="showPreviousPage" :class="$style.pagination_button_content">
            <
          </a>
        </li>
        <li v-for="num in pageItem" :key="num" :class="$style.pagination_button">
          <a v-if="num==='...'" :class="$style.pagination_button_content">
            ...
          </a>
          <a v-else-if="num === String(pageNum)" @click="showByPageNum(Number(num))" :class="$style.selected_page_button">
            {{ num }}
          </a>
          <a v-else @click="showByPageNum(Number(num))" :class="$style.pagination_button_content">
            {{ num }}
          </a>
        </li>
        <li :class="$style.pagination_button">
          <a @click="showNextPage" :class="$style.pagination_button_content">
            >
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style module>
.pagination_bar_container {
  padding: 0 32px;
}

.bar {
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
}

.pagination_buttons {
  display: inline-flex;
  cursor: pointer;
}

.pagination_button {
  width: 32px;
  height: 32px;
  font-size: 16px;
  list-style: none;
  border: 1px solid #333;
  display: table;
  vertical-align: middle;
}

.pagination_button_content {
  padding: 8px;
  line-height: 1.25;
  display: table-cell;
  text-align: center;
}

.selected_page_button {
  padding: 8px;
  line-height: 1.25;
  background-color: #4a78ff;
  display: table-cell;
  text-align: center;
}

.selected_page_button:hover {
  background-color: #1550ff;
}
</style>
