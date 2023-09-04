import { useQuery } from "react-query";
import { getMerchantDetail } from "@/app/[slug]/api/api";
import { useAppDispatch } from "@/hooks/useStore";
import { saveMerchant } from "@/store/slices/merchant-slice";

export function useGetMerchantDetail(id: string) {
  const dispatch = useAppDispatch();
  const query = useQuery("merchant", () => getMerchantDetail(id), {
    onSuccess: (data) => {
      dispatch(saveMerchant(data));
    },
  });
  return query;
}
