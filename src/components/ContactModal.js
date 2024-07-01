import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/Theme';

const ContactModal = (props) => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const [triggers, setTriggers] = useState(true);

	const handleClose = (props) => {
		props.remonterClose(!triggers);
	};
	

	return (
		<>
			{/* {console.log(props.data[props.index].nomDuProjet)}
			{console.log(props.index)} */}
			<div className="modal caché">
				<div className="modal_content">
					<div className="close_container">
						<button
							className="close maintenance"
							onClick={handleClose}
						>
							x
						</button>
					</div>

					<div className={isDark ? 'uk' : 'fr'}>
						<div className="titre_modal">
							<h2 className="h2TitreModal">
								{}
							</h2>
						</div>
						<div class="restModal">
							<p className="description">{}</p>
							<a href="sdf">
								<div className="bouton_presentation btn_site">
									Visit web site
								</div>
							</a>

							<h2>About this project</h2>
							<p className="info">{}</p>
							<h2>Technical sheets</h2>
							<p className="technos">{}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactModal;
