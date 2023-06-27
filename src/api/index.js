export async function getSubreddit(subreddit = 'reactjs', post) {

    let response = await fetch(`https://www.reddit.com/r/${subreddit}/${post}.json`)
    let responseJSON = await response.json()

    console.log(responseJSON)
}