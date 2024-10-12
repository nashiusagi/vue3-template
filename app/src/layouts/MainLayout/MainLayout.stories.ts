import type { Meta, StoryObj } from "@storybook/vue3";
import MainLayout from "./MainLayout.vue";

type Story = StoryObj<typeof MainLayout>;

const meta: Meta<typeof MainLayout> = {
  title: "layout/MainLayout",
  component: MainLayout,
};

export const Default: Story = {
  render: () => ({
    components: { MainLayout },
    template: "<MainLayout />",
  }),
};

export default meta;
