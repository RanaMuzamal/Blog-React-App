import React from "react";
import data from "./data";
import { useParams } from "react-router-dom";

const Details = () => {
  const name = useParams().name;
  console.log(name);
  return (
    <div>
      <h1>Details</h1>
      <h2>{name}</h2>
      {data.cardData.map((item) => {
        //LONG METHOD
        if (item.title === name) {
          return (
            <>
              <img src={item.img} alt="imagess" />
              <p key={item.id}>{item.desc}</p>
            </>
          );
        }

        //SHORT METHOD
        // item.title === name ? console.log('matcg=h') : "";
      })}
    </div>
  );
};

export default Details;
