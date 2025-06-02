import './global/btnClearLocalStorege.js';
import './global/btnSearch.js';

import { LocalStorageAdd } from './functions/localStorege.js';
import { MessageSucces, MessageError, MessageWarning } from './functions/messges.js';

const btnClientAdd = document.querySelector('#btnClientAdd');

let clients = [];
let pets = [];
