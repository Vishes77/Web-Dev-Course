const tweetform = document.querySelector("#tweetform")
const tweets = document.querySelector("#Tweets")
tweetform.addEventListener('submit',function(e){
    e.preventDefault()
    const username = tweetform.elements.Username;
    const tweet = tweetform.elements.Tweet;
    addtweet(username.value,tweet.value)
    username.value='';
    tweet.value='';
    
})

function addtweet(username,tweet){
    const newtweet = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(username);
    newtweet.append(btag)
    newtweet.append(`- ${tweet}`)
    tweets.append(newtweet)
}