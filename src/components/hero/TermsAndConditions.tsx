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
        <div className="card card-body p-0 text-lightgray bg-transparent border-0">
          <ol className="m-0 p-0">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur eaque sed maxime, eveniet voluptate
              repellendus quos sunt ex id.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              tempore quisquam ullam illum debitis odio labore blanditiis.
              Adipisci fuga ex, labore officia beatae temporibus animi aperiam
              at rerum id aliquid asperiores debitis soluta, illum ut qui.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              amet autem. Ratione temporibus qui inventore facere.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus officia aliquam distinctio reiciendis animi id
              optio dicta minima ullam sunt quasi neque quis, aspernatur
              repellat odit, nulla accusamus, aut eum commodi architecto
              molestiae nobis quibusdam soluta libero.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              temporibus minus, quas sed, ratione veniam aspernatur, incidunt
              dicta nisi quibusdam magni explicabo optio quisquam maiores
              accusantium asperiores eum consequatur. Ea aliquam dolore
              dignissimos culpa.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              ad rem cumque, illum commodi dicta, tempore possimus reiciendis
              debitis sunt saepe veritatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, quam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              assumenda facilis fugiat nam omnis rerum, labore autem praesentium
              dolorem dicta.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis necessitatibus enim id.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, at
              placeat. Consequatur, iure eligendi nulla itaque similique
              consequuntur ut. Accusantium repellat labore libero nostrum
              suscipit deserunt recusandae, magnam excepturi fugit officia.
              Quaerat, fugiat maiores.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              autem quo provident aliquam. Iusto maxime magni, itaque vitae rem,
              veniam, quas quaerat facere nostrum quae esse sequi. Corporis
              libero expedita nisi reiciendis at similique quasi veniam dolores
              corrupti ratione. Numquam veniam fuga provident. Placeat quis
              atque rem. Iste repellat in quos soluta quia obcaecati tempora.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              voluptatum nisi quos ratione magnam aliquid, sint exercitationem
              molestias minus obcaecati reiciendis reprehenderit ut. Nihil
              libero ipsam cupiditate iste consectetur voluptas, voluptatem
              repudiandae ducimus quis.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
