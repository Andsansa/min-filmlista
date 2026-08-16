import Movie from './Movie'

export default function MovieList({ movies, onDeleteMovie }) {
  return (
    <ul className="list-group mb-3">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onDelete={onDeleteMovie} />
      ))}
    </ul>
  )
}