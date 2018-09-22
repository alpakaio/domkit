// eslint-disable-next-line no-new-func
const checkGlobal = new Function('try { if (typeof global !== undefined && this === global && this.window !== undefined) { return this.window; } return null; } catch (e) { return null; }');

export default checkGlobal;
