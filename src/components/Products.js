import React from 'react'
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Container } from '@mui/material'
import headphones from '../images/headphones.jpg'
import lipstick from '../images/lipstick.jpg'
import sneakers from '../images/sneakers.jpg'
import sunglasses from '../images/sunglasses.jpg'

const Products = () => {
  return (
    <Container sx={{ flexGrow: 1, marginBottom: 8 }}>
      <Typography margin={5} variant="h3">Products</Typography>
      <Grid container 
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row" 
        justifyContent="space-evenly"
        alignItems="center">
          <Grid item xs={2} sm={4} md={4} padding={1}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image={headphones}
                alt="headphones"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Headphone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  They are electroacoustic transducers, which convert an electrical signal to 
                  a corresponding sound. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}  padding={1}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image={lipstick}
                alt="lipstick"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Lipstick
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Lipstick is a cosmetic product used to apply coloration and texture 
                  to lips, often made of wax and oil. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}  padding={1}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image={sneakers}
                alt="sneakers"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Sneakers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Sneakers are made for exercise and sports, but they're 
                  also very popular everyday shoes because they're so comfortable
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={1}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                alt="sunglasses"
                image={sunglasses}
                
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Sunglasses
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Sunglasses are a form of protective eyewear designed primarily to 
                  prevent bright sunlight and high-energy visible light from damaging or 
                  discomforting the eyes.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      </Grid>
    </Container>
  )
}

export default Products