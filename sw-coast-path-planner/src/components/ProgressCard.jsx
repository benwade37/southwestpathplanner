function ProgressCard({
  completedCount,
  totalWalks,
  progressPercentage,
}) {
  return (
    <div className="progress-summary">
      <h2>Your Progress</h2>

      <p>
        {completedCount} of {totalWalks} walks completed
      </p>

      <p>{progressPercentage}% complete</p>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressCard;