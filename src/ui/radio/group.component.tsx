import * as React from 'react';

import { Div } from '../div/div.component';
import { DivProps } from '../div/div.type';

export interface RadioGroupProps extends DivProps {
  onChange?: any;
  value?: any;
  children: React.ReactElement[] | React.ReactElement;
}

export const RadioGroup: React.FunctionComponent<RadioGroupProps> = (props) => {
  const { children, onChange, value, ...rest } = props;

  /**
   * clones the children and add currentValue
   */
  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        currentValue: value,
        onChange,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};
