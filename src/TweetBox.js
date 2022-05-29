import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@mui/material';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = React.useState("");
    const [tweetImage, setTweetImage] = React.useState("");

    function sendTweet(event){
        event.preventDefault();
        db.collection('posts').add({
            displayName: 'Fungai :)',
            userName: 'codeWithFungai',
            verified: true,
            text: tweetMessage,
            avatar: "avatar.jpg",
            image: tweetImage
        })
        setTweetImage("");
        setTweetMessage("");
    };

    return(
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                  <Avatar src={process.env.PUBLIC_URL + "avatar.jpg"}/>
                  <input
                   onChange={e => setTweetMessage(e.target.value)}
                   value={tweetMessage} 
                   placeholder="What's happening?" 
                   type="text" />
                </div>
                <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className='tweetBox__imageInput'
                 placeholder='Optional: Enter image url' 
                 type="text" />
                <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox