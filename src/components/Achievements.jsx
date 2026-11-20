import { achievements } from '../data'
import { Trophy } from 'lucide-react'
export default function Achievements() {
  return (
    <section id="achievements" className="sec">
      <h2>Achievements</h2>
      <div className="grid">{achievements.map(a => <div className="card" key={a.t}><Trophy size={22} className="accent" /><h3>{a.t}</h3><p>{a.d}</p></div>)}</div>
    </section>
  )
}
