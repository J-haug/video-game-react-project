import { Link } from "react-router-dom";

function Item({ item,}) {
 
  return (
    <div className="item">
      <Link to={`/article/${item.id}`} className="item__link">
        <figure className="item__img--wrapper">
          <img src={item.image_url} alt="" className="item__img" />
        </figure>
        <h2 className="item__title">{item.title}</h2>
      </Link>
    </div>
  );
}

export default Item;
