interface ItemProps {
  item: {
    title: string;
    image: string;
    url: string;
    price: number;
    discountPrice?: number;
    currency: string;
    brand: string;
  };
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClickedData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      image: string;
      url: string;
      price: number;
      discountPrice?: number;
      currency: string;
      brand: string;
    }>
  >;
}

const Item = ({ item, setOpenModal, setClickedData }: ItemProps) => {
  return (
    <div
      onClick={() => {
        setOpenModal(true);
        setClickedData(item);
      }}
      className='Item'
    >
      <img src={item.image} alt='Shoe photo' className='Item_image' />
      <div className='Item_titleContainer'>
        <p className='Item_title'>{item.title}</p>
      </div>
    </div>
  );
};

export default Item;
