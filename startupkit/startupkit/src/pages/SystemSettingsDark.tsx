import { useContext, useEffect } from 'react'; 
import SystemSettings from './SystemSettings'
import { ThemeContext } from '../context/ThemeContext';

const SystemSettingsDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	return (
		<>
			<SystemSettings />
		</>
	)
}
export default SystemSettingsDark;
