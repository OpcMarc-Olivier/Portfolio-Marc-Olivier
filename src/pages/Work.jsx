import React from 'react';
import '../sass/pages/work.scss';
import { useParams } from 'react-router-dom';
import projectsData from '../assets/datas/projects.json';
import Responsive from '../components/Responsive'
import FicheTitle from '../components/FicheTitle';
import Tag from '../components/Tag';
import Description from '../components/Description';
import Button from '../components/Button'
import Error from '../components/Error';



function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  // Vérifie si selectedProject existe avant de déstructurer ses propriétés
  if (!selectedProject) {
    // Gére le cas où selectedProject est indéfini ou nul
    return <Error />;
  }
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du projet sélectionné.
  const { title, pictures, description, mission, tags, site, github } =
    selectedProject;

  return (
    <div className="main" key={id}>
      <div className="main__content">
        <FicheTitle title={title} mission={mission} />
        <Tag tags={tags} />
        <Responsive pictures={pictures} alt={`${title}`} />
        <Description title="Description" content={description} />
        <div className="links">
          {site && <Button link={site} text="Site" className="blue" />}
          {github && <Button link={github} text="Github" className="blue" />}
        </div>
      </div>
    </div>
  );
}

export default Work