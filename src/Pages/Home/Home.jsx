import { Helmet } from "react-helmet";
import PopularClass from "../../components/PopularClass/PopularClass";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Helmet><title>SportZone | Home</title></Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Service></Service>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;