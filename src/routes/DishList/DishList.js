import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        firebase.database().ref('/dishes_4').orderByKey().limitToFirst(100).once('value', data => {
            setDishes(Object.keys(data.val()).map(key => ({key, ...data.val()[key] })));
        }).catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <List
            size="large"
            header={<h1>Dishes</h1>}
            pagination={{
                onChange: page => {
                    console.log(page);
                  },
                pageSize: 10,
            }}
            bordered
            dataSource={dishes}
            renderItem={(dish) => <List.Item>
                <List.Item.Meta title={<Link to={{ pathname: "/dish", state: { dish }}}>{dish.title}</Link>} />
            </List.Item>}
        />
    );
}

export default DishList;