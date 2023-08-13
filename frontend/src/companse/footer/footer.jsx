import { Box,  Button,  Typography } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        
      }}
    >
      <Typography
    id="omarekoioi"
      
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
    id="omarekoioi"
        
         
          // @ts-ignore
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            
          }}
        
         href="https://omareko121.github.io/omarekoo/ " target="_blank"
          variant="text"
          color="primary"
        >
          OMAR WALEED
        </Button>
        
        ©2023
      </Typography>
    </Box>
  );
};

export default Footer;
