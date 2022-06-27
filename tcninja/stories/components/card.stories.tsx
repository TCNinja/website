import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../../components/card';

export default {
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory< typeof Card> = ( args ) => <Card {...args} />;

export const SmallCard = Template.bind({});

SmallCard.args = {
    cardId: '253488'
}

export const realCard = Template.bind({});

realCard.args = {
    cardId: '262926'
}