import { useEffect } from 'react';

const Defilement = (props) => {
	useEffect(() => {
		var slide_container = document.querySelector('.slide_container');

		for (let i = 0; i < props.images.length; i++) {
			//creation des elements
			var a = document.createElement('a');
			var article = document.createElement('article');
			var para = document.createElement('p');
			var image = document.createElement('img');

			//attributions des elements
			a.setAttribute('href', `${Object.values(props.urls[i])}`);

			image.setAttribute('src', `${Object.values(props.images[i])}`);
			image.setAttribute('alt', `${Object.keys(props.images[i])}`);

			//creation et integration des textNodes
			var paraNode = document.createTextNode(
				`${Object.values(props.texte[i])}`
			);
			para.appendChild(paraNode);

			//intégration des elements
			slide_container.appendChild(a);
			a.appendChild(article);
			article.appendChild(para);
			article.appendChild(image);
		}
	}, [props.images, props.texte, props.urls]);

	useEffect(() => {
		const slide_container = document.querySelector('.slide_container');
		const numberProjects = slide_container.childElementCount;

		//fonction pour le défilement des slides
		for (let i = 0; i < numberProjects; i++) {
			const nbSec = (i + 1) * 0.2;
			slide_container.childNodes[i].style.animationDelay = `${nbSec}s`;
		}
	}, []);

	return (
		<>
			<div className="diapo">
				<div className="slide_container"></div>
				<i className="fa-solid fa-caret-left"></i>
				<i className="fa-solid fa-caret-right"></i>
			</div>
		</>
	);
};

export default Defilement;
