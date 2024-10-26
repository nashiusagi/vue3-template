import type { Meta, StoryObj } from "@storybook/vue3";
import PaginationBar from "./PaginationBar.vue";

type Story = StoryObj<typeof PaginationBar>;

const meta: Meta<typeof PaginationBar> = {
  title: "organisms/PaginationBar",
  component: PaginationBar,
};

export const Default: Story = {
  args: {
    maxPage: 12,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage"/>',
  }),
};

export default meta;
