import request from "utils/request";
import { PagesEntity, PriceRequest } from 'modal/types'

/**
 * price
 * @param 
 * @returns 
 */
export const getPriceList = (params: { chainId: string,  page: number, pageSize: number }) => {
  return request<PagesEntity<PriceRequest[]>>({
      url: `/priceFeed/list`,
      method: "GET",
      params,
  });
}