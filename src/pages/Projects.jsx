import Header from '../components/Header.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    id: 1,
    nombre: 'Portfolio Personal (TP1)',
    descripcion: 'Primera versión de mi portfolio, hecha con React y Vite.',
    detalles: 'Una sola página con presentación, habilidades y proyectos. Fue la base para este trabajo multipágina.',
    tecnologias: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/',
  },
  {
    id: 2,
    nombre: 'Portfolio Multipágina (TP2)',
    descripcion: 'Portfolio con menú lateral y navegación con React Router DOM.',
    detalles: 'Cinco páginas, componentes reutilizables, listas renderizadas con map() e interacción con useState.',
    tecnologias: ['React', 'React Router DOM', 'Vite'],
    repo: 'https://github.com/',
  },
]

function Projects() {
  return (
    <section>
      <Header titulo="Proyectos" subtitulo="Algunos trabajos que realicé" />

      <div className="grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            nombre={project.nombre}
            descripcion={project.descripcion}
            detalles={project.detalles}
            tecnologias={project.tecnologias}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
