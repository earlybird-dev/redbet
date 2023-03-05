import React from "react";
import TermsAndConditions from "./TermsAndConditions";

const HeroModal = (props: any) => {
  return (
    <>
      <div>
        <div
          className="modal fade bg-light bg-opacity-25"
          id={props.id}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg bg-black rounded-3">
            <div className="modal-content text-white bg-black border-0">
              <div className="modal-header border-0 position-relative">
                <h1
                  className="modal-title fs-4 w-100 text-center"
                  id="exampleModalLabel"
                >
                  {props.title}
                </h1>
                <button
                  type="button"
                  className="position-absolute end-0 btn-close d-flex align-items-center justify-content-center"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-sharp fa-solid fa-xmark fs-4"></i>
                </button>
              </div>
              <div className="modal-body border-0">
                <img
                  src={props.src}
                  className="d-block w-100 mb-5"
                  alt="..."
                ></img>
                <div className="text-lightgray">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  nam quas in culpa dicta dignissimos quae modi dolor pariatur
                  doloribus assumenda, magnam architecto ipsam quibusdam.
                  Voluptas quae, eius porro provident sapiente doloremque
                  officia hic eligendi optio minima dolore fugiat nesciunt.
                </div>
                <TermsAndConditions />
              </div>
              <div className="modal-footer border-0 d-flex flex-column align-items-center justify-content-center">
                <button type="button" className="btn btn-primary w-100">
                  BET NOW!
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark text-white w-100"
                  data-bs-dismiss="modal"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroModal;
