import {useState,useEffect} from 'react'

export default function SubredditList(props) {
    const [list, setList] = useState(['popular', 'unixporn', 'unix', 'esports', 'fashion', 'animals'])


    useEffect(() => {
        if (!list.includes(props.subreddit)) {
        setList(items => [...items, (props.subreddit)])
        }
    }, [props.subreddit])

    const handleClick = (event) =>{
        props.setSubreddit(event.target.value)
        props.setSearch('')
    }

    return(
        <div>
            <nav className="box my-1">
                <p className='is-size-3 is-uppercase has-text-centered has-text-link has-text-weight-semibold'>subreddit list</p>
                <ul>
            {list.map(item => (
                <li key={item}><button key={item} onClick={handleClick} value={item} className="button is-fullwidth is-large p-6 my-2 is-info is-light has-text-weight-bold is-size-4 has-text-centered">r/{item}</button></li>
                ))}
                </ul>
            </nav>
        </div>
    )
}