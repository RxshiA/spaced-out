import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useAstronomyPicture from '../../hooks/useAstronomyPicture'; 

export default function Explanation() {
  const data = useAstronomyPicture(); 

  return (
    <Box id="explanation" sx={{ py: 3 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Astronomy Picture of the Day
      </Typography>
      {data ? (
        <>
          <Typography
            component="h2"
            variant="h5"
            align="center"
            color="text.primary"
            sx={{ mt: 2 }}
          >
            {data.title}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            align="center"
            color="text.primary"
            sx={{ mt: 2, maxWidth: '80%', margin: '0 auto', py: 2 }} 
          >
            {data.explanation}
          </Typography>
        </>
      ) : (
        <Typography
          component="p"
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          Loading...
        </Typography>
      )}
    </Box>
  );
}