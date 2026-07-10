import { Alert, Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

import cores from '../styles/cores';

export default function BotaoLink({ nome, endereco, variante = 'suave', style }) {
  const destaque = variante === 'destaque';

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
      style={[styles.botao, destaque && styles.botaoDestaque, style]}
      onPress={abrirLink}
      activeOpacity={0.8}
      accessibilityRole="button"
    >
      <Text style={[styles.texto, destaque && styles.textoDestaque]}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 8,
    backgroundColor: cores.pessegoClaro,
    borderWidth: 1,
    borderColor: cores.borda,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  botaoDestaque: {
    backgroundColor: cores.alerta,
    borderColor: cores.alerta,
  },
  texto: {
    color: cores.primarioEscuro,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  textoDestaque: {
    color: cores.cremeClaro,
  },
});
