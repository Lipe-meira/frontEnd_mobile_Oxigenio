import { Alert, Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

import cores from '../styles/cores';

export default function BotaoLink({ nome, endereco, style }) {
  async function abrirLink() {
    if (!endereco) {
      Alert.alert('Link indisponível', 'O endereço desta plataforma ainda não foi informado.');
      return;
    }

    try {
      const podeAbrir = await Linking.canOpenURL(endereco);

      if (podeAbrir) {
        await Linking.openURL(endereco);
      } else {
        Alert.alert('Não foi possível abrir', 'Verifique se o link está correto.');
      }
    } catch (erro) {
      Alert.alert('Erro ao abrir link', 'Tente novamente mais tarde.');
    }
  }

  return (
    <TouchableOpacity
      style={[styles.botao, style]}
      onPress={abrirLink}
      activeOpacity={0.8}
      accessibilityRole="button"
    >
      <Text style={styles.texto}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 10,
    backgroundColor: cores.azulClaro,
    borderWidth: 1,
    borderColor: cores.borda,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  texto: {
    color: cores.azulEscuro,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
