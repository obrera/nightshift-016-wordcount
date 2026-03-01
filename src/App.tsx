import './App.css'
import { useMemo, useState } from 'react'

function App() {
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const lines = text.length === 0 ? 0 : text.split(/\r?\n/).length
    const readingMinutes = words / 200

    return {
      words,
      characters,
      charactersNoSpaces,
      lines,
      readingMinutes,
    }
  }, [text])

  return (
    <main className="container">
      <h1>WordCount</h1>
      <p className="subtitle">Instant text statistics in your browser.</p>

      <textarea
        aria-label="Input text"
        className="editor"
        onChange={(event) => {
          setText(event.target.value)
        }}
        placeholder="Paste or type your text here..."
        value={text}
      />

      <section className="grid">
        <StatCard label="Words" value={stats.words.toLocaleString()} />
        <StatCard label="Characters" value={stats.characters.toLocaleString()} />
        <StatCard label="Characters (no spaces)" value={stats.charactersNoSpaces.toLocaleString()} />
        <StatCard label="Lines" value={stats.lines.toLocaleString()} />
        <StatCard label="Reading time" value={`${stats.readingMinutes.toFixed(2)} min`} />
      </section>
    </main>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="card">
      <h2>{label}</h2>
      <p>{value}</p>
    </article>
  )
}

export default App
