type ContentInfoType = {
  title: string;
  isProvide: boolean;
};

export type RoomType = {
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
