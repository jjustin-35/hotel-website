import { FormControlProps } from "react-bootstrap";

type FieldType = FormControlProps & {
  label: string;
  isAddress?: boolean;
};

type DataType = {
  title: string;
  fields: FieldType[];
};

const data: DataType = {
  title: "訂房人資訊",
  fields: [],
};

export default data;
