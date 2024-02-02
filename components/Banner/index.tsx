import Image from "next/image";
import { Container } from "react-bootstrap";

const Banner = ({ name }: { name: string }) => {
  return (
    <Container>
      <div className="d-flex gap-4 align-items-center h-100">
        <Image src="/images/user/avatar.svg" alt="ic-avatar" width={72} height={72} sizes="(min-width: 768px) 144px, 144px" />
        <h1 className="font-white">{`Hello, ${name}`}</h1>
      </div>
    </Container>
  );
};

export default Banner;
