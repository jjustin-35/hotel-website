import { Form } from "react-bootstrap";
import { Controller, Control } from "react-hook-form";
import { FieldType } from "@/constants/types/global";

const TextField = ({
  control,
  field,
}: {
  control: Control;
  field: FieldType;
}) => {
  const { label } = field;
  return (
    <Form.Group controlId={field.id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Controller
        name={field.name}
        control={control}
        render={({ field }) => (
          <Form.Control {...field} style={{ minWidth: "250px" }} />
        )}
      />
    </Form.Group>
  );
};

export default TextField;
