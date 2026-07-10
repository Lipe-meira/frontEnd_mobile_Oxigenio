import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import cores from '../styles/cores';

export default function CardEpisodio({ episodio, aoAbrir }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => aoAbrir(episodio)}
      activeOpacity={0.85}
      accessibilityRole="button"
    >
      <View style={styles.linhaTopo}>
        <Text style={styles.categoria}>{episodio.categoria}</Text>
        <Text style={styles.ano}>{episodio.ano}</Text>
      </View>

      <Text style={styles.titulo}>{episodio.titulo}</Text>
      <Text style={styles.duracao}>{episodio.duracao}</Text>
      <Text style={styles.descricao}>{episodio.descricaoCurta}</Text>
      <Text style={styles.detalhes}>Ver detalhes</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.superficie,
    borderRadius: 8,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 2,
    shadowColor: cores.sombra,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  linhaTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
  },
  categoria: {
    color: cores.primario,
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  ano: {
    color: cores.textoSuave,
    fontSize: 13,
  },
  titulo: {
    color: cores.texto,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  duracao: {
    color: cores.acento,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  descricao: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 21,
  },
  detalhes: {
    color: cores.primarioEscuro,
    fontSize: 15,
    fontWeight: '800',
    marginTop: 12,
  },
});
