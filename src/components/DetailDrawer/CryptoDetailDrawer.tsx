import { useAtom } from "jotai";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { useCryptoDetailDrawerOpenAtom } from "@/atoms/cryptoDetailDrawerOpenAtom";

import TickerDetail from "../TickerTransactionDetail";
import Orderbook from "../Orderbook/Orderbook";
import Title from "./Title";

import { CloseIconWrapper, ContentWrapper } from "./CryptoDetailDrawer.styled";
import OrderTab from "../OrderForm/OrderTab";

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
        <CloseIconWrapper onClick={onClose}>
          <CloseOutlined />
        </CloseIconWrapper>
      }
    >
      <ContentWrapper>
        <TickerDetail />
        <Orderbook />
        <OrderTab />
      </ContentWrapper>
    </Drawer>
  );
}

export default CryptoDetailDrawer;
