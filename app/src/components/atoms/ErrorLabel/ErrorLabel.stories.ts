import type { Meta, StoryObj } from "@storybook/vue3";
import ErrorLabel from "./ErrorLabel.vue";

type Story = StoryObj<typeof ErrorLabel>;

const meta: Meta<typeof ErrorLabel> = {
  title: "atoms/ErrorLabel",
  component: ErrorLabel,
};

export const Default: Story = {
  render: () => ({
    components: { ErrorLabel },
    template: "<ErrorLabel error='タイトルは必須です' />",
  }),
};

export default meta;
