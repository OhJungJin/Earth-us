import React, { useState, useEffect } from 'react';
import Navbar from 'components/navbar/Navbar';
import Dailymission from 'components/main/Dailymission';
import { api, apis } from 'api/api';
import TopPost from 'components/main/TopPost';
import Meeting from 'components/main/Meeting';
import Banner from 'components/banner/Banner';
import Footer from 'components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  const [mission, setMission] = useState();
  const [hitBoard, sethitBoard] = useState();
  const [meeting, setMeeting] = useState();

  useEffect(() => {
    apis.getMainPage().then((res) => {});
    apis.getMainMission().then((res) => setMission(res.data));
    apis.getMainMeeting().then((res) => {
      setMeeting(res.data);
      console.log(res.data);
    });
    apis.getMainHitBoard().then((res) => console.log(res));
  }, []);

  const checkDailyMission = () => {
    apis.postDailiyMissionCheck().then((res) => {
      console.log(res.error);
    });
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <Navbar />
      <ToastContainer />

      <Banner />
      <Dailymission mission={mission} checkDailyMission={checkDailyMission} />
      <TopPost hitBoard={hitBoard} />
      <Meeting meeting={meeting} />
      <Footer />
      {/* <LoginGoogle /> */}
    </div>
  );
}

export default MainPage;
