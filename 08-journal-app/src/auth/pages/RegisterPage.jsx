import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
    <AuthLayout title={'Register'}>
    <form>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                placeholder="John Wick"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="mail@example.org"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="1234abcd."
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Create account
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction={'row'}
              justifyContent={'end'}
            >
              <Typography sx={{mr: 1}}> ¿Already have an account? </Typography>
              <Link component={RouterLink} color='inherit' to={'/auth/login'}>Log in </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  </>
  )
}
