export const URL = "https://mathtask.herokuapp.com";
export const columnsForHomeTables = [
  {
    dataField: "title",
    headerStyle: {
      backgroundColor: "#7a7a7a",
      sort: true,
    },
    headerAlign: "center",
    text: "📑",
  },
  {
    dataField: "taskTopic",
    headerStyle: {
      backgroundColor: "#7a7a7a",
    },
    headerAlign: "center",
    text: "📋",
  },
  {
    dataField: "username",
    headerStyle: {
      backgroundColor: "#7a7a7a",
    },
    headerAlign: "center",
    text: "🧑",
  },
  {
    dataField: "average",
    headerStyle: {
      backgroundColor: "#7a7a7a",
    },
    headerAlign: "center",
    text: "⭐",
  },
];

export const UserColumns = [
  { dataField: "id", text: "🆔", headerAlign: "center" },
  { dataField: "email", text: "📧", headerAlign: "center" },
  { dataField: "username", text: "🧑", headerAlign: "center" },
  { dataField: "role", text: "👩🏻‍💻", headerAlign: "center" },
];

export const TaskInitialValues = {
  title: "",
  taskTopic: "",
  taskCondition: "",
  answer1: "",
  answer2: "",
  answer3: "",
};
export const UserEditInitialValues = {
  id: "",
  newusername: "",
  email: "",
};
export const UserRoleInitialValues = {
  id: "",
  role: "",
};
export const Topics = ["Математика", "JavaScript", "Физика", "C#", "Node.JS"];
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
};
export const setLoginInfo = (data) => {
  localStorage.setItem("accessToken", data.token);
  localStorage.setItem("userId", data.id);
  localStorage.setItem("username", data.username);
  localStorage.setItem("role", data.role);
};
