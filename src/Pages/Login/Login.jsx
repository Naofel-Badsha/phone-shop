import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useRef, useState } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState('')
  const [success, setSuccess] = useState('')
  //-----email or password----Reset-----
  const emailRef = useRef(null)


 const handelLoginSubmit = e =>{
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password)

  setLoginError('')
  setSuccess('')

  //------Singin-----User--------
  signInWithEmailAndPassword(auth, email, password)
  .then(result => {
    console.log(result)
    if(result.user.emailVerified){
      setSuccess('Login SuccessFully')
    }
    else{
       alert('Plese Verified Or Email Address')
    }
  })
  .catch(error => {
    console.log(error)
    setLoginError(error.message)
  })
 }

  //---------Forget----Password---------
  const  handelForgerPassword = () =>{
    const email = emailRef.current.value;
    if(!email){
      console.log('Please provide a Email', emailRef.current.value);
      return;
    } 
    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(email)){
       console.log('plese Right a verified email')
       return;
    } 

    //--------email or password ---- R0B;ese-----
    sendPasswordResetEmail(auth, email)
     .then(() => {
      alert('Checked Your Email')
     })
     .catch(error => {
      console.log(error)
     })
     
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelLoginSubmit}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a onClick={handelForgerPassword}
                  href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
              loginError && <p>Surry Plese Type Email Or Passwor</p>
            }
            {
              success && <p>Login SuccessFully</p>
            }
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;
