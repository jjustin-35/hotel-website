import Banner from "@/components/Banner";
import News from "../components/News";
import About from "../components/About";
import Room from "../components/Room";
import Food from "../components/Food";
import Transportation from "../components/Transportation";
function Home(){
    return(
        <>
            <Banner />
            <News />
            <About />
            <Room />
            <Food />
            <Transportation />
        </>
        
    )
}
export default Home