import mac from '../assets/new/mac.png';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/Theme';
import Modal from "../components/Modal";

const Projects = (props) => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const [triggers, setTriggers] = useState(false);

	if (!props.data) {
		return null;
	}

	const handleImageClick = (index) => {
		setSelectedIndex(index);
		setTriggers(!triggers);
	  };

	return (
		<>
			<div className="alpha_project_container">
				<div className="alpha_project_container_2">
				{props.data.map((item, index) => (
					<div key={index}>
						<div className="project_container" id={`projet_${index}`} key={index}>
							<img className="mac" id={`mac_${index}`}  src={mac} alt="" />
							
							<img
								id={`img_${index}`}
								onClick={() => handleImageClick(index)}
								className="projects"
								src={item.details.images.net}
								alt=""
							/>
							<div className="layoutSrc hidden">
								<div className="divBtn">
									<div
										className="bouton_presentation cliquable"
										href="..."
									>
										Information
									</div>
								</div>
							</div>
								
						</div>
					</div>
				))}
				{triggers && <Modal index={selectedIndex}  data={props.data} remonterClose={(close=>setTriggers(close))}/> }
				</div>
			</div>
		</>
	);
};
export default Projects;
