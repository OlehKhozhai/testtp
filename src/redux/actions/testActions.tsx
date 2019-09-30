import {
  ADD_TEST_ITEM,
  DELETE_TEST_ITEM,
  ITestItem,
  ITestItemActions,
  IDeleteItemAction,
} from "../types";

export const addNewItemAction = (item: ITestItem): ITestItemActions => ({
  type: ADD_TEST_ITEM,
  payload: item
});

export const deleteItemAction = (id: number):IDeleteItemAction => ({
  type: DELETE_TEST_ITEM,
  meta: id
});
