/* global kakao */
import React, { useEffect } from 'react';
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '40%', height: '40%' }}></div>
    </div>
  );
};

export default Map;
