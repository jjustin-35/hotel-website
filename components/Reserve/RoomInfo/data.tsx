import { ImageType } from "@/constants/types/global";

type InfoType = {
  title: string;
  key: string;
};

type MultiInfoType = {
  title: string;
  items: { key: string; icon: ImageType }[];
};

type DataType = {
  title: string;
  basicInfo: MultiInfoType;
  layoutInfo: InfoType;
  facilityInfo: InfoType;
  amenityInfo: InfoType;
};

const data: DataType = {
  title: "房間資訊",
  basicInfo: {
    title: "房型基本資訊",
    items: [
      {
        key: "areaInfo",
        icon: {
          src: "/images/icon/ic_Size.svg",
          alt: "area",
        },
      },
      {
        key: "bedInfo",
        icon: {
          src: "/images/icon/ic_Bed.svg",
          alt: "bed",
        },
      },
      {
        key: "maxPeople",
        icon: {
          src: "/images/icon/ic_Person.svg",
          alt: "people",
        },
      },
    ],
  },

  layoutInfo: {
    title: "房間格局",
    key: "layoutInfo",
  },

  facilityInfo: {
    title: "房內設備",
    key: "facilityInfo",
  },

  amenityInfo: {
    title: "備品提供",
    key: "amenityInfo",
  },
};

export default data;