import React from 'react'

export function Button1({ value, className, href = "#/" }) {
    return (
        <>
            <a href={href} className={' text-md text-white font-bold h-min p-3 mt-auto mb-auto whitespace-nowrap bg-[#D9664C] rounded-md text-center scale-100 transition hover:scale-105 ease-in-out duraation-150 ' + className}>{value}</a>
        </>
    )
}

export function Button2({ value, className, href = "#/" }) {
    return (
        <>
            <a href={href} className={className + ' max-w-min text-md text-[#D9664C] border-2 border-solid border-[#D9664C] font-bold h-min p-3 mt-auto mb-auto whitespace-nowrap bg-transparent rounded-md text-center scale-100 transition hover:scale-105 ease-in-out duraation-150 hover:text-white  '}>{value}</a>
        </>
    )
}

