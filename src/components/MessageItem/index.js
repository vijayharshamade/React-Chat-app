import './index.css'
import { useState } from 'react'
import { AiFillLike } from "react-icons/ai";

const MessageItem = props => {
    const [count, setCount] = useState(0)
    const { messageDetails } = props
    const { name, message, time, iconColor } = messageDetails

    const IncreaseCount = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <>
            <li className="message-item-container">
                <div className='icon-container'>
                    <p className={`name-icon ${iconColor}`}>{name.slice(0, 2).toUpperCase()}</p>
                </div>
                <div className='text-container'>
                    <div className='name-time'>
                        <p className='name'>{name}</p>
                        <p className='time'>{time}</p>
                    </div>
                    <p className='text'>
                        {message}
                    </p>
                </div>
                <div className='like-container'>
                    <button className='like-button' onClick={IncreaseCount}>
                        <AiFillLike className='like-icon' />
                    </button>

                </div>
                <div className='count-container'>
                    {count > 0 ? <p className='count'>{count}</p> : null}
                </div>

            </li>
        </>
    )
}

export default MessageItem