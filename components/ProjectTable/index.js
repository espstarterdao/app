import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./projectTable.module.css";

function ProjectTable() {
  return (
    <Table className={styles.table}>
      <TableHead className={styles.head}>
        <TableRow>
          <TableCell className={styles.head_cell}>Project Name</TableCell>
          <TableCell className={styles.head_cell}>Type</TableCell>
          <TableCell className={styles.head_cell}>Participants</TableCell>
          <TableCell className={styles.head_cell}>Total Raised</TableCell>
          <TableCell className={styles.head_cell}>Current Price</TableCell>
          <TableCell className={styles.head_cell}>ATH Since IDO</TableCell>
          <TableCell className={styles.head_cell}>Token Sale</TableCell>
          <TableCell className={styles.head_cell}>Chain</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className={styles.project_cell}>
            <img src="images/logo.png" alt="ESPStarter"></img>
            <Box>
              <Typography>ESPStarter</Typography>
              <Typography>
                <span>$ESS</span>
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Box className={styles.type_cell_box_dex}>
              <Typography className={styles.type_cell_typo_dex}>
                Initial Dex Offering
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Typography className={styles.participants_cell_typo}>
              ---
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.total_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.price_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.ath_cell_typo}>0x</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.token_cell_typo_community}>
              Community
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.chain_cell_typo}>APTOS</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.project_cell}>
            <img src="images/logo.png" alt="ESPStarter"></img>
            <Box>
              <Typography>ESPStarter</Typography>
              <Typography>
                <span>$ESS</span>
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Box className={styles.type_cell_box_nft}>
              <Typography className={styles.type_cell_typo_nft}>
                Initial NFT Offering
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Typography className={styles.participants_cell_typo}>
              ---
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.total_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.price_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.ath_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.token_cell_typo_public}>
              Public
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.chain_cell_typo}>APTOS</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.project_cell}>
            <img src="images/logo.png" alt="ESPStarter"></img>
            <Box>
              <Typography>ESPStarter</Typography>
              <Typography>
                <span>$ESS</span>
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Box className={styles.type_cell_box_game}>
              <Typography className={styles.type_cell_typo_game}>
                Initial Game Offering
              </Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Typography className={styles.participants_cell_typo}>
              ---
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.total_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.price_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.ath_cell_typo}>---</Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.token_cell_typo_public}>
              Public
            </Typography>
          </TableCell>
          <TableCell>
            <Typography className={styles.chain_cell_typo}>APTOS</Typography>
          </TableCell>
        </TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
      </TableBody>
    </Table>
  );
}

export default ProjectTable;
