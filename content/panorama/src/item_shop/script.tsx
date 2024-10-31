import React from 'react';
import { render } from 'react-panorama-x';
import { abc } from './component';
export const myVar = 'ok';
$.Msg('11111 abc Hello world', abc);

render(<Label text="11111 Hello, world!" />, $.GetContextPanel());
