const data = {
  title: "訂房資訊",
  items: [
    {
      title: "選擇房型",
      key: "room",
    },
    {
      title: "訂房日期",
      key: "date",
      subItems: [
        {
          title: "入住",
          key: "checkInDate",
        },
        {
          title: "退房",
          key: "checkOutDate",
        },
      ]
    },
    {
      title: "房客人數",
      key: "peopleNum",
    },
  ],
};

export default data;
