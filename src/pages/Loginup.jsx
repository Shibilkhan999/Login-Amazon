import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Loginup = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

const alertClose = () => {
    setAlertOpen(false);
  };

const validationSchema = yup.object({
    userName: yup.string().required("Enter your User Name"),
    password: yup
      .string()
      .required("Enter your password")
      .min(8, "Password must be at least 8 characters")
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
    //     "Must include uppercase, lowercase, number, and special character"
    //   ),
  });

const formik = useFormik({
    initialValues: {
      userName: "emilys",
      password: "emilyspass",
    },
  validationSchema,
    onSubmit: (values) => {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: values.userName,
          password: values.password,
        })
        .then((response) => {
          console.log("Login successful:", response.data);
          dispatch({ type: "user_loginup", payload: response.data });
          navigate("/home2");
        })
        .catch((error) => {
          console.error("Login error:", error);
          setErrorMessage(error.response?.data?.message || "Login failed");
          setAlertOpen(true);
        });
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="black" mb={2}>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="userName"
            label="User Name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#FF9900", color: "white" }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" mt={2}>
          New to Amazon?{" "}
          <a href="/signup" style={{ color: "#0066c0", textDecoration: "none" }}>
            Create your Amazon account
          </a>
        </Typography>
      </Paper>

      {/* New Section */}
      <div
        className="new-section"
        style={{
          padding: "20px",
          backgroundColor: "#232f3e",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
          maxWidth: 420,
          width: "100%",
          height: "60vh",
        }}
      >
        <h1>'Tis the season</h1>
        <p>Find the perfect gift at Amazon</p>
        <span>Shop deals in every department →</span>
        <div className="door-image" style={{ marginTop: "10px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-bORWKl1AY_BtvpliEOKhXz-Kw9c0VcHjQ&s"
            alt="Holiday Door"
            style={{
              maxWidth: "100%",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          />
        </div>
      </div>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={alertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={alertClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Loginup;







