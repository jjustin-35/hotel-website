import { Form } from "react-bootstrap";
import { FieldType } from "@/constants/types/global";

const TextField = (props: FieldType) => {
  const { label } = props;
  return (
    <Form.Group controlId={props.id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} />
    </Form.Group>
  );
};

export default TextField;
