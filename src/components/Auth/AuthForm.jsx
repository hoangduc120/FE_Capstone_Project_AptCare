import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FaBuilding, FaLock, FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
});

// const registerSchema = Yup.object({
//   fullName: Yup.string().required("Bắt buộc"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
//     .required("Bắt buộc"),
//   email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
//   password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
//     .required("Bắt buộc"),
// });

export default function AuthForm() {
  // const [tab, setTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (values) => {
    setIsLoading(true);
    console.log("Login:", values);
    setTimeout(() => setIsLoading(false), 1500);
  };

  // const handleRegister = (values) => {
  //   setIsLoading(true);
  //   console.log("Register:", values);
  //   setTimeout(() => setIsLoading(false), 1500);
  // };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 420, mx: "auto", borderRadius: 3 }}
    >
      {/* Header */}
      <Box textAlign="center" mb={3}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Box
            sx={{
              bgcolor: "primary.main",
              p: 2,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaBuilding size={28} color="white" />
          </Box>
        </Box>
        <Typography variant="h5" fontWeight="bold" color="text.primary">
          AptCare
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quản lý sửa chữa căn hộ & chung cư
        </Typography>
      </Box>

      {/* Tabs
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        variant="fullWidth"
        sx={{ mb: 3 }}
      >
        <Tab
          label="Đăng nhập"
          value="login"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
          }}
        />
        <Tab
          label="Đăng ký"
          value="register"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
          }}
        />
      </Tabs> */}

      {/* Login Form */}
      {/* {tab === "login" && ( */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, touched, errors }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              name="email"
              label="Email"
              placeholder="email@example.com"
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoMdMail />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              type="password"
              name="password"
              label="Mật khẩu"
              placeholder="••••••••"
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              fullWidth
              sx={{
                py: 1.5,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Đăng nhập"
              )}
            </Button>
          </Form>
        )}
      </Formik>
      {/* )} */}

      {/* Register Form */}
      {/* {tab === "register" && (
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
          {({ handleChange, touched, errors }) => (
            <Form>
              <TextField
                fullWidth
                margin="normal"
                name="fullName"
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                onChange={handleChange}
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                name="phone"
                label="Số điện thoại"
                placeholder="0901234567"
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaPhone />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                name="email"
                label="Email"
                placeholder="email@example.com"
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoMdMail />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                type="password"
                name="password"
                label="Mật khẩu"
                placeholder="••••••••"
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                type="password"
                name="confirmPassword"
                label="Xác nhận mật khẩu"
                placeholder="••••••••"
                onChange={handleChange}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                }}
              />
              <ButtonCustom
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Đăng ký"
                )}
              </ButtonCustom>
            </Form>
          )}
        </Formik>
      )} */}
    </Paper>
  );
}
