import React from "react";

const IndexPage = (props) => {
  React.useEffect(() => {
    const token = localStorage.getItem("C_Token");
    console.log(token);
    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");  ///that link is not working as 
      //  well (if there is any other alternative please let me know)
    }
    // eslint-disable-next-line
  }, [0]);
  return <div></div>;
};

export default IndexPage;