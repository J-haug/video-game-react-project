import { useEffect, useState } from "react";

function Game(game) {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = game.background_image;
    image.onload = () => {
      setImg(image);
    };
  }, 300);
  return (
    <div className="game">
      <figure className="game__img--wrapper">
        <img src={img} alt="" className="game__img" />
      </figure>
      <h2 className="game__title">test name</h2>
      <h2 className="game__info">test info</h2>
    </div>
  );
}

export default Game;
