import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, formState, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSignIn = () => {
    // console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout title={"Login"}>
        <form
          aria-label="submit-form"
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                placeholder="mail@example.org"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="1234abcd."
                fullWidth
                inputProps={{
                  "data-testid": "password",
                }}
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  aria-label="google-btn"
                  disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <Link
                component={RouterLink}
                color="inherit"
                to={"/auth/register"}
              >
                Create an account
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
