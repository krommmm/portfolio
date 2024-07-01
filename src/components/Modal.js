import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/Theme';

const Modal = (props) => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const [triggers, setTriggers] = useState(true);

	const handleClose = () => {
		props.remonterClose(!triggers);
	};

	document.addEventListener("click",(event)=>{
		let clickedElement = event.target;
		if(clickedElement.classList.contains("modal")){
			props.remonterClose(!triggers);
		}
	});
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
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>

					<div className={isDark ? 'uk' : 'fr'}>
						<div className="titre_modal">
						
							
								<img className="miniatureModal" src={props.data[props.index].details.images.net} alt="" />
						
							
							
							<h2 className="h2TitreModal">
							{props.data[props.index].nomDuProjet}
							</h2>
						</div>
						<div class="restModal">
						<p className="description">
							{props.data[props.index].details.descriptionUk}
						</p>
						<a href={props.data[props.index].details.url}>
							<div className="bouton_presentation button btn_site">
								Visit web site
							</div>
						</a>

						<h2>About this project</h2>
						<p className="info">
							{props.data[props.index].details.infoUk}
						</p>
						<h2>Technical sheets</h2>
						<p className="technos">
							{props.data[props.index].texte}
						</p>
						<h2>Ressources</h2>
						<a href={props.data[props.index].details.github}>
							<div className="bouton_presentation button btn_site bottomToTop">
								github
							</div>
						</a>
						</div>
					</div>

					<div className={isDark ? 'fr' : 'uk'}>
						<div className="titre_modal">
							<h2 className="h2TitreModal">
								{props.data[props.index].nomDuProjet}
							</h2>
							<img className="miniatureModal" src={props.data[props.index].details.images.net} alt="" />
						</div>
						<div class="restModal">
						<p className="description">
							{props.data[props.index].details.descriptionFr}
						</p>
						{props.data[props.index].details.isSiteWebActive !== false && 
						<a href={props.data[props.index].details.url}>
							<div className="bouton_presentation button btn_site">
								Visitez le site web
							</div>
						</a>
						}

						<h2>A-propos de ce projet</h2>
						<p className="info">
							{props.data[props.index].details.infoFr}
						</p>
						<h2>fiche technique</h2>
						<p className="technos">
							{props.data[props.index].texte.map(
								(techno, index2) => (
									<div
										className="texte_container"
										key="index2"
									>
										{techno}
									</div>
								)
							)}
						</p>
						<h2>Ressources</h2>
						<a href={props.data[props.index].details.github}>
							<div className="bouton_presentation button btn_site bottomToTop">
								Lien github
							</div>
						</a>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
