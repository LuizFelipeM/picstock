import React from 'react'

interface ProfileProps {
  name: string
  link: {
    label: string
    url: string
  }
  description: string
  followers: number
  following: number
}

export const Profile: React.FC<ProfileProps> = ({ description, followers, following, link, name }) => {
  return (
    <section className="bg-rich-black flex font-medium items-center justify-center h-screen">
      <div className="h-screen flex flex-wrap items-center  justify-center  ">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-delft-blue shadow-lg transform duration-200 easy-in-out rounded-lg overflow-hidden text-white-smoke">
          <div className=" h-32 overflow-hidden">
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
          </div>
          <div className="flex justify-center px-5 -mt-12">
            <img
              className="h-32 w-32 bg-delft-blue p-2 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>

          <div>
            <div className="text-center px-14">
              <h2 className="text-3xl font-bold">{name}</h2>
              <a className="mt-2 hover:text-silver" href={link.url} target="_blank">
                {link.label}
              </a>
              <p className="mt-2 text-sm text-timber-wolf">
                {description}
              </p>
            </div>

            <hr className="mt-6 border-delft-blue" />

            <div className="flex bg-space-cadet">
              <button className="text-center w-1/2 p-4 hover:bg-oxford-blue">
                <span className="font-semibold">{followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : followers} </span> Followers
              </button>

              <div className="border border-oxford-blue"></div>

              <button className="text-center w-1/2 p-4 hover:bg-oxford-blue">
                <span className="font-semibold">{following > 1000 ? `${(following / 1000).toFixed(1)}k` : following} </span> Following
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
