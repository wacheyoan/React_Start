import React from 'react';


export default function Quote(props) {
    return (<div>
        <div>
            <i>
            '{props.text}'
            </i>
        </div>
        <div>
           {props.author}
        </div>
    </div>);
}
