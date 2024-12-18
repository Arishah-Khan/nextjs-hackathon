import Section from "./starter-card";

const cardsData = [
    {
      cardHeading: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      cardHeading: "Aperol Spritz Capacianno",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
    },
    {
      cardHeading: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      cardHeading: "Tormentoso BushTea Pintoage",
      description: "ASpreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];
  
  export default function Drink(){
    return (
      <Section
      mainImage="/images/starter4.png"
      pageTitle="Drinks"
      cards={cardsData}
      order={2}
      direction="justify-end"
    />
    
    );
}

  