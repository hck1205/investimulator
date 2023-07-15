import axios from "axios";
import { EXTERNAL_API_BASE_URL } from "@/constpack";

export type TCoinInfo = {
  english_name: string;
  korean_name: string;
  market: string;
};

export type TCoinList = TCoinInfo[];

const getAllMarket = async (): Promise<TCoinList> => {
  const { data } = await axios({
    url: `${EXTERNAL_API_BASE_URL.UPBIT}/market/all`,
    method: "get",
  });

  return data;
};

export default getAllMarket;
