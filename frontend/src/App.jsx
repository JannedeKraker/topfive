import Header from "./components/header/Header";
import Image from "./components/image/image";
export default function App() {
  return (
    <div>
      <Header
        title="Janne's learning app"
        buttonLeft="Home"
        buttonMiddle="About me"
        buttonRigth="Contact"
      />
      <Image
        imageSrc="https://via.placeholder.com/300"
        title="This is the title for the first image"
        text="Cool image he"
      />
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
    </div>
  );
}
