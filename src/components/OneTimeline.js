import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export const OneTimeline = ({ children, fecha, puesto, ubicacion, Icon, colorIcon = null }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
      >
        {fecha}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        {colorIcon ? 
        (
        <TimelineDot color={colorIcon}>
          <Icon />
        </TimelineDot>
        ) :
        <TimelineDot>
          <Icon />
        </TimelineDot>
        }
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {puesto}
        </Typography>
        <Typography variant="body1">
          {ubicacion}
          <Divider variant="middle" />
          <Typography sx={{ mt: 0.5, ml: 2 }} display="block" variant="caption">
            {children}
          </Typography>
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
