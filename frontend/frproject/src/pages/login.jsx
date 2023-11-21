import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Danger } from "./components/alerts/danger"
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from "../layouts/layoutapi";



export const Login=()=>{
    const passwordSchema = z.string().min(5);

  const schemareg=  z.object({
   email:z.string().email(),
   password:passwordSchema,
 

    })
    const navigartion=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        getValues ,
        formState: { errors },
      } = useForm({
                resolver:zodResolver(schemareg),

      }

      )
  
      const onSubmit = async (data) => {
        try {
          const response = await fetch(`${API_URL}login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',

            }
          });
      
          if (response.ok) {
            const responseData = await response.json();
            // Assuming the response contains some authentication details like a token or user data
            if (responseData.token) {
              // Successfully logged in, do something with the token or user data
              console.log('Login successful');
              // Example: Store the token in local storage or state for future use
              // localStorage.setItem('token', responseData.token);
            } else {
              console.error('Token not found in the response'); // Handle this case
            }
          } else {
            console.error('Login failed'); // Handle other error cases if necessary
          }
        } catch (error) {
          console.error('Error during login:', error);
          // Handle errors here
        }
      };
      
    return(
        <>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap min-h-screen w-full content-center justify-center bg-white py-10">
  <div className="flex shadow-md">
    <div
      className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
      style={{ width: "24rem", height: "32rem" }}
    >
      <div className="w-72">
        <h1 className="text-xl font-semibold">Register now</h1>
        <small className="text-gray-400">
          Welcome back! Please enter your details
        </small>
        {/* Form */}
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Email</label>
      <input
  type="email"
  {...register("email")}
  placeholder="Enter your email"
  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
/>
  {errors.email&&<Danger message={errors.email.message}/>} 


          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Password</label>
            <input
  type="password"
  {...register("password")}
  placeholder="*****"
  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
/>
{errors.password&&<Danger message={errors.password.message}/>}


          </div>

          <div className="mb-3 flex flex-wrap content-center">
         
            <label htmlFor="remember" className="mr-auto text-xs font-semibold">
              Remember for 30 days
            </label>
            <a href="#" className="text-xs font-semibold text-purple-700">
              Forgot password?
            </a>
          </div>
          <div className="mb-3">
            <button type="submit" className="mb-1.5 block w-full text-center text-white bg-blue-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
              Sign in
            </button>
            <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img
                className="w-5 mr-2"
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              />
              Sign in with Google
            </button>
          </div>
        <div className="text-center">
          <span className="text-xs text-gray-400 font-semibold">
            Don't have account?
          </span>
          <a href="#" onClick={()=>navigartion('/login')} className="text-xs font-semibold text-purple-700">
            login
          </a>
        </div>
      </div>
    </div>
    <div
      className="flex flex-wrap content-center justify-center rounded-r-md"
      style={{ width: "24rem", height: "32rem" }}
    >
      <img
        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
        src="https://th.bing.com/th/id/OIP.THycwEPIE4SeNz_jAhCtDwAAAA?rs=1&pid=ImgDetMain"
      />
    </div>
  </div>

</form>

        
        </>
    )
}