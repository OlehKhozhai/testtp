export const ADD_TEST_ITEM = "ADD_TEST_ITEM";
export const UPDATE_TEST_ITEM = "UPDATE_TEST_ITEM";
export const DELETE_TEST_ITEM = "DELETE_TEST_ITEM";

export interface ITestItem {
  id?: number;
  title: string;
  author: string;
}

export interface ITestItemsList {
  data: ITestItem[];
}

export interface IAddItemAction {
  type: typeof ADD_TEST_ITEM;
  payload: ITestItem;
}

export interface IUpdateItemAction {
  type: typeof UPDATE_TEST_ITEM;
  payload: ITestItem;
}

export interface IDeleteItemAction {
  type: typeof DELETE_TEST_ITEM;
  payload: number;
}

export type ITestItemActions =
  | IAddItemAction
  | IUpdateItemAction
  | IDeleteItemAction;
