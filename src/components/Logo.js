import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        const { className } = this.props;
        return (
            <svg aria-hidden="true" className={className} height="100%" style={{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}} xmlns="http://www.w3.org/2000/svg" width="100%" version="1.1" viewBox="0 0 1024 768">
                <defs>
                    <linearGradient id="Gradient-1" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stop-color="lightblue" />
                        <stop offset="100%" stop-color="#ef5b2b" />
                    </linearGradient>
                </defs>
                <filter id="blurFilter">
                    <feGaussianBlur stdDeviation="0"/>
                </filter>
                <g id="Layer 1">
                    <path d="M544.33+76.5293L358.74+255.831L540.643+438.268L717.449+257.581L544.33+76.5293Z" stroke="#FFF" strokeWidth="41.51" fill="none" opacity="1" strokeLinejoin="round"/>
                    <path d="M244.407+469.556L541.606+698.981L829.167+466.309" stroke="#ffffff" strokeWidth="40.85" fill="none" opacity="1" strokeLinejoin="round"/>
                </g>
            </svg>
        );
    } 
}