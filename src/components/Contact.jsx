import { Mail, Github, Linkedin } from 'lucide-react'
import { LINKS } from '../data'
export default function Contact() {
  return (
    <section id="contact" className="sec">
      <h2>Let's Connect</h2>
      <p className="lead">I am always interested in connecting with professionals, exploring opportunities, and discussing innovative ideas in technology.</p>
      <div className="row">
        {LINKS.email ? <a className="btn primary" href={`mailto:${LINKS.email}`}><Mail size={18} /> {LINKS.email}</a> : <span className="btn disabled"><Mail size={18} /> [Add your email in src/data.js]</span>}
        <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        {LINKS.linkedin ? <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a> : <span className="btn disabled"><Linkedin size={18} /> [Add LinkedIn in src/data.js]</span>}
      </div>
    </section>
  )
}
