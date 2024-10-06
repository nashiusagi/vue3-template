import type { Meta, StoryObj } from "@storybook/vue3";
import PostCard from "./PostCard.vue";

type Story = StoryObj<typeof PostCard>;

const meta: Meta<typeof PostCard> = {
  title: "organisms/PostCard",
  component: PostCard,
};

export const Default: Story = {
  args: {
    post: {
      id: 1,
      title: "title",
      body: "body",
    },
  },
  render: (args) => ({
    components: { PostCard },
    setup() {
      return { ...args };
    },
    template: '<PostCard :post="post" />',
  }),
};

export default meta;
