import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toastOption } from "@/configs/notification.config";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getMe, logout, requestLogin } from "@/redux/features/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/utils/api";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { Button, FloatButton, Input, Modal, Space } from "antd";
import OTPInput from "react-otp-input";

function LoginPage() {
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.currentUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    localStorage.clear();
    const { accessToken, email } = router.query;

    if (accessToken && !email) {
      localStorage.setItem("token", JSON.stringify(accessToken));

      dispatch(getMe())
        .then((resp: any) => {
          if (resp.payload) router.push("/home");
          else {
            dispatch(logout());
            toast.warn("Đã có lỗi xảy ra", toastOption);
          }
        })
        .catch((e) => console.log(e));
    } else {
      console.log(router.query);
      showModal();
    }
  }, [dispatch, router]);

  useEffect(() => {
    if (user) router.push("/home");
  }, []);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(requestLogin(dataLogin)).then((data) => {
      if (data.meta.requestStatus == "rejected") {
        // @ts-ignore
        toast.error(data.error.message, toastOption);
      } else router.push("/home");
    });
  };

  const getOauthGoogleUrl = () => {
    return api.getBaseUrl() + "/auth/google";
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-[90vh] items-center w-[90%]">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-[80%]">
          <Image
            width={800}
            height={800}
            src="https://previews.123rf.com/images/virtosmedia/virtosmedia2302/virtosmedia230230887/198625662-audiobook-concept-with-headphones-and-books-on-turquoise-background.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" method="POST" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete=""
                  required
                  onChange={(e) => {
                    setDataLogin({
                      ...dataLogin,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  onChange={(e) => {
                    setDataLogin({
                      ...dataLogin,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <div className="flex justify-between w-full">
              <Link
                type="button"
                className="w-[45%] block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                href={getOauthGoogleUrl()}
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4">Google</span>
                </div>
              </Link>
              <button
                type="button"
                className="w-[45%] block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.302 4.084 9.664 9.299 9.979V15.27H8.625V12h2.674V9.329c0-2.64 1.563-4.108 3.994-4.108 1.156 0 2.468.206 2.468.206v2.715h-1.393c-1.373 0-1.798.855-1.798 1.732V12h3.059l-.488 3.27h-2.57V21.98C17.916 21.635 22 17.302 22 12z"></path>
                  </svg>
                  <span className="ml-4">Facebook</span>
                </div>
              </button>
            </div>

            <p className="mt-8">
              Need an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
              {/* <a
                href="/register"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a> */}
            </p>
          </div>
        </div>
      </section>
      <Modal
        title="Nhập OTP kích hoạt tài khoản của bạn"
        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        centered
        footer={[
          <Space align="center" style={{ width: "30%" }}>
            {" "}
            <Button
              key="submit"
              type="primary"
              loading={false}
              onClick={(e) => {}}
              danger
            >
              <span style={{ width: "40px" }}>Gửi</span>
            </Button>
          </Space>,
        ]}
      >
        <p>Kiểm tra hòm thư của bạn!</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus={true}
          renderSeparator={<span className="mx-3">-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={{
            margin: "10px 0",
          }}
          inputStyle={{
            width: "50px",
            height: "50px",
            border: "2px solid black",
            borderRadius: "5px",
          }}
        />
      </Modal>

      {/* {() =>
        Modal.info({
          title: "",
          content: (
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus={true}
              renderSeparator={<span className="mx-3">-</span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={{
                margin: "10px 0",
              }}
              inputStyle={{
                width: "50px",
                height: "50px",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            />
          ),
          onOk() {},
        })
      } */}

      <FloatButton onClick={() => console.log("click")} />
    </>
  );
}

export default LoginPage;
