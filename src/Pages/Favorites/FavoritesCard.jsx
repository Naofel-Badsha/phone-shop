

const FavoritesCard = ({phone}) => {
    const {id, image, phone_name, brand_name, price, rating } = phone;
  return (
    <div>
      <div className=" m-auto flex-row border-2 border-sky-800 rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
