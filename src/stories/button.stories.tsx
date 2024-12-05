import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Button from "../components/elements/button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Button",
    },
    variant: {
      options: ["primary", "cancel", "success", "error", undefined],
      control: { type: "select" },
      defaultValue: "primary",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
      defaultValue: "medium",
    },
    onClick: { action: "Button Click" },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Cancel: Story = {
  args: {
    children: "Cancel Button",
    variant: "cancel",
  },
};

export const Error: Story = {
  args: {
    children: "Error Button",
    variant: "error",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};
