import {formatDate} from "~/lib/utils";

export const sidebarItems = [
  {
    id: 1,
    icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+`,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItaWNvbiBsdWNpZGUtdXNlciI+PHBhdGggZD0iTTE5IDIxdi0yYTQgNCAwIDAgMC00LTRIOWE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=`,
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 3,
    icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZWUtcGFsbS1pY29uIGx1Y2lkZS10cmVlLXBhbG0iPjxwYXRoIGQ9Ik0xMyA4YzAtMi43Ni0yLjQ2LTUtNS41LTVTMiA1LjI0IDIgOGgybDEtMSAxIDFoNCIvPjxwYXRoIGQ9Ik0xMyA3LjE0QTUuODIgNS44MiAwIDAgMSAxNi41IDZjMy4wNCAwIDUuNSAyLjI0IDUuNSA1aC0zbC0xLTEtMSAxaC0zIi8+PHBhdGggZD0iTTUuODkgOS43MWMtMi4xNSAyLjE1LTIuMyA1LjQ3LS4zNSA3LjQzbDQuMjQtNC4yNS43LS43LjcxLS43MSAyLjEyLTIuMTJjLTEuOTUtMS45Ni01LjI3LTEuOC03LjQyLjM1Ii8+PHBhdGggZD0iTTExIDE1LjVjLjUgMi41LS4xNyA0LjUtMSA2LjVoNGMyLTUuNS0uNS0xMi0xLTE0Ii8+PC9zdmc+`,
    label: "Trek",
    href: "/trek",
  },
];

export const dashboardStats = {
  totalUsers: 140,
  usersJoined: { currentMonth: 17, lastMonth: 14},
  totalTreks: 237,
  treksCreated: { currentMonth: 13, lastMonth: 71},
  userRole: { total: 88, currentMonth: 13, lastMonth: 21}
}

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://static.wikia.nocookie.net/worldwrestlingentertainment2177/images/a/ad/John_Cena_2.png/revision/latest?cb=20230920001153",
    dateJoined: formatDate("2025-01-11"),
    itineraryCreated: 2,
    status: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "https://static.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_800x600_jane-margolis.jpg/revision/latest?cb=20200722114556",
    dateJoined: formatDate("2025-03-17"),
    itineraryCreated: 7,
    status: "user",
  },
  {
    id: 3,
    name: "Jack Smith",
    email: "jack.smith@example.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Raiden_Metal_Gear_Rising.webp/200px-Raiden_Metal_Gear_Rising.webp.png",
    dateJoined: formatDate("2025-07-23"),
    itineraryCreated: 14,
    status: "admin",
  },
];


export const allTreks = [
  {
    id: 1,
    name: "Eiffel Tower",
    imageUrls: ["https://images.pexels.com/photos/5101955/pexels-photo-5101955.jpeg"],
    itinerary: [{ location: "Paris" }],
    tags: ["Culture", "Architecture", "Photography"],
    travelStyle: "Guided Tour",
    entryTicketPrice: "$45",
    planeTicketPrice: "$850",
    estimatedPrice: "$895"
  },
  {
    id: 2,
    name: "Great Wall of China",
    imageUrls: ["https://images.pexels.com/photos/10363510/pexels-photo-10363510.jpeg"],
    itinerary: [{ location: "Beijing" }],
    tags: ["History", "Adventure", "Hiking"],
    travelStyle: "Group",
    entryTicketPrice: "$120",
    planeTicketPrice: "$900",
    estimatedPrice: "$1,020"
  },
  {
    id: 3,
    name: "Christ the Redeemer",
    imageUrls: ["https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg"],
    itinerary: [{ location: "Rio de Janeiro" }],
    tags: ["Landmark", "Spiritual", "Scenic"],
    travelStyle: "Guided Tour",
    entryTicketPrice: "$23",
    planeTicketPrice: "$950",
    estimatedPrice: "$973"
  },
  {
    id: 4,
    name: "Statue of Liberty",
    imageUrls: ["https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg"],
    itinerary: [{ location: "New York City" }],
    tags: ["Iconic", "Culture", "Views"],
    travelStyle: "Group",
    entryTicketPrice: "$25",
    planeTicketPrice: "$0",
    estimatedPrice: "$25"
  },
  {
    id: 5,
    name: "Colosseum",
    imageUrls: ["https://images.pexels.com/photos/851646/pexels-photo-851646.jpeg"],
    itinerary: [{ location: "Rome" }],
    tags: ["Ancient", "Architecture", "History"],
    travelStyle: "Guided Tour",
    entryTicketPrice: "$55",
    planeTicketPrice: "$875",
    estimatedPrice: "$930"
  },
  {
    id: 6,
    name: "Sydney Opera House",
    imageUrls: ["https://www.pexels.com/photo/sydney-opera-house-australia-1878293/"],
    itinerary: [{ location: "Sydney" }],
    tags: ["Culture", "Architecture", "Events"],
    travelStyle: "Solo",
    entryTicketPrice: "$29",
    planeTicketPrice: "$1,200",
    estimatedPrice: "$1,229"
  },
  {
    id: 7,
    name: "Taj Mahal",
    imageUrls: ["https://images.pexels.com/photos/3224533/pexels-photo-3224533.jpeg"],
    itinerary: [{ location: "Agra" }],
    tags: ["Romantic", "Heritage", "Photography"],
    travelStyle: "Guided Tour",
    entryTicketPrice: "$15",
    planeTicketPrice: "$1,100",
    estimatedPrice: "$1,115"
  },
  {
    id: 8,
    name: "Santorini Caldera",
    imageUrls: ["https://images.pexels.com/photos/17919743/pexels-photo-17919743.jpeg"],
    itinerary: [{ location: "Santorini" }],
    tags: ["Scenic", "Relaxation", "Culture"],
    travelStyle: "Group",
    entryTicketPrice: "$38",
    planeTicketPrice: "$900",
    estimatedPrice: "$938"
  },
  {
    id: 9,
    name: "Machu Picchu",
    imageUrls: ["https://images.pexels.com/photos/11064169/pexels-photo-11064169.jpeg"],
    itinerary: [{ location: "Cusco" }],
    tags: ["Adventure", "Hiking", "Mystery"],
    travelStyle: "Guided Tour",
    entryTicketPrice: "$45",
    planeTicketPrice: "$1,000",
    estimatedPrice: "$1,045"
  },
  {
    id: 10,
    name: "Big Ben",
    imageUrls: ["https://images.pexels.com/photos/635611/pexels-photo-635611.jpeg"],
    itinerary: [{ location: "London" }],
    tags: ["Historical", "Architecture", "Iconic"],
    travelStyle: "Solo",
    entryTicketPrice: "$45",
    planeTicketPrice: "$850",
    estimatedPrice: "$895"
  }
];