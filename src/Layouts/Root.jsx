import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Shared/Navbar";

const Root = () => {
    const navigation = useNavigation()
         
    return (
        <div>
            <Navbar></Navbar>
            {
              navigation.state == 'loading' ?
              <img src="https://i.ibb.co/rcSdhms/loding-3.gif"/> 
              :
              <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Root;