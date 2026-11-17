import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {children: "Clique Aqui"},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {
  variant: "primary",
  isLoading: true
} };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Small: Story = { args: { size: "sm" } };
export const Loading: Story = { args: { isLoading: true } };