import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {

    //define state for all our posts in the twitter feed
    const [posts, setPosts] = React.useState([]);

    React.useEffect( () => {
        //db is firebase which we will be using for our database
        //let's collect all the data we have on posts from the db and set our post state with it
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return(
        <div className='feed'>
              <div className='feed__header'>
                <h2>Home</h2>
                </div>
             
             <TweetBox />
            <FlipMove>
            {posts.map(post => (
            //map the data from the database to the props in Post 
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
            ))}
             </FlipMove>
        </div>
    )
}

export default Feed



