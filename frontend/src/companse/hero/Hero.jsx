import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme()
  return (
    <Container sx={{ mt: 4, display: "flex", alignItems: "center", gap: 2 , pt:5 }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="parent-slider"  >
          <img src="src/imges/img2.jpg" alt="" />

          <Box 
          sx={{
            // @ts-ignore
            [theme.breakpoints.up("sm")]: {
              position: "absolute",
              left: "10%",
              top: '30%',
              textAlign: "left",
            },

            // @ts-ignore
            [theme.breakpoints.down("sm")]: {
              pt: 4,
              pb: 6,
            },
          }}
          
          // sx={{position: 'absolute' , left:"5%" , top:"30%"}} 
          
          >
      
                  <Typography
                    sx={{
                      color: "#222",
                      fontSize:"30px",
                      mb:2,
                    }}
                    variant="h4"
                  >
                    عـروض لـ فـتـره مـحـدوده
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                  
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography
                      
                    color={"#D23F57"} variant="h5">
                      30%  
                    </Typography>

                    <Typography 
                  
                    color={"#333"} mr={1} paddingLeft={1} variant="h5">
                      خـصـومـات تـصـل الـى  
                    </Typography>
                    
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      my: 1,
                      mt:2,
                    }}
                    variant="body1"
                  >
                      شحن مجاني للطلبات التي تزيد عن 99.00 دولارًا

                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
          </Box>
        </SwiperSlide>

    


        

      
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        <Box sx={{ position: "relative" }}>
          <img
            src="src/imges/366063266_287801573840733_7645371574768797454_n.jpg"
            height={"220px"}
            width={"100%"}
            alt=""
          />

          <Stack
            sx={{
              position: "absolute",
              top: "10%",
              transform: "TranslateY(-20)",
              left: 7,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
                mb: 1,
              }}
            >
              FOR YOU
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                mt: 3,

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img
            src="src/imges/img1.jpg"
            height={"220px"}
            width={"100%"}
            alt=""
          />

          <Stack
            sx={{
              position: "absolute",
              top: "10%",
              transform: "TranslateY(-30)",
              left: 5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              SPECIAL OFFERS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              FOR YOU
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                mt: 1,
              }}
            >
              SALE 50% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                mt: 3,

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href=""
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
