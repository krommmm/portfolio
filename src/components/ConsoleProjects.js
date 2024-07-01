import { useRef, useState } from 'react';

const ConsoleProjects = (props) => {
	const [numero,setNumero] = useState(1);
    
	const refTab1 = useRef(null);
	const refTab2 = useRef(null);
	const refTab3 = useRef(null);

    const changeColorTab1 = () => {
		refTab1.current.classList.add('colored');
		refTab2.current.classList.remove('colored'); 
		refTab3.current.classList.remove('colored');
		
		props.changeNumero(1);
	};
	const changeColorTab2 = () => {
		refTab2.current.classList.add('colored');
		refTab1.current.classList.remove('colored');
		refTab3.current.classList.remove('colored');
	
		props.changeNumero(2);
	};
	const changeColorTab3 = () => {
		refTab3.current.classList.add('colored');
		refTab2.current.classList.remove('colored');
		refTab1.current.classList.remove('colored');
		
		props.changeNumero(3);
	};
	return (
		<>
			<div className="console_projects">
				<div
					id="tab1"
					ref={refTab1}
					className="tab colored"
					onClick={changeColorTab1}
				>
					1
				</div>
				<div
					id="tab2"
					ref={refTab2}
					className="tab"
					onClick={changeColorTab2}
				>
					2
				</div>
				<div
					id="tab3"
					ref={refTab3}
					className="tab"
					onClick={changeColorTab3}
				>
					3
				</div>
			</div>
		</>
	);
};
export default ConsoleProjects;
