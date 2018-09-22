// eslint-disable-next-line no-new-func
const checkDom = new Function('try { if (typeof window !== undefined && this === window) { return this; } return null; } catch (e) { return null; }');

export default checkDom;
