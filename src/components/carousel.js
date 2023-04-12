import { useEffect, useState } from 'react';

const Carousel = (props) => {
	const [isTabletteOuMoins, setIsTabletteOuMoins] = useState(false);

	useEffect(() => {
		const slide_container = document.querySelector('.slide_container');

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
		const diapo = document.querySelector('.diapo');
		const slide_container = document.querySelector('.slide_container');
		var slideWidth = diapo.getBoundingClientRect().width;

		//Si la largeur de l'écran est inférieur à 1032px lance le carousel
		if (
			document.querySelector('body').getBoundingClientRect().width < 1032
		) {
			setIsTabletteOuMoins(true);
		} else {
			setIsTabletteOuMoins(false);
		}

		
		const carret_left = document.querySelector('.fa-caret-left');
		const carret_right = document.querySelector('.fa-caret-right');

		var compteur = 0;
		var transfert = 0;

		//on clone la première image pour donner l'illusion d'un carousel
		var clone = slide_container.firstElementChild.cloneNode(true);
		if (isTabletteOuMoins) {
			slide_container.appendChild(clone);
		}

		//On indique la largeur du grand rectangle qui contient tous les slides en fonction du nombre de slides (si on est sur desktop ou moins) (après avoir cloner)
		slide_container.style.width = isTabletteOuMoins
			? `${slideWidth * slide_container.childElementCount}px`
			: `100%`;


		//fonction qui tourne à gauche
		carret_left.addEventListener('click', function goLeft() {
			compteur--;
			if (compteur < 0) {
				setTimeout(() => {
					slide_container.style.transition = '1ms';
					transfert = slideWidth * compteur;
					slide_container.style.transform = `translateX(${-transfert}px)`;
					slide_container.style.transition = '400ms';
					goLeft();
				}, 1);

				slide_container.style.transition = '0ms';
				compteur = slide_container.childElementCount - 1;
			}
			transfert = slideWidth * compteur;
			slide_container.style.transform = `translateX(${-transfert}px)`;
			console.log(compteur);
		});

		//fonction qui tourne à droite
		carret_right.addEventListener('click', function goRight() {
			compteur++;
			if (compteur === slide_container.childElementCount - 1) {
				setTimeout(() => {
					compteur = 0;
					slide_container.style.transition = '0ms';
					transfert = slideWidth * compteur;
					slide_container.style.transform = `translateX(${-transfert}px)`;
				}, 400);
			}

			console.log(compteur);
			slide_container.style.transition = '400ms';
			transfert = slideWidth * compteur;
			slide_container.style.transform = `translateX(${-transfert}px)`;
		});
	}, [isTabletteOuMoins]);
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

export default Carousel;
