declare module 'domkit' {
	declare function domkit(): WindowProxy;
	declare function reset(): WindowProxy;
	declare type DomKit = {
		$call: typeof domkit;
		reset: typeof reset;
	};
	declare module.exports: DomKit;
}
