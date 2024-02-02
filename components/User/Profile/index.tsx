import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserType } from "@/constants/types/user";
import TextField from "@/components/Fields/text";
import data from "./data";
import AddressFields from "@/components/Fields/address";

const Profile = ({ user }: { user: UserType }) => {
  const { address } = user;
  const adrressString = `${address.county}${address.city}${address.detail}`;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();

  return (
    <Card className="padding-40 d-flex flex-column gap-40 bg-white rounded-3">
      <Card.Title className="fs-4">基本資料</Card.Title>
      {!isEdit && (
        <>
          <div>
            <Card.Text className="fs-5 mb-2">姓名</Card.Text>
            <Card.Text className="fs-5">{user.name}</Card.Text>
          </div>
          <div>
            <Card.Text className="fs-5 mb-2">手機號碼</Card.Text>
            <Card.Text className="fs-5">{user.phone}</Card.Text>
          </div>
          <div>
            <Card.Text className="fs-5 mb-2">生日</Card.Text>
            <Card.Text className="fs-5">{user.birthday}</Card.Text>
          </div>
          <div>
            <Card.Text className="fs-5 mb-2">地址</Card.Text>
            <Card.Text className="fs-5">{adrressString}</Card.Text>
          </div>
          <Button
            className="btn btn-primary-outline"
            onClick={() => setIsEdit(true)}
          >
            編輯
          </Button>
        </>
      )}
      {isEdit && (
        <div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            {data.map((field, idx) =>
              field.name === "address" ? (
                <AddressFields key={idx} field={field} control={control} />
              ) : (
                <TextField key={idx} control={control} field={field} />
              )
            )}
            <Button type="submit" className="btn btn-primary">
              儲存設定
            </Button>
          </form>
        </div>
      )}
    </Card>
  );
};

export default Profile;
