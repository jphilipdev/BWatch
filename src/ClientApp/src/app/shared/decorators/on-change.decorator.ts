export interface SimpleChange<T> {
  firstChange: boolean;
  previousValue: T;
  currentValue: T;
  isFirstChange: () => boolean;
}

export function OnChange<T = any>(callback: (value: T, simpleChange?: SimpleChange<T>) => void, ignoreFirstChange: boolean = true) {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();
  return (target: any, key: PropertyKey) => {
    Object.defineProperty(target, key, {
      set: function (value) {

        const setIsFirstChange = () => {
          const isFirstChange = this[isFirstChangeKey];
          this[isFirstChangeKey] = isFirstChange === undefined;
        }

        const hasValueChanged = () => this[isFirstChangeKey] || this[cachedValueKey] !== value;

        const updatePreviousValue = () => {
          const previousValue = this[cachedValueKey];
          this[cachedValueKey] = value;
          return previousValue;
        }

        const createSimpleChange = previousValue => ({
            firstChange: this[isFirstChangeKey],
            previousValue,
            currentValue: this[cachedValueKey],
            isFirstChange: () => this[isFirstChangeKey],
          }
        );

        const shouldCallback = simpleChange => !simpleChange.firstChange || !ignoreFirstChange;


        setIsFirstChange();

        if (hasValueChanged()) {
          const previousValue = updatePreviousValue();
          const simpleChange = createSimpleChange(previousValue);

          if (shouldCallback(simpleChange)) {
            callback.call(this, this[cachedValueKey], simpleChange);
          }
        }
      },
      get: function () {
        return this[cachedValueKey];
      },
    });
  };
}
