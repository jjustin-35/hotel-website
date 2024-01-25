'use client';

import { SSRProvider } from "react-bootstrap";

const BootstrapSSRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SSRProvider>{children}</SSRProvider>;
};

export default BootstrapSSRProvider;
