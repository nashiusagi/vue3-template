import type { Meta, StoryObj } from "@storybook/vue3";
import CheckedStamp from "./CheckedStamp.vue";

type Story = StoryObj<typeof CheckedStamp>;

const meta: Meta<typeof CheckedStamp> = {
  title: "atoms/stamps/CheckedStamp",
  component: CheckedStamp,
};

export const Default: Story = {
  render: () => ({
    components: { CheckedStamp },
    template: "<CheckedStamp />",
  }),
};

export default meta;
