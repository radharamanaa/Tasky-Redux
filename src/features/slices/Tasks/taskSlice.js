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
      action.payload.title = action.payload.title.trim();
      action.payload.categories.forEach(
        (item) => (item.name = item.name.toLocaleLowerCase().trim())
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
        for (const taskCategory of newTask.categories) {
          if (
            !state.categories.find(
              (item) =>
                taskCategory.name.toLocaleLowerCase() ===
                item.name.toLocaleLowerCase()
            )
          ) {
            state.categories.push(taskCategory);
          }
        }
      }
      state.isModalOpen = false;
      makeCatsUnique();
      makeAllCatsVisible();
    },
    editTask: (state, action) => {
      let tasks = state.tasks;
      state.taskUnderEdit = tasks.find((item) => item.title === action.payload);
      state.isModalOpen = true;
    },
    saveEditedTask: (state, action) => {
      action.payload.categories.forEach(
        (item) => (item.name = item.name.toLocaleLowerCase())
      );
      let duplicateTask = state.tasks.find(
        (item) =>
          item.title.toLocaleLowerCase() ===
          action.payload.prevTaskTitle.toLocaleLowerCase()
      );
      const newTask = action.payload;
      duplicateTask.title = newTask.title;
      duplicateTask.desc = newTask.desc;
      duplicateTask.categories = newTask.categories;
      duplicateTask.dueDate = newTask.dueDate;
      duplicateTask.isFavorite = newTask.isFavorite;
      // duplicateTask = { ...duplicateTask, ...action.payload };
      let catsSet = new Set();
      state.tasks.forEach((item) =>
        item.categories.forEach((item2) =>
          catsSet.add(item2.name.toLocaleLowerCase())
        )
      );
      state.categories = Array.from(catsSet).map((item) => {
        return { name: item, isVisible: true };
      });
      state.isModalOpen = false;
      state.taskUnderEdit = null;
    },
    searchInTasks: (state, action) => {
      state.tasks.forEach((item) => {
        if (
          item.title
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase()) ||
          item.desc
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
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
      makeAllCatsVisible();
    },
    filterByCategory: (state, action) => {
      state.categories.forEach((item) => {
        if (
          item.name.toLocaleLowerCase() !== action.payload.toLocaleLowerCase()
        ) {
          item.isVisible = false;
        }
      });

      let tasks = state.tasks;
      for (const iterator of tasks) {
        if (
          iterator.categories.find(
            (item) =>
              item.name.toLocaleLowerCase() ===
              action.payload.toLocaleLowerCase()
          )
        ) {
          iterator.isVisible = true;
        } else {
          iterator.isVisible = false;
        }
      }
      state.isFilterCategoryOn = true;
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
    makeAllVisible: (state) => {
      state.categories.forEach((item) => (item.isVisible = true));
      state.tasks.forEach((item) =>
        item.categories.forEach((item2) => (item2.isVisible = true))
      );
      state.isFilterCategoryOn = false;
    },
    makeAllTasksVisible: (state) => {
      state.tasks.forEach((element) => {
        element.isVisible = true;
      });
    },
    cancelEditTask: (state) => {
      state.taskUnderEdit = null;
    },
    deleteTask: (state, action) => {
      let arr = state.tasks;
      let taskToDelete = null;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === action.payload.title) {
          taskToDelete = arr[i];
          arr.splice(i, 1);
          i--;
          break;
        }
      }
      let sett = new Set();
      //find all unique categories from all remaining tasks
      for (const task of state.tasks) {
        task.categories.forEach((item) =>
          sett.add(item.name.toLocaleLowerCase())
        );
      }

      let deleteCatsSet = new Set();
      //if deletedtask categories are not found
      //in remaining tasks put in delete arr to delete
      for (const category of action.payload.categories) {
        if (!sett.has(category.name.toLocaleLowerCase())) {
          deleteCatsSet.add(category.name.toLocaleLowerCase());
        }
      }
      state.categories = state.categories.filter(
        (item) => !deleteCatsSet.has(item.name.toLocaleLowerCase())
      );
      console.log(state.categories);
    },
    clearIntroModal: (state, action) => {
      state.isIntroDone = true;
      return state;
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
  makeAllVisible: makeAllCatsVisible,
  makeAllTasksVisible,
  cancelEditTask,
  deleteTask,
  clearIntroModal,
} = taskSlice.actions;

export default taskSlice.reducer;
