import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, Image } from 'lucide-react'
import { projects } from '../data'
function Project({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`project ${p.theme}`}>
      <div className="shot">{p.image ? <img src={p.image} alt={p.title + ' screenshot'} /> : <div className="ph"><Image /><span>Illustrative placeholder. Add a real screenshot in data.js</span></div>}</div>
      <div className="pbody">
        {p.flagship && <span className="badge">Flagship project</span>}
        <h3>{p.title}</h3>
        <p>{p.short}</p>
        <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
        <button className="link" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Hide details' : 'View details'} <ChevronDown className={open ? 'flip' : ''} size={16} /></button>
        {open && <div className="details"><p>{p.long}</p><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul></div>}
        <div className="row">
          {p.github ? <a className="btn small" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a> : <span className="btn small disabled">GitHub link coming soon</span>}
          {p.demo && <a className="btn small primary" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </article>
  )
}
export default function Projects() {
  return <section id="projects" className="sec"><h2>Featured projects</h2><div className="plist">{projects.map(p => <Project key={p.id} p={p} />)}</div></section>
}
