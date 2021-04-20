import MainLayout from "../layouts/MainLayout";
import Router from "next/router";

import {Grid, Box, Button} from "@material-ui/core";

const ErrorPage = () => {
  return (
    <MainLayout>
      <Grid>
        <Box>
            <h1>Oops...</h1>
            <p>Page not found</p>
            <Button color="primary" onClick={() => Router.push("/")}> Go to main page</Button>
        </Box>
      </Grid>

    </MainLayout>
  )
}

export default ErrorPage;