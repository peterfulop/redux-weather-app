import { City } from '../../types';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const LSK = 'my-weather-app';

export const initialItem: City = {
  id: '884974f0-bbf9-4bdf-9749-58e7dac4f596',
  name: 'Budapest',
  countryCode: 'HU',
  country: 'Hungary',
  coord: { lon: 19.0399, lat: 47.498 },
};

let initialState: City[] = [];

const localStorageData = localStorage.getItem(LSK);

if (localStorageData) {
  const initialItemId = initialItem.id;
  const storedCities = JSON.parse(localStorageData) as City[];
  const dataWithoutInitialItem = storedCities.filter(
    (city) => city.id !== initialItemId
  );
  if (dataWithoutInitialItem.length === 0) {
    initialState = [initialItem];
  } else {
    initialState = [...dataWithoutInitialItem, initialItem];
  }
} else {
  initialState = [initialItem];
}

localStorage.setItem(LSK, JSON.stringify(initialState));

const cityReducer = (state: City[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE:
      localStorage.setItem(LSK, JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case ActionType.DELETE: {
      const id = action.payload.id;
      state = state.filter((city) => city.id !== id);
      localStorage.setItem(LSK, JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

export default cityReducer;
