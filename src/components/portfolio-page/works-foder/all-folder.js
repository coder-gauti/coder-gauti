import React, { Fragment, useState } from 'react'
import "./all-folder.scss";
import CommonFolderCard from './common-card-folder/folder-common-card'
import proImg from "..//..//assets/my-img.jpg"
import CardFolderOpener from './common-card-folder/card-folder-opener/card-folder-opener';
import { Button, Modal, Table } from 'antd';

const AllFolder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({});
  const showModal = (title, varibleName) => {
    setIsModalOpen(true);
    setCurrentModalData({ title, varibleName })
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='all-works-pages'>
      {/* <div className=''> */}

      <CommonFolderCard title="Select Project" src={proImg} onClick={() => showModal("Select Project", "Modal Tech")} />

      <CommonFolderCard />
      <CommonFolderCard />
      <Modal className='modal-card' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <CardFolderOpener title={currentModalData.title} varibleName={currentModalData.varibleName} />
      </Modal>

      {/* </div>
        <div>

        </div>
        <div> */}

      {/* </div> */}

    </div>
  )
}

export default AllFolder