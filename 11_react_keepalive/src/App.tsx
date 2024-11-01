import { createBrowserRouter, Link, RouterProvider, useLocation } from "react-router-dom"
import Home from "./view/Home";
import About from "./view/About";
import Counter from "./view/Counter";
import KeepAliveLayout, { KeepAliveContext, useKeepOutlet } from "./component/KeepAlive";
import { useContext } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  const element = useKeepOutlet();
  const { clearOutlet } = useContext(KeepAliveContext);

  return (
    <div>
      <Header></Header>
      <button onClick={() => clearOutlet!('/counter')}>delete keep-alive</button>
      <div>当前路由: {pathname}</div>
      {element}
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/counter'>Counter</Link>
    </div>
  )
}

const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/counter',
        element: <Counter />
      }
    ]
  }
]

function App() {

  return (
    <>
      <div>
        <h1>Keep-Alive In React.tsx</h1>
        <KeepAliveLayout keepPaths={[/\/counter/]}>
          <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
        </KeepAliveLayout>
      </div>
    </>
  )
}

export default App
