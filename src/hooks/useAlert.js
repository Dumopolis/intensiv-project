import { useSelector } from "react-redux";

export function useAlert() {
	const { activeAlert, severity, title, text } = useSelector(
		(state) => state.alert
	);

	return {
		activeAlert,
		severity,
		title,
		text,
	};
}
