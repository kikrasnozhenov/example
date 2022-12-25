import { useRef } from 'react';
import { SnackbarProvider } from 'notistack';
import { MAX_SNACKBAR, POSITION } from '../../constants/snackbar';
import IconButton from '@mui/material/IconButton';

const NotistackProvider = ({ children }) => {
	const notistackRef = useRef(null);
	const onCloseSnackBar = (key) => () => notistackRef.current.closeSnackbar(key);

	return (
		<SnackbarProvider
			maxSnack={MAX_SNACKBAR}
			anchorOrigin={POSITION}
			ref={notistackRef}
			preventDuplicate
			action={(key) => (
				<IconButton key="close" aria-label="Close" color="inherit" onClick={onCloseSnackBar(key)}>
					x
				</IconButton>
			)}
		>
			{children}
		</SnackbarProvider>
	);
};

export default NotistackProvider;
