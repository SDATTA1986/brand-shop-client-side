import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import CallToAction from "../CallToAction/CallToAction";
import ContactUs from "../Contact/ContactUs";
import PetsCategory from "../PetsCategory/PetsCategory";
import Services from "../Services/Services";
import Slider from "../Slider/Slidfer";


const Home = () => {
    return (
        <div>
            <Slider/>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;