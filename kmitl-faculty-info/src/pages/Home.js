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
import MenuIcon from "@material-ui/icons/Menu";
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import { FaWrench, FaBookOpen, FaIndustry, FaPaintBrush } from 'react-icons/fa';
import { MdScience, MdBusinessCenter, MdSettingsInputAntenna, MdDraw } from 'react-icons/md';
import { RiPlantFill, RiBankFill } from 'react-icons/ri';
import { AiFillMedicineBox } from 'react-icons/ai';
import TextField from '@mui/material/TextField';

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
    , marginRight: 200,
  },
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

  const [searchValue, setsearchValue] = useState("");
  const [menuState, setMenuState] = React.useState(0);

  const getData = () => {
    fetch("School of Engineering.json", {
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
  useEffect(() => {
    getData();
  }, []);

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

  function searchMajor() {
    console.log(document.getElementById("textsearch").value);
    setsearchValue(document.getElementById("textsearch").value);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ height: 120, backgroundColor: "#fe7c1c"}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <div style={{ marginLeft: 130 }}>
            <Typography variant="h6" noWrap style={{ fontSize: 40}}>
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
        <div className="searchForm">
            <TextField id="textsearch" label="ค้นหา สาขาวิชา" variant="outlined" style={{marginTop: "15px", marginLeft: "20px", width: "300px", borderColor: "#fe7c1c"}} onChange = {searchMajor}/>
          </div>
        <List>
          {["วิศวกรรมศาสตร์", "สถาปัตยกรรม ศิลปะและการออกแบบ", "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี", "เทคโนโลยีการเกษตร", "วิทยาศาสตร์", "อุตสาหกรรมอาหาร", "เทคโนโลยีสารสนเทศ", "บริหารธุรกิจ", "ศิลปศาสตร์", "แพทยศาสตร์", "วิทยาศาสตร์ประยุกต์และการบริหารธุรกิจ"].map((text, index) => (
            <ListItem button key={text} onClick={(e) => fetchData(index, e)}>
              <ListItemIcon style={{fontSize: "30px"}}>
                {index === 0 ?
                  <>
                    {menuState === index ?
                      <FaWrench style={{color: "#000000"}}/>
                    : <FaWrench />}
                  </>
                : ""}
                {index === 1 ?
                  <>
                    {menuState === index ?
                      <MdDraw style={{color: "#000000"}}/>
                    : <MdDraw />}
                  </>
                : ""}
                {index === 2 ?
                  <>
                    {menuState === index ?
                      <FaBookOpen style={{color: "#000000"}}/>
                    : <FaBookOpen />}
                  </>
                : ""}
                {index === 3 ?
                  <>
                    {menuState === index ?
                      <RiPlantFill style={{color: "#000000"}}/>
                    : <RiPlantFill />}
                  </>
                : ""}
                {index === 4 ?
                  <>
                    {menuState === index ?
                      <MdScience style={{color: "#000000"}}/>
                    : <MdScience />}
                  </>
                : ""}
                {index === 5 ?
                  <>
                    {menuState === index ?
                      <FaIndustry style={{color: "#000000"}}/>
                    : <FaIndustry />}
                  </>
                : ""}
                {index === 6 ?
                  <>
                    {menuState === index ?
                      <MdSettingsInputAntenna style={{color: "#000000"}}/>
                    : <MdSettingsInputAntenna />}
                  </>
                : ""}
                {index === 7 ?
                  <>
                    {menuState === index ?
                      <MdBusinessCenter style={{color: "#000000"}}/>
                    : <MdBusinessCenter />}
                  </>
                : ""}
                {index === 8 ?
                  <>
                    {menuState === index ?
                      <FaPaintBrush style={{color: "#000000"}}/>
                    : <FaPaintBrush />}
                  </>
                : ""}
                {index === 9 ?
                  <>
                    {menuState === index ?
                      <AiFillMedicineBox style={{color: "#000000"}}/>
                    : <AiFillMedicineBox />}
                  </>
                : ""}
                {index === 10 ?
                  <>
                    {menuState === index ?
                      <RiBankFill style={{color: "#000000"}}/>
                    : <RiBankFill />}
                  </>
                : ""}
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
      <div className="grid grid-cols-2">
        {data && data.length ?
          data.map((item, i) => (
            <>
              {item.Major.includes(searchValue) ?
                <Card sx={cardStyle} onClick={(e) => handleOpenModal(i, e)}>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: 30 }}>
                    {item.Faculty}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: 20 }}>
                    {item.Major}
                  </Typography>
                </Card>
              : ""}
            </>
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

