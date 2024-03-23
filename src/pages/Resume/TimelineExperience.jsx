const TimelineExperience = ({
  title,
  startDate,
  endDate,
  description,
  jobTitle,
}) => {
  // Extract month and year from start and end dates
const startMonthYear = new Date(startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
const endMonthYear = new Date(endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <p className="timeline-text">{jobTitle}</p>
      <span>
        {startMonthYear}-{endMonthYear}
      </span>
      <p className="timeline-text">
        <ul style={{ listStyleType: "disc", color: "white" }}>
          {description.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </p>
    </li>
  );
};

export default TimelineExperience;
