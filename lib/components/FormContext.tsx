import { createContext, useContext, useState } from "react";
import { FormInput, FormSchema, Input } from "../types";

type FormContextProps = {
  inputs: FormInput[];
  updateInput: (name: string, value: string) => void;
  onSubmit?: (data: Record<string, string>) => void;
};

type FormProviderProps = {
  children: React.ReactNode;
  schema: FormSchema;
  onSubmit?: (data: Record<string, string>) => void;
};

const setupInputs = (inputs: Input[]): FormInput[] =>
  inputs.map((i) => ({
    name: i.name,
    label: i.label || null,
    type: i.type || "text",
    placeholder: i.placeholder || null,
    value: i.value || "",
    rendered: false,
  }));

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({
  children,
  schema,
  onSubmit,
}: FormProviderProps) => {
  const [inputs, setInputs] = useState(setupInputs(schema.inputs));

  const updateInput = (name: string, value: string) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, value } : input
      )
    );
  };

  return (
    <FormContext.Provider value={{ inputs, updateInput, onSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
