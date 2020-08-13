import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Descriptions, List} from 'antd';
import ings from '../../config/ingredeints';
import './Dish.module.css';
import { Ingredients } from '../../components';
import Instructions from '../../components/Instructions/Instructions';
const { Content, Sider } = Layout;

const Dish = () => {
    const location = useLocation();
    const {
        category,
        cookTime,
        prepTime,
        link,
        key,
        title,
        totalTime,
        ingredients = [],
        instructions = []
    } = location.state.dish;

    return (
        <Layout className="dish">
            <Sider style={{ backgroundColor: "white", height: 1000, overflow:'auto' }}>
                <List itemLayout='vertical' dataSource={ings} bordered renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </Sider>
            <Content>
                <h1>{title}</h1>
                <Descriptions>
                    <Descriptions.Item label="Category">{category}<br/></Descriptions.Item>
                    <Descriptions.Item label="Prep time">{prepTime}<br/></Descriptions.Item>
                    <Descriptions.Item label="Cook time">{cookTime}<br/></Descriptions.Item>
                    <Descriptions.Item label="Total time">{totalTime}<br/></Descriptions.Item>
                    <Descriptions.Item label="Link"><a target="_blank" href={link}>{link}</a></Descriptions.Item>
                </Descriptions>
                <Ingredients ingredients={ingredients} dishID={key} />
                <Instructions instructions={instructions} dishID={key} />
            </Content>
        </Layout>
    );
}

export default Dish;