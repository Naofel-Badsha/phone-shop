import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";

const Registation = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState();
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);
    //-------Reset----error------
    setRegisterError("");
    setSuccess("");

    //----chacked----Password-----
    if (password.length < 6) {
      setRegisterError("Surry passwor use by 8 Chareacter...?");
      return;
    }
    //----Speactial---Character----chacked----Password-----
    else if(!/[A-Z]/.test(password)){
        setRegisterError("Plese Use Password of Special Carrecter");
        return; 
    }
    //----Acceptes-----Terms----and-----Conditions--------
    if(!accepted){
      setRegisterError('Plese Acceped Our Terms')
      return;
    }

    //--------Created---User---Email or Password------
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Created SuccessFully");
        //-------User---Update---profile-------
        updateProfile(result.user, {
           displayName: name, 
           photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(() => {
          console.log('User Profile Updated')
        })
        .catch()

        //-----Send----verification-----Email-------
        sendEmailVerification(result.user)
        .then(() => {
          alert("Please check your email or verified account")
        })
      })
      .catch((error) => {
        // console.log()
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registation now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute cursor-pointer right-4 mt-2"
                    onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? "Hide" : "Show"
                    }
                  </span>
                </div>

                <div className="flex gap-4 mt-4">
                  <input className="w-[50px]" type="checkbox" name="terms" id="terms" />
                  <p>Please Checked Me</p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {registerError && <p>{registerError}</p>}
            {success && <p>{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
