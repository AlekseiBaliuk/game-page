import { Modal, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const GameModal = ({ open, onClose }: any) => (
  <Modal
    open={open}
    onClose={onClose}
    sx={{
      zIndex: 1300,
      widt: "100vw",
      height: "100vh",
    }}
  >
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "whte",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 9999,
          color: "white",
          background: "rgba(0,0,0,0.6)",
          "&:hover": {
            background: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <iframe
        src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </Box>
  </Modal>
);
