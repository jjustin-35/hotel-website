import Image from "next/image";
import "./style.scss";

const Item = ({ item }: { item: string }) => {
  return (
    <div className="d-flex gap-2">
      <Image
        src="/images/icon/ic-check.svg"
        alt="ic-check"
        width={24}
        height={24}
      />
      <p className="mb-0">{item}</p>
    </div>
  );
};

const CardChecklist = ({ data }: { data: string[] }) => {
  return (
    <div className="check-list check-list-row flex-wrap">
      {data.map((item, idx) => (
        <Item item={item} key={idx} />
      ))}
    </div>
  );
};

export default CardChecklist;
