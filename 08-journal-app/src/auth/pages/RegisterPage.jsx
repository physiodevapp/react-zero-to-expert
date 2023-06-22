import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

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

  const [formSubmitted, setFormSubmitted] = useState(false)

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
    console.log({ formState });
    setFormSubmitted(true)
  };

  return (
    <>
      <AuthLayout title={"Register"}>
        <h1>Form Valid:  { isFormValid ? 'Yes' : 'No' }</h1>
        <form onSubmit={onSubmit}>
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
                error={!!displayNameValid && formSubmitted}
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
                error={!!emailValid && formSubmitted}
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
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12}>
                <Button disabled={false} type="submit" variant="contained" fullWidth>
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
