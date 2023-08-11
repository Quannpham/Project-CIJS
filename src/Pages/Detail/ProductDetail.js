import React, { useEffect, useState } from "react";

const Details = () => {
  const [Logindata, setLogindata] = useState([]);
  console.log(Logindata);

  var todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);

  const Birthday = () => {
    const getuserArr = localStorage.getItem("user_Login");

    if (getuserArr && getuserArr.length) {
      const user = JSON.parse(getuserArr);
      console.log(user);
      setLogindata(user);

      const userbirth = Logindata.map((el, k) => {
        return el.data === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("OK");
        }, 1000);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {Logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1> Details Page</h1>
        </>
      )}
    </>
  );
};

export default Details;
