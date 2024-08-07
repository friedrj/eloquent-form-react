import { FormInput } from "../types";
import { useFormContext } from "./FormContext";

export function Input({ settings }: { settings: FormInput }) {
  const { updateInput } = useFormContext();

  return (
    <div>
      <input
        name={settings.name}
        type={settings.type}
        placeholder={settings.placeholder || undefined}
        value={settings.value}
        onChange={(e) => updateInput(settings.name, e.target.value)}
      />
    </div>
  );
}
