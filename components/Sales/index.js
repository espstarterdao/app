import React from "react";
import { Box, Divider, Input, Typography } from "@mui/material";
import ProjectDetails from "/components/ProjectDetails";
import Counters from "/components/Counters";
import ProjectTable from "/components/ProjectTable";
import styles from "./sales.module.css";

function Sales() {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Live and Upcoming Sales</Typography>
      <Box className={styles.live_sale}>
        <img
          className={styles.live_sale_image}
          src="images/ESPStarter_intro.png"
          alt="Project Image"
        ></img>
        <Box className={styles.sale_details}>
          <Box className={styles.sale_title}>
            <Box className={styles.project_details}>
              <img
                width={32}
                height={38}
                src="images/logo.png"
                alt="logo"
              ></img>
              <Typography className={styles.esp_title}>ESPStarter</Typography>
              <Typography className={styles.sale_status}>
                Public Sale
              </Typography>
            </Box>
            <Box className={styles.network_details}>
              <Typography className={styles.network_title}>Network</Typography>
              <img src="images/Aptos_logo.png" alt="Current Network Logo"></img>
            </Box>
          </Box>
          <Box className={styles.coin_details}>
            <Typography className={styles.coin_numbers}>
              Total Raised
              <br />
              100000$
            </Typography>
            <Divider className={styles.dividers} variant="middle" />
            <Typography className={styles.coin_numbers}>
              Rate
              <br />1 USDC 100 ESS
            </Typography>
            <Divider className={styles.dividers} variant="middle" />
            <Typography className={styles.coin_numbers}>
              Supported Coin
              <br />
              USDC
            </Typography>
          </Box>
          <Box className={styles.sale_timing}>
            <Typography>Token Sale Start in</Typography>
            <Typography>
              <span>32D : 30H : 41M : 20S</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.projects_container}>
        <ProjectDetails />
        <ProjectDetails />
        <ProjectDetails />
      </Box>
      <Box className={styles.funded_projects_containers}>
        <Box className={styles.funded_projects_header}>
          <Box className={styles.funded_projects_title}>
            <Typography className={styles.title_text}>
              Funded Projects
            </Typography>
            <Typography className={styles.description_text}>
              We bring new technologies to our community
            </Typography>
          </Box>
          <Counters />
        </Box>
        <Input
          disableUnderline
          className={styles.searchbar_text}
          type="search"
          placeholder="Search by project name, token contract address or token symbol"
        ></Input>
        <ProjectTable />
      </Box>
    </Box>
  );
}

export default Sales;
