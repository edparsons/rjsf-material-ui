import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { WidgetProps } from 'react-jsonschema-form';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    options,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  let labelPlacement: 'start' | 'end' | 'top' | 'bottom' = 'end';
  if (options.labelPlacement === 'start') {
    labelPlacement = 'start';
  }

  return (
    <FormControl fullWidth={true} required={required} margin={'dense'}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={typeof value === 'undefined' ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            onBlur={_onBlur}
            onFocus={_onFocus}
          />
        }
        labelPlacement={labelPlacement}
        label={label}
      />
    </FormControl>
  );
};

export default CheckboxWidget;
