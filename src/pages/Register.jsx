// import { Link, Form, useActionData } from "react-router-dom";
// import { useSignup } from "../hooks/useSignup";
// import { FcGoogle } from "react-icons/fc";
// import FormInput from "../components/FormInput";
// import { useEffect } from "react";
// export const action = async ({ request }) => {
//   let formData = await request.formData();
//   let name = formData.get("Name");
//   let email = formData.get("Email");
//   let password = formData.get("Password");

//   return { password, email, name };
// };
// const Register = () => {
//   let userSignup = useActionData();
//   const { signUpWithGoogle, signupWithPasswordAndEmail, user, error } =
//     useSignup();
//   useEffect(() => {
//     if (userSignup) {
//       signupWithPasswordAndEmail(
//         userSignup.name,
//         userSignup.email,
//         userSignup.password
//       );
//     }
//   }, [userSignup])
//   return (
//     <div className="min-h-screen grid place-items-center">
//       <div className="max-w-96 w-full">
//         <Form method="POST">
//           <FormInput type="text" label="User name:" name="Name" />
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
//               Do you have already an account?{" "}
//               <Link className="link text-blue-500" to="/login">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <div className="h-screen grid place-content-center">
      <h1 className="text-center text-3xl mb-2">Register</h1>
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <FormInput
          type="text"
          label="Name:"
          defaultValue="user"
          name="displayName"
        />
        <FormInput
          type="url"
          label="Photo:"
          defaultValue="https://..."
          name="displayName"
        />
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
          <SubmitBtn text="Register" />
        </button>
        <div className="text-center">
          Not user yet?{" "}
          <Link to="/login" className="link-primary">
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
