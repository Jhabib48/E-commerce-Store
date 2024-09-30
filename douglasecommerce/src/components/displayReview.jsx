import Testimonials from "./review";


const DisplayFeedBack = () => {
    return ( 
        <div className="bg-primary w-full overflow-hidden">
        <div className={`container mx-auto`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Testimonials />
          </div>
        </div>
      </div>



     );
}
 
export default DisplayFeedBack;