import { useState } from "react";
import { Control, useForm } from "react-hook-form";
import TextField from "@/components/Fields/text";
import "./style.scss";
import { isArrayExist } from "@/helpers/other";

interface InfoItemProps {
  title: string;
  subItems?: {
    title: string;
    key: string;
  }[];
  name: string;
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

const InfoItem = ({ title, subItems, name, info }: InfoItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(!info || !isArrayExist(info as string[]));
  const { control } = useForm({
    defaultValues: {
      [name]: "",
    },
  });
  return (
    <div className="d-flex justify-content-between align-items-end">
      <div className="d-flex gap-2 flex-column">
        <p className="fw-bold reserve-info-item-title">{title}</p>
        {isEdit ? (
          <Edit type="text" name={name} control={control} />
        ) : (
          <Content subItems={subItems} info={info} />
        )}
      </div>
      <a
        onClick={() => setIsEdit((prev) => !prev)}
        className="link-dark cursor-pointer text-decoration-underline"
      >
        {isEdit ? "完成" : "編輯"}
      </a>
    </div>
  );
};

export default InfoItem;
