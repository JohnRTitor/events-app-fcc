import { ReactNode } from "react";
import { CommonFooter } from "../footer/footer";
import { CommonHeader } from "../header/header";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <CommonHeader />
      <main>{children}</main>
      <CommonFooter />
    </>
  );
}

export default MainLayout;
