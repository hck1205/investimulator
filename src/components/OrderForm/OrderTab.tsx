import { useState } from "react";
import { Radio, Tabs } from "antd";

import type { RadioChangeEvent } from "antd";
import * as S from "./OrderTab.styled";

function OrderTab() {
  return (
    <S.OrderTabWrapper>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={"large"}
        items={[
          {
            label: `Card Tab 1`,
            key: "매도",
            children: `Content of card tab 1`,
          },
          {
            label: `Card Tab 2`,
            key: "매수",
            children: `Content of card tab 2`,
          },
        ]}
      />
    </S.OrderTabWrapper>
  );
}

export default OrderTab;
