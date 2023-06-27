const SkillCard = ({icon,title}) => {
    return (
        <div className="border border-2 py-5 bg-[#00091A] text-white rounded-lg border-[#00091A] flex flex-col items-center">
            <img src={icon} alt="" />
            <h1 className="text-2xl font-bold my-5 ">{title}</h1>
        </div>
    );
};

export default SkillCard;