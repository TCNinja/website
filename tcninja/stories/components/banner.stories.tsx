import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPageBanner from '../../components/banner/MainPageBanner';

export default {
    component: MainPageBanner,
} as ComponentMeta<typeof MainPageBanner>;

const Template: ComponentStory< typeof MainPageBanner> = ( args ) => <MainPageBanner {...args} />;

export const WelcomeBanner = Template.bind({});

WelcomeBanner.args = {
    title: "Welcome To TCNinja",
    subtitle: 'Trading Card Ninja',
    message: "Good Thursday"
}
