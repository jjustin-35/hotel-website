export type UserType = {
  address: {
    zipcode: number;
    detail: string;
    city: string;
    county: string;
  };
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type UpdateUserType = {
  userId: string;
  name: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
  oldPassword: string;
  newPassword: string;
};
