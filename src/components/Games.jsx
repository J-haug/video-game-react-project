import Game from "./Game";

let data 
let html 
getAPI()

async function getAPI() {
    const objects = await fetch('https://jsonfakery.com/games/paginated')
    const objectsData = await objects.json()
    data = objectsData.data
    renderItems(data)
    return objectsData.data
    
}
function renderItems(items){
    if (data){
        const itemHTML = items.map((item) =>
            (<Game game={item} />))
        html = itemHTML
        console.log(html)
        
        return itemHTML

    }
} 

function Games() {
    
    return(
        <div className="container">
            <div className="row">
                {html}
            </div>
        </div>
    )
}

export default Games;