import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import { init } from './index';

const App = (): JSX.Element => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const submit = (): void => {
        const result = init(input);
        setOutput(result);
    }

    return (
        <div>
            <h2>Martian Robots</h2>
            <textarea
                onChange={(e): void => setInput(e.target.value)}
            >    
            </textarea>
            <button onClick={(): void => submit()}>submit</button>
            <p
                style={{whiteSpace: 'pre-line'}}
            >
                {output}
            </p>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(React.createElement(App), document.getElementById('mount'));
});
