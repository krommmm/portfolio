import phone from '../assets/phone.png';
import email from '../assets/email.png';
import contact from '../assets/new/contact-img.svg';
import mail from '../assets/new/mail.svg';
import social from '../assets/new/social.svg';
import user from '../assets/new/user.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { useEffect, useState } from 'react';

const Contact = () => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const [triggers, setTriggers] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const data = [
		{
			titleFr: 'Mot de la fin',
			titleUk: 'A last word',
			details: {
				appercuFR: 'Cher visiteur...',
				appercuUk: 'Dear visitor...',
				texteFr: `Cher visiteur, je suis ravi que vous ayez
			pris le temps de visiter mon
			portfolio de
			développeur web. Si vous avez des questions,
			des commentaires, ou si vous souhaitez
			simplement discuter de projets passionnants,
			n'hésitez pas à me contacter. Je suis là
			pour vous écouter et vous assister au mieux
			de mes compétences. Que vous soyez un client
			potentiel, un collaborateur, ou simplement
			curieux, votre opinion compte. Je suis
			ouvert à toutes les idées innovantes et
			serait honoré de travailler avec vous pour
			donner vie à vos projets numériques.
			Merci encore d'avoir visité mon portfolio,
			et j'espère avoir l'opportunité de travailler ensemble très bientôt.`,
				texteUk: `
				Dear visitor, I'm delighted that you have
				taken the time to visit my web developer
				portfolio. If
				you have any
				 questions ,
				comments, or if you simply want to discuss
				exciting
				projects,
				please feel free to contact me. I am here to
				listen to you and assist you to the best of
				my abilities. Whether you are a potential
				client, a collaborator, or just curious,
				your opinion matters. I am open to all
				innovative ideas and would be honored to
				work with you to bring your
				
					digital projects
				
				to life.
			
			
				Thank you again for visiting my portfolio,
				and I hope to have the opportunity to
				work together
				very soon.
			
				`,
			},
		},
		{
			titleFr: 'Liens sociaux',
			titleUk: `Socials links`,
			divers: {
				appercu: `Github : ...`,
				github: `fa-brands fa-github`,
				linkedin: `fa-brands fa-linkedin`,
			},
		},
		{
			titleFr: 'Contact',
			titleUk: 'Contact',
			divers: {
				appercuFr: 'Email : ...',
				appercuUk: 'Email : ...',
				email: 'thibault.boutaud@gmx.fr',
				linkedin: 'https://www.linkedin.com/in/thibault-boutaud/',
			},
		},
	];

	const handleContact = (index) => {
		document.querySelector(`.modal_${index}`).classList.remove('hide');
		setSelectedIndex(index);
		setTriggers(!triggers);
	};

	const handleClose = (index) => {
		document.querySelector(`.modal_${index}`).classList.add('hide');
		setTriggers(!triggers);
	};

	document.addEventListener("click", (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains("modal")) {
			handleClose(1);
			handleClose(2);
			handleClose(3);
		}
	});

	return (
		<>
			<div className="contact">
				<div className="contact_container">
					<div className="titleContact">
						<div className={isDark ? 'fr' : 'uk'}>
							<h2>CONTACTEZ MOI</h2>
						</div>
						<div className={isDark ? 'uk' : 'fr'}>
							<h2>CONTACT ME</h2>
						</div>
					</div>
					<div className="thingsContact">
						<div className="thingContact">
							<img src={user} alt="" />
							<div className="texte">
								<div className={isDark ? 'fr' : 'uk'}>
									<h3>Mot de la fin</h3>
									<p>Cher visiteur...</p>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>A last word</h3>
									<p>Dear visitor...</p>
								</div>
								<button
									onClick={() => handleContact(1)}
									className="btn-contact"
								>
									see more
								</button>
							</div>
						</div>

						<div className="thingContact">
							<img src={social} alt="" />
							<div className="texte">
								<div className={isDark ? 'fr' : 'uk'}>
									<h3>Liens sociaux</h3>
									<p>Github: ...</p>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>Social Links</h3>
									<p>Github: ...</p>
								</div>
								<button
									onClick={() => handleContact(2)}
									className="btn-contact"
								>
									see more
								</button>
							</div>
						</div>
						<div className="thingContact">
							<img src={mail} alt="" />
							<div className="texte">
								<div className={isDark ? 'fr' : 'uk'}>
									<h3>Contact</h3>
									<p>email: ...</p>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>Contact</h3>
									<p>email: ...</p>
								</div>
								<button
									onClick={() => handleContact(3)}
									className="btn-contact"
								>
									see more
								</button>
							</div>
						</div>
					</div>

					{/* Modal */}

					<div className="modal hide modal_1">
						<div className="modal_content">
							<div className="close_container">
								<button
									className="close maintenance close_1"
									onClick={() => handleClose(1)}
								>
									x
								</button>
							</div>
					

							<div className={isDark ? 'fr' : 'uk'}>
								<div className="titre_modal">
								<i class="fa-regular fa-thumbs-up"></i><h2 className="h2TitreModal">
										{data[0].titleFr}
									</h2>
								</div>
								<div className="restModal">
									<p className="description">
										{data[0].details.texteFr}
									</p>
								</div>
							</div>
							<div className={isDark ? 'uk' : 'fr'}>
								<div className="titre_modal">
								<i class="fa-regular fa-thumbs-up"></i><h2 className="h2TitreModal">
										{data[0].titleUk}
									</h2>
								</div>
								<div className="restModal">
									<p className="description">
										{data[0].details.texteUk}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="modal hide modal_2">
						<div className="modal_content">
							<div className="close_container">
								<button
									className="close maintenance close_1"
									onClick={() => handleClose(2)}
								>
									x
								</button>
							</div>

							<div className={isDark ? 'fr' : 'uk'}>
								<div className="titre_modal">
								<i class="fa-solid fa-users"></i><h2 className="h2TitreModal">
										{data[1].titleFr}
									</h2>
								</div>
								<div className="restModal">
									<p className="description"></p>
									<a href="https://github.com/krommmm/">
										<i className={data[1].divers.github} />
									</a>
									<a href="https://www.linkedin.com/in/thibault-boutaud/">
										<i
											className={data[1].divers.linkedin}
										/>
									</a>
								</div>
							</div>
							<div className={isDark ? 'uk' : 'fr'}>
								<div className="titre_modal">
								<i class="fa-solid fa-users"></i><h2 className="h2TitreModal">
										{data[1].titleUk}
									</h2>
								</div>
								<div className="restModal">
									<p className="description"></p>
									<a href="https://github.com/krommmm/">
										<i className={data[1].divers.github} />
									</a>
									<a href="https://www.linkedin.com/in/thibault-boutaud/">
										<i
											className={data[1].divers.linkedin}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="modal hide modal_3">
						<div className="modal_content">
							<div className="close_container">
								<button
									className="close maintenance close_1"
									onClick={() => handleClose(3)}
								>
									x
								</button>
							</div>

							<div className={isDark ? 'fr' : 'uk'}>
								<div className="titre_modal">
								<i class="fa-regular fa-envelope"></i><h2 className="h2TitreModal">
										{data[2].titleFr}
									</h2>
								</div>
								<div className="restModal">
									<div className="description">
										<div className="email">
											<p className="purple">Email:&nbsp; </p>
											<p>{data[2].divers.email}</p>
										</div>
										<div className="phone">
											<p className="purple">Telephone: </p>
											<p>06-50-47-41-78</p>
										</div>
									</div>
								</div>
							</div>
							<div className={isDark ? 'uk' : 'fr'}>
								<div className="titre_modal">
								<i class="fa-regular fa-envelope"></i><h2 className="h2TitreModal">
										{data[2].titleUk}
									</h2>
								</div>
								<div className="restModal">
									<div className="description">
										<div className="email">
											<p className="purple">Email: </p>
											<p>{data[2].divers.email}</p>
										</div>
										<div className="phone">
											<p className="purple">Telephone: </p>
											<p>06-50-47-41-78</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Fin du modal */}
				</div>
			</div>
		</>
	);
};

export default Contact;
