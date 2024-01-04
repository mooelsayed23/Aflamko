import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "../list/List";
import {
  setCurrentLabel,
  setData,
  setLinkId,
  setLinkValue,
  setSelect,
} from "../../store/action";
import "./links.css";

const LinkButton = ({ onClick, isSelected, value }) => (
  <Link
    to={"/"}
    className={`btn bg-dark text-white ${isSelected && "bg-color"}`}
    onClick={onClick}
  >
    {value}
  </Link>
);

const Links = () => {
  const select = useSelector((s) => s.select);
  const [sbg, setsbg] = useState(false); // bg or not
  const dispatch = useDispatch();

  const linkButtons = [
    { path: "/movie/popular", label: "التريند" },
    { path: "/movie/top_rated", label: "الأعلى تقييماً" },
    { path: "/movie/upcoming", label: "قادمة" },
    { path: "/movie/now_playing", label: "بالعرض حالياً" },
  ];

  const handleSelection = (nlink, myType, mytypeId, sbgValue, label) => {
    setsbg(sbgValue);
    sbgValue
      ? dispatch(setSelect("discover/movie"))
      : dispatch(setSelect(nlink));
    dispatch(setLinkValue(myType));
    dispatch(setLinkId(mytypeId));
    dispatch(setCurrentLabel(label));
    dispatch(setData([]));
  };

  return (
    <div className="main-links z-2 bg-dark">
      <div className="links bg-dark">
        {linkButtons.map((link) => (
          <LinkButton
            key={link.path}
            isSelected={select === link.path}
            onClick={() =>
              handleSelection(link.path, null, null, false, link.label)
            }
            value={link.label}
          />
        ))}
        <select
          id="p0p0p"
          name="p0pp"
          title="first"
          className={` ${sbg ? "bg-color" : "bg-dark text-white"}`}
          onChange={(e) =>
            handleSelection(
              "/movie/discover",
              e.target.value,
              e.target.options[e.target.selectedIndex].id,
              true,
              e.target.value
            )
          }
        >
          <option className="d-none" autoFocus>
            بدون فئة
          </option>
          {List().map((el) => (
            <option value={el.name} id={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Links;
