import Header from '../components/Header.jsx'
import SkillCard from '../components/SkillCard.jsx'

const skills = [
  { id: 1, nombre: 'JavaScript', conocimiento: 'Intermedio', descripcion: 'Lenguaje base para la lógica de mis aplicaciones web.' },
  { id: 2, nombre: 'React', conocimiento: 'Básico-Intermedio', descripcion: 'Componentes, props, estado y navegación con React Router.' },
  { id: 3, nombre: 'HTML', conocimiento: 'Intermedio', descripcion: 'Maquetado semántico de páginas web.' },
  { id: 4, nombre: 'CSS', conocimiento: 'Intermedio', descripcion: 'Estilos, Flexbox, Grid y diseño responsive.' },
  { id: 5, nombre: 'Git', conocimiento: 'Básico', descripcion: 'Control de versiones y commits descriptivos.' },
  { id: 6, nombre: 'GitHub', conocimiento: 'Básico', descripcion: 'Repositorios remotos y entrega de trabajos.' },
]

function Skills() {
  return (
    <section>
      <Header titulo="Habilidades" subtitulo="Tecnologías y herramientas que conozco" />

      <div className="grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            nombre={skill.nombre}
            nivel={skill.conocimiento}
            descripcion={skill.descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
