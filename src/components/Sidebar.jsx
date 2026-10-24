import { NavLink } from 'react-router-dom'

const navLinks = [
  { id: 1, to: '/', label: 'Inicio' },
  { id: 2, to: '/about', label: 'Sobre mí' },
  { id: 3, to: '/skills', label: 'Habilidades' },
  { id: 4, to: '/projects', label: 'Proyectos' },
  { id: 5, to: '/contact', label: 'Contacto' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="avatar">JC</div>
        <h2>Joel Cuevas</h2>
        <p>Estudiante de Programación</p>
      </div>

      <nav>
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="sidebar-footer">UTN FRT · Programación</p>
    </aside>
  )
}

export default Sidebar
