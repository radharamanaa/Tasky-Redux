import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../../app/InitialState";

export const taskSlice = createSlice({
  name: "task",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setState: (state, action) => action.payload,
    addTask: (state, action) => {
      let newTask = action.payload;
      newTask.categories.forEach(
        (item) => (item.name = item.name.toLocaleLowerCase())
      );
      let duplicateTask = state.tasks.find(
        (item) =>
          item.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      );
      if (duplicateTask) {
        duplicateTask = { ...duplicateTask, newTask };
      } else {
        state.tasks.push(action.payload);
      }
      state.isModalOpen = false;
      makeAllCatsVisible();
      makeCatsUnique();
    },
    editTask: (state, action) => {
      makeAllCatsVisible();
      let tasks = state.tasks;
      action.payload.categories.forEach(
        (item) => (item.name = item.name.toLocaleLowerCase())
      );
      state.taskUnderEdit = tasks.find((item) => item.title === action.payload);
      state.isModalOpen = true;
      makeCatsUnique();
    },
    saveEditedTask: (state, action) => {
      action.payload.categories.forEach(
        (item) => (item.name = item.name.toLocaleLowerCase())
      );
      let duplicateTask = state.tasks.find(
        (item) =>
          item.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      );
      duplicateTask = { ...duplicateTask, ...action.payload };
      state.isModalOpen = false;
      state.taskUnderEdit = null;
      this.makeCatsUnique();
    },
    searchInTasks: (state, action) => {
      console.log(action.payload, "is the payload");
      state.tasks.forEach((item) => {
        if (
          item.title.toLocaleLowerCase().includes(action.payload) ||
          item.desc.toLocaleLowerCase().includes(action.payload)
        ) {
          item.isVisible = true;
          item.searchString = action.payload;
        } else {
          item.isVisible = false;
          item.searchString = null;
        }
      });
      //make categories invisible for which there are no tasks
    },
    clearSearch: (state) => {
      state.tasks.forEach((item) => (item.isVisible = true));
      state.searchString = null;
    },
    filterByCategory: (state, action) => {
      let tasks = state.tasks;
      tasks.forEach((item) => {
        if (
          !item.categories.find(
            (catItem) => catItem.name.toLocaleLowerCase() === action.payload
          )
        ) {
          item.isVisible = false;
        }
      });
      tasks.forEach((item) => {
        if (
          item.categories.find(
            (catItem) => catItem.name.toLocaleLowerCase() === action.payload
          )
        ) {
          item.isVisible = true;
        }
      });
      state.tasks = tasks;
    },

    openModalForNewTask: (state) => {
      state.isModalOpen = true;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    makeCatsUnique: (state) => {
      let cats = new Set();
      state.tasks.forEach((element) => {
        element.categories.forEach((item) => cats.add(item));
      });
      let newCatsArr = [];
      cats.forEach((item) => newCatsArr.push({ name: item, isVisible: true }));
      state.categories = newCatsArr;
    },
    makeAllCatsVisible: (state) => {
      state.categories.forEach((item) => (item.isVisible = true));
    },
    makeAllTasksVisible: (state) => {
      state.tasks.forEach((element) => {
        element.isVisible = true;
      });
    },
  },
});

export const {
  setState,
  addTask,
  editTask,
  saveEditedTask,
  searchInTasks,
  clearSearch,
  filterByCategory,
  openModalForNewTask,
  toggleModal,
  makeCatsUnique,
  makeAllCatsVisible,
  makeAllTasksVisible,
} = taskSlice.actions;

export default taskSlice.reducer;
