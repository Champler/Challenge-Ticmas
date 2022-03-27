import React from 'react'

interface ButtonProps { 
    buttonText: string
}

export default function Button({ buttonText }: ButtonProps) {
  return (
    <button>{ buttonText }</button>
  )
}
