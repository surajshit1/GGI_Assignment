import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Form from "./components/Form";
import CountDisplay from "./components/CountDisplay";

function App() {
  return (
    <div className="h-screen w-full">
        <Navbar />
        <Landingpage />
        <div className="max-w-3xl mx-auto pt-14">
          <h1 className="text-4xl  flex items-center justify-center p-5 ">WE WILL CONTACT SOON</h1>
        <Form></Form>
        <CountDisplay></CountDisplay>
      </div>
    </div>
  );
}

export default App;
