const initialState = {
  categoryToFilterby: null,
  searchString: null,
  isModalOpen: false,
  taskUnderEdit: null,
  categories: [
    { name: "Shopping", isVisible: true },
    { name: "General", isVisible: true },
  ],
  tasks: [
    {
      title: "Buy Vegetables for cooking",
      desc: "Need to make food for children",
      dueDate: new Date().toDateString(),
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
export function ifSingleAddLeadingZero(data) {
  data = "" + data;
  if (data.length === 1) {
    return "0" + data;
  } else {
    return data;
  }
}
