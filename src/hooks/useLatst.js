import { useLayoutEffect, useRef } from "react";

export function useLatst(value) {
	const valueRef = useRef();

	useLayoutEffect(() => {
		valueRef.current = value;
	});
	return valueRef;
}
