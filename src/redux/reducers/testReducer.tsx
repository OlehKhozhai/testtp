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
  { type, payload }: ITestItemActions
) => {
  switch (type) {
    case ADD_TEST_ITEM:
      return {
        data: [...state.data, payload]
      };

    // case UPDATE_TEST_ITEM:
    //   return {
    //     ...state
    //     data: state.data.map(item => (item.id !== payload.id ? payload : item))
    //   };

    case DELETE_TEST_ITEM:
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload)
      };

    default:
      return state;
  }
};
