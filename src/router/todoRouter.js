import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      Element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "",
      Element: <Navigate replace to="/todo/list" />,
    },
    {
      path: "read/:tno",
      Element: (
        <Suspense fallback={Loading}>
          <TodoRead />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
