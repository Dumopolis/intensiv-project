import { useSelector } from "react-redux";

export function useSearchRequestInfo() {
	const {keywords, request} = useSelector((state) => state.search);
	
	return {
        keywords,
        request
    };
}
