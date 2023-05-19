import { useSelector } from "react-redux";

export function useItemsForCards() {
	const {data, status, error} = useSelector((state) => state.data);
	
	return {
        data,
        status,
        error
    };
}
