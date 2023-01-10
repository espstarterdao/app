import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./footer.module.css";
import socials from "/public/images/socials_footer.png";

function Footer() {
  return (
    <Box className={styles.footer_container}>
      <Box className={styles.info}>
        <Box className={styles.footer_title}>
          <img width={32} height={38} src="/images/logo.png"></img>
          <Typography>ESPStarter</Typography>
        </Box>
        <Typography className={styles.description}>
          ESPStarter is a Fully decentralized protocol for launching new ideas.
          Our curation process and industry access enable us to offer the best
          new projects in blockchain and digital assets
        </Typography>
        <Image src={socials} alt="socials icons"></Image>
      </Box>
      <Box className={styles.links}>
        <Box className={styles.items}>
          <Typography className={styles.main_item}>Products</Typography>
          <Typography>ESP Launchpad</Typography>
          <Typography>ESP Aggregator</Typography>
          <Typography>ESP YieldGuild</Typography>
          <Typography>ESP DAO</Typography>
        </Box>
        <Box className={styles.items}>
          <Typography className={styles.main_item}>App</Typography>
          <Typography>Devnet</Typography>
          <Typography>Testnet</Typography>
          <Typography>Mainnet</Typography>
        </Box>
        <Box className={styles.items}>
          <Typography className={styles.main_item}>Community</Typography>
          <Typography>Discord</Typography>
          <Typography>Twitter</Typography>
          <Typography>Telegram</Typography>
          <Typography>Medium</Typography>
        </Box>
        <Box className={styles.items}>
          <Typography className={styles.main_item}>Learn</Typography>
          <Typography>Whitepaper</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
