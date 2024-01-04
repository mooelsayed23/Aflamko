import React from "react";
import { Link } from "react-router-dom";

export default function Vcard({ img, title, disc, id, date, back }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${back || img}`}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to={`/movie/${id}`} title="play">
                <h5 className="card-title">{title}</h5>
              </Link>
              <p className="card-text">{disc}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated {date}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
