import type { Meta, StoryObj } from "@storybook/vue3";
import ErrorStamp from "./ErrorStamp.vue";

type Story = StoryObj<typeof ErrorStamp>;

const meta: Meta<typeof ErrorStamp> = {
  title: "atoms/ErrorStamp",
  component: ErrorStamp,
};

export const Default: Story = {
  render: () => ({
    components: { ErrorStamp },
    template: "<ErrorStamp />",
  }),
};

export default meta;
