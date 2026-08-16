export default function Movie({ movie, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{movie.title}</span>
      <span className="d-flex align-items-center">
        <span className="text-warning fs-5">{'★'.repeat(movie.grade)}</span>
        <button
          className="btn-close ms-3"
          aria-label="Ta bort"
          onClick={() => onDelete(movie.id)}
        ></button>
      </span>
    </li>
  )
}