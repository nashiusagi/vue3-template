import type { Meta, StoryObj } from "@storybook/vue3";
import PaginationBar from "./PaginationBar.vue";

type Story = StoryObj<typeof PaginationBar>;

const meta: Meta<typeof PaginationBar> = {
  title: "organisms/PaginationBar",
  component: PaginationBar,
};

export const Default: Story = {
  args: {
    maxPage: 12,
    paddingSize: 1,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const PaddingSize2: Story = {
  args: {
    maxPage: 12,
    paddingSize: 2,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage1: Story = {
  args: {
    maxPage: 1,
    paddingSize: 1,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage2: Story = {
  args: {
    maxPage: 2,
    paddingSize: 1,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage2Padding2: Story = {
  args: {
    maxPage: 2,
    paddingSize: 2,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage3: Story = {
  args: {
    maxPage: 3,
    paddingSize: 1,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage4: Story = {
  args: {
    maxPage: 4,
    paddingSize: 1,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export const MaxPage4Padding2: Story = {
  args: {
    maxPage: 4,
    paddingSize: 2,
  },
  render: (args) => ({
    components: { PaginationBar },
    setup() {
      return { ...args };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />',
  }),
};

export default meta;
