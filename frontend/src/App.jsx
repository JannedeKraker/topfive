import Header from "./components/header/Header";
import ImageCard from "./components/image/ImageCard";

export default function App() {
  return (
    <div>
      <Header
        title="Top five largest seaturtles"
        buttonLeft="Home"
        buttonMiddle="About me"
        buttonRigth="Contact"
      />
      <ImageCard
        imageSrc="./images/TurtleOne.jpg"
        title="1: Leatherback Sea Turtle"
        text="The leatherback sea turtle (Dermochelys coriacea), sometimes called the lute turtle, leathery turtle or simply the luth, is the largest of all living turtles and the heaviest non-crocodilian reptile, reaching lengths of up to 1.8 metres (5 ft 11 in) and weights of 500 kilograms"
      />

      <ImageCard
        imageSrc="./images/TurtleThree.jpg"
        title="2: Loggerhead Sea Turtle"
        text="is a species of oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm (35 in) in carapace length when fully grown. The adult loggerhead sea turtle weighs approximately 135 kg (298 lb), with the largest specimens weighing in at more than 450 kg (1,000 lb)."
      />
      <ImageCard
        imageSrc="./images/TurtleTwo.jpg"
        title="3: Green Sea Turtle"
        text="The average weight of mature individuals is 68–190 kg (150–419 lb) and the average carapace length is 78–112 cm (31–44 in).[26] Exceptional specimens can weigh 315 kg (694 lb) or even more, with the largest known C. mydas having weighed 395 kg (871 lb) and measured 153 cm (60 in) in carapace length"
      />
      <ImageCard
        imageSrc="./images/TurtleFive.jpg"
        title="4: Hawksbill Sea Turtle"
        text="Adult hawksbill sea turtles typically grow to 1 m (3 ft) in length, weighing around 80 kg (180 lb) on average. The heaviest hawksbill ever captured weighed 127 kg (280 lb)."
      />
      <ImageCard
        imageSrc="./images/TurtleFour.jpg"
        title="5: Flatback Sea Turtle"
        text="This turtle gets its common name from the fact that its shell has a flattened or lower dome than the other sea turtles. It can be olive green to grey with a cream underside. It averages from 76 to 96 cm (30 to 38 inches) in carapace length and can weigh from 70 to 90 kg (154 to 198 lb)."
      />
    </div>
  );
}
