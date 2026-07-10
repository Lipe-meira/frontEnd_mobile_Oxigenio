import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetalhesScreen from '../screens/DetalhesScreen';
import EpisodiosScreen from '../screens/EpisodiosScreen';
import InicioScreen from '../screens/InicioScreen';
import SobreScreen from '../screens/SobreScreen';
import cores from '../styles/cores';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: cores.primarioEscuro },
          headerTintColor: cores.cremeClaro,
          headerTitleStyle: { fontWeight: '800' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: cores.fundo },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'Oxigênio' }}
        />
        <Stack.Screen
          name="Episodios"
          component={EpisodiosScreen}
          options={{ title: 'Episódios' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Detalhes do episódio' }}
        />
        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
          options={{ title: 'Sobre o projeto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
