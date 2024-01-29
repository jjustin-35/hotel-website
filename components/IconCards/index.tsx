import { ImageType } from "@/constants/types/global";

interface CardProps {
  icon: ImageType;
  text: string;
}

const Card = ({ icon, text }: CardProps) => {
  return (
    <div className="d-flex flex-column gap-2 bg-white rounded-2">
      <img src={icon.src} alt={icon.alt} />
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
