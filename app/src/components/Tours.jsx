import Tour from "./Tour";

export default function Tours({ tours, removeTours }) {
  return (
    <div className="container">
      <div className="tours-title">
        <h1>Tours</h1>
      </div>
      {tours.map((tour) => {
        return <Tour tour={tour} removeTours={removeTours} />;
      })}
    </div>
  );
}
