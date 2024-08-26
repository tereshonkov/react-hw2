import React from 'react'
import ModalWrapper from '../Modal/ModalWrapper/ModalWrapper';
import styles from './ModalText.module.scss'
import ModalBody from '../Modal/ModalBody/ModalBody';
import styleBody from '../Modal/ModalBody/ModalBody.module.scss';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';
import ModalClose from '../Modal/ModalClose/ModalClose';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShow } from '../../redux/slices/modalSlices';

export default function ModalText({firstClick,selectedProductId, firstText}) {

  const isModalShow = useSelector(state => state.showModal.isShow);
  const array = useSelector(state => state.products.data);
  const dispatch = useDispatch();

    if(!isModalShow) {
        return null;
    }

  return (
    <div className={styles.wrapper} onClick={() => {dispatch(setIsShow(false))}}>
        <ModalWrapper >
        <ModalBody>
            <h3 className={styleBody.body__header}>
            Add Product {array.filter(el => el.id === selectedProductId).map(el => <p key={el.id}>{el.name}</p>)}
        </h3>
        {array.filter(el => el.id === selectedProductId).map(el => <p className={styleBody.body__text} key={el.id}>{el.description}</p>)}
            </ModalBody>
            <ModalFooter
                                firstText={firstText} 
                                firstClick={firstClick}
                                componentName="ModalText"
            ></ModalFooter>
                <ModalClose componentName="ModalText"></ModalClose>
        </ModalWrapper>
    </div>
  )
}

ModalText.propTypes = {
  firstClick: PropTypes.func,
  selectedProductId: PropTypes.number,
  firstText: PropTypes.string,
};