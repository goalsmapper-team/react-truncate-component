declare type Callback<T> = (val: T) => void;
declare type SetValueFunc<T> = (val: T, callback?: Callback<T>) => void;
declare function useStateWithCallbackLazy<T>(initialValue: T): [T, SetValueFunc<T>];
export default useStateWithCallbackLazy;
