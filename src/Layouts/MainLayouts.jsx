import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayouts = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayouts;