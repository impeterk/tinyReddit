export async function getSubreddit(subreddit = 'reactjs') {

    let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    let responseJSON = await response.json()

    console.log(responseJSON)
}