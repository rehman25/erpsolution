import React, {useState} from "react";
import style from "./AddSuppliers.module.css";
import Sidebar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import { MdDelete } from "react-icons/md";
import { Space, Table, Tag } from 'antd';
import { Button, Modal } from 'antd';
import { IoIosPersonAdd } from "react-icons/io";
import { Layout, Breadcrumb } from "antd";
import ProgressBar from "../../utilities/Extend/ProgressBar";
const { Content } = Layout;

const AddSupplier = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <IoIosPersonAdd size={24} color="blue" onClick={showModal} />
          <MdDelete size={24} color="red"  />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    <Content>
      <Header />
      <div className="container-fluid m-0 p-0">
        <div className="row d-flex m-0 p-0">
          <div className="col-2 m-0 p-0">
            <Sidebar />
          </div>
          <div className="col-10 p-2 mt-3">
            <h3>Inventory</h3>
          <Table columns={columns} dataSource={data} />
          <ProgressBar />
          </div>
        </div>
      </div>
    </Content>
    </>
  );
};

export default AddSupplier;
