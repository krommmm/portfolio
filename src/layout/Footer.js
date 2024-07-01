import '../styles/index.css';

const Footer = () => {
	let time = new Date().getFullYear();
	return (
		<>
			<div className="footer">
				<div className="me">
					<p>Thibault Boutaud</p>
					<p>Développeur web Front-end javascript & react</p>
					<p>2022 - {time}</p>
				</div>
				<div className="socialLinks_container">
					<a href="https://github.com/krommmm/">
						<i className="fa-brands fa-github socialLinks"></i>
					</a>
					<a href="https://www.linkedin.com/in/thibault-boutaud/">
						<i className="fa-brands fa-linkedin socialLinks"></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
