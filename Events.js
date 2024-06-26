import artevent from './src/assets/art-event.jpg'
import artevent2 from './src/assets/art-event-2.jpg'
import trip from './src/assets/trip.jpg'
import shoehine from './src/assets/shoeshine.jpg'
import basic from './src/assets/basic.jpg'
import beforeandafter from './src/assets/beforeandafter.jpg'
import bagdonation from './src/assets/bagdonation.jpg'
import graduation from './src/assets/graduation.jpg'
const Events =[
  {
    id: 1,
    img:artevent,
    topic:"Art Night",
    desc:"One of many art events organized at Global Hotel on Janurary 21, 2020",
    imgs:[artevent, artevent2,trip],
  },
  {
    id: 2,
    img:artevent2,
    topic:"first sign language led art event in Ethiopia",
    desc:"Using sign language, On May 5 2022, Askal organized the first ever art event for the hearing-impared in Ethiopia"
  },
  {
    id: 3,
    img:beforeandafter,
    topic:"Shoe Swap for Children",
    desc:"On the year 2021, Askal contributed hundreds of shoes to children in need with worn-out footwear."
  },
  {
    id: 4,
    img:shoehine,
    topic:"Shoe Cleaning Fundraiser",
    desc:`On the year 2019, with the motto, "We knelt down, so the future can stand tall," we cleaned shoes for fundraising`
  },
  {
    id: 5,
    img:basic,
    topic:"Food Donation",
    desc:"Throughout the COVID-19 Pandemic, we provided food assistance to 150 families"
  },
  {
    id: 6,
    img:trip,
    topic:"Educational Trip for Children",
    desc:"Askal coordinated educational trips for children we instructed during the summer of 2019"
  },
  {
    id: 7,
    img:graduation,
    topic:"Summer School Graduation",
    desc:"In 2019, Askal celebrated the graduation of students we instructed during the summer at Nefas Silk College"
  },
  {
    id: 8,
    img:bagdonation,
    topic:"School bags for Children",
    desc:"In 2023, Askal hand-knitted school bags to donate to students in need"
  },

]
export default Events;