# react-native-camera-position

This library was created in order to guess where the camera is. 🧌

## Install
`yarn add react-native-camera-position`

## Usage
```js
import { dudeWhereIsMyCamera, APPLE_ALWAYS_LEFT } from 'react-native-camera-position';

const App: React.FC = () => {
    if (dudeWhereIsMyCamera() === APPLE_ALWAYS_LEFT) {
        return (
            <Text>The camera is left</Text>
        )
    }
    
    return (
        <Text>The camera is not left</Text>
    );
}
```
