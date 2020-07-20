import React, { Component } from 'react'
import Project from '../Project/Project';
import './Projects.css'

export default class Projects extends Component {
    state={
        store:[]
    }

    componentDidMount(){
        fetch('http://localhost:8000/Projects')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    store:data
                });
            }) 
        }
    

    render() {
        const content = this.state.store
        return (
            <div className='Projects' id='work'>
            <div className='Projects-content'>
                <div className='menu'>
                    <h2>My Work</h2>
                </div>
            <div className='works'>
                <div className='works-content'>{content.map(i => <Project key={i.id} info={i}/>)}
            </div>
             </div>
               
            </div>
        </div>
        )
    }
}