import Header from '../components/Header.jsx'

function Contact() {
  return (
    <section>
      <Header titulo="Contacto" subtitulo="Hablemos" />

      <div className="card">
        <ul className="list">
          <li>
            <strong>Correo:</strong>{' '}
            <a href="mailto:joel.alejandrocuevas0411@gmail.com">joel.alejandrocuevas0411@gmail.com</a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/AleJoell" target="_blank" rel="noreferrer">github.com/AleJoell</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/alejoelcuevas/" target="_blank" rel="noreferrer">linkedin.com/in/alejoelcuevas</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
