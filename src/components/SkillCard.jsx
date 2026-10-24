function SkillCard({ nombre, nivel, descripcion }) {
  return (
    <article className="card skill-card">
      <h3>{nombre}</h3>
      <span className="badge">{nivel}</span>
      <p>{descripcion}</p>
    </article>
  )
}

export default SkillCard
