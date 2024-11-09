import type { Meta, StoryObj } from "@storybook/vue3";
import StampCard from "./StampCard.vue";

type Story = StoryObj<typeof StampCard>;

const meta: Meta<typeof StampCard> = {
  title: "organisms/StampCard",
  component: StampCard,
};

export const Default: Story = {
  args: {
    stampContents: [
      {
        text: "1",
        status: "Checked",
      },
      {
        text: "2",
        status: "Checked",
      },
      {
        text: "3",
        status: "Checked",
      },
      {
        text: "4",
        status: "Error",
      },
      {
        text: "5",
        status: "NotChecked",
      },
      {
        text: "6",
        status: "NotChecked",
      },
      {
        text: "7",
        status: "NotChecked",
      },
      {
        text: "8",
        status: "NotChecked",
      },
      {
        text: "9",
        status: "NotChecked",
      },
      {
        text: "10",
        status: "NotChecked",
      },
    ],
  },
  render: (args) => ({
    components: { StampCard },
    setup() {
      return { ...args };
    },
    template: `<StampCard :stampContents="stampContents" />`,
  }),
};

export default meta;
