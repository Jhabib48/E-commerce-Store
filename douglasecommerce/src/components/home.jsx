import Hero from "./hero";
import Footer from "./footer";
import Blogs from "./blogs";
import Partners from "./partner";
import DisplayFeedBack from "./displayReview";
import TopProducts from "./popularProduct";



const Home = () => {
    return ( 
        <>
        <Hero/>
        <Blogs/>
        <TopProducts/>
        <DisplayFeedBack/>
        <Partners/>
        <Footer/>
        </>
     );
}
 
export default Home;