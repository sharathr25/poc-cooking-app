import React, { useState } from 'react';
import { List, Divider, Input, Button } from 'antd';
import { Ingredient } from '..';
import firebase from '../../firebase'

const Ingredients = (props) => {
    const [ingredients, setIngredients] = useState(props.ingredients || []);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [note, setNote] = useState('');

    const add = () => {
        setIngredients([...ingredients, { name, quantity, note }]);
    }

    const remove = (name) => {
        setIngredients(ingredients.filter(ing => ing.name !== name))
    }

    const update = () => {
        if(ingredients.length === 0) return;
        firebase
            .database()
            .ref(`/dishes_4/${props.dishID}`)
            .update({ ingredients })
            .then(_ => console.log('updated', props.dishID))
            .catch(_ => console.log('something went wrong'))
    }

    return (
        <div>
            <Divider orientation='left'>Ingredents</Divider>
            <List
                itemLayout='horizontal'
                dataSource={ingredients}
                bordered
                renderItem={(item,index) => (
                    <List.Item>
                        <Ingredient {...item} index={index} dishId={props.dishID} key={index} />
                        <img src={require('../../__assets__/quit.svg')} onClick={() => remove(item.name)} width={20} height={20} />
                    </List.Item>
                )}
            />
            <Input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Name" style={{ width: 100 }} />
            <Input type="text" onChange={e => setQuantity(e.target.value)} value={quantity} placeholder="Quantity" style={{ width: 100 }} />
            <Input type="text" onChange={e => setNote(e.target.value)} value={note} placeholder="Note" style={{ width: 100 }} />
            <Button onClick={add}>Add Ingredent</Button>
            <Button type="primary"  onClick={update}>Update Dish</Button>
        </div>
    );
}

export default Ingredients;