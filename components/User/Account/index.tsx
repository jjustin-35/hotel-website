import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserType } from "@/constants/types/user";
import TextField from "@/components/Fields/text";
import data from "./data";

const Account = ({ user }: { user: UserType }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  return (
    <Card className="padding-40 d-flex flex-column gap-40 bg-white rounded-3">
      <Card.Title className="fs-4">
        {isEdit ? "修改帳號資料" : "修改密碼"}
      </Card.Title>
      <div>
        <Card.Text className="fs-5 mb-2">電子信箱</Card.Text>
        <Card.Text className="fs-5">{user.email}</Card.Text>
      </div>
      {!isEdit && (
        <div className="d-flex justify-content-between">
          <div>
            <Card.Text className="fs-5 mb-2">密碼</Card.Text>
            <Card.Text className="fs-5">．．．．．．</Card.Text>
          </div>
          <a onClick={() => setIsEdit(true)}>重設</a>
        </div>
      )}
      {isEdit && (
        <div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            {data.map((field, idx) => (
              <TextField key={idx} control={control} field={field} />
            ))}
            <Button type="submit" className="btn btn-primary">
              儲存設定
            </Button>
          </form>
        </div>
      )}
    </Card>
  );
};

export default Account;
