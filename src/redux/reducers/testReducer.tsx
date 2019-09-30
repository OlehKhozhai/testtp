import {
  ADD_TEST_ITEM,
  UPDATE_TEST_ITEM,
  DELETE_TEST_ITEM,
  ITestItemActions,
  ITestItemsList
} from "../types";

const initialState: ITestItemsList = {
  data: []
};

export const testReducer = (
  state = initialState,
  action: ITestItemActions
) => {
  switch (action.type) {
    case ADD_TEST_ITEM:
      return {
        data: [...state.data, action.payload]
      };

    case UPDATE_TEST_ITEM:
      return {
        data: state.data.map(item => (item.id !== action.payload.id ? action.payload : item))
      };

    case DELETE_TEST_ITEM:
      return {
        data: state.data.filter(({ id }) => id !== action.meta)
      };

    default:
      return state;
  }
};
