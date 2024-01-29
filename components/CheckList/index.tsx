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

const CheckList = ({ data }: { data: string[] }) => {
  const rows = data.length / 5;
  const dataArray = data.reduce<string[][]>((acc, cur, idx) => {
    if (idx % 5 === 0) {
      acc = [...acc, [cur]];
    } else {
      const last = acc[acc.length - 1];
      acc[acc.length - 1] = [...last, cur];
    }
    return acc;
  }, []);
  return (
    <div className="check-list">
      {rows <= 5 && (
        <div className="check-list-row-single">
          {data.map((item, idx) => (
            <Item item={item} key={idx} />
          ))}
        </div>
      )}
      {rows > 5 &&
        dataArray.map((row, idx) => (
          <div className="check-list-row-multiple" key={idx}>
            {row.map((item, idx) => (
              <Item item={item} key={idx} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default CheckList;
