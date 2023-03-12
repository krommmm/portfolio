import { useContext } from 'react';
import { ThemeContext } from '../context/Theme'




const Contact = () => {
	const [{ theme }] = useContext(ThemeContext);
	return (
		<>
			<div className="contact" style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
				<div className="contact_container">
					<i className="fa-solid fa-phone"></i>
					<p>+33 (06) 50 47 41 78</p>

					<i className="fa-regular fa-envelope"></i>
					<p>thibault.boutaud@gmx.fr</p>

					<i className="fa-brands fa-linkedin"></i>
					<p>https://www.linkedin.com/feed/</p>

					<i className="fa-brands fa-github"></i>
					<p>https://github.com/krommmm</p>
				</div>
			</div>
		</>
	);
};

export default Contact;
