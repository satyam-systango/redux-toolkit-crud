import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TodosService from "../services/todos.service";
const initialState = [];
export const createTodos = createAsyncThunk(
  "todos/create",
  async ({ title, description }) => {
    const res = await TodosService.create({ title, description });
    return res.data;
  }
);

export const retrieveTodo = createAsyncThunk(
  "todos/retrieve",
  async (id) => {
    const res = await TodosService.get(id);
    return res.data;
  }
);
export const retrieveTodos = createAsyncThunk(
  "todos/retrieveAll",
  async () => {
    const res = await TodosService.getAll();
    return res.data;
  }
);
export const updateTodos = createAsyncThunk(
  "todos/update",
  async ({ id, data }) => {
    const res = await TodosService.update(id, data);
    return res.data;
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id) => {
    await TodosService.delete(id);
    return { id };
  }
);
export const deleteAllTodos = createAsyncThunk(
  "todos/deleteAll",
  async () => {
    const res = await TodosService.deleteAll();
    return res.data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [createTodos.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveTodos.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [retrieveTodo.fulfilled]: (state, action) => {
      return {...action.payload};
    },
    [updateTodos.fulfilled]: (state, action) => {
      const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteTodo.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllTodos.fulfilled]: (state, action) => {
      return [];
    }
  },
});
const { reducer } = todoSlice;
export default reducer