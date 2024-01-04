import {
  faCirclePlay,
  faClock,
  faStarHalfStroke,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faClockRotateLeft,
  faHouse,
  faMoneyBillWheat,
  faPhotoFilm,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Rnav() {
  const [hide, sethide] = useState(false);
  return (
    <>
      <button
        className="btn d-none hover d-md-flex text-light"
        type="button"
        title="bars"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="d-fa-bars">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
      </button>
      <div
        className="offcanvas bg-dark  offcanvas-end  border-0 mt-5"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-body shadow-lg bg-dark  ">
          <div>
            <div className="bg-body-tertiary">
              <span>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="الصفحة الرئيسية"
              >
                الصفحة الرئيسية
              </Link>
            </div>
            <div className=" ">
              <span>
                <i className="fa-solid fa-photo-film"></i>
                <FontAwesomeIcon icon={faPhotoFilm} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title=" افلام جديدة"
              >
                افلام جديدة
              </Link>
            </div>
            <div className=" ">
              <span>
                <i className="fa-solid fa-money-bill-wheat"></i>
                <FontAwesomeIcon icon={faMoneyBillWheat} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="المفضلة"
              >
                المفضلة
              </Link>
            </div>
          </div>

          <hr className="text-white " />

          <div>
            <div className="">
              انت
              <span className="me-2">{` > `}</span>
            </div>
            <div className="">
              <span>
                <i className="fa-regular fa-user  "></i>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="قناتك"
              >
                قناتك
              </Link>
            </div>
            <div className=" ">
              <span>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="السجل"
              >
                السجل
              </Link>
            </div>
            <div className=" ">
              <span>
                <i className="fa-regular fa-circle-play"></i>
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="فيديوهاتك"
              >
                فيديوهاتك
              </Link>
            </div>
            <div className=" ">
              <span>
                <i className="fa-regular fa-clock"></i>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <Link
                to="/"
                className="text-decoration-none text-black "
                title="المشاهدة لاحقا"
              >
                المشاهدة لاحقا
              </Link>
            </div>
          </div>

          <hr className="text-white " />
          <div
            className={` border-0  accordion cursor-ponter shadow-none ${
              hide ? "d-none" : ""
            }`}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            onClick={() => sethide(true)}
          >
            <span>
              <i className="fa-solid fa-angle-down"></i>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            المزيد
          </div>

          <div id="collapseOne" className="collapse ">
            <section>
              <div>
                <span>
                  <i className="fa-regular fa-thumbs-up"></i>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <Link
                  to="/"
                  className="text-decoration-none text-black "
                  title="اعجبنى"
                >
                  اعجبنى
                </Link>
              </div>

              <div className=" ">
                <span>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </span>
                <Link
                  to="/"
                  className="text-decoration-none text-black "
                  title="المفضله"
                >
                  المفضله
                </Link>
              </div>
              <div className=" ">
                <span>
                  <i className="fa-solid fa-ranking-star"></i>
                  <FontAwesomeIcon icon={faRankingStar} />
                </span>
                <Link
                  to="/"
                  className="text-decoration-none text-black "
                  title="اعلى التقيمات"
                >
                  اعلى التقيمات
                </Link>
              </div>

              <div
                className={` border-0 accordion shadow-none`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                onClick={() => sethide(false)}
              >
                <span>
                  <i className="fa-solid fa-angle-up"></i>
                  <FontAwesomeIcon icon={faAngleUp} />
                </span>
                عرض اقل
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rnav;
