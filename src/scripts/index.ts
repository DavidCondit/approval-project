import Logger from './logger';
import { initComponents } from './components';

let logger = new Logger();
logger.sayHello("David Alan Condit");

window.onload = e => {
    initComponents();
};

