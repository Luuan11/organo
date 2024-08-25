import { ReactElement } from 'react';
import './button.css'

import React from 'react';

interface ButtonProps {
    children: ReactElement
}

const Button = (props: ButtonProps) => {
    return (
        <button className='btn'>{props.children}</button>
    )
}

export default Button;
