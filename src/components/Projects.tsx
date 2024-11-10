import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
    {
        id:0,
        title:"Currency Convertor Project",
        desc:"A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img: "/project-1.jpg",
        tags:["HTML","Node","CSS","TypeScript"]
    },
    {
      id:1,
      title:"Static interactive Resume",
      desc:"A TypeScript-based interactive resume build with HTML and CSS,allowing users to showcase their skills dynamically.",
      img:"/project-2.jpg",
      tags:["HTML","Node","CSS","TypeScript"]
  }, 
]

const Project = () => {
  return (
    <div id="projects"className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'></div>
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
    />))}
    </div>
  )
}

export default Project
