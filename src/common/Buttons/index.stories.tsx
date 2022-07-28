import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Button from '.';

export default {
    title: 'Button',
    component: Button,
};

export const XS_Button = () => <MemoryRouter><Button to="/" message="Demo message" size="xs" /></MemoryRouter>;
export const LG_Button = () => <MemoryRouter><Button to="/" message="Demo message" size="lg" /></MemoryRouter>;
