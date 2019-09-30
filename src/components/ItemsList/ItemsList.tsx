import React from "react";
import { ITestItemsList } from "../../redux/types";
import { connect, useDispatch } from "react-redux";
import { IAppStore } from "../../redux/store";
import { deleteItemAction } from "../../redux/actions/testActions";

const ItemsList = ({ data }: ITestItemsList) => {
  const dispatch = useDispatch();

  const deleteItem = (id: any) => {
    dispatch(deleteItemAction(id));
  };

  if (!data.length) return null;

  return (
    <ul>
      {data.map(({ id, title, author }) => (
        <li key={id}>
          {author} - {title}
          <button onClick={(): void => deleteItem(id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: IAppStore) => ({ data: state.test.data });

export default connect(mapStateToProps)(ItemsList);
