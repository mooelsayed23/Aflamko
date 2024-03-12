import { faPlayCircle, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Moviehtml({
  title,
  disc,
  img,
  date,
  type,
  vote,
  imdb,
}) {
  return (
    <>
      <div className="wrapper">
        <div className="main_card rounded-4  bg-dark ">
          <div className="card_left">
            <div className="card_datails text-nowrap">
              <h1>{title}</h1>
              <div className="card_cat ">
                <p className="year PG  px-3 py-2 ">{date}</p>
                {type.map((el) => (
                  <p className="genre PG px-3 py-2" key={el.name}>
                    {el.name}
                  </p>
                ))}
                <p className="PG px-3 py-2">{vote}%</p>
              </div>
              <p className="disc">{disc}</p>

              <div className="social-btn d-flex ">
                {/* <!-- WATCH TRAILER--> */}
                <button>
                  <FontAwesomeIcon icon={faPlay} /> SEE TRAILER
                </button>
                {/* <!-- GET--> */}
                <button>
                  <FontAwesomeIcon icon={faDownload} /> DOWNLOAD
                </button>
                {/* <!--USERS RATINGS--> */}
                <button>
                  <FontAwesomeIcon icon={faThumbsUp} /> {vote}%
                </button>
                {/* <!--BOOKMARK--> */}
                <button>
                  <FontAwesomeIcon icon={faStar} size="xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="card_right position-relative ">
            <div className="img_container position-relative ">
              <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="" />
            </div>
            <div className="play_btn position-absolute h-100 top-0">
              <a
                href={`https://www.imdb.com/title/${imdb}/`}
                
                title="تشغيل"
              >
                
                  <FontAwesomeIcon icon={faPlayCircle} />
                
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="bg-dark "></div>
      </div>
    </>
  );
}
