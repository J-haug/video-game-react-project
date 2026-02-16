import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ItemPage() {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(item)
 
    useEffect(() => {
      const fetchItems = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/${id}`
          );
          if (!res.ok) throw new Error(res.statusText);
          const data = await res.json();
          
          setItem(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      
      
      fetchItems();
     
    }, [id]);
  
  return (
    <>
      <Nav />
       {isLoading ? (<> 
       <div className="placeholder__container">
        <div className="placeholder__row">
          <div className="item-page__img--placeholder"></div>
          <div className="item-page__title--placeholder"></div>

        </div>
       </div>
       </> ) : (
         <div className="container">
           <div className="row">
             <div className="item__page">
               <figure className="item__page__img--wrapper">
                 <img src={item.image_url} alt="" className="item__page--img" />
               </figure>
               <div className="item__description--wrapper">
                 <h1 className="item__page--title">{item.title}</h1>
                 <p className="item__page--description">{item.summary}</p>
                 <p className="item__date">{item.published_at}</p>
                 <a href={item.url} target="blank" className="item__page--link">
                   Link to article
                 </a>
               </div>
             </div>
           </div>
         </div>
          )
        }
        <Footer />
    </>
  );
}

export default ItemPage;
