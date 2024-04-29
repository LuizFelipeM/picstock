import React from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../routePath'

export const HomePage: React.FC = () => {
  return (
    <div>
      {Object.values(RoutePath).map((route) => (
        <>
          <Link to={route} key={route}>{route}</Link>
          <br />
        </>
      ))}
    </div>
  )
}