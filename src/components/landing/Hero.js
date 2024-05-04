import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import useEmail from '../../hooks/useEmail';
import useAstronomyPicture from '../../hooks/useAstronomyPicture';

export default function Hero() {
  const emailStorage = useEmail();
  const data = useAstronomyPicture(); 

  const handleEmailChange = (event) => {
    emailStorage.set(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailStorage.submit();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}
      id="hero"
      data-testid="hero-form"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Explore the&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              cosmos
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Dive into a universe of information with this interactive web. 
            Seamlessly interact with NASA's open data, 
            unlocking a treasure trove of space exploration wonders.
          </Typography>
          {emailStorage.submitted && emailStorage.get ? (
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
              You're already registered to the service an the email
            </Typography>
          ) : (
            <>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignSelf="center"
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                onSubmit={handleSubmit}
              >
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  }}
                  onChange={handleEmailChange}
                  value={emailStorage.get || ''}
                />
                <Button variant="contained" color="primary" type="submit">
                  Start now
                </Button>
              </Stack>
              <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                By clicking &quot;Start now&quot; you agree to our&nbsp;
                <Link href="#" color="primary">
                  Terms & Conditions
                </Link>
                .
              </Typography>
            </>
          )}
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage: data ? `url(${data.hdurl})` : '', 
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
