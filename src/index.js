import checkDom from './stubs/checkDom';
import checkGlobal from './stubs/checkGlobal';

const DomKit = () => {
	const window = checkDom() || checkGlobal();
	if (!window) {
		throw new Error('[DomKit]: Undefined global variable window');
	}
	return window;
};

export default DomKit;
