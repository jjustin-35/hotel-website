import { Form } from "react-bootstrap";
import { Control, Controller } from "react-hook-form";
import { FieldType } from "@/constants/types/global";
import { OptionType } from "@/constants/types/global";
import { isArrayExist } from "@/helpers/other";

const Select = ({
  control,
  field,
  options,
}: {
  control: Control;
  field: FieldType;
  options?: OptionType[];
}) => {
  const { label } = field;
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Controller
        control={control}
        name={field.name}
        render={({ field }) => (
          <Form.Select {...field} style={{minWidth: '250px'}}>
            <option value={""}>請選擇</option>
            {isArrayExist(options) &&
              options?.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.value}
                </option>
              ))}
          </Form.Select>
        )}
      />
    </Form.Group>
  );
};

export default Select;
