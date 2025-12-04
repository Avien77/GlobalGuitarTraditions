import React from 'react';

import { Masonry } from 'antd';

const imageList = [
  
  "为什么我们又听起了 City-Pop？_ i-D.jpg",
  
  "download (2).jpg",
  "hiroshi.jpg",
  "Yasuha Fly-Day Chinatown Wallpaper.jpg",
  "Takuya Takahashi - Feel So Cool cassette (1979) city pop Japan.jpg",
  "masayoshi takanaka.jpg",
  "kikuchi momoko.jpg",
  '/Seychelles.jpg',
  "Hear the world’s sounds.jpg",
  "Taeko Ohnuki.jpg",
  "anri.jpg",


];

const App = () => (
  <Masonry
    columns={4}
    gutter={16}
    items={imageList.map((img, index) => ({
      key: `item-${index}`,
      data: img,
    }))}
    itemRender={({ data }) => (
      <img src={data} className = "imageList" alt="sample" style={{ width: '100%' }} />
    )}
  />
);

export default App;