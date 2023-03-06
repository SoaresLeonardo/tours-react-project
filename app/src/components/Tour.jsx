import { useState } from "react";

export default function Tour({ tour, removeTours }) {
  const { id, name, image, info, price } = tour;

  const [readMore, setReadmore] = useState(false);
  return (
    <div className="tours">
      <div className="tours-container">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="Card Image" />
          </div>
          <div className="card-info">
            <h2>{name}</h2>
            <span>{price}</span>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button className="showLess" onClick={() => setReadmore(!readMore)}>
              {readMore ? "Show less" : "Read More"}
            </button>
          </p>
          <button className="btn-delete" onClick={() => removeTours(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
