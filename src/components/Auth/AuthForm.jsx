import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaBuilding, FaLock, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Button from "../Button/Button";

// Schema validation
const loginSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
});

const registerSchema = Yup.object({
  fullName: Yup.string().required("Bắt buộc"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
    .required("Bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Bắt buộc"),
});

export default function AuthForm() {
  const [tab, setTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (values) => {
    setIsLoading(true);
    console.log("Login:", values);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleRegister = (values) => {
    setIsLoading(true);
    console.log("Register:", values);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-500 rounded-full">
            <FaBuilding className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">AptCare</h2>
        <p className="text-gray-500">Quản lý sửa chữa căn hộ & chung cư</p>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="grid grid-cols-2 mb-6 bg-gray-100 rounded-xl p-1">
          <button
            type="button"
            onClick={() => setTab("login")}
            className={`py-2 text-sm font-medium rounded-lg border transition ${
              tab === "login"
                ? "bg-white text-gray-800 border-gray-200 shadow-sm"
                : "text-gray-600 hover:text-gray-800 border-transparent"
            }`}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={() => setTab("register")}
            className={`py-2 text-sm font-medium rounded-lg border transition ${
              tab === "register"
                ? "bg-white text-gray-800 border-gray-200 shadow-sm"
                : "text-gray-600 hover:text-gray-800 border-transparent"
            }`}
          >
            Đăng ký
          </button>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {() => (
              <Form className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
              </Form>
            )}
          </Formik>
        )}

        {/* Register Form */}
        {tab === "register" && (
          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            {() => (
              <Form className="space-y-4">
                {/* Full name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Nhập họ và tên"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="0901234567"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Button dùng component */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang đăng ký..." : "Đăng ký"}
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
