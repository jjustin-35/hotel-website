import { FieldType } from "@/constants/types/global";

const data: FieldType[] = [
  {
    label: "姓名",
    name: "name",
    type: "text",
    placeholder: "請輸入姓名",
  },
  {
    label: "手機號碼",
    name: "phone",
    type: "tel",
    placeholder: "請輸入手機號碼",
  },
  {
    label: "生日",
    name: "birthday",
    type: "date",
    placeholder: "請選擇生日",
  },
  {
    label: "地址",
    name: "address",
    placeholder: "請輸入地址",
  },
];

export default data;
