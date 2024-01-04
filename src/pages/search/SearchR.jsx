import React, { useEffect, useState } from "react";
import { instance } from "../../config/config";
import { useParams } from "react-router-dom";
import "./SearchR.css";
import Vcard from "../../component/card/Vcard";
export default function SearchR() {
  const [searchResultes, setsearchResultes] = useState([]);
  let params = useParams();
  const elquery = params.query;

  useEffect(() => {
    instance
      .get(`/search/movie`, {
        params: {
          query: `${elquery}`,
          include_adult: "false",
          language: "ar",
          page: "1",
        },
      })
      .then((response) => {
        setsearchResultes(response.data.results);
      })
      .catch((error) => {
        console.error("search Error:", error);
      });
  }, [elquery]);

  return (
    <>
      <div className="search-cards">
        <div className="search-body">
          {searchResultes.length === 0 ? (
            <p className=" fs-1">لا توجد نتائج لهذا البحث</p>
          ) : (
            searchResultes.map((el) => (
              <Vcard
                img={el.poster_path}
                title={el.title}
                disc={el.overview}
                date={el.release_date}
                back={el.backdrop_path}
                id={el.id}
                key={el.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
