import React from "react";

type Callback<T> = (val: T) => void;
type SetValueFunc<T> = (val: T, callback?: Callback<T>) => void;

function useStateWithCallbackLazy<T>(initialValue: T): [T, SetValueFunc<T>] {
	const callbackRef = React.useRef<Callback<T> | null>(null);

	const [value, setValue] = React.useState(initialValue);

	React.useEffect(() => {
		if (callbackRef.current) {
			callbackRef.current(value);
			callbackRef.current = null;
		}
	}, [value]);

	const setValueWithCallback = React.useCallback((newValue: T, callback?: Callback<T>) => {
		callbackRef.current = callback || null;
		return setValue(newValue);
	}, []);

	return [value, setValueWithCallback];
}

export default useStateWithCallbackLazy;
