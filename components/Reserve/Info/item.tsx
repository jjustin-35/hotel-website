import "./style.scss";

interface InfoItemProps {
  title: string;
  subItems?: {
    title: string;
    key: string;
  }[];
  info: string | number | string[];
}

const InfoItem = ({ title, subItems, info }: InfoItemProps) => {
    const isInfoArray = Array.isArray(info);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex gap-2 flex-column">
        <p className="fw-bold reserve-info-item-title">{title}</p>
        {subItems && isInfoArray && subItems.map((item, idx) => (
          <p key={item.key}>{`${item.title}: ${info[idx]}`}</p>
        ))}
        {!isInfoArray && <p>{info}</p>};
      </div>
      <a>編輯</a>
    </div>
  );
};

export default InfoItem;
