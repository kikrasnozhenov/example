import { SUCCESS, ERROR, WARNING, INFO, DEFAULT } from '../../constants/snackbar';

class NotistackUtils {
	#snackBar = {
		enqueueSnackbar: () => {},
		closeSnackbar: () => {},
	};

	setSnackBar(enqueueSnackbar, closeSnackbar) {
		this.#snackBar.enqueueSnackbar = enqueueSnackbar;
		this.#snackBar.closeSnackbar = closeSnackbar;
	}

	success(msg, options = {}) {
		return this.toast(msg, { ...options, variant: SUCCESS });
	}
	error(msg, options = {}) {
		return this.toast(msg, { ...options, variant: ERROR });
	}
	warning(msg, options = {}) {
		return this.toast(msg, { ...options, variant: WARNING });
	}
	info(msg, options = {}) {
		return this.toast(msg, { ...options, variant: INFO });
	}
	toast(msg, options = {}) {
		const preparedOptions = {
			variant: DEFAULT,
			...options,
		};
		return this.#snackBar.enqueueSnackbar(msg, { ...preparedOptions });
	}
	closeSnackbar(key) {
		this.#snackBar.closeSnackbar(key);
	}
}

export default new NotistackUtils();
