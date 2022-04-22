import React from "react";
import {View, Text} from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../../redux/reducers";
import StackNavigation from "./stackNavigation";

export default function index() {
    return(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <StackNavigation />
  </Provider>
    )
}