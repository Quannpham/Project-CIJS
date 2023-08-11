import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";


const SignInPage = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email:"",
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

    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const {name, email, date, password} = inpval;
     if(email ===""){
      alert ("Mời bạn nhập Email")
    }else if (!email.includes("@")){
      alert ("Vui Lòng Nhập Đúng Email")
    }else if(password ===""){
      alert ("Mời bạn nhập password")
    }else if(password.length < 6){  
      alert ("Mật khẩu của bạn chưa đủ bảo mật")
    } else {
       
      if(getuserArr && getuserArr.length){
          const userdata = JSON.parse(getuserArr);
          
          const userLogin = userdata.filter((el, k) =>{
            return el.email === email && el.password === password
          });

          if(userLogin.length === 0) {
            alert("Email hoặc mật khẩu không đúng")
          }else {
            console.log("Đăng nhập thành công");

            localStorage.setItem("use_Login", JSON.stringify(userLogin));
            
            history("/details")
          }
          
      }

    }
}



  return (
    
      <div className="container">
        <section>
          <div className="Left_data">
          <img  className="logoLogin" src="https://phanmemmarketing.vn/wp-content/uploads/2020/04/pinterest-logo-1024x576.png" alt="logo" />
            <h3 className="title-Sign Up"> Đăng Nhập  </h3>
            <Form>
          
              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label className="FromName1">Email address</Form.Label>
                <Form.Control className="FromInput" type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicPassword">
                <Form.Label className="FromName1">Password</Form.Label>
                <Form.Control className="FromInput" type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="btnLogin" onClick={addData}> Đăng nhập </Button>
            </Form>
          </div>
        </section>
      </div>
    
  )
}

export default SignInPage
