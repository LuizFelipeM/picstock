import React from 'react'
import { Profile } from '../../templates/Profile'

export const ProfilePage: React.FC = () => {
  return (
    <Profile
      name="Nandayara"
      link={{ label: "@nandayara.ph", url: "https://www.instagram.com/nandayara.ph/" }}
      followers={2000}
      following={2000}
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    />
  )
}
