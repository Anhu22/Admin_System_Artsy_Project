import { useContext, useEffect } from 'react'; 
import AuditLogs from './Audit-Logs'
import { ThemeContext } from '../context/ThemeContext';

const AuditLogsDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	return (
		<>
			<AuditLogs />
		</>
	)
}
export default AuditLogsDark;
