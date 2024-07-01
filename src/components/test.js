import mac from '../assets/new/mac.png';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/Theme';
import Modal from "../components/Modal";

const Projects = (props) => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);

    const handleImageClick = (index) => {
        setShowModal(true);
        setModalIndex(index);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="alpha_project_container">
                {props.data.map((item, index) => (
                    <div key={index}>
                        <div className="project_container">
                            {/* ... */}
                            <img
                                onClick={() => handleImageClick(index)}
                                className="projects"
                                src={item.details.images.net}
                                alt=""
                            />
                            {showModal && (
                                <Modal
                                    index={modalIndex}
                                    data={props.data[modalIndex]}
                                    remonterClose={handleCloseModal}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
