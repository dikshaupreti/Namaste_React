import {useState} from 'react'


const About = () => {
    const [userName, setUserName] = useState('')

    const updateName =  () => {
        setUserName('manisha')
    }
    return (
        <div>
            <h1> Hi this is about us page of {userName}</h1>
            <button onClick={updateName}> HI </button>
        </div>
    )
}

export default About