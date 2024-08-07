import { FormProps } from "../types";
import { FormProvider } from "./FormContext";
import { FormRoot } from "./FormRoot";

export function Form({ children, schema, onSubmit }: FormProps) {
  if (!schema.inputs) {
    throw new Error("Form schema must contain inputs");
  }

  return (
    <FormProvider schema={schema} onSubmit={onSubmit}>
      <FormRoot />
      {children}
    </FormProvider>
  );
}
