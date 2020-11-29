import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { Button, Form, Input, List, message, Modal, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import firebase from '../firebase';

import ControllerLayout from './ControllerLayout';

const { Title } = Typography;
const { Search } = Input;

const formLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

function GameList() {
    const [gameList, setGameList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [gameToDetail, setGameToDetail] = useState({
        id: '',
        title: '',
        password: '',
        buttons: {
            high_punch: '',
            high_kick: '',
            block: '',
            low_punch: '',
            low_kick: '',
            run: ''
        }
    }); 

    const [form] = Form.useForm();

    useEffect(() => {
        firebase.firestore().collection('games').get()
            .then(query => {
                let docs = _.map(query.docs, game => ({ ...game.data(), id: game.id }));
                setGameList(docs);
            });
    }, []);

    function onSubmit(gameData) {
        if (gameData.id) {
            firebase.firestore().collection('games').doc(gameData.id).update(gameData)
                .then(() => {
                    let newGameList = [...gameList];
                    const gameIndex = _.findIndex(newGameList, { id: gameData.id });
                    newGameList.splice(gameIndex, 1, gameData);
                    setGameList(newGameList);
                    message.success('Game Updated');
                });
        } else {
            firebase.firestore().collection('games').add(gameData)
                .then(game => {
                    console.log(game)
                    setGameList([...gameList, { ...gameData, id: game.id }]);
                    message.success('Game Added');
                });
        }
        setModalVisible(false);
        form.resetFields();
    }

    function handleGameClick(game) {
        firebase.firestore().collection('games').doc(game.id).get()
            .then(query => {
                setGameToDetail({ ...query.data(), id: query.id });
                setModalVisible(true);
            });
    }

    function handleBtnClick(e) {
        switch(e.target.classList.value) {
            case 'high_punch_btn':
                return document.querySelector('#game-form_buttons_high_punch').focus();
            case 'high_kick_btn':
                return document.querySelector('#game-form_buttons_high_kick').focus();
            case 'block_btn':
                return document.querySelector('#game-form_buttons_block').focus();
            case 'low_punch_btn':
                return document.querySelector('#game-form_buttons_low_punch').focus();
            case 'low_kick_btn':
                return document.querySelector('#game-form_buttons_low_kick').focus();
            case 'run_btn':
                return document.querySelector('#game-form_buttons_run').focus();
            default:
                return false;
        }
    }

    function handleSearch(value) {
        if (value) {
            let newGameList = _.filter(gameList, game => {
                if (game.title) {
                    if (game.title.toLowerCase().includes(value.toLowerCase())) return game;
                }
            });
            setGameList(newGameList);
        } else {
            firebase.firestore().collection('games').get()
                .then(query => {
                    let docs = _.map(query.docs, game => ({ ...game.data(), id: game.id }));
                    console.log(docs);
                    setGameList(docs);
                });
        }
    }

    return <>
        <div style={{ position: 'relative', width: '100%', marginTop: '2rem' }}>
            <Title level={3}>Arcade Map</Title>
            <Button 
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '1rem'
                }}
                shape="circle"
                icon={<PlusOutlined />}
                type="primary" 
                onClick={() => {
                    setGameToDetail({
                        id: '',
                        title: '',
                        password: '',
                        buttons: {
                            high_punch: '',
                            high_kick: '',
                            block: '',
                            low_punch: '',
                            low_kick: '',
                            run: ''
                        }
                    });
                    setModalVisible(true);
                }}
            />
        </div>

        <Search
            placeholder="Search Game Title..."
            onSearch={handleSearch}
            style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem', marginLeft: '2rem' }}
            allowClear
        />

        <List
            style={{ width: '100%', marginLeft: '2rem' }}
            dataSource={gameList}
            renderItem={game => {
                if (game.title) {
                    return <List.Item
                        onClick={() => handleGameClick(game)}
                    >
                        {game.title}
                    </List.Item>
                }
            }}
        />

        <Modal 
            title={gameToDetail.title ? gameToDetail.title : "Add Game"}
            visible={modalVisible}
            onCancel={() => {
                setModalVisible(false);
                form.resetFields();
            }}
            footer={null}
        >
            
            <ControllerLayout
                game={gameToDetail}
                handleBtnClick={handleBtnClick}
            />

            <Form
                {...formLayout}
                name="game-form"
                initialValues={gameToDetail}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="ID"
                    name="id"
                    hidden
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input password' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="High Punch"
                    name={['buttons', 'high_punch']}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="High Kick"
                    name={['buttons', 'high_kick']}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Block"
                    name={['buttons', 'block']}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Low Punch"
                    name={['buttons', 'low_punch']}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Low Kick"
                    name={['buttons', 'low_kick']}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Run"
                    name={['buttons', 'run']}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    </>
}

export default GameList;