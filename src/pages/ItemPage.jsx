import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Item from "../components/Item";

function ItemPage({ items }) {
  const { id } = useParams();
  const item = items.find((item) => +item.id === +id);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="item__page">
            <figure className="item__page__img--wrapper">
              <img src={item.image_url} alt="" className="item__page--img" />
            </figure>
            <div className="item__description--wrapper">
              <h1 className="item__page--title">{item.title}</h1>
              <p className="item__page--description">{item.summary}</p>
              <a href={item.url} className="item__page--link">
                link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
