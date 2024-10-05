import type { Meta, StoryObj } from "@storybook/vue3";
import HeaderItem from "./HeaderItem.vue";

type Story = StoryObj<typeof HeaderItem>;

const meta: Meta<typeof HeaderItem> = {
  title: "atoms/HeaderItem",
  component: HeaderItem,
};

export const Default: Story = {
  render: () => ({
    components: { HeaderItem },
    template: "<HeaderItem link='http://example.com' title='タイトル' />",
  }),
};

export default meta;
