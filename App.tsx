import { StyleSheet} from 'react-native';
import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { TabNavigator } from './Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <TabNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#614D9E',
  },
});
