import { useLayoutEffect, useRef } from "react";

export function useLatest(value) {
	const valueRef = useRef();

	useLayoutEffect(() => {
		valueRef.current = value;
	});
	return valueRef;
}
