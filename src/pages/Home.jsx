import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'

function Home() {
  return (
    <section>
      <Header
        titulo="Hola, soy Joel Cuevas"
        subtitulo="Estudiante de la Tecnicatura Universitaria en Programación"
      />

      <p className="lead">
        Estudiante de programación en la UTN Facultad Regional Tucumán, con
        experiencia en atención al cliente, ventas y marketing digital. Me
        interesa el desarrollo web con React. Este portfolio reúne quién soy, lo
        que sé hacer y los proyectos en los que trabajé.
      </p>

      <div className="card">
        <h3>¿Qué vas a encontrar acá?</h3>
        <ul className="list">
          <li><strong>Sobre mí:</strong> mi formación, experiencia y objetivos.</li>
          <li><strong>Habilidades:</strong> las tecnologías que manejo.</li>
          <li><strong>Proyectos:</strong> trabajos que fui desarrollando.</li>
          <li><strong>Contacto:</strong> cómo comunicarte conmigo.</li>
        </ul>
        <Link className="btn" to="/projects">Ver mis proyectos</Link>
      </div>
    </section>
  )
}

export default Home
