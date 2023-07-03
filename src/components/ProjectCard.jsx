import { Link } from "react-router-dom";
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const ProjectCard = ({ title, description, liveSite, githubClientLink,githubServerLink, images }) => {
    const galleryItems = images.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    const imageGalleryStyles = {
        gallery: {
            height: 500,
        },
        thumbnail: {
            height: 100,
        },
    };

    return (
        <div className="flex md:flex-row flex-col p-5 rounded-xl bg-[#00091A] text-gray-300 shadow-2xl justify-between gap-6 my-5">
            <div className="md:w-1/2">
                <h1 className="text-2xl text-green-400 font-semibold">{title}</h1>
                <p className="text-justify mt-3">{description}</p>
                <div className="my-5">
                    <Link to={liveSite} className="btn btn-success btn-xs">Live Site</Link>
                    <Link to={githubClientLink} className="btn btn-primary btn-xs ml-2">Github Client</Link>
                    <Link to={githubServerLink} className="btn btn-warning btn-xs ml-2">Github Server</Link>
                </div>
            </div>
            <div className="md:w-1/2" id="gallery">
                <ReactImageGallery items={galleryItems} 
                    showFullscreenButton={true}
                    showPlayButton={true}
                    autoPlay={false}
                    additionalClass="custom-image-gallery"
                    thumbnailPosition="bottom"
                    styles={imageGalleryStyles}
                />
            </div>
        </div>
    );
};

export default ProjectCard;
