import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LoginLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className="bg-black">
      <div className="row row-cols-lg-2 row-cols-1 g-0">
        <div className="col d-none d-lg-flex">
          <img
            src="/images/桌機版/register.png"
            className="w-100 object-cover"
            alt=""
          />
        </div>
        <div className="col l_login">{children}</div>
      </div>
    </section>
  );
};

export default LoginLayout;
