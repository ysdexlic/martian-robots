import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as S from './App.styled';

import { init } from '../domain/index';

const App = (): JSX.Element => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const submit = (): void => {
        const result = init(input);
        setOutput(result);
    }

    return (
        <S.Container>
            <S.Title>Martian Robots</S.Title>
            <S.InputContainer
                autoFocus
                placeholder="Enter commands here"
                rows="10"
                onChange={(e): void => setInput(e.target.value)}
            >    
            </S.InputContainer>
            <S.Button onClick={(): void => submit()}>submit</S.Button>
            <S.OutputContainer>
                {output}
            </S.OutputContainer>
        </S.Container>
    );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(React.createElement(App), document.getElementById('mount'));
});
