import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import NotistackUtils from '../../utils/NotistackConfig';

const ACTION_BUTTONS = ['warning', 'success', 'error', 'info', 'toast'];

const getButtons = (buttons) =>
	buttons.map((btn) => (
		<Button key={btn} onClick={() => NotistackUtils[btn] && NotistackUtils[btn](`message: ${btn}`)}>
			{btn}
		</Button>
	));

const ActionButtons = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	useEffect(() => {
		NotistackUtils.setSnackBar(enqueueSnackbar, closeSnackbar);
	}, [enqueueSnackbar, closeSnackbar]);

	return getButtons(ACTION_BUTTONS);
};

export default ActionButtons;
