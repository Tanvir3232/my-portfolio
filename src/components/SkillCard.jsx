const SkillCard = ({icon,title}) => {
    return (
        <div data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"  className="  py-5 bg-[#00091A] text-white rounded-lg  flex flex-col items-center">
            <img src={icon} alt="" />
            <h1 className="text-2xl font-bold my-5 ">{title}</h1>
        </div>
    );
};

export default SkillCard;