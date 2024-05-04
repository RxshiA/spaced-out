import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useFetchRoverData } from '../../hooks/useFetchRoverData';

function Info({ selectedDate }) {
  const roverData = useFetchRoverData(selectedDate);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Mars Rover
      </Typography>
      <Typography variant="h4" gutterBottom>
        Details
      </Typography>
      <List disablePadding>
        {roverData && (
          <>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary="Camera"
                secondary={roverData.camera.full_name}
              />
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary="Earth Date"
                secondary={roverData.earth_date}
              />
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary="Rover Launch Date"
                secondary={roverData.rover.launch_date}
              />
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary="Rover Landing Date"
                secondary={roverData.rover.landing_date}
              />
            </ListItem>
          </>
        )}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  selectedDate: PropTypes.string.isRequired,
};

export default Info;