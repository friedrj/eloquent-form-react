import { Form } from "../lib";
import { FormSchema } from "../lib/types";

function App() {
  const schema = {
    inputs: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
  } as FormSchema;

  function onSubmit(data: Record<string, string>) {
    console.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={onSubmit}></Form>
    </>
  );
}

export default App;
