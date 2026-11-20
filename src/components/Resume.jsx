import { FileText, Download } from 'lucide-react'
import { LINKS } from '../data'
export default function Resume() {
  return (
    <section id="resume" className="sec">
      <div className="card resume">
        <FileText size={56} className="accent" />
        <div>
          <h2>Explore My Resume</h2>
          <p>Interested in knowing more about my education, technical skills, projects, and experience? Download my resume.</p>
          <a className="btn primary" href={LINKS.resume} download="Athmi_K_Resume.pdf"><Download size={18} /> Download Resume</a>
        </div>
      </div>
    </section>
  )
}
