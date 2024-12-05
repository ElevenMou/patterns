import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

type StoryProps = ComponentProps<typeof Card>;

const meta: Meta<StoryProps> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Card",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: "Default Card",
  },
};
