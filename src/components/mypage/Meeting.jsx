import React from 'react';

export default function Meeting() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="m-4 mt-10 text-xl font-bold">참여중인 모임</div>
        <div className="text-sm text-defaultLine">더 보기</div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {meeting &&
            meeting.map((meeting) => (
              <div
                key={meeting.id}
                className="relative h-40 bg-white shadow-lg default_outline hover:cursor-pointer"
                onClick={() => {
                  navigate(`/meeting/detail/${meeting.id}`);
                }}
              >
                <div className="flex justify-between ">
                  <div className="w-2/3 mt-2 ml-4">
                    <div className="">
                      <span className="font-bold text-defaultColor">모임명 </span>
                      <span className="font-bold">{meeting.title}</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="flex flex-row items-center">
                        <AiOutlineCalendar />
                        <span>&nbsp;일시 : {meeting.meetingStartDate}</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <MdPeopleOutline />
                        <span>
                          &nbsp;참여 인원 : {meeting.nowPeople} / {meeting.limitPeople}
                        </span>
                      </div>
                      <div className="flex flex-row items-center">
                        <GrLocation />
                        <span>&nbsp;장소 : {meeting.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center w-full h-10 p-2 mt-2 text-sm truncate bg-gray-100 rounded-2xl">
                      {meeting.content}
                    </div>
                  </div>
                  {meeting.meetingImage && (
                    <div className="w-1/3 ml-2">
                      <img src={meeting.meetingImage} className="h-40 rounded-lg" alt="이미지" />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
