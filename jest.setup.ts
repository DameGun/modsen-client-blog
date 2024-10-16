import { TextDecoder as NodeTextDecoder, TextEncoder } from 'util';

import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
global.TextDecoder = NodeTextDecoder as typeof TextDecoder;
