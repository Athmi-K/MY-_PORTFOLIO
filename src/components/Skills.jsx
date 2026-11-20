import { skills } from '../data'
export default function Skills() {
  return (
    <section id="skills" className="sec">
      <h2>Technical skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([k, v]) => (
          <div className="card" key={k}><h3>{k}</h3><div className="tags">{v.map(s => <span key={s}>{s}</span>)}</div></div>
        ))}
      </div>
    </section>
  )
}
