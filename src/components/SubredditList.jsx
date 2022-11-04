import {useState,useEffect} from 'react'


export default function SubredditList(props) {
    const [list, setList] = useState(['popular', 'unixporn', 'unix', 'esports', 'fashion', 'animals'])


    useEffect(() => {
        if (!list.includes(props.subreddit)) {
        setList(items => [(props.subreddit), ...items])
        }
    }, [props.subreddit])

    const handleClick = (event) =>{
        props.setSubreddit(event.target.value)
        props.setSearch('')
    }

    return(
        <div className='px-1 my-1'>
        <aside className='box is-shadowless is-fullwidth'>
            <div>
                <p className='is-size-3 is-uppercase has-text-centered has-text-link has-text-weight-semibold'>subreddit list</p>
            </div>
            <nav className="my-1">
                <ul>
            {list.map(item => (
                <li key={item}><button key={item} onClick={handleClick} value={item} className="button is-fullwidth is-large p-6 my-2 is-info is-light has-text-weight-bold is-size-4 has-text-centered">r/{item}</button></li>
                ))}
                </ul>
            </nav>
        </aside>
        </div>
    )
}