import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Link } from 'react-router-dom';

const rovers = [
  {
    name: 'Spirit',
    description: [
      'Landed on Mars in 2004',
      'Mission duration: 6 years',
      'Travelled over 7.7 km',
    ],
    buttonText: 'Select Rover',
  },
  {
    name: 'Opportunity',
    description: [
      'Landed on Mars in 2004',
      'Mission duration: 15 years',
      'Travelled over 45 km',
    ],
    buttonText: 'View Details',
    buttonVariant: 'contained',
  },
  {
    name: 'Curiosity',
    description: [
      'Landed on Mars in 2012',
      'Still operational',
      'Travelled over 23 km',
    ],
    buttonText: 'Select Date',
    buttonVariant: 'outlined',
  },
];

export default function MarsRovers() {
  const [selectedRover, setSelectedRover] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2024-01-21T00:00:00Z'));

  return (
    <Container
      id="mars-rovers"
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
          Mars Rovers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Learn more about the Mars rovers and select a rover and date to view detailed information.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {rovers.map((rover) => (
          <Grid
            item
            key={rover.name}
            xs={12}
            sm={rover.name === 'Curiosity' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: rover.name === 'Opportunity' ? '1px solid' : undefined,
                borderColor:
                  rover.name === 'Opportunity' ? 'primary.main' : undefined,
                background:
                  rover.name === 'Opportunity'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: rover.name === 'Opportunity' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {rover.name}
                  </Typography>
                  {rover.name === 'Opportunity' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={rover.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {rover.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          rover.name === 'Opportunity'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          rover.name === 'Opportunity' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'center',
                }}>
                {rover.buttonText === 'Select Rover' && (
                  <Select
                    fullWidth
                    value={selectedRover}
                    onChange={(event) => setSelectedRover(event.target.value)}
                  >
                    <MenuItem value={'Spirit'}>Spirit</MenuItem>
                    <MenuItem value={'Opportunity'}>Opportunity</MenuItem>
                    <MenuItem value={'Curiosity'}>Curiosity</MenuItem>
                  </Select>
                )}
                {rover.buttonText === 'View Details' && (
                  <Tooltip title="Please select a date and rover to continue" disableHoverListener={Boolean(selectedRover && selectedDate)}>
                    <span>
                    <Button
                      fullWidth
                      variant={rover.buttonVariant}
                      disabled={!selectedRover || !selectedDate}
                      component={Link}
                      to={{
                        pathname: '/details',
                        search: `?date=${selectedDate.toString()}`, // Use ISOString for consistent format
                      }}
                    >
                        {rover.buttonText}
                    </Button>
                    </span>
                  </Tooltip>
                )}
                {rover.buttonText === 'Select Date' && (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    fullWidth
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                    }}
                    maxDate={new Date('2024-01-21')}
                    components={{
                      textField: TextField,
                    }}
                  />
                </LocalizationProvider>
                )}
              </CardActions> 
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}