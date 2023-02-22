import { useEffect, useState } from 'react';
import { getImagesData } from '../../services';

import Item from '../Item/Item';
import Modal from '../Modal/Modal';

type Image = {
  title: string;
  image: string;
  url: string;
  price: number;
  discountPrice?: number;
  currency: string;
  brand: string;
};

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<Image[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [displayData, setDisplayData] = useState(
    galleryData.slice(startIndex, startIndex + 8)
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({} as Image);

  useEffect(() => {
    getImagesData().then((result) => {
      setGalleryData(result);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (startIndex + 8) % galleryData.length;
      setStartIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex, galleryData]);

  useEffect(() => {
    setDisplayData(galleryData.slice(startIndex, startIndex + 8));
  }, [startIndex, galleryData]);

  return (
    <div className='Gallery'>
      <p className='Gallery_title'>Sole</p>
      {modalOpen && <Modal setOpenModal={setModalOpen} itemData={modalData} />}
      <div className='Gallery_itemContainer'>
        {displayData.map((item, index) => (
          <Item
            key={index}
            item={item}
            setOpenModal={setModalOpen}
            setClickedData={setModalData}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
