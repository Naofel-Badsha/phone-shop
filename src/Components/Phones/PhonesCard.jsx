import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;
  return (
    <div>
      <div className="border-2 border-sky-800 rounded-lg ">
        <div className="">
          <img
            src={image}
            alt="card-image"
            className="w-full h-[300px] rounded-t-lg"
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between px-4 pt-4">
            <h2 color="blue-gray" className="font-medium">
              {phone_name}
            </h2>
            <h3 color="blue-gray" className="font-medium">
              $: {price}
            </h3>
          </div>
          <p color="gray" className="font-normal opacity-75 px-4">
            {brand_name}
          </p>
          <p color="gray" className="font-normal opacity-75 px-4">
            <Rating emptySymbol={<CiStar className="text-orange-600"/>}
            fullSymbol={<FaStar className="text-orange-600"/>}
            initialRating={rating} readonly  
             />
          </p>
        </div>
        <div className="p-4 ">
          <Link to={`/phones/${id}`}>
            <button className="btn bg-blue-gray-900/10 text-xl text-blue-gray-900 w-full ">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
