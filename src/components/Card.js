import React from "react";

const Card = ({ id, name, breed, email }) => {
  return (
    <article className="dib tc bg-light-purple ba bw1 b--orange br3 br--left shadow-5 pa3 ma2 grow">
      <img
        alt="cats"
        src={`https://robohash.org/set_set4/${id}.png/bg_bg3/size_200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>
          <img
            alt="hearts"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2665.png"
            width="14"
            height="14"
          />{" "}
          {breed}
        </p>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
