// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.jpg";
import img02 from "../all-images/cars-img/offer-toyota.jpg";
import img03 from "../all-images/cars-img/bmw-offe.jpeg";
import img04 from "../all-images/cars-img/nissan-offers.jpg";
import img05 from "../all-images/cars-img/offer-toyotas.jpeg";
import img06 from "../all-images/cars-img/mercedes-offer.jpg";


const carData = [
  {
    id: 1,
    rating: 112,
    carName: "Walk In",
    imgUrl: img01,
    time: "Daily",
    price: '2,500/Day',
    speed: "Complimentary water & coffee",
    gps: "Internet Access",
    seatType: "Discounts on meeting room bookings on the day",
    description:
      "Suitable for the infrequent workspace user without the need for a contract.",
  },

  {
    id: 2,
    brand: "Discounts on board room & training room bookings",
    rating: 102,
    carName: "Premium Plan",
    imgUrl: img02,
    time: "Dedicated Desk",
    price: '35,000/Month',
    speed: "Complimentary water & coffee",
    gps: "Board room access (1Hr/week)",
    seatType: "Business address in the heart of Lagos",
    automatic: "Mail handling",
    description:
      "A dedicated desk available to use 5 days a week (Monday - Friday)",
  },

  {
    id: 3,
    brand: "Fully air-conditioned office for 4",
    rating: 132,
    carName: "Private Office",
    imgUrl: img03,
    time: "Monthly",
    price: '99,000/Month',
    speed: "Complimentary water & coffee",
    gps: "Internet access",
    seatType: "Board room access 2Hrs/week & discounts on board and training room bookings",
    automatic: "Mail handling",
    description:
      "Suitable for small businesses and startups with teams of up to 4",
  },

  {
    id: 4,
    brand: "Complimentary water & coffee",
    rating: 102,
    carName: "Board Room Meeting Room",
    imgUrl: img04,
    time: "Seats up to 15",
    price: '6,000/Hour',
    speed: "White Board",
    gps: "Projector",
    seatType: "Internet access*",
    automatic: "Fully air-conditioned office ",
    description:
      "Starting at N6,000/Hour. Social distancing rules require reduction of capacity to 15",
  },

  {
    id: 5,
    brand: "Business address in the heart of Lagos",
    rating: 94,
    carName: "Virtual Plan: Virtual Address",
    imgUrl: img05,
    time: " Get Professional",
    price: '10,750/Month',
    speed: "Mail handling",
    gps: "Internet access",
    seatType: "Well Air conditioned",
    automatic: "Meeting room discounts",
    description:
      "This plan is suitable for a mobile freelancer or start up needing a professional office address",
  },

  {
    id: 6,
    brand: "Business address in the heart of Lagos",
    rating: 119,
    carName: "Virtual Plan: Virtual Plus Plan",
    imgUrl: img06,
    time: "For the occasional office user",
    price: '26,857/Month',
    speed: "Mail handling",
    gps: "Internet access",
    seatType: "Well Air conditioned",
    automatic: "Meeting room discounts",
    description:
      "Suitable for a mobile freelancer or entreprenuer needing a workspace once in a while",
  },
  // {
  //   id: 9,
  //   brand: "Business address in the heart of Lagos",
  //   rating: 119,
  //   carName: "Virtual Plan: Virtual Value Plan",
  //   imgUrl: img06,
  //   time: "For the occasional office user",
  //   price: '26,857/Month',
  //   speed: "Mail handling",
  //   gps: "Internet access",
  //   seatType: "Well Air conditioned",
  //   automatic: "Meeting room discounts",
  //   description:
  //     "Suitable for a mobile freelancer or entreprenuer needing a workspace once in a while",
  // },
  // {
  //   id: 8,
  //   brand: "Business address in the heart of Lagos",
  //   rating: 119,
  //   carName: "The Grinder",
  //   imgUrl: img06,
  //   time: "For the occasional office user",
  //   price: '26,857/Month',
  //   speed: "Mail handling",
  //   gps: "Internet access",
  //   seatType: "Well Air conditioned",
  //   automatic: "Meeting room discounts",
  //   description:
  //     "Suitable for a mobile freelancer or entreprenuer needing a workspace once in a while",
  // },
  // {
  //   id: 7,
  //   brand: "Business address in the heart of Lagos",
  //   rating: 119,
  //   carName: "Flex Boss",
  //   imgUrl: img06,
  //   time: "For the occasional office user",
  //   price: '26,857/Month',
  //   speed: "Mail handling",
  //   gps: "Internet access",
  //   seatType: "Well Air conditioned",
  //   automatic: "Meeting room discounts",
  //   description:
  //     "Suitable for a mobile freelancer or entreprenuer needing a workspace once in a while",
  // },

];

export default carData;
