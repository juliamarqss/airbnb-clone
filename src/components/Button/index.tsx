import React from 'react'

interface Props {
  title: string,
  onClick: () => any,
  type: 'button' | 'submit' | 'reset',
  disabled: boolean, 
}

export default function Button(
  props: Props
) {
  const { title, onClick, type, disabled } = props
  return (
    <div>
      <button onClick={onClick} type={type} disabled={disabled}>{title}</button>
    </div>
  )
}
