import { Routes, Route } from "react-router-dom";
import  Header  from "./component/Header";
import HomePage from "./pages/HomePage";
import CredentialsListPage from "./pages/CredentialsListPage";
import AddCredentialPage from "./pages/AddCredentialPage";
import EditCredentialPage from "./pages/EditCredentialPage";

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/credentials" element={<CredentialsListPage/>}/>
          <Route path="/credentials/add" element={<AddCredentialPage/>}/>
          <Route path="/credentials/:id/edit" element={<EditCredentialPage/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      
    </>
  );
}

export default App;
