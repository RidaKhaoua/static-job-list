/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./Cards.css";
import { useSpring, animated } from "react-spring";
import { useDataUserContext } from "../../context/dataContext";

function Cards() {
 

  const { dataUserCompany, dataUserFiltred } = useDataUserContext();

  const data = dataUserFiltred.length > 0 ? dataUserFiltred : dataUserCompany;

  const handelDisplayData = data.map((item) => {
    return (
        <Card key={item.id} data={item} delay={item.id * 300}/>
    );

  });

  return <section className="cards">{handelDisplayData}</section>;
}

export default Cards;
