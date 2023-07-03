
import tanvirImage from '../../assets/images/profile.png';
import SectionTitle from '../../components/SectionTitle';

const About = () => {
  
  return (
    <div data-aos="fade-up" data-aos-duration="3000"  className="md:mx-16 mx-5 my-5">
      <SectionTitle title="About Me" />

      <div className="bg-[#00091A] text-gray-900 rounded-lg shadow p-8">
      
          <div   className="flex flex-col lg:flex-row items-center">
            <div data-aos="flip-right" data-aos-duration="3000" className="bg-gradient-to-br from-blue-900 to-green-400 p-5 rounded-lg flex flex-col items-center ">
              <figure className='h-48 w-48 rounded-full'>
              <img src={tanvirImage} alt="Tanvir Ahmad" className="w-48 h-48 rounded-full" />
              </figure>
              <h2 className="text-2xl font-bold  mb-4">Tanvir Ahmad</h2>
              <h4 className='text-xl font-bold'>Education :</h4> BSc Engg. in CSE.
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 justify-center md:ml-6">
            
              <p className="text-lg text-justify text-gray-300">
                I am a passionate web developer with a Bachelors degree in Computer Science and Engineering. I have a strong interest in creating interactive and user-friendly web applications. My journey into web development started when I completed a 6-month web development course focused on React, where I gained valuable skills in building modern and responsive websites.
              </p>
              <p className="text-lg text-justify text-gray-300 mt-4">
                In addition to React, I have experience working with HTML, CSS, JavaScript, and other front-end technologies. I am dedicated to continuous learning and staying up-to-date with the latest web development trends and best practices. I love to collaborate with others and solve complex problems using my technical skills.
              </p>
              <p className="text-lg text-justify text-gray-300 mt-4">
                I am currently seeking new opportunities to apply my knowledge and skills in a challenging environment. If you have any exciting projects or job opportunities, feel free to reach out to me!
              </p>
            </div>
          </div>
     
      </div>
    </div>
  );
};

export default About;
