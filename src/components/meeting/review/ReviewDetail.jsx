import React, { useEffect, useState } from 'react';
import { apis } from 'api/api';
import { useParams } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ReviewDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const user = sessionStorage.getItem('nickname') ? sessionStorage.getItem('nickname') : null;

  useEffect(() => {
    apis
      .getMeetingReview(Number(params.id))
      .then((res) => setReview(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const onDeleteHandler = () => {
    apis
      .deleteMeetingReview(Number(params.id))
      .then((res) => navigate('/review'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 mx-auto max-w-6xl">
        <div className="flex items-center mb-10 justify-between">
          <div className="flex items-center">
            <img
              src={review && review.author.profileImage}
              alt="writerProfile"
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-xl">{review && review.author.nickname}</span>
              <span className="font-light">{review && review.createdAt.split('T')[0]}</span>
            </div>
          </div>
          {review && user === review.author.nickname && (
            <div>
              <span
                className="mr-2 text-gray-400 cursor-pointer hover:text-defaultText"
                onClick={() => navigate(`/review/update/${review.id}`)}
              >
                수정
              </span>
              <span
                className="text-gray-400 cursor-pointer hover:text-defaultText"
                onClick={onDeleteHandler}
              >
                삭제
              </span>
            </div>
          )}
        </div>
        <img
          src={review && review.reviewImage}
          alt="reviewImage"
          className="max-w-4xl max-h-96 mb-10"
        />
        <div className="pb-36">{review && review.content}</div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewDetail;
