import React from 'react'
import { Search } from '../../templates/Search'

export const SearchPage: React.FC = () => {
  return (
    <Search items={[]} onEndReached={() => console.log('end reached')} />
  )
}
