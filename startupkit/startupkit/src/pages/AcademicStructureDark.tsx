import { useContext, useEffect } from 'react'; 
import AcademicStructure from './AcademicStructure'
import { ThemeContext } from '../context/ThemeContext';

const AcademicStructureDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	return (
		<>
			<AcademicStructure />
		</>
	)
}
export default AcademicStructureDark;
