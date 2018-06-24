import React, { Component } from 'react';

export default class Checkbox extends Component {

    render() {
        const { className, checked, id, onChange } = this.props;
        const SVG = checked ? 
            <svg className={[className, "checked"].join(' ')} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg> : 
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>;

        return (
            <span>
                <label htmlFor={id}>
                    {SVG}     
                </label>
                <input className="screenReaderOnly" id={id} onChange={onChange} type="checkbox" checked={checked}/>
            </span>
        );
    } 
}