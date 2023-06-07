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

  return {
    ...form,
    form,
    handleChange
  };
};
