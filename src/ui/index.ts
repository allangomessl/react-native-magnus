import {
  Box as SkeletonBox,
  Circle as SkeletonCircle,
} from './skeleton/skeleton.component';

import { Dropdown as DropdownContainer, DropdownOption } from './dropdown';
import { Select as SelectContainer, SelectOption } from './select';

export { Text } from './text';
export { Animated } from './animated';
export { Tooltip } from './tooltip';
export { Badge } from './badge';
export { Overlay } from './overlay';
export { Fab } from './fab';
export { Input } from './input';
export { Mention } from './mention';
export { Textarea } from './input';
export { Div } from './div';
export { ScrollDiv } from './scrolldiv';
export { Button } from './button';
export { Icon } from './icon';
export { Checkbox } from './checkbox';
export { RadioGroup } from './radio';
export { Radio } from './radio';
export { Image } from './image';
export { Drawer } from './drawer';
export { Snackbar } from './snackbar';
export { SnackbarRefType } from './snackbar';
export { Avatar } from './avatar';
export { AvatarGroup } from './avatar';
export { Tag } from './tag';
export { Touchable } from './touchable';
export { Modal } from './modal';
export { Toggle } from './toggle';
export { DropdownRef } from './dropdown';

export const Skeleton = {
  Box: SkeletonBox,
  Circle: SkeletonCircle,
};

export const Dropdown: typeof DropdownContainer & {
  Option: typeof DropdownOption;
} = DropdownContainer as any;
Dropdown.Option = SelectOption;

export const Select: typeof SelectContainer & {
  Option: typeof SelectOption;
} = SelectContainer as any;
Select.Option = SelectOption;
