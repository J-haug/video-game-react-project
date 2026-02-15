import { useEffect, useState } from "react";
import Item from "./Item";
import image from "../assets/cosmic-environment-with-millions-colorful-bright-lights.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState('')
  const [filteredItems, setFilteredItems] = useState([])


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
        setFilteredItems(data.results)
        console.log(data.results)
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filter = (event) => {
    
    setSearchTerm(event.target.value)
    setFilteredItems(items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }


  const sort = (event) => {
    setSortValue(event.target.value)
    console.log(event.target.value)
    if (sortValue === "date-oldest") {
      setFilteredItems(items.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)))

    }
    else{
      setFilteredItems(items.sort((b, a) => new Date(b.published_at) - new Date(a.published_at)))

    }
  }
  

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
                onChange={filter}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="sort__row">
          <select className="sort__box" name="sort" id="sort"  defaultValue="date-newest" onChange={sort} >
            <option value="date-newest">Newest Published</option>
            <option value="date-oldest">Oldest Published</option>

          </select>

        </div>
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
