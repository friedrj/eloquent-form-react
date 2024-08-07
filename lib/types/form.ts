export type FormProps = {
  children?: React.ReactNode;
  schema: FormSchema;
  onSubmit: (data: Record<string, string>) => void;
};

export type Input = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
};

export type FormSchema = {
  inputs: Input[];
};

export type FormInput = {
  name: string;
  label: string | null;
  type: string;
  placeholder: string | null;
  value: string;
  rendered: boolean;
};
