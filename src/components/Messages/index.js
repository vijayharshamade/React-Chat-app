import './index.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MessageItem from '../MessageItem'

const Messages = () => {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    const randomName = () => {
        const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
        const random_number = (Math.ceil(Math.random() * 5)) - 1
        return user_list[random_number]
    }

    const getTime = () => {
        const timeObject = new Date()
        let hour = timeObject.getHours()
        let Minutes = timeObject.getMinutes()
        let time = hour + ":" + Minutes
        return time
    }

    const randomClassName = () => {
        const color = [
            "random-color-1", "random-color-2", "random-color-3", "random-color-4", "random-color-5"
        ]
        const randomColor = (Math.ceil(Math.random() * 5)) - 1
        return color[randomColor]
    }


    const onChangeMessage = event => {
        setMessage(event.target.value)
    }

    const onAddMessage = event => {

        event.preventDefault()
        const newMessage = {
            id: uuidv4(),
            name: randomName(),
            message,
            time: getTime(),
            iconColor: randomClassName()
        }
        setMessageList(prevMessageList => [...prevMessageList, newMessage])
        setMessage('')
    }
    return (
        <>
            <div className="display-text-container">
                <ul className='ul'>
                    {messageList.map(eachmsg => (
                        <MessageItem key={eachmsg.id} messageDetails={eachmsg} />
                    ))}
                </ul>


            </div>
            <form onSubmit={onAddMessage}>
                <div className="input-container">
                    <input type='text' className="chat-input" value={message}
                        placeholder="Type Message" onChange={onChangeMessage} />
                    <button className="send-button" type="submit">Send</button>
                </div>
            </form>

        </>
    )
}


export default Messages;