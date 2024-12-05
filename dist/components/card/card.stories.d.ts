import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./card";
declare type StoryProps = ComponentProps<typeof Card>;
declare const meta: Meta<StoryProps>;
export default meta;
declare type Story = StoryObj<StoryProps>;
export declare const Default: Story;
