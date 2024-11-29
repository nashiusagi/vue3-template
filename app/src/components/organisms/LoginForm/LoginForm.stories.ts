import { setup, type Meta, type StoryObj } from "@storybook/vue3";
import LoginForm from "./LoginForm.vue";
import { createPinia } from "pinia";
import type { App } from "vue";

type Story = StoryObj<typeof LoginForm>;

const pinia = createPinia();
setup((app: App) => {
  app.use(pinia)
})

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
