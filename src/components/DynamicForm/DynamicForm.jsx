import React, { useState } from "react";

const formFields = {
  name: {
    label: "What is your name?",
    type: "text",
    placeholder: "John Doe",
  },
  email: {
    label: "What is your email Address?",
    type: "email",
    placeholder: "john@example.com",
  },
  phone: {
    label: "What is your phone number?",
    type: "tel",
    placeholder: "+0177777777775555",
  },
  birthDay: {
    type: "date",
    label: "What is your birth day",
    placeholder: "01-1-2022",
  },
  age: {
    type: "number",
    label: "What is your Current Date?",
    placeholder: "29",
  },

  color: {
    label: "What is your favorite Color?",
    type: "color",
    placeholder: "Your Color",
  },
  password: {
    label: "Your Password",
    placeholder: "*************",
    type: "password",
  },
  confirmPassword: {
    label: "Confirm Your Password",
    type: "password",
    placeholder: "*************",
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };
    return acc;
  }, {});
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));

  //   const keys = Object.keys(obj);
  //   const arr = keys.map((key) => {
  //     return {
  //       name: key,
  //       type: formFields[key].type,
  //       label: formFields[key].label,
  //       placeholder: formFields[key].placeholder,
  //     };
  //   });
  //   return arr;

  //   console.log(arr);
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formFields));
  const formData = mapObjectToArray(formState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value;
      return acc;
    }, {});
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((item, index) => (
        <div key={index}>
          <label>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            id={index}
            placeholder={item.placeholder}
            value={item.value}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
