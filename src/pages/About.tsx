import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function About() {
    return (
        <Container style={{padding: '60px 0px 0px 0px'}} sx={{ mb: 4 }}>
    <Grid container spacing={2} >
         <Grid item xs={6}>
          <img style={{width: '100%'}} src="../public/img/about.jpeg" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h1">
            About Us
          </Typography>
          <Typography
          variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus metus vel risus pharetra consequat. Phasellus sed ante sodales, interdum risus sed, molestie augue. Praesent dictum lobortis dolor, vitae efficitur quam cursus vitae. Mauris vel mollis nibh. Praesent consequat commodo risus vel pellentesque. Morbi pharetra metus ipsum, ac placerat mi aliquam nec. Nulla facilisi. Nam condimentum dolor nec magna congue, sit amet ullamcorper ligula accumsan.
          </Typography>
        </Grid>
    </Grid>
    </Container>
    )}