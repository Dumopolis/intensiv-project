import { useSelector } from "react-redux";

export function useData() {
	const {data, status, error} = useSelector((state) => state.data);
	
	return {
        data,
        status,
        error
    };
}
