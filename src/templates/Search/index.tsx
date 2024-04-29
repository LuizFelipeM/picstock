import { createHelia } from 'helia'
import React from 'react'

interface SearchProps {
  items: any[]
  onEndReached?: () => void
}

const helia = await createHelia()

export const Search: React.FC<SearchProps> = ({ items, onEndReached }) => {
  return (
    <section className="bg-rich-black flex font-medium items-center justify-center h-screen">
      {items.map((item, i) => <span key={i}>{item}</span>)}
    </section>
  )
}
