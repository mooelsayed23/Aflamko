import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
export default function Card({ img, title, vote, id }) {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 post ">
        <div className="frist-card">
          <div className="img-div">
            <img
              src={`https://image.tmdb.org/t/p/w500${img}`}
              className="card-img-top"
              alt={title}
            />
          </div>
        </div>
        <span className=" rate-contaner centerit">
          <FontAwesomeIcon icon={faStar} />
          <div className="rate ">{vote}</div>
        </span>
        <Link to={`movie/${id}`} title="play">
          <div className="scnd-card centerit flex-column ">
            <div className="centerit icon z-2 ">
              <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
            </div>
            <div className=" position-absolute bottom-0 text-center title    w-100 ">
              {title}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
