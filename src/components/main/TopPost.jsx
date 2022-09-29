import React from 'react';
import Carousel from 'utils/Carousel/Carousel';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function TopPost({ hitBoard }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-8/12 pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">주간 인기글</div>
        <Carousel>
          {hitBoard &&
            hitBoard.map((post) => (
              <div key={hitBoard.id} className="h-40 bg-white default_outline">
                <div className="flex justify-between">
                  <div className="w-1/2 ml-4">
                    <div className="w-12 my-2 text-sm text-center rounded-3xl text-defaultColor bg-[#EAECEE]">
                      {hitBoard.tag}
                    </div>
                    <div className="h-20 overflow-hidden text-ellipsis">
                      <div className="text-lg font-bold">{hitBoard.title}</div>
                      <div className="text-[0.9rem]">{hitBoard.content}</div>
                    </div>
                    <div className="absolute flex bottom-4">
                      <div className="flex flex-row mr-2">
                        <AiOutlineComment className="m-auto" />
                        <span>{hitBoard.commentsList.length}</span>
                      </div>
                      <div className="flex flex-row">
                        <AiOutlineHeart className="m-auto" />
                        <span>{hitBoard.likeNums}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img src={post.image} className="w-full h-40 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4 text-center">
          <button
            className="w-48 p-1 mt-4 default_button"
            onClick={() => {
              navigate('/community');
            }}
          >
            다른 글 더 보러가기
          </button>
        </div>
      </div>
    </>
  );
}

export default TopPost;
