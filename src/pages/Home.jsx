import React from 'react'
import Presentation from '../components/Presentation'
import  '../sass/pages/home.scss'
import projects from '../assets/datas/projects.json'


function Home() {

  console.log(projects[0].cover);
  return (
    <div className='home'>
       <Presentation/>
       <div className='img-wrapper'>
        <img src={projects[1].cover} alt="" />
        
        </div>
    </div>
  )
}

export default Home