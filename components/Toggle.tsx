import { useContext } from 'react';
import Context from '../context';
import { ToggleContainer } from './styles/Toggle.styles';
import { ToggleCircleIcon } from '../icons';
import {
  TOGGLE_ON,
  TOGGLE_OFF,
  TOGGLE_STATUS,
} from '../utils/constants';

export interface ToggleProps {
  state: boolean
  disabled: boolean
}

/**
 * Toggle component to switch between light and dark mode
 */ 
const Toggle = (): JSX.Element => {
  const { toggle, dispatch } = useContext(Context);
  const { state, disabled } = toggle || {};
  const className = state ? `${TOGGLE_STATUS}__on` : `${TOGGLE_STATUS}__off`;

  const handleClick = () => {
    const actionType = state ? TOGGLE_OFF : TOGGLE_ON;
    dispatch({ type: actionType });
  };

  return (
    <ToggleContainer onClick={handleClick} className={className} disabled={disabled} role="button">
      <ToggleCircleIcon className={className} disabled={disabled} />
    </ToggleContainer>
  );
};

export default Toggle;
