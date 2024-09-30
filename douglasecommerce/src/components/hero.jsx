import model from './images/woman.png';

const Hero = () => {
    return (  
        <section className="relative h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full relative z-10">
                <div className="flex flex-col justify-center relative z-10">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
                    </div>
                    <h1 className="text-[70px] leading-[1.1] font-light mb-4">
                        SUMMER SALE STYLE<br/>
                        <span className="font-semibold">MEN</span>
                    </h1>
                    <a className="self-start uppercase font-semibold">Discover More</a>
                </div>
                <div>
                    <div className=" flex lg:block absolute inset-0  items-center bg-pink-200 h-[50px] justify-center z-0 mt-20" />
                    <div className=" flex lg:block absolute inset-0  bg-pink-700  w-[50px] h-[625px] ml-20 z-0 items-end" />
                    <div className="hidden lg:block relative z-10">
                    <img
                        className='h-[705px]'
                        src={model}
                    />
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;
