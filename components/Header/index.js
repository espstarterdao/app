import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./header.module.css";

function Header({ routes }) {
  return (
    <Box className={styles.header}>
      <Link className={styles.link} href="/">
        <img width={32} height={38} src="images/logo.png" alt="Logo"></img>
        <Typography className={styles.header_title}>ESPStarter</Typography>
      </Link>
      <Box className={styles.navigation}>
        {routes.map(({ name, link }) => (
          <Link className={styles.navigation_link} key={name} href={link}>
            <Typography className={styles.navigation_item}>{name}</Typography>
          </Link>
        ))}
      </Box>
      <Box className={styles.buttons}>
        <Button variant="outlined" className={styles.button}>
          SIGN IN
        </Button>
        <Button
          variant="contained"
          className={(styles.button, styles.connect_wallet)}
        >
          CONNECT WALLET
        </Button>
        <Button variant="outlined" className={styles.button}>
          NETWORK
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
