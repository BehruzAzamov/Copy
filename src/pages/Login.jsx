// import { Link, Form, useActionData } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import FormInput from "../components/FormInput";
// import { useSignup } from "../hooks/useSignup";

// import { useLogin } from "../hooks/useLogin";
// import { useEffect } from "react";
// export const action = async ({ request }) => {
//   let formData = await request.formData();
//   let email = formData.get("Email");
//   let password = formData.get("Password");

//   return { password, email };
// };
// const Login = () => {
//   const userSignin = useActionData();
//   const { signInEmailAndPassword } = useLogin();
//   useEffect(() => {
//     if (userSignin) {
//       signInEmailAndPassword(userSignin.email, userSignin.password);
//     }
//   }, [userSignin]);
//   const { signUpWithGoogle, user, error } = useSignup();
//   return (
//     <div className="min-h-screen grid place-items-center">
//       <div className="max-w-96 w-full">
//         <Form method="POST">
//           <FormInput type="email" label="Email:" name="Email" />
//           <FormInput type="password" label="Password:" name="Password" />
//           <div>
//             <button
//               className="btn btn-secondary w-full mb-3 text-xl"
//               type="submit"
//             >
//               Submit
//             </button>
//             <button
//               onClick={signUpWithGoogle}
//               className="btn btn-primary w-full  mb-5"
//             >
//               <FcGoogle className="text-3xl" />
//               <span className="text-2xl">Google</span>
//             </button>
//             <p className="text-center">
//               If you don't have an account,
//               <Link className="link text-blue-500" to="/register">
//                 SignUp
//               </Link>
//             </p>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <FormInput
          type="email"
          label="Email:"
          defaultValue="test@gmail.com"
          name="Password"
        />
        <FormInput
          type="password"
          label="Password"
          defaultValue="secret"
          name="Password"
        />
        <button className="mt-4">
          <SubmitBtn text="Login" />
        </button>
        <button className="btn btn-secondary">Guest User</button>
        <div className="text-center">
          Not user yet?{" "}
          <Link to="/register" className="link-primary">
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
