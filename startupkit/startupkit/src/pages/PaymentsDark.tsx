import { useContext, useEffect } from 'react'; 
import Payments from './Payments'
import { ThemeContext } from '../context/ThemeContext';

const PaymentsDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	
	return (
		<>
			<Payments />
		</>
	)
}
export default PaymentsDark;
