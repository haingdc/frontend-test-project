import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Input from './input';
import * as Icons from '../icon';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A customizable input component with various types and styling options.',
      },
    },
  },
  tags: [],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      description: 'The type of input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'De:',
    IconLabel: Icons.LocateFixed,
  },
};

export const MapPin: Story = {
  args: {
    placeholder: 'Adresse, aeroport, hotel',
    label: 'A:',
    IconLabel: Icons.MapPin,
  },
};

export const CalendarDays: Story = {
  args: {
    placeholder: 'Sam.14.dec',
    label: 'Date:',
    IconLabel: Icons.CalendarDays,
  },
};

export const Clock3: Story = {
  args: {
    placeholder: '11:00',
    label: 'Heure:',
    IconLabel: Icons.Clock3,
  },
};

/*
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email address...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
    placeholder: 'Enter text...',
  },
};

export const CustomClass: Story = {
  args: {
    placeholder: 'Custom styled input',
    className: 'custom-input-style',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">All Input Types</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Text</label>
          <Input type="text" placeholder="Enter text..." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <Input type="password" placeholder="Enter password..." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <Input type="email" placeholder="Enter email..." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Number</label>
          <Input type="number" placeholder="Enter number..." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Search</label>
          <Input type="search" placeholder="Search..." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">URL</label>
          <Input type="url" placeholder="Enter URL..." />
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Input States</h3>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium w-20">Normal:</span>
          <Input placeholder="Normal input" />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium w-20">Disabled:</span>
          <Input placeholder="Disabled input" disabled />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium w-20">With Value:</span>
          <Input defaultValue="Pre-filled value" />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium w-20">Required:</span>
          <Input placeholder="Required input" required />
        </div>
      </div>
    </div>
  ),
};
*/