import { useState } from "react";
import { sendContactMessage } from "../services/api.js";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Name is required";
    if (!values.email.trim()) nextErrors.email = "Email is required";
    if (values.email && !emailRegex.test(values.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!values.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!validate()) return { ok: false };
    setStatus("loading");
    try {
      const data = await sendContactMessage(values);
      setStatus("success");
      setValues(initialState);
      return { ok: true, data };
    } catch (error) {
      setStatus("error");
      return { ok: false, error };
    }
  };

  return {
    values,
    errors,
    status,
    setStatus,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
