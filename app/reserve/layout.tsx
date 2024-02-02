import Header from "@/components/Header";

const ReservePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ReservePageLayout;
