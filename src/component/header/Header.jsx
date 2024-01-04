import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpeechToTextComponent from "../speach/Speach";
import React, { useState, useEffect } from "react";
import "react-simple-keyboard/build/css/index.css";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import Login from "../login/Login";
import Links from "../links/Links";
import Rnav from "./Rnav";
import "./Header.css";
import {
  faArrowLeft,
  faMagnifyingGlass,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MyKeyboard from "../keyboard/Keyboard";
export default function Header() {
  const { transcript } = useSpeechRecognition();
  const [hheader, sethheader] = useState(true);
  const [input, setInput] = useState("");

  const startListening = () => {
    SpeechRecognition.startListening({ language: "ar-EG" });
  };
  const onKeyboardChange = (input) => {
    setInput(input);
  };
  const onChangeInput = (event) => {
    const searchValue = event.target.value;
    setInput(searchValue);
  };
  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  return (
    <>
      {/* header */}
      <div className="w-100 Header z-3 bg-dark">
        <nav className="navbar m-0 p-0 h-100">
          <div className="container-fluid h-100 align-items-center d-flex m-0 p-0 ">
            {hheader ? (
              <>
                {/*1 brand */}
                <div className="col-3 d-flex align-items-center">
                  <Rnav />
                  <Link
                    className="navbar-brand text-warning fw-bold"
                    to="/"
                    title="Aflamko"
                  >
                    Aflamko
                    <sup>
                      EG
                      <small>
                        <code>23</code>
                      </small>
                    </sup>
                  </Link>
                </div>

                {/*2 |form| hide < large by class */}
                <div className="col-auto d-none d-lg-flex flex-grow-1 h-100 align-items-center ">
                  <form
                    className="d-flex w-100 position-relative  bg-dark "
                    role="search"
                  >
                    <input
                      id="search"
                      className="form-control me-2 pe-3"
                      type="text"
                      placeholder="بحث"
                      aria-label="Search"
                      onChange={onChangeInput}
                      value={input}
                    />
                    {/* keyboard */}
                    <MyKeyboard hinput={onKeyboardChange} />
                  </form>
                  <Link
                    to={input.trim().length > 0 ? `search/${input}` : "/"}
                    title="search"
                  >
                    <div className="border border-1 bg-body-tertiary  glass cursor-ponter ttt text-dark ">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="ps-3 pe-1 "
                      />
                    </div>
                  </Link>
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="d-flex microphone bg-body-tertiary rounded-circle cursor-ponter ttm text-dark"
                    onClick={startListening}
                  >
                    <FontAwesomeIcon icon={faMicrophoneLines} size="lg" />
                  </div>
                </div>

                {/* 3 acc and hide search */}
                <div className="mb-0 col-lg-4 d-flex align-items-center justify-content-end gap-4 ms-3 ">
                  <div
                    className="d-lg-none d-flex text-bg-dark"
                    onClick={() => sethheader(false)}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=" " />
                  </div>

                  <div className="centerit ">
                    <div className="label-login d-flex ">
                      <div className="  ttn">
                        <Link
                          to="/register"
                          className="btn text-light "
                          title="register"
                        >
                          انشاء حساب
                        </Link>
                      </div>

                      <div className="login ms-2 ttc">
                        <Login />
                      </div>
                    </div>
                    <div
                      className=" profile p- m-0 rounded-circle bg-body-tertiary centerit cursor-ponter text-dark"
                      id="login"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              //  show this if click search < large
              <>
                <div className="d-flex container-fluid row text-dark">
                  <div
                    className=" border border-1 centerit col-1 text-bg-dark"
                    onClick={() => sethheader(true)}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <form action="" className="col ">
                    <input
                      id="m-search"
                      className="w-100"
                      type="text"
                      autoFocus
                    />
                  </form>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
      <div className="clearfixed"></div>
      <Headroom>
        <Links />
      </Headroom>
      <SpeechToTextComponent />
    </>
  );
}
