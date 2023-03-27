import React from 'react'

interface Props {
  type: string,
  onChange: (event: any) => any | void
  placeholder: string,
  checked?: boolean,
  value?: string
}


export default function Input(props: Props) {
  const {type, onChange, placeholder, checked} = props
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange} checked={checked}/>
    </div>
  )
}
