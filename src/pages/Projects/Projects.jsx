import ProjectCard from "../../components/ProjectCard";
import SectionTitle from "../../components/SectionTitle";
import img1 from '../../assets/images/Projects/recipe-home.png'
import img2 from '../../assets/images/Projects/recipe-login.png'
import img3 from '../../assets/images/Projects/recipe-register.png'
import img4 from '../../assets/images/Projects/recipe-shef-details.png'
import img5 from '../../assets/images/Projects/toy-home.png'
import img6 from '../../assets/images/Projects/toy-all-toys.png'
import img7 from '../../assets/images/Projects/toy-my-toys.png'
import img8 from '../../assets/images/Projects/toy-view-details.png'
import img9 from '../../assets/images/Projects/sports-home.png'
import img10 from '../../assets/images/Projects/sports-admin-dashboard.png'
import img11 from '../../assets/images/Projects/sports-manage-users.png'
import img12 from '../../assets/images/Projects/sports-manage-classes.png'
const Projects = () => {
    return (
        <div className="md:px-16 px-5">
            <SectionTitle title='My Projects'></SectionTitle>
            
            <ProjectCard
              title='Recipe Bangladesh'
              description='In this project, I created a unique and visually appealing website for a culinary platform. The design is sleek and modern, with a responsive navbar that adapts to different screen sizes. The website includes a registration page with form validation and error handling, allowing users to easily create an account. The homepage features a captivating banner section and a Chef section with cards showcasing information about talented chefs. Additionally, two meaningful sections were added to enhance the user experience. Clicking on a chefs View Recipes button takes users to the Chef Recipes page, where they can explore the chefs recipes, mark them as favorites, and view details such as ingredients and cooking method. The website also includes a 404 page, environment variable usage, and responsive design for mobile and desktop devices. With clean and organized code, meaningful commits, and attention to detail, this project successfully delivers a high-quality and user-friendly culinary website.'
              liveSite='https://recipe-bangladesh.web.app/'
              githubClientLink='https://github.com/Tanvir3232/simple-recipe-client'
              githubServerLink='https://github.com/Tanvir3232/simple-recipe-server'
              images={[img1, img2, img3, img4]}
            ></ProjectCard>
            <ProjectCard
              title='Smarty Toys'
              description='In this project, I successfully developed an e-commerce toy website with various user-friendly features. Users have the ability to sign up and easily log in using their Google accounts. They can explore and access detailed information about all available toys, as well as filter toys based on sub-categories. The search functionality enables users to conveniently find specific toys by name. Registered users enjoy additional benefits, such as accessing detailed information about toys, adding new toys to the platform, and managing their own toy listings, including the ability to update and delete toys. The sorting feature allows registered users to arrange their listed toys in ascending or descending order. Furthermore, the website includes a comprehensive blog page that answers frequently asked questions related to the toy industry. The implementation of mobile and desktop responsiveness ensures optimal user experience across different devices. Overall, this project showcases my ability to develop a fully functional e-commerce website with essential features and user-friendly design, catering to both toy enthusiasts and sellers.'
              liveSite='https://smartytoys-8622a.web.app/'
              githubClientLink='https://github.com/Tanvir3232/toy-marketplace-client'
              githubServerLink='https://github.com/Tanvir3232/toy-marketplace-server'
              images={[img5, img6, img7, img8]}
            ></ProjectCard>
            <ProjectCard
              title='Sports Elevate'
              description='In this project, I successfully developed an online learning platform with a robust user registration and login system. Users can easily create an account or log in using their email and password, as well as utilize social login options. The platform offers personalized user dashboards tailored to their specific roles, allowing for efficient management of classes and users. With a user-friendly interface, users can easily browse and select from a wide range of classes, categorized based on popularity. The website also features a showcase of top instructors, enabling users to make informed decisions when choosing classes. Secure payments are integrated using Stripe, ensuring safe and convenient transactions. Admins have comprehensive control over class and user management, including the ability to provide feedback to instructors. The website boasts an attractive homepage, responsive design, and a seamless user experience across various devices. This project demonstrates my ability to create an intuitive and feature-rich online learning platform that caters to both instructors and students.'
              liveSite='https://sports-academy-fcd9a.web.app/'
              githubClientLink='https://github.com/Tanvir3232/sports-academy-client'
              githubServerLink='https://github.com/Tanvir3232/sports-academy-server'
              images={[img9, img10, img11, img12]}
            ></ProjectCard>
        </div>
    );
};

export default Projects;