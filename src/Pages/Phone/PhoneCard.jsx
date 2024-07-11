import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PhoneCard = ({ phone }) => {
  const {id, image, phone_name, brand_name, price, rating } = phone;

  const handleAddToFavorites = () =>{
     //---LocalStoraje----Pont---3---Stor---Items--Of---Array------
     const addedFaforitesItemsArray = []

    //---LocalStoraje----Pont---2---Get---Items----
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
    //---LocalStoraje----Pont---4-----Condition---Stor---Items--Of---Array------
    if(!favoriteItems){
      addedFaforitesItemsArray.push(phone)
      localStorage.setItem('favorites', JSON.stringify(addedFaforitesItemsArray))
      Swal.fire({
        title: "Products Added SuccessFull?",
        icon: "success",
      });
    }
    //---LocalStoraje----Pont---5-----Condition---Stor---Items--Of---Array------
    else{
      //------Dupplicate---items------
      const isExits = favoriteItems.find(phone => phone.id == id)
      if(!isExits){
      //---LocalStoraje----Pont---5-----Condition---Stor---Items--Of---Array------
      addedFaforitesItemsArray.push(...favoriteItems, phone)
      localStorage.setItem('favorites', JSON.stringify(addedFaforitesItemsArray))
      Swal.fire({
        title: "Products Added SuccessFull?",
        icon: "success",
      });
      }
      else{
        Swal.fire({
          title: "No Duplicate?",
          icon: "error",
        });
      }

    }
    //---LocalStoraje----Pont---1---Post--Item----
    //localStorage.setItem('test', JSON.stringify([{name:"naofel"}, {name:"jwd"}]))
  }
  return (
    <div>
      <div className="w-[600px] m-auto flex-row border-2 border-sky-800 rounded-md">
        <div className=" shrink-0 rounded-r-none">
          <img
            src={image}
            alt="card-image"
            className="w-full h-[300px] rounded-t-md"
          />
        </div>
        <div className="px-10 py-3">
          <h1 color="blue-gray" className="mb-2">
            {phone_name}
          </h1>
          <p color="gray" className="mb-8 font-normal">
            {brand_name}
          </p>
          <p color="gray" className="mb-8 font-normal">
            {price}
          </p>
          <Link className="inline-block">
            <button onClick={handleAddToFavorites}
            className="flex items-center gap-2 bg-slate-950 px-5 py-4 rounded-md">
              Add To Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
