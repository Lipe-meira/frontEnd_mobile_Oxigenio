import { Alert, Linking, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BotaoPrincipal from '../components/BotaoPrincipal';
import episodios from '../data/episodios';
import cores from '../styles/cores';

export default function DetalhesScreen({ route, navigation }) {
  const episodioId = route.params?.episodioId;
  const episodio = episodios.find((item) => item.id === episodioId);

  async function ouvirEpisodio() {
    if (!episodio?.link) {
      Alert.alert('Link indisponível', 'Este episódio ainda não possui um link informado.');
      return;
    }

    try {
      const podeAbrir = await Linking.canOpenURL(episodio.link);

      if (podeAbrir) {
        await Linking.openURL(episodio.link);
      } else {
        Alert.alert('Não foi possível abrir', 'Verifique se o endereço está correto.');
      }
    } catch (erro) {
      Alert.alert('Erro ao abrir episódio', 'Tente novamente mais tarde.');
    }
  }

  async function compartilharEpisodio() {
    if (!episodio) {
      return;
    }

    try {
      await Share.share({
        message: `${episodio.titulo} - ${episodio.descricaoCurta}\n${episodio.link}`,
      });
    } catch (erro) {
      Alert.alert('Erro ao compartilhar', 'Não foi possível compartilhar este episódio.');
    }
  }

  if (!episodio) {
    return (
      <SafeAreaView style={styles.area} edges={['bottom']}>
        <View style={styles.estadoErro}>
          <Text style={styles.tituloErro}>Episódio não encontrado</Text>
          <Text style={styles.textoErro}>
            O item solicitado não existe nos dados locais do aplicativo.
          </Text>
          <BotaoPrincipal
            titulo="Voltar para episódios"
            aoPressionar={() => navigation.navigate('Episodios')}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.area} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.categoria}>{episodio.categoria}</Text>
        <Text style={styles.titulo}>{episodio.titulo}</Text>

        <View style={styles.linhaInfo}>
          <Text style={styles.info}>{episodio.ano}</Text>
          <Text style={styles.info}>{episodio.duracao}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.rotulo}>Descrição</Text>
          <Text style={styles.texto}>{episodio.descricaoCompleta}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.rotulo}>Participantes</Text>
          <Text style={styles.texto}>{episodio.participantes.join(', ')}</Text>
        </View>

        <View style={styles.avisoBox}>
          <Text style={styles.avisoTitulo}>Conteúdo demonstrativo</Text>
          <Text style={styles.avisoTexto}>
            Este item foi criado para o protótipo acadêmico e não deve ser
            apresentado como episódio real confirmado.
          </Text>
        </View>

        <Text style={styles.avisoExterno}>
          Ao tocar em ouvir, você será direcionado para uma plataforma externa.
        </Text>

        <BotaoPrincipal titulo="Ouvir episódio" aoPressionar={ouvirEpisodio} />
        <BotaoPrincipal
          titulo="Compartilhar"
          variante="secundario"
          aoPressionar={compartilharEpisodio}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    padding: 20,
    paddingBottom: 32,
  },
  categoria: {
    color: cores.verdeAgua,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 8,
  },
  titulo: {
    color: cores.azulEscuro,
    fontSize: 29,
    fontWeight: '900',
    lineHeight: 35,
  },
  linhaInfo: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
    marginBottom: 16,
  },
  info: {
    color: cores.azulMedio,
    backgroundColor: cores.azulClaro,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    fontWeight: '700',
  },
  card: {
    backgroundColor: cores.branco,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 12,
  },
  rotulo: {
    color: cores.texto,
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 8,
  },
  texto: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 23,
  },
  avisoBox: {
    backgroundColor: cores.azulClaro,
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },
  avisoTitulo: {
    color: cores.azulEscuro,
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 6,
  },
  avisoTexto: {
    color: cores.textoSuave,
    fontSize: 14,
    lineHeight: 20,
  },
  avisoExterno: {
    color: cores.textoSuave,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 16,
  },
  estadoErro: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  tituloErro: {
    color: cores.erro,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 8,
  },
  textoErro: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
  },
});
