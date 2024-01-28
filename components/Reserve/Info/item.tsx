import { useState } from "react";
import { Control, useForm } from "react-hook-form";
import TextField from "@/components/Fields/text";
import "./style.scss";

interface InfoItemProps {
  title: string;
  subItems?: {
    title: string;
    key: string;
  }[];
  key: string;
  info: string | number | string[];
}

const Edit = ({
  type,
  name,
  control,
}: {
  type: string;
  name: string;
  control: Control;
}) => {
  return <TextField control={control} field={{ name, type }} />;
};

const Content = ({
  subItems,
  info,
}: {
  subItems?: InfoItemProps["subItems"];
  info: InfoItemProps["info"];
}) => {
  const isInfoArray = Array.isArray(info);
  return (
    <>
      {subItems &&
        isInfoArray &&
        subItems.map((item, idx) => (
          <p key={item.key}>{`${item.title}: ${info[idx]}`}</p>
        ))}
      {!isInfoArray && <p>{info}</p>}
    </>
  );
};

const InfoItem = ({ title, subItems, key, info }: InfoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { control } = useForm({
    defaultValues: {
        [key]: "",
    }
  });
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex gap-2 flex-column">
        <p className="fw-bold reserve-info-item-title">{title}</p>
        {isEdit ? (
          <Edit type="text" name={key} control={control} />
        ) : (
          <Content subItems={subItems} info={info} />
        )}
      </div>
      <a onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? "完成" : "編輯"}
      </a>
    </div>
  );
};

export default InfoItem;
