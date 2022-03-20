import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getDateTimeStringCompatibleForInputField,
} from "../../app/InitialState";
import TaskTitle from "../Tasks/Task/TaskTitle";
import ErrorDiv from "./ErrorDiv";
import ReactDOM from "react-dom";
import {
  addTask,
  saveEditedTask,
  toggleModal,
} from "../slices/Tasks/taskSlice";
import SingleCategory from "../Sidebar/SingleCategory";
import Category from "../Tasks/Category";

function Modal() {
  const taskTitleRef = useRef();
  const taskDescRef = useRef();
  const categoriesRef = useRef();
  const taskDueDateRef = useRef();
  const isFavoriteRef = useRef();
  const catsArr = useSelector(getCategories);
  const [tempCats, setTempCats] = useState([]);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const catError = { titleE: "Please select/type a Category" };
  function submit(e) {
    e.preventDefault();
    if (taskTitleRef.current.value.length < 3 && tempCats.length == 0) {
      setError(catError);
      return;
    }
    if (taskDueDateRef.current.value === "") {
      setError({ dueDate: "Please select a Due Date" });
      return;
    }
    function makeCatObj(item) {
      return { name: item, isVisible: true };
    }
    let task = {};
    task.title = taskTitleRef.current.value;
    task.desc = taskDescRef.current.value;
    task.categories = tempCats.map((item) => makeCatObj(item));
    if (categoriesRef.current.value.length < 3 && task.categories.length == 0) {
      setError(catError);
      return;
    }
    if (categoriesRef.current.value.length != 0) {
      task.categories.push(makeCatObj(categoriesRef.current.value));
    }
    if (!task.categories.length) {
      setError(catError);
    }
    task.isFavorite = e.currentTarget[4].value === "on";
    task.searchString = null;
    task.isVisible = true;
    task.dueDate = e.currentTarget[3].value;
    // task.desc = console.log(e, task);
    setTempCats([]);
    document.getElementById("form").reset();
    clearDateErr();
    dispatch(addTask(task));
  }
  const isVisible = useSelector((state) => state.task.isModalOpen);
  let classes = "modal fixed h-screen w-screen z-10 bg-slate-600/40";
  if (!isVisible) {
    classes += " hidden";
  } else {
    classes += " flex";
  }
  function exitModal(e) {
    setTempCats([]);
    clearDateErr();
    dispatch(toggleModal());
  }
  function saveCat(e) {
    console.log(categoriesRef.current.value, "cats ref");
    if (categoriesRef.current.value.length > 3) {
      let val = categoriesRef.current.value;
      setTempCats((prev) => {
        if (!prev.find((item) => item === val)) {
          console.log(val, prev);
          return [...prev, val];
        } else return prev;
      });
      categoriesRef.current.value = "";
    }
  }
  function catNameToObj(name) {
    let obj = { name: name };
    return <Category category={obj} />;
  }
  function getMinTime() {
    let date = new Date();
    return getDateTimeStringCompatibleForInputField(date);
  }
  function clearDateErr() {
    setError({});
  }
  return (
    <div className={classes}>
      <div className="flex mx-auto top-0 bottom-0 right-0 left-0 m-4 h-3/4 w-3/4 justify-center">
        <form onSubmit={submit} id="form">
          <div className="flex flex-col sm:w-96 bg-slate-100 w-full p-4 rounded-lg">
            <h1 className="text-2xl text-center text-slate-700 mb-4 underline-offset-2 decoration-slate-600 underline">
              Add a Task
            </h1>
            <div>
              <input
                className="p-2 my-2 focus:outline-none border-x border-y self-stretch border-slate-200 rounded-lg text-sm w-full"
                list="cats"
                type={"text"}
                ref={categoriesRef}
                multiple
                placeholder="Select or type a Category"
                onClick={saveCat}
              />
              <div className="add-cats my-2" onClick={saveCat}>
                {tempCats.map((item) => catNameToObj(item))}
              </div>
              <datalist id="cats">
                {catsArr.map((item) => (
                  <option className="capitalize" value={item.name} />
                ))}
              </datalist>
            </div>
            <div>
              <input
                className="p-2 my-2 focus:outline-none border-x border-y self-stretch border-slate-200 rounded-lg text-sm w-full"
                type={"text"}
                ref={taskTitleRef}
                required
                minLength={8}
                placeholder="Task title"
              />
            </div>
            <ErrorDiv errorText={error.titleE} />

            <div>
              <textarea
                placeholder="Task Desc"
                className="p-2 my-2 focus:outline-none border-x border-y self-stretch border-slate-200 rounded-lg text-sm w-full"
                maxLength={50}
                ref={taskDescRef}
              />
            </div>
            <div>
              <input
                className="p-2 my-2 focus:outline-none border-x border-y self-stretch border-slate-200 rounded-lg text-sm w-full"
                type={"datetime-local"}
                ref={taskDueDateRef}
                placeholder="Select Date time"
                // min={getMinTime()}
                onChange={clearDateErr}
              />
              <ErrorDiv errorText={error.dueDate} />
            </div>
            <div className="flex justify-around p-2 align-middle my-2">
              <h3 className="inline-block p-2 text-slate-700 font-semibold">
                Favorite?
              </h3>
              <input
                className="self-center justify-self-start w-4 h-4 inline-block p-2 m-2 justify-center"
                type={"checkbox"}
                ref={isFavoriteRef}
              />
            </div>
            <div className="flex p-1 mb-2">
              <div className="flex-1 text-center justify-center rounded-xl flex bg-slate-300 text-gray-800 m-2">
                <button
                  className="p-2 rounded-xl"
                  type="reset"
                  onClick={exitModal}
                >
                  Cancel
                </button>
              </div>
              <div className="flex-1 text-center justify-center m-2 hover:bg-indigo-500 cancel-wrapper rounded-xl flex bg-indigo-700 text-gray-100">
                <button type="Submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
