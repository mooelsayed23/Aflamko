import React, { useEffect } from "react";
import Card from "../card/Card";
import "./Postes.css";
export default function Postes({ data, currentLabel }) {
  const handleScroll = () => {
    const posterLabel = document.querySelector(".poster-lable");

    if (posterLabel) {
      if (window.scrollY >= 440) {
        posterLabel.style.cssText = `background-image: linear-gradient(to left, aliceblue 100%, transparent 100%, transparent 100%);color:black`;
      } else {
        posterLabel.style.cssText = `background-image: linear-gradient(to left, aliceblue 5%, transparent 5%, transparent 100%);`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="posters-main">
      <div className=" posters-title text-end ">
        <span className="poster-lable">افلام {currentLabel}</span>
      </div>

      <div className="posters-contaner">
        <div className="d-flex flex-wrap posters">
          {data.map((el) => {
            if (
              (el.poster_path && el.original_language === "en") ||
              (el.poster_path && el.original_language === "ar")
            ) {
              return (
                <Card
                  img={`${el.poster_path}`}
                  title={el.original_title}
                  disc={el.overview}
                  id={el.id}
                  key={el.id}
                  vote={parseFloat(el.vote_average).toFixed(1)}
                  currentLabel={currentLabel}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
