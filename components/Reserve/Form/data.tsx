import { FormControlProps } from "react-bootstrap";
import { FieldType } from "@/constants/types/global";

type DataType = {
  title: string;
  importText: string;
  fields: FieldType[];
};

const data: DataType = {
  title: "訂房人資訊",
  importText: "匯入會員資料",
  fields: [
    {
      name: "name",
      type: "text",
      label: "姓名",
      placeholder: "請輸入姓名",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      label: "手機號碼",
      placeholder: "請輸入手機號碼",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "電子信箱",
      placeholder: "請輸入電子信箱",
      required: true,
    },
    {
      name: "address",
      label: "地址",
      required: true,
    },
  ],
};

export default data;
