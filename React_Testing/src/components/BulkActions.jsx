function BulkActions({ onCompleteAll, onClearCompleted, hasCompleted }) {
  return (
    <div className="bulk-actions">
      <button onClick={onCompleteAll}>
        Complete All
      </button>
      {hasCompleted && (
        <button onClick={onClearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  )
}

export default BulkActions
