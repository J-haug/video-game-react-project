import { useEffect, useState } from "react";
import Item from "./Item";

function Items() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products/category/smartphones')
                if (!res.ok) throw new Error(res.statusText)
                const data = await res.json()
                setItems(data.products)
            } catch (err) {
                console.error(err)
            }
        }
        
        fetchItems()
    }, [])
    
    console.log(items)
    return(
        <div className="container">
            <div className="row">
                {
                    items ? (
                        items.map(item => (
                            <Item item={item} />
                        ))
                    ) : (null)
                }
            </div>
        </div>
    )
}

export default Items;