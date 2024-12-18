import Section from "./starter-card";

const cardsData = [
    {
      cardHeading: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      cardHeading: "Cashew Chicken With Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
    },
    {
      cardHeading: " Vegetables & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      cardHeading: "Spicy Vegan Potato Curry",
      description: "ASpreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];
  
  export default function Course(){
    return (
      <Section
      mainImage="/images/starter2.png"
      pageTitle="Main Course"
      cards={cardsData}
      order={2}
      direction="justify-end"
    />
    
    );
}

  