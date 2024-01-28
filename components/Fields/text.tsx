import { Form } from "react-bootstrap";
import { FieldType } from "@/constants/types/global";

const TextField = ({ field }: { field: FieldType }) => {
  return (
    <Form.Group>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control {...field} />
    </Form.Group>
  );
};

export default TextField;
