import type { Meta, StoryObj } from "@storybook/vue3";
import MenuButton from "./MenuButton.vue";

type Story = StoryObj<typeof MenuButton>;

const meta: Meta<typeof MenuButton> = {
  title: "atoms/MenuButton",
  component: MenuButton,
};

export const Default: Story = {
  render: () => ({
    components: { MenuButton },
    template: "<MenuButton />",
  }),
};

export default meta;
