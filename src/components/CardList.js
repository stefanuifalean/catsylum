import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ source }) => {
  const cardArray = source.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        name={item.name}
        breed={item.breeds.primary}
        email={item.contact.email}
      />
    );
  });
  return <Fragment>{cardArray}</Fragment>;
};

export default CardList;
