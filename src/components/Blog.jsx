import { posts } from '../data'
export default function Blog() {
  return (
    <section id="blog" className="sec">
      <h2>Blog</h2>
      {posts.length === 0 ? <p className="muted">Articles on AI, ML, NLP and my learning journey are coming soon.</p> :
        <div className="grid">{posts.map(p => <a className="card" key={p.title} href={p.url}><h3>{p.title}</h3><small>{p.date}</small><p>{p.summary}</p></a>)}</div>}
    </section>
  )
}
