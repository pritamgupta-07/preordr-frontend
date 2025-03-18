const data = [
  {
    url: "https://placehold.co/1200x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1201x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1202x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1203x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1204x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1205x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1206x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1207x800/909a90/FFFFFF/png",
  },
  {
    url: "https://placehold.co/1208x800/909a90/FFFFFF/png",
  },
];

const hotelFacilities = [
  {
    name: "Wifi",
    isAvailiable: true,
  },
  {
    name: "Indoor Seating",
    isAvailiable: true,
  },
  {
    name: "Takeaway availiable",
    isAvailiable: true,
  },
  {
    name: "Family Friendly",
    isAvailiable: true,
  },
  {
    name: "Deserts and Bakes",
    isAvailiable: false,
  },
]

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
    time: "3 days ago",
    description:
      "Great experience! The hotel was clean, and the staff was very friendly. The location is perfect for exploring the city.",
    helpful: 12,
    comments: 3,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    time: "1 week ago",
    description:
      "Absolutely loved my stay here. The room was spacious, and the view was breathtaking. Highly recommend!",
    helpful: 8,
    comments: 1,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 3.5,
    time: "2 weeks ago",
    description:
      "The hotel was decent, but the Wi-Fi was a bit slow. Otherwise, everything was good.",
    helpful: 5,
    comments: 0,
  },
];

export { data, hotelFacilities, reviews };
