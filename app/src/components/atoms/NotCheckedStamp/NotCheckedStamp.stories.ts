import type { Meta, StoryObj } from "@storybook/vue3";
import NotCheckedStamp from "./NotCheckedStamp.vue";

type Story = StoryObj<typeof NotCheckedStamp>;

const meta: Meta<typeof NotCheckedStamp> = {
  title: "atoms/NotCheckedStamp",
  component: NotCheckedStamp,
};

export const Default: Story = {
  render: () => ({
    components: { NotCheckedStamp },
    template: "<NotCheckedStamp :text='9' />",
  }),
};

export const TwoDigits: Story = {
  render: () => ({
    components: { NotCheckedStamp },
    template: "<NotCheckedStamp :text='11' />",
  }),
};

export const ThreeDigits: Story = {
  render: () => ({
    components: { NotCheckedStamp },
    template: "<NotCheckedStamp :text='118' />",
  }),
};

export default meta;
