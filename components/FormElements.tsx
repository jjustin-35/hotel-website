import { FC } from "react";
interface InputObj {
  id: string;
  labelText: string;
  register: any;
  type: string;
  errors?: Record<string, any>;
  rules?: Object;
  placeholder: string;
  action: any;
}
export const Input: FC<InputObj> = ({
  id,
  labelText,
  register,
  type,
  errors,
  rules,
  placeholder,
  action,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`form-label text-white ${
          !!labelText ? "d-block" : "d-none"
        }`}
      >
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        className={`form-control rounded ${errors?.[id] && "is-invalid"}`}
        {...register(id, rules)}
        placeholder={placeholder}
        onChange={action}
      />
      {errors?.[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </>
  );
};

interface CheckboxRadioObj {
  id: string;
  labelText: string;
  register: any; // You may need to replace 'any' with the correct type for the register function
  type: string;
  errors: Record<string, any>; // You may need to replace 'any' with the correct type for errors
  rules?: Object; // You may need to replace 'Object' with the correct type for rules
  value: string;
  name: string;
  click?: any;
}

export const CheckboxRadio: FC<CheckboxRadioObj> = ({
  click,
  id,
  labelText,
  register,
  type,
  errors,
  rules,
  value,
  name,
}) => {
  return (
    <>
      <div className="form-check me-3">
        <input
          className={`form-check-input ${errors[name] && "is-invalid"}`}
          type={type}
          name={name}
          id={id}
          value={value}
          {...register(name, rules)}
          onClick={click}
        />
        {/* Radio 使用 Name 欄位 */}
        <label className="form-check-label text-white" htmlFor={id}>
          {labelText}
        </label>
        {errors[name] && (
          <div className="invalid-feedback">{errors[name]?.message}</div>
        )}
      </div>
    </>
  );
};
