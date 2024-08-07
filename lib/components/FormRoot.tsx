import { useFormContext } from "./FormContext";
import { Input } from "./Input";

export function FormRoot() {
  const { inputs, onSubmit } = useFormContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!onSubmit) return;
    e.preventDefault();
    const data = inputs.reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {} as Record<string, string>);

    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input key={input.name} settings={input} />
      ))}
    </form>
  );
}
