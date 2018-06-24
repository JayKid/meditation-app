import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class AnimationWrapper extends Component {

    render() {
        const animationTime = this.props.duration * 60;

        const keyFrameBlur = keyframes`
            0% {
                opacity: 0.9;
            }
            100% {
                opacity: 0.01;
            }  
        `;

        const Wrapper = styled.div`
            display: block;
            
            svg {
                filter: drop-shadow( 0 0 6px #b8eded );
            }

            svg path {
                animation: ${keyFrameBlur} ease-in-out infinite;
                animation-duration: ${animationTime}s;
                animation-delay: 0s;  
            }
        `

        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default AnimationWrapper;
