import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import styles from "./subscribe.module.css";

function Subscribe() {
  return (
    <Box className={styles.container}>
      <Box className={styles.typo_container}>
        <Typography className={styles.text}>
          Never want to miss a sale?
        </Typography>
        <Typography className={styles.signup_text}>
          Sign up for our newsletter and get the latest news abd updates.
        </Typography>
      </Box>
      <Box className={styles.subscribe_input}>
        <Input className={styles.input} placeholder="Email Address"></Input>
        <Button className={styles.sub_button}>Subscribe</Button>
      </Box>
    </Box>
  );
}

export default Subscribe;
