import type { Meta, StoryObj } from "@storybook/vue3";
import LoginForm from "./LoginForm.vue";

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
  title: "organisms/LoginForm",
  component: LoginForm,
};

export const Default: Story = {
  render: () => ({
    components: { LoginForm },
    template: "<LoginForm />",
  }),
};

export default meta;
