import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        const { className } = this.props;
        return (
            <svg aria-hidden="true" className={className} height="100%" style={{"fillRule":"evenodd","clipRule":"evenodd","strokeLinecap":"round","strokeLinejoin":"round"}} xmlns="http://www.w3.org/2000/svg" width="100%" version="1.1" viewBox="0 0 1024 768">
                <g id="Layer 1">
                    <path d="M544.33+76.5293L358.74+255.831L540.643+438.268L717.449+257.581L544.33+76.5293Z" stroke="#FFF" strokeWidth="41.51" fill="none" opacity="1" strokeLinejoin="round"/>
                    <path d="M244.407+469.556L541.606+698.981L829.167+466.309" stroke="#ffffff" strokeWidth="40.85" fill="none" opacity="1" strokeLinejoin="round"/>
                </g>
            </svg>
        );
    } 
}