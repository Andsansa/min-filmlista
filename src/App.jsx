import { useState } from 'react'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList'
import SortButtons from './components/SortButtons'

export default function App() {
  const [movies, setMovies] = useState([])

  const addMovie = (title, grade) => {
    setMovies([...movies, { id: Date.now(), title: title.trim(), grade: Number(grade) }])
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id))
  }

  const sortByAlpha = () => {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title, 'sv')))
  }

  const sortByGrade = () => {
    setMovies([...movies].sort((a, b) => b.grade - a.grade))
  }

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4">Min filmlista</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onDeleteMovie={deleteMovie} />
      <SortButtons onSortAlpha={sortByAlpha} onSortGrade={sortByGrade} />
    </div>
  )
}