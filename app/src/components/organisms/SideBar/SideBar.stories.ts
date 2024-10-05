import type { Meta, StoryObj } from "@storybook/vue3";
import SideBar from "./SideBar.vue";

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  title: "organisms/SideBar",
  component: SideBar,
};

export const Default: Story = {
  render: () => ({
    components: { SideBar },
    template: '<SideBar />',
  }),
};

export default meta;
