import React, { useState } from 'react';
import { List,Typography } from 'antd';
const { Text } = Typography;

const Ingredient = ({ name, quantity, note , img, index, dishId }) => {
    const [_name, setName] = useState(name);
    const [_quantity, setQuantity] = useState(quantity);
    const [_note, setNote] = useState(note);
    const [update, setUpdate] = useState(false);
    const [nameToUpdate, setNameToUpdate] = useState(_name);
    const [quantityToUpdate, setQuantityUpdate] = useState(_quantity);
    const [noteToUpdate, setNoteToUpdate] = useState(_note);
    
    const edit = () => {
        setUpdate(true);
    }

    const cancel = () => {
        setUpdate(false);
    }

    const updateDB = () => {
        if(`${_name}${_quantity}${_note}` !== `${nameToUpdate}${quantityToUpdate}${noteToUpdate}`) {
            console.log(dishId, index);
            setUpdate(false);
        }
    }

    return (
        <List.Item.Meta
            title={
                update ? 
                <Input type="text" style={{ width: 100 }} placeholder="Name" value={nameToUpdate} onChange={(e) => setNameToUpdate(e.target.value)}/>
                :_name}
            description={
                update 
                    ? 
                        <div>
                            <Input type='text' style={{ width: 100 }} placeholder="Quantity" value={quantityToUpdate} onChange={(e) => setQuantityUpdate(e.target.value)}/> 
                            <Input type='text' style={{ width: 100 }} placeholder="Note" value={noteToUpdate} onChange={(e) => setNoteToUpdate(e.target.value)}/> 
                            <img src={require('../../__assets__/quit.svg')} width={20} onClick={cancel}/>
                            <img src={require('../../__assets__/correct.svg')} width={20} onClick={updateDB}/>
                        </div>
                    :
                        <div>
                            <Text>{_quantity}</Text> 
                            <Text mark>{_note}</Text> 
                            <img src={require('../../__assets__/pencil.svg')} width={20} onClick={edit}/>
                        </div>
            }
        />
    );
}

export default Ingredient;