import { City } from '../../types';
import { ActionType } from '../action-types';

interface CreateAction {
  type: ActionType.CREATE;
  payload: City;
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: { id: string };
}

export type Action = CreateAction | DeleteAction;
