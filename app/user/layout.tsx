import Header from "@/components/Header";

const UserPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="page page-bg-dark overflow-hidden">
      <Header />
      {children}
      <img src="/images/common/Line.svg" alt="img-line-bg" />
    </main>
  );
};

export default UserPageLayout;
