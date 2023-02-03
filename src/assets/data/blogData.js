// import images from all-images/blog-img directory
import img02 from "../all-images/cars-img/ooffer-toyota.png";

import img001 from "../all-images/cars-img/img001.png";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";




const blogData = [
  
  {
    
    id: 1,
    title: "Blockchain — The Backend Evolution Powering Web3",
    author: "Ajibade",
    date: "12 April, 2022",
    time: "12pm",
    imgUrl: img02,
    description:   'blog1',
    descriptionA:   <Blog1 />,
    descriptionB:   "The Blockchain is a distributed network of computers called nodes that maintains a continuously growing list of information called data in batches called....",


  },

  {
    id: 2,
    title: "Understanding Web3.0",
    author: "Bolatito",
    date: "18 Sep, 2022",
    time: "8pm",
    imgUrl: img001,
    description: "blog2",
    descriptionA:   <Blog2 />,
    descriptionB: "Web 3.0 will be based on open source technology (blockchain), also called distributed ledger technology (DLT), which means anyone can see and verify data...."

  },

];

export default blogData;
