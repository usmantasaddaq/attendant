export const Database = [
  {
    userid: "user1",
    pincode: "pass1",
    IsFlogIn: true,
    role: "user", 
  },
  {
    userid: "user2",
    pincode: "pass2",
    IsFlogIn: true,
    role: "Admin",
  },
];

const Data = {
  people: [
    { 
      name: "Nadeem",
      date: "11-12-22",
      timeIn: "0:00PM",
      timeOut: "0:00AM",
      availableH: "",
      averageH: "",
      totalH: "",
      onLeave: true,
    },
    {
        name: "Faisal",
        date: "11-12-22",
        timeIn: "0:00PM",
        timeOut: "0:00AM",
        availableH: "",
        averageH: "",
        totalH: "",
        onLeave: true,
      },
    {
      name: "Zohaib",
      date: "11-12-22",
      timeIn: "6:00PM",
      timeOut: "3:00AM",
      availableH: "2hours",
      averageH: "4",
      totalH: "8",
      onLeave: false,
    },
    {
        name: "Shoaib",
        date: "11-12-22",
        timeIn: "6:00PM",
        timeOut: "3:00AM",
        availableH: "2hours",
        averageH: "4",
        totalH: "8",
        onLeave: false,
      },
    {
      name: "Ahmed",
      date: "11-12-22",
      timeIn: "6:00PM",
      timeOut: "3:00AM",
      availableH: "4hours",
      averageH: "6",
      totalH: "8",
      onLeave: false,
    },
  ],
};
export default Data;
