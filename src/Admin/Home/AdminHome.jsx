import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { baseUrl } from '../../Globals/config';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const [blogs,setBlogs] = React.useState([]);

  const [loading,setLoading] = React.useState(true);

  const [Isdeleting,setIsdeleting] = React.useState(false);

  const [id,setId] = React.useState(null);

  const navigate = useNavigate();

  const deleteBlog = async(id)=> {
    setId(id);
    setIsdeleting(true);
      let res = await axios.delete(`${baseUrl}blog/${id}`);
      getBlogs();
      setIsdeleting(false);
  };

  const getBlogs = async() => {
    let res = await axios.get(`${baseUrl}blog`);
    setBlogs(res.data);
    setLoading(false);
  };



  React.useEffect(() => {
    getBlogs();
  },[]);

  return (
    <Box sx={{width:'95%',margin:'0 auto'}}>
        <Typography variant='h3'sx={{my:3,textAlign:'center'}}>Blogs</Typography>
       {
        loading ? (
          <Box sx={{
            width:'100%',
            height:'60vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'

          }}> 
          <CircularProgress /> 
          </Box>
        ) :  ( <Box sx={{display:'flex',flexWrap:'wrap',gap: 3, alignItems:'center', justifyContent:'center'}}>
        {blogs.map((blog) => {
          return (
            <Card key={blog.id} sx={{ maxWidth: 345}}>
            <CardMedia
              sx={{ height: 140 }}
              image={blog.image}
              // title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom sx={{color:"#aaa",fontSize:'16px'}}>
                @{blog.author}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.description.slice(0,100)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>navigate(`/admin/edit/${blog.id}`)} size="small">edit</Button>
              <Button onClick={()=>deleteBlog(blog.id)} color="warning" size="small">

              {id === blog.id && Isdeleting ? "deleting....." : "delete"}

              </Button>
            </CardActions>
              </Card>
          );
        })}
        </Box>
        )
       }
    </Box>
  );
}
