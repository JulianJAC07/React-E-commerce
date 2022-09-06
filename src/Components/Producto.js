import * as React from 'react';
import Grid from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';
import { ClassNames } from '@emotion/react';
import accounting from 'accounting'

export default function Producto() {
  return (
    <Card sx={{ maxWidth: 345, padding: '10px' }}>
      <CardActionArea>
        
        <CardHeader action={<Typography className={ClassNames.action}
        variant='h5'
        color='textSencondary'>

          {accounting.formatMoney(20)} 
        
        </Typography>}/>
        
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg" //aca va la imagen del producto
          alt="green iguana"
        />
        
        <CardContent>
            
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        
        </CardContent>
      
      </CardActionArea>
    
    </Card>
  );
}
