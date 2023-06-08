import PopularClass from "../../components/PopularClass/PopularClass";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;