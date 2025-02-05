import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {}
};
