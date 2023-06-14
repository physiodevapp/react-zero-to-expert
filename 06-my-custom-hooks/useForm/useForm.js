import { useState } from "react";

export const useForm = (initialFields = {}) => {

  const [form, setForm] = useState(initialFields);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialFields)
  }

  return {
    ...form,
    form,
    onChange: handleChange,
    onReset: handleReset
  };
};
