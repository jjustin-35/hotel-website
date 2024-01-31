import Image from "next/image";

const SuccMessage = ({ memberName }: { memberName: string }) => {
  return (
    <section className="reserve-section font-white d-flex flex-column gap-40">
      <div className="d-flex gap-40 align-items-center">
        <Image
          src="/images/icon/ic_succ.svg"
          alt="ic-succ"
          width={40}
          height={40}
        />
        <h1>
          {`恭喜， ${memberName}!`}
          <br />
          您已預約成功
        </h1>
      </div>
      <p className="mb-0">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
    </section>
  );
};

export default SuccMessage;
