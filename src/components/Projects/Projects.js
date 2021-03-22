import styles from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import * as project_data from '../../_data/projects.json';

function Projects() {

  const project_list = project_data.default.map((proj, i) => {
    return (
      <div key={i} className={styles.carousel_cell}>
        <ProjectCard title={proj.title} description={proj.description} tech={proj.tech} links={proj.links} image={proj.image} />
      </div>);
  });

  return (
    <div id="projects" className={styles.project_set}>
      <span className={styles.head}>🍀Projects🍀</span>
      <div className={styles.carousel}
        data-flickity='{ "wrapAround": true }'>
        {project_list}
      </div>
    </div>
  );
}

export default Projects;

