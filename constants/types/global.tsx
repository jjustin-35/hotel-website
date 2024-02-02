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
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export type OptionType = {
  value: string;
  key: string;
};
