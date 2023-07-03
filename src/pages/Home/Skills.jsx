
import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard";
import jsIcon from '../../assets/images/Skills/javascript.png';
import reactIcon from '../../assets/images/Skills/react.png';
import mongodbIcon from '../../assets/images/Skills/mongodb.png';
import expressIcon from '../../assets/images/Skills/express.png';


const Skills = () => {
   
    
    return (
        <div className="px-16 my-5">
            <SectionTitle title="My Skills"></SectionTitle>
            <div className="grid md:grid-cols-4 gap-6 mt-5">
                <SkillCard icon={jsIcon} title='JavaScript' ></SkillCard>
                <SkillCard icon={reactIcon} title='React JS' ></SkillCard>
                <SkillCard icon={mongodbIcon} title='MongoDB' ></SkillCard>
                <SkillCard icon={expressIcon} title='Express JS' ></SkillCard>
            </div>
        </div>
    );
};

export default Skills;
