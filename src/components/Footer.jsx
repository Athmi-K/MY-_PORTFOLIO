import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { LINKS } from '../data'
export default function Footer() {
  return (
    <footer className="foot">
      <div><strong className="logo">ATHMI.</strong><p className="muted">Curious, learning, building.</p></div>
      <div className="row icons">
        <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        {LINKS.linkedin && <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>}
        {LINKS.email && <a href={`mailto:${LINKS.email}`} aria-label="Email"><Mail /></a>}
        <a href="#home" aria-label="Back to top"><ArrowUp /></a>
      </div>
      <small className="muted">© {new Date().getFullYear()} Athmi K. All rights reserved.</small>
    </footer>
  )
}
