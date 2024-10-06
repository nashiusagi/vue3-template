import type { Meta, StoryObj } from "@storybook/vue3";
import DarkModeToggleButton from "./DarkModeToggleButton.vue";

type Story = StoryObj<typeof DarkModeToggleButton>;

const meta: Meta<typeof DarkModeToggleButton> = {
  title: "atoms/DarkModeToggleButton",
  component: DarkModeToggleButton,
};

export const Default: Story = {
  render: () => ({
    components: { DarkModeToggleButton },
    template: "<DarkModeToggleButton error='タイトルは必須です' />",
  }),
};

export default meta;
