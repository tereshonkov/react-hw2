import React from 'react'
import ModalWrapper from '../Modal/ModalWrapper/ModalWrapper';
import styles from './ModalText.module.scss'
import ModalBody from '../Modal/ModalBody/ModalBody';
import styleBody from '../Modal/ModalBody/ModalBody.module.scss';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';
import ModalClose from '../Modal/ModalClose/ModalClose';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function ModalText({firstClick, isShowSecond, setIsShowSecond, array = [], selectedProductId, addToCart, id, firstText}) {
    if(!isShowSecond) {
        return null;
    }
    const selectFirstClick = () => {
        console.log(`This is select first click`);
    }
  return (
    <div className={styles.wrapper} isShowSecond={isShowSecond} onClick={() => {setIsShowSecond(false)}}>
        <ModalWrapper setIsShowSecond={setIsShowSecond}>
        <ModalBody>
            <h3 className={styleBody.body__header}>
            Add Product {array.filter(el => el.id === selectedProductId).map(el => <p key={el.id}>{el.name}</p>)}
        </h3>
        {/* <p className={styleBody.body__text}> */}
        {array.filter(el => el.id === selectedProductId).map(el => <p className={styleBody.body__text} key={el.id}>{el.description}</p>)}
        {/* </p> */}
            </ModalBody>
            <ModalFooter
                                firstText={firstText} 
                                firstClick={firstClick}
                                componentName="ModalText"
            ></ModalFooter>
                <ModalClose setIsShowSecond={setIsShowSecond} componentName="ModalText"></ModalClose>
        </ModalWrapper>
    </div>
  )
}

ModalText.propTypes = {
    isShowSecond: PropTypes.bool.isRequired,
    setIsShowSecond: PropTypes.func.isRequired,
    array: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        description: PropTypes.string
      })
    ).isRequired,
    selectedProductId: PropTypes.string,
    addToCart: PropTypes.func.isRequired,
    id: PropTypes.string
  };