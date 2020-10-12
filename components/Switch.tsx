import React from 'react';
import PropTypes from 'prop-types';
import { SwitchContainer } from './styles/Switch.styles';
// import { bemDestruct } from '../../utils';
import { SwitchCircleIcon } from '../icons';

// const classesName = {
//   green: {
//     defaultClassName: 'toggle switch--green-default__off',
//     optionalClassName: 'toggle switch--green-default__on'
//   },
//   blue: {
//     defaultClassName: 'toggle switch--blue-default__off',
//     optionalClassName: 'toggle switch--blue-default__on'
//   },
//   red: {
//     defaultClassName: 'toggle switch--red-default__off',
//     optionalClassName: 'toggle switch--red-default__on'
//   },
//   yellow: {
//     defaultClassName: 'toggle switch--yellow-default__off',
//     optionalClassName: 'toggle switch--yellow-default__on'
//   },
// };

/**
 * Switch component can be called with
 * @param {string} color - (Optional) Used for setting the active color on switch. Can be 'green' (default), 'blue', 'red', 'yellow'.
 * @param {function} onChange - (Optional) Callback to trigger on onChange event. It receive the previous status like first argument (true or false).
 * @param {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {boolean} status - (Required) Define true/false status. Default value is false.
 * @return {react omponent} A view for toggle switch.
 */ 
const Switch = ({ className, disabled }: { className: string, disabled: boolean }): JSX.Element => {
  // const { defaultClassName, optionalClassName } = classesName[color];
  // const className = status ? optionalClassName : defaultClassName;

  // const handleClick = () => {
  //   onChange(status);
  // };

  return (
    <SwitchContainer className={className} disabled={disabled}>
      <SwitchCircleIcon
        className={className}
        disabled={disabled}
        // props={{
        //   position: 'relative',
        //   right: '2px',
        //   top: '1px',
        //   width: '24px',
        //   height: '24px',
        //   className: bemDestruct(className, disabled),
        // }}
      />
    </SwitchContainer>
  );
};

Switch.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Switch.defaultProps = {
  disabled: false,
};

export default Switch;
