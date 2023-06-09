import React from "react";
// ==== STYLES ====
import styles from "./appProjectCard.module.css";
// ==== MATERIAL UI ====
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// ==== Image ====
import projectImage from "../../assets/images/projectImage.jpeg";
import AppBadge from "../shared/AppBadge";

const AppProjectCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={`${projectImage}`}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.projectCardTitle}
        >
          Multi-Post Stories Gain+Glory
        </Typography>
        <div className={styles.badgesContainer}>
          <AppBadge title="ruby on rails" />
          <AppBadge title="css" />
          <AppBadge title="Javascript" />
          <AppBadge title="React" />
        </div>
      </CardContent>
      <CardActions className={styles.viewProjectButton}>
        <Button size="small" variant="contained" color="success">
          See project
        </Button>
      </CardActions>
    </Card>
  );
};

export default AppProjectCard;
