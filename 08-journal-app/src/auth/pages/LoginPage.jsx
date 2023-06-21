import React from "react";
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useDispatch } from "react-redux";


export const LoginPage = () => {

  const dispatch = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: 'physiodevapp@example.org',
    password: '123456,'
  })

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({email, password})

    dispatch(checkingAuthentication(email, password))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <>
      <AuthLayout title={'Login'}>
        <p>{import.meta.env.VITE_API_KEY}</p>
      <form onSubmit={onSubmit}>
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
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction={'row'}
                justifyContent={'end'}
              >
                <Link component={RouterLink} color='inherit' to={'/auth/register'}>Create an account</Link>
              </Grid>

            </Grid>
          </form>
      </AuthLayout>
    </>
  );
};
