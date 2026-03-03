import { useContext, useEffect } from 'react'; 
import TestSettings from './TestSettings'
import { ThemeContext } from '../context/ThemeContext';

const TestSettingsDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	
	return (
		<>
			<TestSettings />
		</>
	)
}
export default TestSettingsDark;
