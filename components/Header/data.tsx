import type {
  ImageType,
  ButtonType,
  HeaderVariant,
} from "@/constants/types/global";

type MenuType = {
  text: string;
  link: string;
};

type HeaderType = {
  brand: ImageType;
  menu: MenuType[];
  button: ButtonType;
};

type DataType = Record<HeaderVariant, HeaderType>;

const data: DataType = {
  anonymous: {
    brand: {
      src: "/images/common/hotel-logo.svg",
      alt: "img-hotel-logo",
    },
    menu: [
      {
        text: "客房旅宿",
        link: "/all-rooms",
      },
      {
        text: "會員登入",
        link: "/auth/signin",
      },
    ],
    button: {
      text: "立即註冊",
      link: "/auth/signup",
    },
  },
  user: {
    brand: {
      src: "/images/common/hotel-logo.svg",
      alt: "img-hotel-logo",
    },
    menu: [
      {
        text: "客房旅宿",
        link: "/all-rooms",
      },
    ],
    button: {
      text: "立即訂房",
      link: "/all-rooms",
    },
  },
};

export default data;
