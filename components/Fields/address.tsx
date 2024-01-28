import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import type { FieldType } from "@/constants/types/global";
import TextField from "./text";
import addressData from "../../public/address.json";

const address = addressData;

const AddressFields = (props: FieldType) => {
  const [city, setCity] = useState(null);

  const defaultOption = "請選擇";
  const cities = Object.keys(address);
  const districts = city ? Object.keys(address[city]) : [];

  const { label, ...restFieldOpts } = props;

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div className="d-flex flex-column gap-3">
      <p>{label}</p>
      <Row>
        <Form.Group as={Col} controlId="city">
          <Form.Select defaultValue={defaultOption} onChange={handleCityChange}>
            <option value={null}>{defaultOption}</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="district">
          <Form.Select defaultValue={defaultOption}>
            <option value={null}>{defaultOption}</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>
      <TextField {...restFieldOpts} />
    </div>
  );
};

export default AddressFields;
