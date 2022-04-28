import React, { useState, useEffect } from "react";
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
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  p: 4,
};

const cardStyle = {
  marginTop: '50px',
  marginLeft: '500px',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

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
    , marginTop: 60
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
    , marginTop: 175
    , marginLeft: -150
    , marginRight: 200
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

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [faculty, setFaculty] = React.useState({});
  const [major, setMajor] = React.useState({});
  const [fee, setFee] = React.useState({});
  const [degree, setDegree] = React.useState({});
  const [whyApply, setWhyApply] = React.useState({});

  const [menuState, setMenuState] = React.useState(0);

  // const getData = () => {
  //   fetch("School of Engineering.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       setData(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const fetchData = (index) => {
    setMenuState(index);
    var file = "";

    switch (index) {
      case 0:
        file = "School of Engineering";
        break;
      case 1:
        file = "School of Architecture, Art and Design";
        break;
      case 2:
        file = "School of Industry Education and Technology";
        break;
      case 3:
        file = "School of Agricultural Technology";
        break;
      case 4:
        file = "School of Science";
        break;
      case 5:
        file = "School of Food Industry";
        break;
      case 6:
        file = "Faculty of Information Technology";
        break;
      case 7:
        file = "KMITL Business School";
        break;
      case 8:
        file = "Faculty of Liberal Arts";
        break;
      case 9:
        file = "Faculty of Medicine";
        break;
      case 10:
        file = "Faculty of Applied Science and Business Administration";
        break;
      default :
        file = ""
        break;
    }

    fetch(file + ".json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  const handleOpenModal = (i) => {
    setOpenModal(true);
    setFaculty(data[i].Faculty);
    setMajor(data[i].Major);
    setFee(data[i].Fee);
    setDegree(data[i].Degree);
    setWhyApply(data[i].WhyApply);
  }

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ height: 120 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <div style={{ marginLeft: 130 }}>
            <Typography variant="h6" noWrap style={{ fontSize: 40 }}>
              คณะ
            </Typography>
          </div>

          <div style={{ marginLeft: "43vw" }}>

            <Typography variant="h6" noWrap style={{ fontSize: 40 }}>
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
          {["วิศวกรรมศาสตร์", "สถาปัตยกรรม ศิลปะและการออกแบบ", "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี", "เทคโนโลยีการเกษตร", "วิทยาศาสตร์", "อุตสาหกรรมอาหาร", "เทคโนโลยีสารสนเทศ", "บริหารธุรกิจ", "ศิลปศาสตร์", "แพทยศาสตร์", "วิทยาศาสตร์ประยุกต์และการบริหารธุรกิจ"].map((text, index) => (
            <ListItem button key={text} onClick={(e) => fetchData(index, e)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {menuState === index ?
                <ListItemText disableTypography
                primary={<Typography style={{ fontSize: 25, fontWeight: 700 }}>{text}</Typography>} />
              : 
                <ListItemText disableTypography
                primary={<Typography style={{ fontSize: 25 }} onClick={(e) => fetchData(index, e)}>{text}</Typography>} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      <div class="grid grid-cols-2">
        {data && data.length ?
          data.map((item, i) => (
            <Card sx={cardStyle} onClick={(e) => handleOpenModal(i, e)}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: 30 }}>
                {item.Faculty}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: 20 }}>
                {item.Major}
              </Typography>
            </Card>
          ))
          : ""}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: 40 }}>
              {faculty}
            </Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography id="modal-modal-description" style={{ marginTop: '10px', fontWeight: 600, fontSize: 18 }}>
                วุฒิการศึกษา :
              </Typography>
              <Typography id="modal-modal-description" style={{ marginTop: '10px', marginLeft: '10px', fontSize: 18 }}>
                {degree}
              </Typography>
            </div>
            <Typography id="modal-modal-description" style={{ marginTop: '20px', fontWeight: 600, fontSize: 18 }}>
              ทำไมต้องเรียน {degree} {major} ที่ สจล. ?
            </Typography>
            <Typography id="modal-modal-description" style={{ marginTop: '5px', marginLeft: '10px', fontSize: 18 }}>
              {whyApply}
            </Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography id="modal-modal-description" style={{ marginTop: '20px', fontWeight: 600, fontSize: 18 }}>
                ค่าธรรมเนียมการศึกษา :
              </Typography>
              <Typography id="modal-modal-description" style={{ marginTop: '20px', marginLeft: '10px', fontSize: 18 }}>
                {fee} บาท
              </Typography>
            </div>
          </Card>
        </Modal>
        </div>
      </main>
    </div>
  );
}

