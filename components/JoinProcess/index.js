import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./joinProcess.module.css";
import joinProcessImage from "/public/images/join_process.png";

function JoinProcess() {
  return (
    <Box className={styles.container}>
      <Typography className={styles.text}>
        EASY TO JOIN IDO & IGO WITH 5 STEPS
      </Typography>
      <Image src={joinProcessImage} alt="Join Process Image"></Image>
    </Box>
  );
}

export default JoinProcess;
