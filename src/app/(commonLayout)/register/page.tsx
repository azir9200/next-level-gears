// "use server";
// import { Link } from "react-router-dom";

// const RegisterPage = () => {
//   //   const handleRegister = async (formData: FormData) => {
//   //     "use server";

//   //     const registerData = {
//   //       name: formData.get("name"),
//   //       email: formData.get("email"),
//   //       password: formData.get("password"),
//   //       role: formData.get("role"),
//   //     };
//   //   };

//   return (
//     <div className=" shadow-xl bg-base-100 w-[80%] my-12">
//       <h1 className="text-center text-4xl">
//         Make Your Registration{" "}
//         <span className="text-fuchsia-900">Register Here</span>
//       </h1>
//       <form className="p-5">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text"> Name</span>
//           </label>
//           <input
//             name="Name"
//             type="text"
//             placeholder="Name"
//             className="input input-bordered"
//             required
//           />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <textarea
//             name="email"
//             placeholder="Email"
//             className="textarea textarea-bordered"
//             required
//           />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Fantasy, Fiction, etc."
//             className="input input-bordered"
//             required
//           />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Role</span>
//           </label>
//           <input
//             type="role"
//             name="role"
//             placeholder="Fantasy, Fiction, etc."
//             className="input input-bordered"
//             required
//           />
//         </div>

//         <div className="form-control mt-6">
//           <button type="submit" className="btn btn-accent btn-outline">
//             Submit
//           </button>
//         </div>
//       </form>
//       <p className="text-sm text-center text-gray-600 mt-4">
//         Already have an account?{" "}
//         <Link to="/login" className="text-blue-500 hover:underline">
//           Login here
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default RegisterPage;
