import booki from '../assets/projets/1_booki.png';
import omyfood from '../assets/projets/2_omyfood.png';
import la_panthere from '../assets/projets/3_la_panthere.png';
import kanap from '../assets/projets/4_kanap.png';
import piquantes from '../assets/projets/5_piquantes.png';
import groupomania from '../assets/projets/6_groupomania.png';
import vin from '../assets/projets/7_vin.png';
import gw from '../assets/projets/8_gw.png';
import kasa from "../assets/projets/kasa.png";
import { useEffect } from 'react';

const Portfolio = () => {
	useEffect(() => {

		var numberProjects = document.querySelector('.projets').childElementCount;
		
		for(var i=0;i<numberProjects;i++){
			const nbSec = (i+1)*0.2;
		document.querySelector(".projets").childNodes[i].style.animationDelay=`${nbSec}s`;
		}
		
	}, []);
	return (
		<>
			<div className="portfolio">
				<div className="portfolio_container">
					<h2 className="titlePage">Some projects</h2>
					<div className="projets">
						<a href="https://bookitb.netlify.app/" >
							<article>
								<p>Booki</p>
								<img src={booki} alt="projet_booki" />
							</article>
						</a>
						<a href="https://ohmyfoodtb.netlify.app/" >
							<article>
								<p>OhMyFood</p>
								<img src={omyfood} alt="projet_booki"/>
							</article>
						</a>
						<a href="https://lapantheretb.netlify.app/" >
							<article>
								<p>La panthère</p>
								<img src={la_panthere} alt="projet_booki" />
							</article>
						</a>
						<a href="https://clonegamesworkshop.netlify.app/" >
							<article>
								<p>Kanap</p>
								<img src={kanap} alt="projet_booki" />
							</article>
						</a>
						<a href="https://clonegamesworkshop.netlify.app/" >
							<article>
								<p>Piquantes</p>
								<img src={piquantes} alt="projet_booki" />
							</article>
						</a>
						<a href="http://13.38.54.185:3000/" >
							<article>
								<p>Groupomania</p>
								<img src={groupomania} alt="projet_groupomania" />
							</article>
						</a>
						<a href="https://feteduvin.netlify.app/" >
							<article>
								<p>Clone de la fête du vin</p>
								<img src={vin} alt="clone_fete_du_vin" />
							</article>
						</a>
						<a href="https://clonegamesworkshop.netlify.app/">
							<article>
								<p>Clone gameWorkshoop</p>
								<img src={gw} alt="clone_gamesworkshop" />
							</article>
						</a>
						<a href="https://kasatb.netlify.app/">
							<article>
								<p>Kasa</p>
								<img src={kasa} alt="projet_kasa" />
							</article>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
