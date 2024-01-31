import Header from "@/components/Header";
import ReserveSucc from "@/components/ReserveSucc";
import fetchApi from "@/helpers/apiHelper";
import { apiMethod } from "@/constants/types/api";
import config from "@/config";
import apiPaths from "@/constants/apis";

const ReserveSuccPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // if (!searchParams?.id) return null;
  const order = await fetchApi(
    `${config.API_URL}${apiPaths.orders}/${searchParams.id}`,
    apiMethod.GET
  );
  return (
    <main className="page page-bg-dark overflow-hidden">
      <Header />
      <ReserveSucc order={order} />
      <img src="/images/common/Line.svg" alt="img-line-bg" />
    </main>
  );
};

export default ReserveSuccPage;
