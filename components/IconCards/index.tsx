import Image from "next/image";

import { ImageType } from "@/constants/types/global";
import './style.scss';

interface CardProps {
  icon: ImageType;
  text: string;
}

const Card = ({ icon, text }: CardProps) => {
  return (
    <div className="d-flex flex-column gap-2 bg-white rounded-2 icon-card">
      <Image src={icon.src} alt={icon.alt} width={24} height={24} />
      <p className="mb-0">{text}</p>
    </div>
  );
};

const IconCards = ({ data }: { data: CardProps[] }) => {
  return (
    <div className="d-flex gap-2">
      {data.map((item, idx) => (
        <Card key={idx} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};

export default IconCards;
