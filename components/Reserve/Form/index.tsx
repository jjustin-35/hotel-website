import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TextField from "@/components/Fields/text";
import AddressFields from "@/components/Fields/address";

import "../style.scss";
import data from "./data";

const ReserveForm = () => {
  const { control } = useForm();

  return (
    <section className="reserve-section">
      <div className="d-flex justify-content-between align-items-center reserve-section-title">
        <h2 className="h3 mb-0">{data.title}</h2>
        <a className="link-primary cursor-pointer text-decoration-underline">
          {data.importText}
        </a>
      </div>
      <Form className="d-flex flex-column gap-4">
        {data.fields.map((field, idx) =>
          field.name === "address" ? (
            <AddressFields key={idx} control={control} field={field} />
          ) : (
            <TextField key={idx} control={control} field={field} />
          )
        )}
      </Form>
    </section>
  );
};

export default ReserveForm;
