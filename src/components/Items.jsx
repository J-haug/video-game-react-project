import { useEffect, useState } from "react";
import Item from "./Item";
import image from "../assets/cosmic-environment-with-millions-colorful-bright-lights.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=32"
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setItems(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav>
        <div className="search__nav--container">
          <figure className="nav__background--img--wrapper">
            <img src={image} alt="" className="nav__background--img" />
          </figure>
          <div className="nav__row">
            <h1 className="search__title">Browse articles</h1>
            <div className="nav__search-bar">
              <FontAwesomeIcon
                className="search__icon"
                icon={faMagnifyingGlass}
              />
              <input
                type="text"
                placeholder="Search"
                className="search__input"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
              <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
              </div>
            </>
          ) : (
            filteredItems.map((item) => <Item item={item} key={item.id} />)
          )}
        </div>
      </div>
    </>
  );
}

export default Items;
