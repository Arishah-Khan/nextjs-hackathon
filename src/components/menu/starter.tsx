import Section from "./starter-card";

const cardsData = [
    {
      cardHeading: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      cardHeading: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
      optionalColor: "#ff9f0d"
    },
    {
      cardHeading: "Tormentoso Bush Pizza Pintoage",
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
  
  export default function Starter(){
    return (
      <Section
      mainImage="/images/starter1.png"
      pageTitle="Starter Menu"
      cards={cardsData}
      order={1}
      direction="justify-start"
    />
    
    );
}

  