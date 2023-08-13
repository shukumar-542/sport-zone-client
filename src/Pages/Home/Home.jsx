import { Helmet } from "react-helmet";
import PopularClass from "../../components/PopularClass/PopularClass";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Sports from "./Sports/Sports";
import Blog from "./Blog/Blog";
import Subscription from "./Subscription/Subscription";
import Article from "./Article/Article";

const Home = () => {
    return (
        <div>
            <Helmet><title>SportZone | Home</title></Helmet>
            <Banner></Banner>
            <Sports></Sports>
            <PopularInstructor></PopularInstructor>
            <Service></Service>
            <Subscription></Subscription>
            <PopularClass></PopularClass>
            <Blog></Blog>
            <Article></Article>
        </div>
    );
};

export default Home;