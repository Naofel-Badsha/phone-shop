import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() =>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
       if(favoriteItems){
        setFavorites(favoriteItems)
        const total = favoriteItems.reduce((preValue,currentItem) =>preValue + currentItem.price,0)
        console.log(total)
        setTotalPrice(total)
    }
       else{
        setNoFound("No Data Found")
       }
    },[])
    console.log(favorites)

    const handleRemove = () => {
       localStorage.clear() 
       setFavorites([])
       setNoFound("No Data Found")  
    }
    console.log(isShow)
    return (
        <div className="container m-auto">
            <h1>Total Price: {totalPrice}</h1>
            {
                noFound ? <p className="flex items-center justify-center p-80">{noFound}</p> 
                : 
                <div className="">
                    <div className="flex items-center justify-center p-10">
                    {favorites.length > 0 && 
                    <button onClick={handleRemove}
                    className="bg-sky-600 text-xl text-white 
                    rounded-lg py-3 px-4 cursor-pointer">
                        All Delete Product
                    </button>}
                    </div>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
                    {
                        isShow ? favorites.map(phone => <FavoritesCard
                            key={phone.id}
                            phone={phone}
                        ></FavoritesCard>)
                        :
                        favorites.slice(0,2).map(phone => <FavoritesCard
                            key={phone.id}
                            phone={phone}
                        ></FavoritesCard>)
                        
                    }
                  </div>

                {favorites.length > 2 && <div className="flex items-center justify-center p-10">
                  <button onClick={() => setIsShow(!isShow)}
                    className="bg-sky-600 text-xl text-white 
                    rounded-lg py-3 px-4 cursor-pointer">
                        {isShow ? "See Lese" : "See More"}
                    </button>
                  </div>}
                </div>
            }
        </div>
    );
};

export default Favorites;