import { useState } from 'react'

function ProjectCard({ nombre, descripcion, detalles, tecnologias, repo }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  return (
    <article className="card project-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>

      <ul className="tags">
        {tecnologias.map((tec) => (
          <li key={tec} className="tag">
            {tec}
          </li>
        ))}
      </ul>

      {mostrarDetalles && <p className="details">{detalles}</p>}

      <div className="card-actions">
        <button className="btn" onClick={() => setMostrarDetalles(!mostrarDetalles)}>
          {mostrarDetalles ? 'Ocultar detalles' : 'Ver más'}
        </button>
        <a className="btn btn-outline" href={repo} target="_blank" rel="noreferrer">
          Repositorio
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
