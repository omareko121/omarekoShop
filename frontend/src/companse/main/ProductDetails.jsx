import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const ProductDetails = () => {
  



  return (
    <Box  sx={{display: "flex" , alignItems: "center" , gap:2.5 , flexDirection:{xs: "column" , sm: "row"} }}>
      <Box  display={'flex'}><img height={300} width={340} src="./src/imges/K5lzly01.svg" alt=""  /></Box>
      <Box flexDirection={"column"} sx={{textAlign:{xs: "center" , sm:"left"}}}>
      <Typography variant="h5">
          Wemoaqw detel
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.12
                </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel ea aspernatur dignissimos facere et excepturi, magni soluta ipsam. Distinctio nulla fugiat, porro natus voluptatum ut debitis hic repudiandae libero!

                </Typography>


                <Button
          sx={{ mb: { xs: 4, sm: 3 },  textTransform: "capitalize" , mt:3 }}
          variant="contained"
          href="" target="_blank"
        >

          
          <AddShoppingCartOutlined sx={{ mr: 1 ,  }} fontSize="small" />
          Buy now
          
        </Button>
      </Box>

      
        
    </Box>

    

    
  );
}

export default ProductDetails;
