import React, { ChangeEvent, useState } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputProps: InputProps = {
    type: "text",
    onChange: handleChange,
  };

  return (
    <input {...inputProps} value={value} />
  );
}