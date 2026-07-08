import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BotaoPrincipal from '../components/BotaoPrincipal';
import CardEpisodio from '../components/CardEpisodio';
import episodios from '../data/episodios';
import cores from '../styles/cores';

export default function EpisodiosScreen({ navigation }) {
  const [pesquisa, setPesquisa] = useState('');
  const textoPesquisa = pesquisa.trim().toLowerCase();

  const episodiosFiltrados = episodios.filter((episodio) => {
    const textoCompleto = [
      episodio.titulo,
      episodio.categoria,
      episodio.ano,
      episodio.descricaoCurta,
    ]
      .join(' ')
      .toLowerCase();

    return textoCompleto.includes(textoPesquisa);
  });

  function abrirDetalhes(episodio) {
    navigation.navigate('Detalhes', { episodioId: episodio.id });
  }

  function limparPesquisa() {
    setPesquisa('');
  }

  return (
    <SafeAreaView style={styles.area} edges={['bottom']}>
      <KeyboardAvoidingView
        style={styles.teclado}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={episodiosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardEpisodio episodio={item} aoAbrir={abrirDetalhes} />
          )}
          contentContainerStyle={styles.lista}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <View style={styles.cabecalho}>
              <Text style={styles.titulo}>Episódios</Text>
              <Text style={styles.texto}>
                Consulte episódios demonstrativos organizados por tema. A pesquisa
                funciona localmente por título, categoria, ano e descrição.
              </Text>

              <TextInput
                style={styles.campo}
                placeholder="Pesquisar episódios"
                placeholderTextColor={cores.textoSuave}
                value={pesquisa}
                onChangeText={setPesquisa}
              />

              <Text style={styles.contador}>
                {episodiosFiltrados.length} resultado(s) encontrado(s)
              </Text>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.semResultado}>
              <Text style={styles.tituloVazio}>Nenhum episódio encontrado</Text>
              <Text style={styles.textoVazio}>
                Tente pesquisar por outro termo ou limpe o campo de busca.
              </Text>
              <BotaoPrincipal
                titulo="Limpar pesquisa"
                variante="secundario"
                aoPressionar={limparPesquisa}
              />
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  teclado: {
    flex: 1,
  },
  lista: {
    padding: 20,
    paddingBottom: 32,
  },
  cabecalho: {
    marginBottom: 16,
  },
  titulo: {
    color: cores.azulEscuro,
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 8,
  },
  texto: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },
  campo: {
    minHeight: 48,
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    paddingHorizontal: 14,
    color: cores.texto,
    fontSize: 16,
  },
  contador: {
    color: cores.azulMedio,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
  },
  semResultado: {
    backgroundColor: cores.branco,
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  tituloVazio: {
    color: cores.texto,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
  },
  textoVazio: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
  },
});
