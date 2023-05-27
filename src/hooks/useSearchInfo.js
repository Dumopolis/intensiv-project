import { useSelector } from "react-redux";

export function useSearchInfo() {
	const {keywords, request} = useSelector((state) => state.search);
	
	return {
        keywords,
        request,
    };
}
