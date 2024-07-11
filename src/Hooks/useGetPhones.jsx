import { useEffect, useState } from "react";

const useGetPhones = () => {
    const [phones, setPhonnes] = useState()
    useEffect(() =>{
        fetch('/phones.json')
        .then(res => res.json())
        .then(data => setPhonnes(data))
    },[])
    return [phones] 
};

export default useGetPhones;