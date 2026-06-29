function WalkCard({ walk }) {
  return (
    <div>
      <h2>{walk.name}</h2>
      <p>{walk.distance}</p>
      <p>{walk.difficulty}</p>
    </div>
  );
}

export default WalkCard;