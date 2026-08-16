import { useState } from 'react'

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('')
  const [grade, setGrade] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validering med popup
    if (title.trim() === '') return alert('Du måste ange en titel!')
    if (grade === 0) return alert('Du måste välja ett betyg!')

    onAddMovie(title, grade)
    setTitle('') // återställ formuläret
    setGrade(0)
  }

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Titel..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="form-select mb-2"
        value={grade}
        onChange={(e) => setGrade(Number(e.target.value))}
      >
        <option value={0}>Välj betyg här...</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">Spara film</button>
    </form>
  )
}