import { Category } from "@/app/[slug]/api/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoryState = {
  category: Category[];
};

const initialState: CategoryState = Object.freeze({
  category: [],
});

export const categorySlice = createSlice({
  name: "toastSlice",
  initialState,
  reducers: {
    saveCategory: (_, action: PayloadAction<Category[]>) => ({
      category: action.payload,
    }),
  },
});

export const categoryReducer = categorySlice.reducer;

export const { saveCategory } = categorySlice.actions;
