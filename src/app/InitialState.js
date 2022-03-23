const initialState = {
  categoryToFilterby: null,
  searchString: null,
  isModalOpen: false,
  taskUnderEdit: null,
  isFilterCategoryOn: false,
  categories: [
    { name: "Shopping", isVisible: true },
    { name: "General", isVisible: true },
  ],
  tasks: [
    {
      title: "Buy Vegetables for cooking",
      desc: "Need to make food for children",
      dueDate: "2018-06-14T08:45",
      isFavorite: false,
      categories: [
        { name: "shopping", isVisible: true },
        { name: "general", isVisible: true },
      ],
      searchString: null,
      isVisible: true,
    },
  ],
};
export default initialState;
export const getCategories = (state) => state.task.categories;
export const getFilterState = (state) => state.task.isFilterCategoryOn;
export const getTasks = (state) => state.task.tasks;
export const getDateTimeStringCompatibleForInputField = (dateObj) => {
  let yr =
    dateObj.getFullYear() +
    "-" +
    (dateObj.getMonth() + 1) +
    "-" +
    ifSingleAddLeadingZero(dateObj.getDate()) +
    "T" +
    ifSingleAddLeadingZero(dateObj.getHours()) +
    ":" +
    ifSingleAddLeadingZero(dateObj.getMinutes());
  return yr;
};
export const dateStringToObj = (dateString) => dateString + ":00";
export function convertStringtoDate(dueDate) {
  console.log(dateStringToObj(dueDate));
  const dt = new Date(dateStringToObj(dueDate));
  return (
    dt.toDateString() +
    " " +
    ifSingleAddLeadingZero(dt.getHours()) +
    ":" +
    ifSingleAddLeadingZero(dt.getMinutes())
  );
}
export function ifSingleAddLeadingZero(data) {
  data = "" + data;
  if (data.length === 1) {
    return "0" + data;
  } else {
    return data;
  }
}
