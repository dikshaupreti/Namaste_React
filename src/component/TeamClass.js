import React from 'react'

class TeamClass extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            count: 0,
            location: 'delhi'
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=> {
            console.log("Namaste React")
        }, 1000)
    } 
    
    updateCount = () => {
        this.setState({count: this.state.count + 1})
    }   
        
    render() {
        const {name, education} = this.props
        const {count}  = this.state
        return(<>
                <hi>{name}</hi>
                <h3>{education}</h3>
                <h2>count is {count} and location {this.state.location}</h2>
                <button onClick={()=> this.updateCount()}>Update the count </button>
            </>
            )
        }
    
    componentWillUnmount() {
        //clearInterval(this.timer)
    }
}

export default TeamClass
