import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { Row, Col, Form } from "react-bootstrap";

import type { FieldType } from "@/constants/types/global";
import TextField from "./text";
import addressData from "../../public/address.json";

const address = addressData;

const AddressFields = ({
  control,
  field,
}: {
  control: Control;
  field: FieldType;
}) => {
  const [city, setCity] = useState<string>(null);

  const defaultOption = "請選擇";
  const cities = Object.keys(address);
  const districts = city && address[city] ? Object.keys(address[city]) : [];

  const { label, ...restFieldOpts } = field;

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div className="d-flex flex-column gap-3">
      <p className="mb-0">{label}</p>
      <Row>
        <Form.Group as={Col} controlId="city">
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                defaultValue={defaultOption}
                onChange={handleCityChange}
              >
                <option value={null}>{defaultOption}</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="district">
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Form.Select {...field} defaultValue={defaultOption}>
                <option value={null}>{defaultOption}</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Form.Group>
      </Row>
      <TextField control={control} field={restFieldOpts} />
    </div>
  );
};

export default AddressFields;
