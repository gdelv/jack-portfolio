import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div>
                <h1 className="">404 error page not found</h1>
                <h2 className="">The requested URL<span className='has-text-danger'>{this.props.location.pathname}</span> was not found</h2>
        </div>
        )
    }
}