import React from 'react';
import badges from 'assets/images/badge';
import ReactTooltip from 'react-tooltip';

function Badge({ myBadge }) {
  const successId = myBadge?.map((myBadge) => myBadge.id);
  console.log(myBadge);
  return (
    <div>
      <div className="m-4 mt-10 text-xl font-bold">획득한 뱃지</div>
      <div className="flex justify-center">
        <div className="grid w-8/12 grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
          {badges.map((badge, index) => (
            <>
              <div
                key={badge.id}
                data-tip={badge.content}
                data-for="myBadge"
                className="flex flex-col items-center justify-center"
              >
                <img
                  className={`w-20 h-20 bg-gray-100 rounded-full ${
                    successId?.includes(index) ? null : 'grayscale'
                  }`}
                  src={badge.image}
                  alt="badgeImage"
                />
                <span className="px-2 mt-2 text-sm shadow-xl rounded-3xl">{badge.title}</span>
              </div>
              <ReactTooltip id="myBadge" getContent={(dataTip) => `${dataTip}`} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badge;
