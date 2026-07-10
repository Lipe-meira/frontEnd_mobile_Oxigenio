import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import cores from '../styles/cores';

export default function BotaoPrincipal({
  titulo,
  aoPressionar,
  variante = 'principal',
  desabilitado = false,
}) {
  const secundario = variante === 'secundario';

  return (
    <TouchableOpacity
      style={[
        styles.botao,
        secundario && styles.botaoSecundario,
        desabilitado && styles.botaoDesabilitado,
      ]}
      onPress={aoPressionar}
      disabled={desabilitado}
      activeOpacity={0.8}
      accessibilityRole="button"
    >
      <Text style={[styles.texto, secundario && styles.textoSecundario]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: cores.primario,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: cores.sombra,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  botaoSecundario: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.primario,
    elevation: 0,
    shadowOpacity: 0,
  },
  botaoDesabilitado: {
    opacity: 0.5,
  },
  texto: {
    color: cores.cremeClaro,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  textoSecundario: {
    color: cores.primarioEscuro,
  },
});
