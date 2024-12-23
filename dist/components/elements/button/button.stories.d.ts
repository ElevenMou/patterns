import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
declare type StoryProps = ComponentProps<typeof Button>;
declare const meta: Meta<StoryProps>;
export default meta;
declare type Story = StoryObj<StoryProps>;
export declare const Primary: Story;
export declare const Outlined: Story;
export declare const Success: Story;
export declare const Cancel: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const Large: Story;
export declare const Small: Story;
