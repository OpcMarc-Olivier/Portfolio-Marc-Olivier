import React from 'react'
import Presentation from '../components/Presentation'
import  '../sass/pages/home.scss'
import projectsData from '../assets/datas/projects.json'
import Card from "../components/Card";


function Home() {


  return (
    <div className='home' id='accueil'>
       <div className="main__section">
          <Presentation/>
      </div>
       <div className='main__section works' id='works' >
          <h2>Works</h2>
          <p>
          Projets réalisés dans le cadre de ma formation en tant que
          développeur web chez OpenClassrooms. Au cours de cette expérience,
          j'ai eu l'opportunité d'acquérir les compétences essentielles pour le
          développement front-end et back-end grâce aux technologies telles que
          HTML, CSS, JavaScript, React et Node.js, entre autres. J'ai pu
          également approfondir mes compétences en optimisation et débogage en
          utilisant des outils tels que Chrome DevTools, Wave et Lighthouse.
        </p>
        <div className="worksList">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              project={project}
              id={project.id}
              title={project.title}
              cover={project.cover}
            />
          ))}
        </div>
       </div>
    </div>
  )
}

export default Home