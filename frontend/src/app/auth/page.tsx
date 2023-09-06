"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Logo from "../components/common/Logo";
import Input from "../components/ui/Input";

type FormData = {
  email: string;
  password: string;
};

const Auth = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitForm = (data: FormData) => {
    console.log(data); 
  };

  return (
    <div className="flex justify-center height-screen-helper p-6">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-120">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <Logo width="6px" height="6px" />
        </div>
        <div className="flex flex-col space-2 border-2 border-gray p-6 rounded-md">
          <form onSubmit={handleSubmit(submitForm)} className="login_form">
            <div className="materialContainer">
              <div className="box">
                <div className="title">LOGIN</div>
                <div className="input">
                  <Input
                    id={"email"}
                    type={"email"}
                    value={password}
                    disabled={false}
                    width={"full"} 
                    handler={(e: {
                      target: { value: string; };
                    }) => setPassword(e.target.value)}  
                  />
                </div>
                <div className="input">
                  <Input
                    id={"password"}
                    type={"password"}
                    value={password}
                    disabled={false}
                    width={"full"} 
                    handler={(e: {
                      target: { value: string; };
                    }) => setPassword(e.target.value)}                  />
                </div>
                <div className="button login">
                  <button type="submit">Login</button>
                </div>
                <a href="#" className="pass-forgot">
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
