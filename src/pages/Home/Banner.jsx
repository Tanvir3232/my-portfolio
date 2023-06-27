import bannerImg from '../../assets/images/profile.png'
const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col h-[70vh] bg-[#00091A] text-white  items-center justify-between px-16">
           <div>
                <h1 className="text-5xl font-bold w-1/2 my-5">Hello, I am Tanvir Ahmad A React Developer</h1>
                <p className='w-1/2'>Creating Seamless, Fast, and Immersive User Experiences: Transforming Ideas into Captivating Realities</p>
           </div>
           <div>
              <img src={bannerImg} alt="" />
           </div>
        </div>
    );
};

export default Banner;