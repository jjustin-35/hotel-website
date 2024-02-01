import { FieldType } from "@/constants/types/global";

const data: FieldType[] = [
  {
    label: "密碼",
    name: "password",
    type: "password",
    placeholder: "請輸入密碼",
  },
  {
    label: "新密碼",
    name: "newPassword",
    type: "password",
    placeholder: "請輸入新密碼",
  },
  {
    label: "確認新密碼",
    name: "confirmPassword",
    type: "password",
    placeholder: "請再次輸入新密碼",
  },
];

export default data;
