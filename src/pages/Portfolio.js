import booki from '../assets/projets/1_booki.png';
import omyfood from '../assets/projets/2_omyfood.png';
import la_panthere from '../assets/projets/3_la_panthere.png';
import kanap from '../assets/projets/4_kanap.png';
import piquantes from '../assets/projets/5_piquantes.png';
import groupomania from '../assets/projets/6_groupomania.png';
import vin from '../assets/projets/7_vin.png';
import gw from '../assets/projets/8_gw.png';


import { useContext } from 'react';
import { ThemeContext } from '../context/Theme'

	

const Portfolio = () => {
	const [{ theme }] = useContext(ThemeContext);
	return (
		<>
			<div className="portfolio" style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
				<h2 className="button">Voici quelques projets sélectionnés</h2>
				<div className="projets">
					<a href="https://bookitb.netlify.app/">
						<article>
							<p>Booki</p>
							<img src={booki} alt="projet_booki" />
						</article>
					</a>
					<a href="https://ohmyfoodtb.netlify.app/">
						<article>
							<p>ohMyFood</p>
							<img src={omyfood} alt="projet_booki" />
						</article>
					</a>
					<a href="https://lapantheretb.netlify.app/">
						<article>
							<p>la panthère</p>
							<img src={la_panthere} alt="projet_booki" />
						</article>
					</a>
					<a href="https://clonegamesworkshop.netlify.app/">
						<article>
							<p>kanap</p>
							<img src={kanap} alt="projet_booki" />
						</article>
					</a>
					<a href="https://clonegamesworkshop.netlify.app/">
						<article>
							<p>piquantes</p>
							<img src={piquantes} alt="projet_booki" />
						</article>
					</a>
					<a href="http://13.38.54.185:3000/">
						<article>
							<p>groupomania</p>
							<img src={groupomania} alt="projet_booki" />
						</article>
					</a>
					<a href="https://feteduvin.netlify.app/">
						<article>
							<p>clone de la fête du vin</p>
							<img src={vin} alt="projet_booki" />
						</article>
					</a>
					<a href="https://clonegamesworkshop.netlify.app/">
						<article>
							<p>clone gameWorkshoop</p>
							<img src={gw} alt="projet_booki" />
						</article>
					</a>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
