import type { Meta, StoryObj } from "@storybook/vue3";
import TheHeader from "./TheHeader.vue";

type Story = StoryObj<typeof TheHeader>;

const meta: Meta<typeof TheHeader> = {
  title: "organisms/TheHeader",
  component: TheHeader,
};

export const Default: Story = {
  render: () => ({
    components: { TheHeader },
    template: "<TheHeader />",
  }),
};

export default meta;
