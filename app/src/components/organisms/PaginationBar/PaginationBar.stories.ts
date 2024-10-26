import type { Meta, StoryObj } from "@storybook/vue3";
import PaginationBar from "./PaginationBar.vue";

type Story = StoryObj<typeof PaginationBar>

const meta: Meta<typeof PaginationBar> = {
  title: "organisms/PaginationBar",
  component: PaginationBar,
}

export const Default: Story = {
  render: () => ({
    components: {PaginationBar},
    template: "<PaginationBar />",
  }),
};

export default meta;
