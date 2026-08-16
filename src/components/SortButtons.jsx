export default function SortButtons({ onSortAlpha, onSortGrade }) {
  return (
    <div>
      <button className="btn btn-secondary me-2" onClick={onSortAlpha}>
        Alfabetisk ordning
      </button>
      <button className="btn btn-secondary" onClick={onSortGrade}>
        Sortera efter betyg
      </button>
    </div>
  )
}