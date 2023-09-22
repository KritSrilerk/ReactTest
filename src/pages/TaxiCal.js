import React, { useEffect , useState } from "react";
import logo from "../images/taxi.png";

function TaxiCal() {
  const [taxical, setTaxiCal] = useState("?????");
  const [distance, setdistance] = useState(0);
  const [time, setTime] = useState(0);
  const [costdistance, SetCostDistance] = useState(0);
  const [fourty, setFourty] = useState(0);

  useEffect(()=>{
    calTaxi();
  }, [distance, time,costdistance]);

  const handleChangeDistance = (e) => {
    e.target.value === "" ? setdistance(0) : setdistance(e.target.value);
  };

  const handleChangeTime = (e) => {
    e.target.value === "" ? setTime(0) : setTime(e.target.value);
  };

  const handleClickTotalScore = () => {
    calTaxi();
  };

  const calTaxi = () => {
    setTaxiCal(
      parseFloat(fourty) + (parseFloat(costdistance) * parseFloat(distance)) + (parseFloat(time) * 3.0)
    );
    setFourty(
      parseFloat(distance) > 1
        ? "40":0
    );
    SetCostDistance(
      parseFloat(distance) > 80
        ? "10.50"
        : parseFloat(distance) > 60
        ? "9.00"
        : parseFloat(distance) > 40
        ? "8.50"
        : parseFloat(distance) > 20
        ? "8.00"
        : parseFloat(distance) > 10
        ? "7.00"
        : "6.50"
    );

  };

  return (
    <div>
      <img src={logo} height={150} width={150} />
      <br />
      <br />
      ระยะทาง <input type="number" onChange={handleChangeDistance} />{" "}
      &nbsp;&nbsp;กิโลเมตร
      <br />
      <br />
      ระยะเวลารถติด <input type="number" onChange={handleChangeTime} />{" "}
      &nbsp;&nbsp; นาที
      <br />
      <br />
      <button onClick={handleClickTotalScore}>คำนวณ</button>
      <br />
      <br />
      ค่าแท็กซี่คิดเป็นเงิน <span className="txtcaltaxi">{taxical}</span> บาท
    </div>
  );
}

export default TaxiCal;
