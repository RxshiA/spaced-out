import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useFetchEpicImages from '../../hooks/useFetchEpicImages';

export default function Epic() {
  const images = useFetchEpicImages('2017', '08', '21'); 

  return (
    <Container
      id="epic"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Earth Polychromatic Imaging Camera
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Uniquely positioned at the Earth-Sun Lagrange point, 
          EPIC provides full disc imagery of the Earth and captures 
          unique perspectives of certain astronomical events such as 
          lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) 
          detector coupled to a 30-cm aperture Cassegrain telescope.
        </Typography>
      </Box>
      <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
              position: 'relative',
              overflow: 'hidden',
              height: '300px',
            }}
          >
            <img 
              src={image}
              alt="Epic image"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover',
              }}
            />
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
}