interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  itemData: {
    title: string;
    image: string;
    url: string;
    price: number;
    discountPrice?: number;
    currency: string;
    brand: string;
  };
}

const Modal = ({ setOpenModal, itemData }: ModalProps) => {
  return (
    <div className='ModalWindow'>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
        className='ModalWindow_closeButton'
      >
        Close
      </button>
      <div className='ModalWindow_itemContainer'>
        <p className='ModalWindow_itemTitle'>{itemData.title}</p>
        <img
          src={itemData.image}
          alt='Shoe photo in modal window'
          className='ModalWindow_itemImage'
        />
        <p className='ModalWindow_itemBrand'>
          Brand: {itemData.brand.toUpperCase()}
        </p>
        <div>
          <p>
            Price: {itemData.price}
            {` `} {itemData.currency}
          </p>
          {itemData.discountPrice && (
            <p>
              Discount price: {itemData.discountPrice}
              {` `} {itemData.currency}
            </p>
          )}
        </div>

        <a href={itemData.url} className='ModalWindow_itemButton'>
          View in store
        </a>
      </div>
    </div>
  );
};

export default Modal;
