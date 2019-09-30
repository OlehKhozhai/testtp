import React, { useState } from "react";
import { ITestItem } from "../../redux/types";
import { useDispatch } from "react-redux";
import { addNewItemAction } from "../../redux/actions/testActions";

const initialState: ITestItem = { author: "", title: "" };

const ItemForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<{ value: string; name: string }>): void => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addNewItemAction({ ...formValues, id: Date.now() }));
    setFormValues(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="author"
        name="author"
        onChange={handleChange}
        value={formValues.author}
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={formValues.title}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
