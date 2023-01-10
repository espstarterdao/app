import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import styles from "./projectDetails.module.css";

function ProjectDetails() {
  return (
    <Box className={styles.container}>
      <Box className={styles.title_container}>
        <Box className={styles.label_container}>
          <Typography>Private Sale</Typography>
        </Box>
        <Box className={styles.logo_container}>
          <img src="images/logo.png" alt="Logo"></img>
        </Box>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.title}>
          <Box className={styles.name}>
            <Typography>ESPStarter</Typography>
          </Box>
          <Box className={styles.socials}>
            <img src="images/socials.png"></img>
          </Box>
          <Box className={styles.availability}>
            <Typography>Coming Soon</Typography>
          </Box>
        </Box>
        <Box className={styles.info}>
          <Box className={styles.details}>
            <Box className={styles.details_left}>
              <Typography>Registration Opens</Typography>
              <Typography>
                <span>TBA</span>
              </Typography>
              <Typography>Public Total Raise</Typography>
              <Typography>TBA</Typography>
            </Box>
            <Box className={styles.details_right}>
              <Typography>Token Price</Typography> <Typography>TBA</Typography>
              <Typography>Token Network</Typography>
              <Typography>APTOS</Typography>
            </Box>
          </Box>
          <Box className={styles.allocation}>
            <Typography>Max Allocation</Typography>
            <Typography>TBA</Typography>
          </Box>
          <Box className={styles.explore}>
            <Button>Explore</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectDetails;
