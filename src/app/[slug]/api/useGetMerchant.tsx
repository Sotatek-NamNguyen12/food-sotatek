import { useQuery } from "react-query";
import { getMerchantData } from "@/app/[slug]/api/api";
import { useAppDispatch } from "@/hooks/useStore";
import { saveCategory } from "@/store/slices/category-slice";

export function useGetMerchant() {
  const dispatch = useAppDispatch();
  const query = useQuery("merchant", getMerchantData, {
    onSuccess: (data) => {
      dispatch(saveCategory(data.merchant.menu.categories));
    },
  });
  return query;
}
