import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {

  const [inpval, setInpval] = useState({
      name: "",
      email:"",
      date: "",
      password: ""
  });
  const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);

    const {value, name} = e.target;
      console.log(value, name);


    setInpval(() =>{
        return {
            ...inpval, 
            [name]:value
        }
    } )

  }


  const addData = (e) => {
      e.preventDefault();

      const {name, email, date, password} = inpval;
      if(name === ""){
        alert ("Mời bạn nhập tên")
      } else if(email ===""){
        alert ("Mời bạn nhập Email")
      }else if (!email.includes("@")){
        alert ("Vui Lòng Nhập Đúng Email")
      }else if(password ===""){
        alert ("Mời bạn nhập password")
      }else if(password.length < 6){  
        alert ("Mật khẩu của bạn chưa đủ bảo mật")
      }else if(date ==="") {
        alert("Mời bạn nhập ngày tháng năm sinh")
      } else {
        console.log("Đăng ký thành công")
        alert("Đăng ký thành công");

        localStorage.setItem("user", JSON.stringify([...data,inpval]));
      }
  } 


  return (
    <>
      <div className="container">
        <section>
          <div className="Left_data">
            <img  className="logoRegister" src="https://phanmemmarketing.vn/wp-content/uploads/2020/04/pinterest-logo-1024x576.png" alt="logo" />
            <h3 className="title-SignUp"> Chào mừng bạn đến với Printeres </h3>
            <Form>
              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <h4 className="FomrName"> Name </h4>
                <Form.Control className="FromInput" type="text" name="name" onChange={getData} placeholder=" Name" />
              </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <h4 className="FomrName"> Email </h4>
                <Form.Control className="FromInput" type="email" name="email" onChange={getData} placeholder=" Email" />
              </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicPassword">
                <h4 className="FomrName"> Mật Khẩu </h4>
                <Form.Control className="FromInput" type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <h4 className="FomrName"> Ngày Sinh </h4>
                <Form.Control className="FromInput" type="date" name="date" onChange={getData} placeholder="dd/mm/yyyy" />
              </Form.Group>

              <Button variant="primary" type="submit" className="btnDangky" onClick={addData}> Đăng ký </Button>
              
              <NavLink className="Login" to='/Login'> Đăng Nhập </NavLink>
            </Form>
            <p> Bạn đã có tài khoản đăng nhập <span> <NavLink to='/Login'> Đăng nhập  </NavLink> </span> </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUpPage;
