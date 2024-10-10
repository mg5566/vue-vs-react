type SetValue<T> = (newValue: T) => void;
export const useState = <T>(initialValue: T): [T, SetValue<T>] => {
  let value = initialValue;

  const getValue = () => value;
  const setValue: SetValue<T> = (newValue) => {
    value = newValue;
  };

  return [getValue(), setValue];
};
