import React, { useEffect, useState } from 'react';

import { Button, Form, Input } from 'antd';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

function GameForm(props) {

    function onFinish(data) {
        props.onSubmit(data);
    }

    return <>
        <Form
            {...layout}
            name="game-form"
            initialValues={props.game}
            onFinish={onFinish}
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
    </>
}

export default GameForm;