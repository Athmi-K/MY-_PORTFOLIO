import { useState } from 'react'
import { Github, Linkedin, User } from 'lucide-react'
import { LINKS } from '../data'
const photo = Object.values(import.meta.glob('../assets/profile.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }))[0]
export default function Hero() {
  const [ok, setOk] = useState(true)
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="muted">Athmi K.</p>
        <h1>Turning curiosity into intelligent solutions.</h1>
        <p className="lead">Aspiring Data Analyst | AI & ML Enthusiast. I build with data, language models and the web, and I like understanding how things work.</p>
        <div className="row">
          <a className="btn primary" href="#projects">Explore My Projects</a>
          <a className="btn" href={LINKS.resume} download="Athmi_K_Resume.pdf">Download Resume</a>
        </div>
        <div className="row icons">
          <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          {LINKS.linkedin && <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>}
        </div>
      </div>
      <div className="photo">
        {photo && ok ? <img src={photo} alt="Portrait of Athmi K." onError={() => setOk(false)} /> : <div className="ph"><User size={64} /><span>Add src/assets/profile.jpeg</span></div>}
      </div>
    </section>
  )
}
