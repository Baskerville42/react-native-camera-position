import {Platform} from 'react-native';

export const APPLE_ALWAYS_LEFT = 'left'
export const NOT_LEFT_BUT_SOMEWHERE = 'probably-left-but-can-be-right-as-well';

export const dudeWhereIsMyCamera = () => {
    return Platform.OS === 'ios' ? APPLE_ALWAYS_LEFT : NOT_LEFT_BUT_SOMEWHERE;
}
