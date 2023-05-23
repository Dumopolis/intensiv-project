import { useMemo } from "react";
import { debounce } from "lodash";

import { useLatst } from "./useLatst";

export function useDebounce(cb, ms) {
	const latestCb = useLatst(cb);
	return useMemo(
		() =>
			debounce((...args) => {
				latestCb.current(...args);
			}, ms),
		[ms, latestCb]
	);
}
