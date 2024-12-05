import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";

import LabelInput from "../components/elements/label-input";

type StoryProps = ComponentProps<typeof LabelInput>;

const meta: Meta<StoryProps> = {
  title: "Elements/LabelInput",
  component: LabelInput,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Label",
    },
    error: {
      control: "text",
      defaultValue: undefined,
    },
    className: {
      control: "text",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    onChange: {
      action: "Input Change",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    label: "Default input",
  },
};

export const Error: Story = {
  args: {
    label: "Error input",
    error: "This is an error",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    disabled: true,
  },
};

export const Textarea: Story = {
  args: {
    label: "Textarea",
    type: "textarea",
  },
};

export const Focused: Story = {
  args: {
    label: "Focused input",
    autoFocus: true,
  },
};
