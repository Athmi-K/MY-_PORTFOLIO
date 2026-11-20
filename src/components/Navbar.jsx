import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const items = ['About', 'Skills', 'Projects', 'Resume', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#home" className="logo">ATHMI.K</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'open' : ''}>
        {items.map(i => <a key={i} href={'#' + i.toLowerCase()} onClick={() => setOpen(false)}>{i}</a>)}
      </nav>
    </header>
  )
}
