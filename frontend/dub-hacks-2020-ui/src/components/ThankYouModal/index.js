import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.less';
import { Modal, Button } from 'antd';
import thank from '../../assets/thank.png';

const ThankYouModal = () => {

  const showModal = () => {
      setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
      };

const [visible, setVisible] = useState( false )

        return (
          <>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              className="modal"
              footer={null}
              title={null}
              visible={visible}
              onCancel={handleCancel}
            >
            <img className="thankYou" src={thank} />
            </Modal>
          </>
        );
}
export default ThankYouModal;
