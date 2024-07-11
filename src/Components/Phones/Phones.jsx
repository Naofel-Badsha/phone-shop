import useGetPhones from "../../Hooks/useGetPhones";
import SpecitalPhone from "../SpecitalPhone/SpecitalPhone";
import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    //-------Custom-------Hooks----Start------
    const [getPhones] = useGetPhones()
    console.log("All Get Phones", getPhones)
    //-------Custom-------Hooks----End------

    return (
        <div className="container m-auto">
            <h1 className="text-3xl text-center py-10">All Phones Cullections</h1>
           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
                phones?.map(phone => <PhonesCard 
                    key={phone.id}
                    phone={phone}
                ></PhonesCard>)
            }
           </div>
           <SpecitalPhone></SpecitalPhone>
        </div>
    );
};

export default Phones;