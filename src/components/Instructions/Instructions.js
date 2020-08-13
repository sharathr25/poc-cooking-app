import React, { useState } from 'react';
import { List, Divider, Checkbox, Input, Button } from 'antd';
import firebase from '../../firebase'
const { TextArea } = Input;

const Instructions = (props) => {
    const [instructions, setInstructions] = useState(props.instructions || []);
    const [instruction, setInstruction] = useState('');

    const _onChange = (e) => {
        setInstruction(e.target.value);
    }

    const add = () => {
        setInstructions([...instructions, instruction]);
        setInstruction('');
    }

    const remove = (item) => {
        setInstructions(instructions.filter(i => i !== item))
    }

    const update = () => {
        console.log(props.dishID);
        if(instructions.length === 0) return;
        firebase
            .database()
            .ref(`/dishes_4/${props.dishID}`)
            .update({ instructions })
            .then(_ => console.log('updated', props.dishID))
            .catch(_ => console.log('something went wrong', _))
    }

    return (
        <div>
            <Divider orientation='left'>Instructions</Divider>
            <List
                itemLayout='horizontal'
                dataSource={instructions}
                bordered
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            description={
                                <Checkbox>
                                    {item}
                                    <img src={require('../../__assets__/quit.svg')} onClick={() => remove(item)} width={20} height={20} />
                                </Checkbox>
                            }
                        />
                    </List.Item>
                )}
            />
            <TextArea rows={2} onChange={_onChange} value={instruction} />
            <Button onClick={add}>Add instruction</Button>
            <Button type="primary"  onClick={update}>Update Dish</Button>
        </div>
    );
}

export default Instructions;