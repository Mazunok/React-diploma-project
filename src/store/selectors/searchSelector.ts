import { RootState } from "store/store";

export const getSearch = (state: RootState) => state.persistedReducer.search;
