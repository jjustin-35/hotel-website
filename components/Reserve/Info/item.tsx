import { useState } from "react";
import { Control, useForm } from "react-hook-form";
import { OptionType } from "@/constants/types/global";
import { RoomType } from "@/constants/types/room";
import { isArrayExist } from "@/helpers/other";
import TextField from "@/components/Fields/text";
import Select from "@/components/Fields/select";
import "./style.scss";

interface InfoItemProps {
  title: string;
  subItems?: {
    title: string;
    key: string;
  }[];
  name: string;
  info: string | number | string[];
  infoOptions?: RoomType[];
}

const Edit = ({
  type,
  name,
  control,
  options,
}: {
  type: string;
  name: string;
  options?: OptionType[];
  control: Control;
}) => {
  if (type === "select") {
    return (
      <Select
        control={control}
        field={{ name, type }}
        options={options}
      />
    );
  }
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

const InfoItem = ({ title, subItems, name, info, infoOptions }: InfoItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(!info || !isArrayExist(info as string[]));
  const { control } = useForm({
    defaultValues: {
      [name]: "",
    },
  });

  const type = (() => {
    if (name === 'room') return "select";
    if (name === 'peopleNum') return "number";
    return "text";
  })();
  return (
    <div className="d-flex justify-content-between align-items-end">
      <div className="d-flex gap-2 flex-column">
        <p className="fw-bold reserve-info-item-title">{title}</p>
        {isEdit ? (
          <Edit type={type} name={name} control={control} />
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
