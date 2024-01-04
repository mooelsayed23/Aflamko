import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { instance } from "../../config/config";
import Postes from "../../component/Posts/Postes";
import MainSlider from "../../component/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/action";

export default function Home() {
  const data = useSelector((s) => s.data);
  const [isFetching, setIsFetching] = useState(false); // get data or not
  const [pageNumber, setPageNumber] = useState(1);
  const valFsel = useSelector((s) => s.linkValue);
  const idFsel = useSelector((s) => s.linkId);
  const currentLabel = useSelector((s) => s.currentLabel);
  const select = useSelector((s) => s.select);
  const dispatch = useDispatch();

  useEffect(() => {
    // main data
    instance
      .get(`${select}`, {
        params: {
          sort_by: valFsel,
          with_genres: idFsel,
          page: 1,
        },
      })
      .then((response) => {
        dispatch(setData([...response.data.results]));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [select, idFsel, valFsel, dispatch]);

  const handleScroll = useCallback(() => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    if (isBottom && !isFetching && data.length > 0) {
      setIsFetching(true);
      instance
        .get(`${select}`, {
          params: {
            sort_by: valFsel,
            with_genres: idFsel,
            page: pageNumber + 1,
            include_adult: "false",
          },
        })
        .then((response) => {
          const newData = response.data.results;
          const uniqueCombinedData = Array.from(
            new Set([...data, ...newData].map((item) => item.id))
          ).map((id) => [...data, ...newData].find((item) => item.id === id));

          dispatch(setData(uniqueCombinedData));
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [data, dispatch, idFsel, isFetching, pageNumber, select, valFsel]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, select, isFetching, pageNumber, valFsel, idFsel, handleScroll]); // playScroll

  return (
    <>
      <div className="main-content position-relative ">
        <div className=" main-conter">
          <MainSlider />

          <Postes data={data} currentLabel={currentLabel} />

          {isFetching && (
            <div
              className="spinner-border text-primary position-absolute bottom-0 start-50 "
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
