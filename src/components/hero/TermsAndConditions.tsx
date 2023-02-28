import React, { useState } from "react";

const TermsAndConditions = () => {
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
  const handleOnclickCollapseButton = () => {
    setShowTermsAndConditions(!showTermsAndConditions);
  };
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div className="text-white">Terms & Conditions</div>
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTermsAndConditions"
          aria-expanded="false"
          aria-controls="collapseTermsAndConditions"
          onClick={handleOnclickCollapseButton}
        >
          <i
            className={
              showTermsAndConditions
                ? "fa-solid fa-angle-up text-primary"
                : "fa-solid fa-angle-down text-primary"
            }
          />
        </button>
      </div>
      <div className="collapse" id="collapseTermsAndConditions">
        <div className="card card-body p-0 text-lightgray bg-transparent">
          <ol className="m-0">
            <li className="f1ss895o">
              Applies to the first 3+ leg NBA multi bet you place on NBA Head To
              Head markets for games scheduled and completed on the same day on
              Tuesday 28/02/2023, and Thursday 02/03/2023 only (Eligible Bet).
              Available once per eligible day only.
            </li>
            <li className="f1ss895o">
              To qualify for a Bonus Bet refund, your Eligible Bet must comprise
              3 or more Head To Head market selections on NBA matches, have a
              minimum final price of $3.00, and the Eligible Bet must lose by
              only one leg.
            </li>
            <li className="f1ss895o">
              Maximum one refund of stake equivalent up to $50 in Bonus Bets per
              day on Tuesday 28/02/2023 and Thursday 02/03/2023 AEDT
              (inclusive).
            </li>
            <li className="f1ss895o">
              A schedule of NBA games is available here{"{"}" "{"}"}
              <a
                className="f12inwbn"
                data-test="link"
                href="https://au.global.nba.com/schedule/"
                target="_blank"
                rel="noreferrer"
              >
                https://au.global.nba.com/schedule/
              </a>
              .
            </li>
            <li className="f1ss895o">
              If your Eligible Bet wins or otherwise does not qualify for a
              Bonus Bet refund, this promotion will not be available to you for
              any other 3+ leg NBA Head To Head multi bets placed that day.
            </li>
            <li className="f1ss895o">
              Cash bets only. Not applicable to bets placed using bonus bets or
              cashed out bets.
            </li>
            <li className="f1ss895o">
              Bets placed using Booster are eligible.
            </li>
            <li className="f1ss895o">
              PointsBet will endeavour to process Bonus Bets within 24 hours of
              the completion of the event.
            </li>
            <li className="f1ss895o">
              Bonus Bets awarded to client accounts expire after 7 days.
            </li>
            <li className="f1ss895o">
              Full PointsBet terms &amp; conditions apply and are available at
              {"{"}" "{"}"}
              <a
                className="f12inwbn"
                data-test="link"
                href="https://pointsbet.com.au/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
              >
                https://pointsbet.com.au/terms-and-conditions
              </a>
              .
            </li>
            <li className="f1ss895o">
              Only available to customers that comply with the PointsBet terms
              and conditions including those specifically related to promotional
              offers and Bonus Bets. If we believe a customer has not complied
              with the terms and conditions, PointsBet reserves the right to
              void or cancel relevant bets.
            </li>
            <li className="f1ss895o">
              PointsBet reserves the right at any time to exclude any
              customer(s) from Money Back promotions, or to amend or cease
              offering this promotion altogether.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
