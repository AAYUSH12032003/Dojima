import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{height: '80vh'}}>
      <h1>Welcome to the Dojima Network Assignment</h1>
     <span>For navigating to the first task : <Link to="/taskone">go to task one</Link></span><br />
     <span>For navigating to the second task :<Link to="/tasktwo">go to task two</Link></span> <br />
     <span>For navigating to the third task :<Link to="/taskthree">go to task three</Link></span>
    </div>
  );
}

export default Home;
