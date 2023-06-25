import { ReactNode } from "react";

import { LayoutWrapper } from "./styles";

type Props = {
  children: ReactNode;
};

export default function LayoutComponent({ children }: Props) {
  return (
    <LayoutWrapper>
      {/* <div className="layout-header">header</div> */}
      <div className="app-content">{children}</div>
      {/* <div className="layout-footer">footer</div> */}
    </LayoutWrapper>
  );
}
