import { useContext, useEffect } from 'react'; 
import PointSettings from './PointSettings'
import { ThemeContext } from '../context/ThemeContext';

const PointSettingsDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	return (
		<>
			<PointSettings />
		</>
	)
}
export default PointSettingsDark;
