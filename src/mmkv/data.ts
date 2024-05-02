/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

const date1: Date = new Date(2024, 2, 1); // 2024-03-01 00:00:00
const date2: Date = new Date(2023, 0, 1, 19, 24, 51); // 2023-03-01 19:24:51
const date3: Date = new Date('2022-03-01 19:24:51');
const date4: Date = new Date(2024, 4, 1);
const date5: Date = new Date(2024, 4, 2);

export const Data1 = [
  {title: 'title1', price: 'price1', onTime: date1},
  {title: 'title2', price: 'price2', onTime: date2},
  {title: 'title4', price: 'price4', onTime: date3},
  {title: 'title5', price: 'price4', onTime: date4},
  {title: 'title6', price: 'price4', onTime: date5},
  {title: 'title7', price: 'price4', onTime: date1},
  {title: 'title8', price: 'price4', onTime: date1},
  {title: 'title9', price: 'price4', onTime: date1},
  {title: 'title10', price: 'price4', onTime: date1},
];
