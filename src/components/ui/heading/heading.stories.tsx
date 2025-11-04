import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from './heading';

/**
 * Heading component for displaying page titles and section headers.
 * Uses Gilroy font and consistent typography styling.
 */
const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {},
  tags: [],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to display inside the heading'
    }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default heading with sample text
 */
export const Default: Story = {
  args: {
    children: 'Votre trajet commence ici'
  }
};

export const DefaultDesktop: Story = {
  globals: {
    viewport: 'desktop',
  },
  args: {
    children: 'Votre trajet commence ici'
  },
};