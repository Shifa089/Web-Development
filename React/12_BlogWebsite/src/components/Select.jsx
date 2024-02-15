import { React, useId, forwardRef } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full  sm:w-24 '>
            {label && <label
                htmlFor={id} className=''>
            </label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} sm:w-24`}
            >
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)