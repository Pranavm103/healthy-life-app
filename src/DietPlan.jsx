import React from 'react';
import './DietPlan.css';

const dietData = [
  {
    day: "Day 1",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "Two Methi ki Missi roti with Green chutney or sabzi",
    brunch: "Cabbage, Carrot and Lettuce Salad",
    lunch: "Gavarfali ki sukhi sabzi with Curd, Two Chapatis, Salad",
    snacks: "Mixed Sprouts Salad",
    dinner: "Bajra, Whole Moong and Green Pea Khichri with Salad"
  },
  {
    day: "Day 2",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "Masala Wheat Dosa with chutney",
    brunch: "Chick Pea Salad",
    lunch: "Masoor Daal with Kaddu Palak ki Roti (wow), Salad",
    snacks: "Spinach Toast",
    dinner: "Barley Vegetable Soup"
  },
  {
    day: "Day 3",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "One Omelet (Egg white)",
    brunch: "Fruit Salad (Papaya, Guava)",
    lunch: "Gavarfali ki sukhi sabzi with Curd, Two Chapati, Salad",
    snacks: "Oats and Poha Chivda",
    dinner: "Gehun ki Bikaneri Khichri with Salad"
  },
  {
    day: "Day 4",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "One Chana Daal Pancakes with Green Chutney",
    brunch: "Moong Daal Sprouted Salad",
    lunch: "Chana Daal with Cucumber, Two Chapati, Butter Milk",
    snacks: "Club Sandwich",
    dinner: "Lettuce and Cauliflower Soup"
  },
  {
    day: "Day 5",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "Two Bajra aur Kaddu ki Roti with Green chutney or sabzi",
    brunch: "Cabbage, Carrot and Lettuce Salad",
    lunch: "Masala Karela with curd, Two Chapati, Salad",
    snacks: "Mixed Sprouts Open Toast",
    dinner: "Buckwheat, Moong and Vegetable Khichri with Salad"
  },
  {
    day: "Day 6",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "One Moong daal and Paneer cheela with Green chutney",
    brunch: "Fruit Salad (Papaya, Guava)",
    lunch: "Palak Toovar Daal, Two Multigrain Chapati, Butter milk",
    snacks: "Mooli ka Salad",
    dinner: "Minty Vegetable and Oats Soup"
  },
  {
    day: "Day 7",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "Two Kaddu Palak ki Roti with Green chutney",
    brunch: "Chick Pea Salad",
    lunch: "Methi Moong Daal Sabzi with Salad, Two Chapatis, Butter milk",
    snacks: "Oats Upma",
    dinner: "Oats Khichri"
  },
  {
    day: "Day 8",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "One Stuffed Roti (Paneer) with Green chutney",
    brunch: "Moong Daal Sprouted Salad",
    lunch: "Mushrooms and Green Peas Curry with Salad, Two Multigrains Roti",
    snacks: "Mixed Sprouts Salad",
    dinner: "Moong Daal Soup with One Chapati, Salad"
  },
  {
    day: "Day 9",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "One Buckwheat Pancake with Green chutney",
    brunch: "Chick Pea Salad",
    lunch: "Arhar Daal with Salad, Two Bajra aur Kaddu ki Roti, Butter milk",
    snacks: "Spinach Toast",
    dinner: "Green Pea and Corn Soup"
  },
  {
    day: "Day 10",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "Rava Upma with or without Green chutney",
    brunch: "Cabbage, Carrot and Lettuce Salad",
    lunch: "Palak Baby Corn Sabzi with Curd, Two Chapati, Salad",
    snacks: "Oats and Poha Chivda",
    dinner: "Whole Wheat and Green Moong Khichri with Salad"
  },
  {
    day: "Day 11",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "One Stuffed Roti/Green Peas with Green chutney",
    brunch: "Fruit Salad (Papaya, Guava)",
    lunch: "Moong Daal with Curd, Two Methi Roti",
    snacks: "Club Sandwich",
    dinner: "Mushroom Soup"
  },
  {
    day: "Day 12",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "Rava Idli with Sambhar",
    brunch: "Masoor Daal Sprouted Salad",
    lunch: "Pudhina Gobhi with Salad, Two Chapati, Salad",
    snacks: "Mixed Sprouts Open Toast",
    dinner: "Moong Daal and Oats Khichri with Salad"
  },
  {
    day: "Day 13",
    earlyMorning: "Karela Juice 10 ml + Amla Juice 10 ml",
    breakfast: "Two Cauliflower Methi Roti with Green Chutney",
    brunch: "Moong Daal Sprouted Salad",
    lunch: "Palak Chana Daal with Curd, Two Chapati, Salad",
    snacks: "Mooli ki Salad",
    dinner: "Barley Soup"
  },
  {
    day: "Day 14",
    earlyMorning: "Aloevera Juice 15ml",
    breakfast: "Two Bajra aur Kaddu ki Roti with Green chutney or sabzi",
    brunch: "Chick Pea Salad",
    lunch: "Palak Toovar Daal, Two Multigrain Chapati, Butter milk",
    snacks: "Oats Upma",
    dinner: "Minty Vegetable and Oats Soup"
  },
];

const DietPlan = () => {
  return (
    <div className="diet-container">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Early Morning</th>
            <th>Breakfast</th>
            <th>Brunch</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {dietData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.earlyMorning}</td>
              <td>{item.breakfast}</td>
              <td>{item.brunch}</td>
              <td>{item.lunch}</td>
              <td>{item.snacks}</td>
              <td>{item.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DietPlan;
