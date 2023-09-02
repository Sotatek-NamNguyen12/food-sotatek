import { fakeData } from "@/app/[slug]/api/fakeData";
import { MerchantResponse } from "@/app/[slug]/api/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MerchantResponse = Object.freeze(fakeData);

export const merChantSlice = createSlice({
  name: "merchantSlice",
  initialState,
  reducers: {
    saveMerchant: (_, action: PayloadAction<MerchantResponse>) => ({
      ...action.payload,
    }),
  },
});

export const merchantReducer = merChantSlice.reducer;

export const { saveMerchant } = merChantSlice.actions;
