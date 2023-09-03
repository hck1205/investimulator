import { useAtom } from "jotai";
import { Button, Drawer, Space } from "antd";

import { useCryptoDetailDrawerOpenAtom } from "@/atoms/cryptoDetailDrawerOpenAtom";

import TickerDetail from "../TickerTransactionDetail/TickerTransactionDetail";
import Orderbook from "../Orderbook/Orderbook";
import Title from "./Title";

import { CloseIconWrapper, ContentWrapper } from "./CryptoDetailDrawer.styled";
import { CloseOutlined } from "@ant-design/icons";

function CryptoDetailDrawer() {
  const [open, setOpen] = useAtom(useCryptoDetailDrawerOpenAtom);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title={<Title />}
      placement="right"
      size={"large"}
      onClose={onClose}
      open={open}
      closable={false}
      extra={
        <CloseIconWrapper>
          <CloseOutlined />
        </CloseIconWrapper>
      }
    >
      <ContentWrapper>
        <TickerDetail />
        <Orderbook />
      </ContentWrapper>
    </Drawer>
  );
}

export default CryptoDetailDrawer;
