import { call, put } from "redux-saga/effects";
import {
  getCategoriesService,
  getCategoriesWiseProductService,
} from "./product.service";
import { saveCategories, saveProduct } from "../../product.slice";

export function* getCategoriesHandler() {
  try {
    let data = yield call(getCategoriesService);
    yield put(saveCategories(data));
  } catch (error) {
    alert("server error");
  }
}

export function* getCategoriesWiseProductHandler(action) {
  try {
    let data = yield call(getCategoriesWiseProductService, action.payload);
    yield put(saveProduct(data));
  } catch (error) {
    alert("server error");
  }
}
