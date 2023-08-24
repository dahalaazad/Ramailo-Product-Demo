import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ramailoApi} from '../utils';

const initialState = {
  loading: false,
  error: null,
  products: {},
  currentProduct: {},
};

export const getProductList = createAsyncThunk(
  'product/getProductList',
  async (_, {rejectWithValue}) => {
    try {
      const productResponse = await ramailoApi.get('products');
      return productResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      return {...state, currentProduct: action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductList.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.products = payload?.data?.products || {};
      })
      .addCase(getProductList.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {setCurrentProduct} = productSlice.actions;

export default productSlice.reducer;
