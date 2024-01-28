type UserInfoType = {
  address: {
    zipcode: number;
    detail: string;
  };
  name: string;
  phone: string;
  email: string;
};

type ContentInfoType = {
  title: string;
  isProvide: boolean;
};

type RoomInfoType = {
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  layoutInfo: ContentInfoType[];
  facilityInfo: ContentInfoType[];
  amenityInfo: ContentInfoType[];
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type OrderType = {
  userInfo: UserInfoType;
  _id: string;
  roomId: RoomInfoType;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  orderUserId: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};
