import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./Style2.css";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import React from "react";
import ProductDetails from "./ProductDetails";
import { useGetprodactByNameQuery } from "../../Readx/pokemon";
const Main = () => {
  const [alignment, setAlignment] = useState("left");

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  const handleAlignment = (event, newvalue) => {
    setAlignment(newvalue);
    setmyData(newvalue);
  };

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alproudct = "prodacts?populate=*";
  const seconal9 = "prodacts?populate=*&filters[Catgry][$eq]=الاعلى جوده";
  const seconal9121 = "prodacts?populate=*&filters[Catgry][$eq]=الاعلى كفائه";

  const [mydatat, setmyData] = useState(alproudct);

  const { data, error, isLoading } = useGetprodactByNameQuery(mydatat);

  if (isLoading) {
    return (
      <Typography
        // @ts-ignore
        sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        variant="h6"
      >
        جاري تحميل الصفحات الرجاء الانتظار ........
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        // @ts-ignore
        sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        variant="h6"
      >
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }

  if (data) {
    return (
      <Container sx={{ pb: 15 }}>
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          sx={{ mt: 5, justifyContent: "space-between" }}
        >
          <Box mt={5}>
            <Typography
              // @ts-ignore
              sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              variant="h6"
            >
              اخـتـر الـمـنـتـج الانـسـب لـك
            </Typography>
            <Typography
              className="sosom"
              // @ts-ignore
              sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              fontWeight={300}
              variant="body1"
            >
              جـمـيـع مـنـتـجـاتـنـا الـجـديـدة فـي مـجـمـوعـة حـصـريـة مـن
              الـعـلامـات الـتـجـاريـة{" "}
            </Typography>
          </Box>

          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
              gap: 1,
            }}
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              className="myButton
              "
              // @ts-ignore
              sx={{
                fontWeight: "bold",
                // @ts-ignore
                color: theme.palette.text.primary,
                mt: 5,
              }}
              color="error"
              value={alproudct}
              aria-label="left aligned"
            >
              كــل الـعـنـاصـر
            </ToggleButton>
            <ToggleButton
              className="myButton
              "
              // @ts-ignore
              sx={{
                fontWeight: "bold",
                // @ts-ignore
                color: theme.palette.text.primary,
                mt: 5,
              }}
              color="error"
              value={seconal9}
              aria-label="centered"
            >
              الاعـلـى جـوده
            </ToggleButton>
            <ToggleButton
              className="myButton
              "
              // @ts-ignore
              sx={{
                fontWeight: "bold",
                // @ts-ignore
                color: theme.palette.text.primary,
                mt: 5,
              }}
              color="error"
              value={seconal9121}
              aria-label="right aligned"
            >
              الاعـلـى كـفـائـه
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          mt={5}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 300,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 288, width: 300 }}
                  // @ts-ignore
                  image={`${item.attributes.imges.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography
                      mb={1}
                      gutterBottom
                      // @ts-ignore
                      variant="h7"
                      component="div"
                    >
                      {item.attributes.title}
                    </Typography>

                    <Typography
                      mb={0.6}
                      color={"green"}
                      variant="subtitle1"
                      component="p"
                    >
                      {item.attributes.numperofprodact}$
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.descrbtiom}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    size="large"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1, fontSize: "27px" }}
                    />
                    PAY NOW
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.riting}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <
// @ts-ignore
          ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
