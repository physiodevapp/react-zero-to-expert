import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email must contain @"],
  password: [(value) => value.length >= 6,"Password must be 6 chars length at least"],
  displayName: [(value) => value.length > 0, "Name is required"],
};

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const [formSubmitted, setFormSubmitted] = useState(false)

  const dispatch = useDispatch()

  // TODO: keep showing form values when registration fails
  const {
    displayName,
    email,
    password,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({ formState });
    dispatch(startCreatingWithEmailPassword(formState))
    setFormSubmitted(true)
  };

  return (
    <>
      <AuthLayout title={"Register"}>
        {/* <h1>Form Valid:  { isFormValid ? 'Yes' : 'No' }</h1> */}
        <form 
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
          >
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                placeholder="John Wick"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={displayNameValid && (formSubmitted || errorMessage) }
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="mail@example.org"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && (formSubmitted || errorMessage)}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="1234abcd."
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && (formSubmitted || errorMessage)}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid 
                item 
                xs={12}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>
              
              <Grid item xs={12}>
                <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>
                  Create account
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <Typography sx={{ mr: 1 }}>
                {" "}
                ¿Already have an account?{" "}
              </Typography>
              <Link component={RouterLink} color="inherit" to={"/auth/login"}>
                Log in{" "}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
