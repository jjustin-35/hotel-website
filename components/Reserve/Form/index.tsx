import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

import "../style.scss";
import data from "./data";

const ReserveForm = () => {
  return (
    <section>
      <h2 className="h3 reserve-section-title">{data.title}</h2>
      <Form>
        {data.fields.map((field, idx) => (
          <Form.Group key={idx}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control {...field} />
          </Form.Group>
        ))}
      </Form>
    </section>
  );
};

export default ReserveForm;
