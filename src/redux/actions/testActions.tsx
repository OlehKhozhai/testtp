import {
  ADD_TEST_ITEM,
  DELETE_TEST_ITEM,
  ITestItem,
  ITestItemActions
} from "../types";

export const addNewItemAction = (item: ITestItem): ITestItemActions => ({
  type: ADD_TEST_ITEM,
  payload: item
});

export const deleteItemAction = (id: number): ITestItemActions => ({
  type: DELETE_TEST_ITEM,
  payload: id
});
