import {useState,useEffect} from 'react'

export default function SubredditList(props) {
    const [list, setList] = useState(['unixporn', 'unix', 'esports', 'fashion', 'animals'])

    const addToList = (item) => {
        setList(oldArray => [...oldArray, item])
    }

    // useEffect(() => {
    //     addToList(props.addSubreddit)
    // }, [props.addSubreddit])

    return(
        <div className="my-1">
            <nav className="box is-sticky">
            {list.map(item => (
                <ul>
                <li key={item}><p key={item} className="box my-1 has-background-info-light has-text-info-dark has-text-weight-bold is-size-4">{item}</p></li>
                </ul>
                ))}
            </nav>
        </div>
    )
}