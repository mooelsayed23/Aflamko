import React, { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import { instance } from "../../config/config";
import Moviehtml from "./Moviehtml";
export default function Move() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let params = useParams();
  const movieId = params.id;

  useEffect(() => {
    instance
      .get(`/movie/${movieId}`, {
        params: {
          language: "ar",
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("movie Error:", error);
        setLoading(false);
        document.write("not found ");
      });
  }, [movieId]);

  return (
    <div className="w-100 bg-dark ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <Moviehtml
            id={data.id}
            img={data.poster_path}
            title={data.title}
            disc={data.overview}
            vote={(parseFloat(data.vote_average) * 10).toFixed(0)}
            date={data.release_date}
            type={data.genres}
            imdb={data.imdb_id}
            key={data.id}
          />
        )
      )}
    </div>
  );
}
