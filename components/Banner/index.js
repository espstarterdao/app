import { Box, Button, Pagination, Paper, Typography } from "@mui/material";
import styles from "./banner.module.css";

function Banner() {
  return (
    <Box className={styles.banner_container}>
      <Box className={styles.info_container}>
        <Typography className={styles.text}>
          <span>ESPStarter</span> is a one stop destination for Web3 Projects.
          The platform services blockchain gamers, investors and traders in one
          aggregator. With <span>ESPStarter</span>, decentralized projects can
          raise awareness, build a loyal community and receive long-term
          support.
        </Typography>
        <img
          className={styles.image}
          src="images/ESPStarter_intro.png"
          alt="ESPStarter image"
        ></img>
      </Box>
      <Box className={styles.scrolling}>
        <Button variant="outlined"></Button>
      </Box>
    </Box>
  );
}

export default Banner;
