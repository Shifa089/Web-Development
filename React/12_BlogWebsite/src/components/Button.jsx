import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-white',
    textColor = 'text-black',
    className = '',
    ...props
}) {
  return (
    <button className={`hover:text-xl hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button