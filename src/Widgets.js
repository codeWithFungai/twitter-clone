import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed }from 'react-twitter-embed';
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';

function Widgets() {
  /*
     There's a really awesome package called react-twitter-embed.
     We can use it to create twitter widgets in our app. EG:
     line 23: displaying one of my tweets using TwitterTweetEmbed 
     line 24: displaying my entire twitter timeline using TwitterTimelineEmbed
  */
    return(
        <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
  
        <div className="widgets__widgetContainer">
        <h2>What's happening?</h2> 
        <TwitterTweetEmbed tweetId="1529472031426748421" /> 
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codeWithFungai"
          options={{height: 400}}   
        />
        <TwitterShareButton 
        url={"https://google.com"}
        />
      
        </div>
      </div>
      
    )
}

export default Widgets

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);