import { RoomType } from "./room";

type UserInfoType = {
  address: {
    zipcode: number;
    detail: string;
  };
  name: string;
  phone: string;
  email: string;
};

export type OrderType = {
  userInfo: UserInfoType;
  _id: string;
  roomId: RoomType;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  orderUserId: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};

export type ReserveOrderType = {
  roomId: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  userInfo: UserInfoType;
}
