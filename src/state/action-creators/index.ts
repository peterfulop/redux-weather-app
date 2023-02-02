import { Dispatch } from 'redux';
import { City } from '../../types';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const createCity = (city: City) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE,
      payload: city,
    });
  };
};

export const deleteCity = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE,
      payload: { id },
    });
  };
};
