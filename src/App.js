import React from "react";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Pricing from "./pages/pricing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Courses from "./pages/courses";
import ContactUs from "./pages/contactUs";
import ChatBot from "./components/chatBot/chatBot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Register from "./components/auth/register";
import { AuthProvider } from "./contexts/authContext";
import Login from "./components/auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./pages/error";
import ComingSoon from "./pages/ComingSoon";
import ComingSoonPage from "./pages/ComingSoonPage";
import CountdownLandingPage from "./components/coursesComponents/CountdownLandingPage";
import PaymentLandingPage from "./components/homeComponents/PaymentMethodCard";
import NotAcceptingPayments from "./components/homeComponents/NotAcceptingPayments";
import CourseEnrollment from "./components/homeComponents/CourseEnrollment";
import TermsAndConditions from "./components/homeComponents/TermsAndConditions";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer /> {/* Moved ToastContainer here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/working-on-it" element={<ComingSoonPage />} />
          <Route path="/upcoming" element={<CountdownLandingPage />} />
          <Route path="/pay-now" element={<PaymentLandingPage />} />
          <Route path="/pay-later" element={<NotAcceptingPayments />} />
          <Route path="/enrolling" element={<CourseEnrollment />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />

        </Routes>
        <Footer />
        <ChatBot />
      </Router>
    </AuthProvider>
  );
}

export default App;


// import React, { useState } from "react";
// import { Navigate, Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
// import { toast } from "react-toastify";
// import { fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

// const Register = () => {
//   const navigate = useNavigate();
//   const { userLoggedIn, loading } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);

//   const passwordRequirements = [
//     "Password must include at least one symbol (e.g. !, @, #, $, etc.)",
//     "Password must include at least one number",
//     "Password must be at least 6 characters long",
//   ];

//   const isPasswordValid = (password) => {
//     const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
//     return regex.test(password);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
  
//     // Validate password
//     if (!isPasswordValid(password)) {
//       toast.error("Password does not meet the required criteria");
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
  
//     try {
//       setIsRegistering(true);
  
//       // Check if email is already in use before creating the user
//       const userExists = await checkIfEmailExists(email);
//       if (userExists) {
//         toast.error("Email is already in use");
//         return; // Don't proceed if the email already exists
//       }
  
//       // Proceed with storing user data if email is available
//       const res = await fetch(
//         "https://academic-course-main-default-rtdb.firebaseio.com/userDataRecord.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );
  
//       if (res.ok) {
//         toast.success("Data stored successfully");
//         await doCreateUserWithEmailAndPassword(email, password); // Create user in Firebase Authentication
//         navigate("/"); // Page changes, but the toast will persist
//       } else {
//         toast.error("Error storing data");
//       }
//     } catch (error) {
//       // Catch any error and show appropriate message
//       if (error.code === "auth/email-already-in-use") {
//         toast.error("Email is already in use");
//       } else {
//         toast.error(error.message);
//       }
//     } finally {
//       setIsRegistering(false);
//     }
//   };
  
//   // Function to check if email is already in use in Firebase Authentication
//   const checkIfEmailExists = async (email) => {
//     try {
//       const methods = await fetchSignInMethodsForEmail(auth, email);
//       return methods.length > 0; // If length > 0, email exists
//     } catch (error) {
//       console.error("Error checking email:", error);
//       return false; // Assume email doesn't exist if there's an error
//     }
//   };
  

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (userLoggedIn) {
//     return <Navigate to="/" replace={true} />;
//   }

//   return (
//     <main className="w-full h-screen flex self-center place-content-center place-items-center">
//       <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
//         <div className="text-center mb-6">
//           <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
//             Create a New Account
//           </h3>
//         </div>
//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="text-sm text-gray-600 font-bold">Email</label>
//             <input
//               type="email"
//               autoComplete="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-bold">Password</label>
//             <input
//               disabled={isRegistering}
//               type="password"
//               autoComplete="new-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
//                 isPasswordValid(password) ? "focus:border-indigo-600" : "border-red-500"
//               } shadow-sm rounded-lg transition duration-300`}
//             />
//             <ul className="mt-2 text-sm text-gray-600">
//               {passwordRequirements.map((requirement, index) => (
//                 <li key={index} className="flex items-center">
//                   <span
//                     className={`mr-2 h-4 w-4 ${
//                       isPasswordValid(password) ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     ✔
//                   </span>
//                   {requirement}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-bold">
//               Confirm Password
//             </label>
//             <input
//               disabled={isRegistering}
//               type="password"
//               autoComplete="off"
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isRegistering}
//             className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
//               isRegistering
//                 ? "bg-gray-300 cursor-not-allowed"
//                 : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
//             }`}
//           >
//             {isRegistering ? "Signing Up..." : "Sign Up"}
//           </button>
//           <div className="text-sm text-center">
//             Already have an account?{" "}
//             <Link
//               to={"/login"}
//               className="text-center text-sm hover:underline font-bold"
//             >
//               Continue
//             </Link>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default Register;
