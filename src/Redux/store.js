import { configureStore } from "@reduxjs/toolkit";
import {
  contactReducer,
  selectedContactReducer,
} from "./Reducers/ContactReducer";

const store = configureStore({
  reducer: {
    allContacts: contactReducer,
    setSelectedContacts: selectedContactReducer,
  },
});

export default store;
