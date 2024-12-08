import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>HELLO</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
    </View>
  );
};

export default App;
