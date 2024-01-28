import { FormControlProps } from "react-bootstrap";

export type ImageType = {
  src: string;
  alt: string;
};

export type ButtonType = {
  text: string;
  link: string;
};

export type FieldType = FormControlProps & {
  label: string;
};
