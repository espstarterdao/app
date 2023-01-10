import React from "react";
import { Box, Card, Typography } from "@mui/material";
import styles from "./counters.module.css";

function Counters() {
  return (
    <Box className={styles.main_container}>
      <Card raised className={styles.funded_container}>
        <Box className={styles.logo_container}>
          <img src="images/funded_icon.png" alt="funded project"></img>
        </Box>
        <Box className={styles.typo_containers}>
          <Typography className={styles.funded_title}>
            Funded Projects
          </Typography>
          <Typography>
            <span>TBA</span>
          </Typography>
        </Box>
      </Card>
      <Card raised className={styles.unique_container}>
        <Box className={styles.logo_container}>
          <img src="images/unique_icon.png" alt="unique project"></img>
        </Box>
        <Box className={styles.typo_containers}>
          <Typography className={styles.unique_title}>
            Unique Projects
          </Typography>
          <Typography>
            <span>TBA</span>
          </Typography>
        </Box>
      </Card>
      <Card raised className={styles.raised_container}>
        <Box className={styles.logo_container}>
          <img src="images/raised_icon.png" alt="raised project"></img>
        </Box>
        <Box className={styles.typo_containers}>
          <Typography className={styles.raised_title}>
            Raised Projects
          </Typography>
          <Typography>
            <span>TBA</span>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default Counters;
