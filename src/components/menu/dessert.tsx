import Section from "./starter-card";

const cardsData = [
    {
      cardHeading: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      cardHeading: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
    },
    {
      cardHeading: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      cardHeading: "Pain au chocolate",
      description: "ASpreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];
  
  export default function Dessert(){
    return (
      <Section
      mainImage="/images/starter3.png"
      pageTitle="Dessert"
      cards={cardsData}
      order={1}
      direction="justify-start"
    />
    
    );
}

  