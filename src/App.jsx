import { Routes, Route } from "react-router-dom"

import { Dashboard } from "./components/Dashboard"
import ErrorPage from "./Error"

function App() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />} errorElement={ErrorPage}>
      <Route
        path="messages"
        element={<>Dashboard messages</>}
      />
      <Route path="tasks" element={<>Dashboard tasks</>} />
    </Route>
  </Routes>
  )
}

export default App
