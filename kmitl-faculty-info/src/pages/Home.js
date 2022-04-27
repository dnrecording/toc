// import React, { useState, useEffect } from "react";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Card from '@mui/material/Card';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 1000,
//   p: 4,
// };

// export default function Home() {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch("Faculty of Information Technology.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (myJson) {
//         setData(myJson);
//       });
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   const [open, setOpen] = React.useState(false);
//   const [faculty, setFaculty] = React.useState({});
//   const [major, setMajor] = React.useState({});
//   const [fee, setFee] = React.useState({});
//   const [degree, setDegree] = React.useState({});
//   const [whyApply, setWhyApply] = React.useState({});

//   const handleOpen = () => {
//     setOpen(true);
//     setFaculty("คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี");
//     setMajor("ครุศาสตร์การออกแบบ");
//     setFee("19,000");
//     setDegree("ค.อ.บ.");
//     setWhyApply("กระบวนการ “Learning how to Learn Design” “เรียนเพื่อเรียนรู้ด้านการออกแบบ” เพราะหนึ่งในคุณสมบัติที่ดีเพื่อการปรับตัวอยู่รอดให้ได้ในยุคนี้ คือการเป็นคนที่ต้องเรียนรู้อยู่ตลอดเวลาการจะเรียนรู้สิ่งต่างๆได้ดี มีประสิทธิภาพ ก็ต้องเริ่มจากการรู้ว่า “วิธีการเรียนที่ดี” นั้นเป็นอย่างไร ซึ่งหลักสูตรครุศาสตร์การออกแบบได้มุ่งเน้นพัฒนาเนื้อหาและรูปแบบวิธีการเรียนการสอนที่เข้มข้นในการพัฒนาบุคลากรด้านการศึกษาและด้านการออกแบบอย่างบูรณาการ เพื่อที่จะสามารถตอบสนองต่อการพัฒนากำลังคนสำหรับการพัฒนาประเทศอย่างยั่งยืน");
//   }
//   const handleClose = () => setOpen(false);

//   return (
//     <div className="myTable">
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Card sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize: 40 }}>
//             {faculty}
//           </Typography>
//           <div style={{display: "flex", flexDirection: "row"}}>
//             <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18}}>
//               วุฒิการศึกษา : 
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2, ml: 1, fontSize: 18}}>
//               {degree}
//             </Typography>
//           </div>
//           <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18 }}>
//             ทำไมต้องเรียน {degree} {major} ที่ สจล. ?
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 1, ml: 1, fontSize: 18}}>
//             {whyApply}
//           </Typography>
//           <div style={{display: "flex", flexDirection: "row"}}>
//             <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18 }}>
//               ค่าธรรมเนียมการศึกษา : 
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2, ml: 1, fontSize: 18}}>
//               {fee} บาท
//             </Typography>
//           </div>
//         </Card>
//       </Modal>
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
    ,marginTop : 60
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
    ,marginTop : 100
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{height:120}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          
          <div style={{marginLeft:125}}>
          <Typography variant="h6" noWrap style={{fontSize:40}}>
            คณะ
          </Typography>
          </div>

          <div style={{marginLeft:"47vw"}}>
            
          <Typography variant="h6" noWrap style={{fontSize:40}}>
            สาขาวิชา
          </Typography>
            
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={isMdUp ? "permanent" : "temporary"}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["วิศวกรรมศาสตร์", "สถาปัตยกรรม ศิลปะและการออกแบบ", "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี", "เทคโนโลยีการเกษตร", "วิทยาศาสตร์","อุตสาหกรรมอาหาร","เทคโนโลยีสารสนเทศ","บริหารธุรกิจ","ศิลปศาสตร์","แพทยศาสตร์","วิทยาศาสตร์ประยุกต์และการบริหารธุรกิจ" ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText disableTypography 
              primary={<Typography style={{fontSize:25 }}>{text}</Typography>} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        
        <Typography component="h2" variant="h6" gutterBottom>
          On small and extra-small screens the sidebar/drawer is temporary and
          can be opened via the menu icon in the toolbar.
        </Typography>
        <Typography component="h2" variant="h6" gutterBottom>
          On medium, large, and extra-large screens the sidebar/drawer is
          permanent and there is no menu icon in the toolbar.
        </Typography>
        <hr />
        <Typography paragraph >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

