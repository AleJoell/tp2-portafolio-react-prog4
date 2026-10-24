function Header({ titulo, subtitulo }) {
  return (
    <header className="page-header">
      <h1>{titulo}</h1>
      {subtitulo && <p>{subtitulo}</p>}
    </header>
  )
}

export default Header
