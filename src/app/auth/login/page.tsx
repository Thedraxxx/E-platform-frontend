import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import{FaEnvelope, FaLock} from 'react-icons/fa'
import { ILoginData } from "./login.types";
 export default function Login(){
  const dispatch = 
    const [data,setData] = useState<ILoginData>({
      email: '',
      password: ''
    })
    function handleChange(e: ChangeEvent<HTMLInputElement>){
            const {name, value} = e.target;
            setData(
            {  ...data,
              [name]: value}
            )
      }
     function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        dis
    }
      
 return (
   
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Welcome Back
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-green-600" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3.5 text-green-600" />
              <input
                type="password"
                name='password'
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />
              <p className="text-sm text-right text-gray-500 hover:text-green-600 cursor-pointer mt-1">
                Forgot password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-sm transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-700">
            Don’t have an account?{' '}
            <Link
              href="/auth/register"
              className="text-green-600 font-semibold hover:underline transition"
            >
              Register
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
