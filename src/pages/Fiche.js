import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const Fiche = (props) => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const technoString = props.technos.join(' ');

	return (
		<>
			<div className="modal">
				<div className="modal_content">
					<div className={isDark ? 'uk' : 'fr'}>
						<h2>{props.name}</h2>
						<p className="description">{props.description}</p>
						<a href={Object.values(props.urls)}>
							<div className="bouton_presentation btn_site">
								Visit web site
							</div>
						</a>
						<img
							className="image_modal"
							src={Object.values(props.image)}
							alt=""
						/>
						<h2 class="titre_model">About this project</h2>
						<p className="info">{props.info}</p>
						<h2>Technical sheets</h2>
						<p className="technos">{technoString}</p>
						<h2>Ressources</h2>
						<a href={Object.values(props.github)}>
							<p>Github's link</p>
						</a>
					</div>

                    <div className={isDark ? 'fr' : 'uk'}>
						<h2>{props.name}</h2>
						<p className="description">{props.description}</p>
						<a href={Object.values(props.urls)}>
							<div className="bouton_presentation btn_site">
								Visitez le site web
							</div>
						</a>
						<img
							className="image_modal"
							src={Object.values(props.image)}
							alt=""
						/>
						<h2 class="titre_model">A-propos de ce projet</h2>
						<p className="info">{props.info}</p>
						<h2>fiche technique</h2>
						<p className="technos">{technoString}</p>
						<h2>Ressources</h2>
						<a href={Object.values(props.github)}>
							<div className="bouton_presentation btn_site">Lien github</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Fiche;
