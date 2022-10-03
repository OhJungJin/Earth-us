import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import KakaoLogin from 'components/login/KakaoLogin';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import MeetingCarousel from 'utils/Carousel/MeetingCarousel';
import loginSlice from 'redux/modules/loginSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MeetingPage = () => {
  const navigate = useNavigate();
  const loginData = useSelector((state) => {
    return state.login;
  });

  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);

  const tags = ['챌린지', '플로깅', '비건', '재활용', '이모저모(친목)', '반려용품', '기타'];

  const tagHandler = (id) => {
    if (Array.from(selectedTag).indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };

  useEffect(() => {
    if (Array.from(selectedTag).length === 0) {
      apis
        .getAllMeeting()
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log('err', err));
    } else {
      apis
        .searchMeetingTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }
  }, [selectedTag]);

  const [myMeeting, setMyMeeting] = useState([]);
  useEffect(() => {
    apis
      .getMyMeeting()
      .then((res) => {
        console.log('mymeetings', res);
        setMyMeeting(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="pt-20 px-20">
          <div className="flex justify-between py-3">
            <h1 className="text-2xl">참여중인 모임</h1>
            <Button
              onClick={() => {
                loginData.loginState
                  ? navigate('/meeting/create')
                  : alert('로그인하셔야 이용가능합니다');
              }}
            >
              모임 생성
            </Button>
          </div>

          {loginData.loginState ? (
            <MeetingCarousel>
              {myMeeting.map((item) => {
                return (
                  <Link
                    style={{ display: 'flex', width: '20vw' }}
                    to={`/meeting/detail/${item.id}`}
                  >
                    <MeetingCard data={item} />
                  </Link>
                );
              })}
            </MeetingCarousel>
          ) : (
            <div className="w-full flex justify-center">로그인이 필요합니다</div>
          )}
        </div>
        <div className="pt-10 px-20">
          <div>
            <h1 className="text-2xl">태그 목록</h1>
          </div>
          <div className="py-10">
            <StyledTagList>
              {tags.map((tag, index) => (
                <Tag
                  key={tag}
                  tag={tag}
                  id={index + 1}
                  tagHandler={tagHandler}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                />
              ))}
            </StyledTagList>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.map((item) => {
                return (
                  <Link
                    style={{ display: 'flex', width: '320px', height: '550px' }}
                    to={`/meeting/detail/${item.id}`}
                  >
                    <MeetingCard id={item.id} data={item} />
                  </Link>
                );
              })}
          </div>
        </div>
      </Container>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '360px' }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Layout>
  );
};

export default MeetingPage;

const Button = styled.button`
  background-color: #3cc2df;
  color: #ffffff;
  padding: 0.7vw;
  padding-left: 3vw;
  padding-right: 3vw;
  border-radius: 40px;
  margin-top: 7vh;
  margin-right: 3vw;
  transition: 250ms transform;
  &:hover {
    transform: scale(1.03);
  }
`;
const StyledTagList = styled.div`
  display: flex;
  width: 100vw;
`;
