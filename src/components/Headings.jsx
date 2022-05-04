import React from 'react'
import './Heading.css';
export function Heading1({ text, className }) {

    return (
        <h1
            className={' headingClass text-transparent font-normal leading-tight text-[48px] ' + className}
        >
            {text}
        </h1>
    )
}

export function Heading2({ text, className }) {

    return (
        <h1
            className={'text-white font-normal leading-tight text-[48px] ' + className}
        >
            {text}
        </h1>
    )
}
