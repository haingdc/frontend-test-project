import type { Meta, StoryObj } from '@storybook/react-vite';
import HeaderMobile from './header-mobile';

const meta: Meta<typeof HeaderMobile> = {
    title: 'Shared/HeaderMobile',
    component: HeaderMobile,
    parameters: {},
};

export default meta;
type Story = StoryObj<typeof HeaderMobile>;

export const Default: Story = {
    render: () => <HeaderMobile />,
};

