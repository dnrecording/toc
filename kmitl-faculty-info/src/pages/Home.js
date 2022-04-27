import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  p: 4,
};

export default function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("Faculty of Information Technology.json", {
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

  const [open, setOpen] = React.useState(false);
  const [faculty, setFaculty] = React.useState({});
  const [major, setMajor] = React.useState({});
  const [fee, setFee] = React.useState({});
  const [degree, setDegree] = React.useState({});
  const [whyApply, setWhyApply] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
    setFaculty("คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี");
    setMajor("ครุศาสตร์การออกแบบ");
    setFee("19,000");
    setDegree("ค.อ.บ.");
    setWhyApply("กระบวนการ “Learning how to Learn Design” “เรียนเพื่อเรียนรู้ด้านการออกแบบ” เพราะหนึ่งในคุณสมบัติที่ดีเพื่อการปรับตัวอยู่รอดให้ได้ในยุคนี้ คือการเป็นคนที่ต้องเรียนรู้อยู่ตลอดเวลาการจะเรียนรู้สิ่งต่างๆได้ดี มีประสิทธิภาพ ก็ต้องเริ่มจากการรู้ว่า “วิธีการเรียนที่ดี” นั้นเป็นอย่างไร ซึ่งหลักสูตรครุศาสตร์การออกแบบได้มุ่งเน้นพัฒนาเนื้อหาและรูปแบบวิธีการเรียนการสอนที่เข้มข้นในการพัฒนาบุคลากรด้านการศึกษาและด้านการออกแบบอย่างบูรณาการ เพื่อที่จะสามารถตอบสนองต่อการพัฒนากำลังคนสำหรับการพัฒนาประเทศอย่างยั่งยืน");
  }
  const handleClose = () => setOpen(false);

  return (
    <div className="myTable">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize: 40 }}>
            {faculty}
          </Typography>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18}}>
              วุฒิการศึกษา : 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, ml: 1, fontSize: 18}}>
              {degree}
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18 }}>
            ทำไมต้องเรียน {degree} {major} ที่ สจล. ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, ml: 1, fontSize: 18}}>
            {whyApply}
          </Typography>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600, fontSize: 18 }}>
              ค่าธรรมเนียมการศึกษา : 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, ml: 1, fontSize: 18}}>
              {fee} บาท
            </Typography>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
