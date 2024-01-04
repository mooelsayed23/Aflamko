import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  return (
    <div>
      <div
        type="button"
        className="btn text-white"
        data-bs-toggle="modal"
        data-bs-target="#logexampleModal"
      >
        تسجيل الدخول
      </div>

      <div
        className="modal fade login-model"
        id="logexampleModal"
        tabIndex="-1"
        aria-labelledby="examplelogModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog `}>
          <div className="modal-content m-content">
            <div className="modal-body">
              <div className="login">
                <h1>Login</h1>
                <form method="post">
                  <div className="position-relative ">
                    <input
                      type="text"
                      name="u"
                      placeholder="اسم المستخدم"
                      required="required"
                    />
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="position-relative ">
                    <input
                      type="password"
                      name="p"
                      placeholder="الباسورد"
                      required="required"
                    />
                    <i className="fa-solid fa-lock"></i>
                    <FontAwesomeIcon icon={faLock} />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <a
                      href="/register"
                      className="btn text-white"
                      title=" لا أتذكر الباسورد"
                    >
                      لا أتذكر الباسورد
                    </a>

                    <div className="d-flex align-items-center align-items-center">
                      <label htmlFor="checkid">تذكرني</label>
                      <input
                        type="checkbox"
                        name="check"
                        id="checkid"
                        className="mx-2 my-0 "
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-large"
                  >
                    Login
                  </button>
                  <div className="mt-3 text-end ">
                    ليس لديك حساب
                    <a
                      href="/register"
                      className="btn text-success p-0  m-0 "
                      title="اضغط هنا"
                    >
                      اضغط هنا
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
