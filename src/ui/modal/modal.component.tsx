import * as React from 'react';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import RNModal from 'react-native-modal';

import { ThemeContext } from '../../theme';
import { Div } from '../div/div.component';
import { getStyle } from './modal.style';
import { ModalProps } from './modal.type';

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    bg,
    h,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderEndWidth,
    borderTopWidth,
    justifyContent,
    children,
    isVisible,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNModal
      isVisible={isVisible}
      hideModalContentWhileAnimating
      {...rest}
      style={computedStyle.modal}
    >
      <Div bg={bg} h={h || '100%'} style={computedStyle.container}>
        <SafeAreaView style={computedStyle.safeView}>{children}</SafeAreaView>
      </Div>
    </RNModal>
  );
};

Modal.defaultProps = {
  bg: 'white',
  h: '100%',
  isVisible: false,
  justifyContent: 'flex-end',
};

export { Modal };
