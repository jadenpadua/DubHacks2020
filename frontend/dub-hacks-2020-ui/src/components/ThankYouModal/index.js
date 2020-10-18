import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.less';
import { Modal, Button } from 'antd';
import thank from '../../assets/thank.png';

const ThankYouModal = (props) => {

  


        return (
          <>
            <Modal
              className="modal"
              footer={null}
              title={null}
              visible={props.visible}
              onCancel={props.handleCancel}
            >
            <img className="thankYou" src={thank} />
            </Modal>
          </>
        );
}
export default ThankYouModal;
