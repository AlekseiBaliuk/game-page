import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const GameModal = ({ open, onClose }: any) => (
  <Modal open={open} onClose={onClose}>
    <div style={{ position: "relative", height: "90vh" }}>
      <IconButton
        onClick={onClose}
        style={{ position: "absolute", right: 10, top: 10, zIndex: 2 }}
      >
        <CloseIcon />
      </IconButton>

      <iframe
        src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
        width="100%"
        height="100%"
      />
    </div>
  </Modal>
);
