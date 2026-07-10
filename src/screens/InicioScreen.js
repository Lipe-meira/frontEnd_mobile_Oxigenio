import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BotaoLink from '../components/BotaoLink';
import BotaoPrincipal from '../components/BotaoPrincipal';
import episodios from '../data/episodios';
import links from '../data/links';
import cores from '../styles/cores';

export default function InicioScreen({ navigation }) {
  const episodioDestaque = episodios.find((episodio) => episodio.destaque) || episodios[0];

  function abrirDestaque() {
    navigation.navigate('Detalhes', { episodioId: episodioDestaque.id });
  }

  return (
    <SafeAreaView style={styles.area} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <Text style={styles.selo}>Protótipo acadêmico</Text>
          <Text style={styles.titulo}>Oxigênio</Text>
          <Text style={styles.subtitulo}>Central de Podcast</Text>
          <Text style={styles.apresentacao}>
            Aplicativo acadêmico para reunir episódios e atalhos de acesso a canais externos 
            relacionados ao projeto de extensão Oxigênio, com base em materiais públicos.
          </Text>
        </View>

        <View style={styles.cardDestaque}>
          <Text style={styles.rotulo}>Episódio em destaque</Text>
          <Text style={styles.tituloCard}>{episodioDestaque.titulo}</Text>
          <Text style={styles.categoria}>{episodioDestaque.categoria}</Text>
          <Text style={styles.descricao}>{episodioDestaque.descricaoCurta}</Text>
          <BotaoPrincipal titulo="Abrir detalhes" aoPressionar={abrirDestaque} />
        </View>

        <BotaoPrincipal
          titulo="Ver todos os episódios"
          aoPressionar={() => navigation.navigate('Episodios')}
        />
        <BotaoPrincipal
          titulo="Sobre o projeto"
          variante="secundario"
          aoPressionar={() => navigation.navigate('Sobre')}
        />

        <View style={styles.secaoLinks}>
          <Text style={styles.tituloSecao}>Acesse também</Text>
          <View style={styles.gradeLinks}>
            {links.map((link) =>
              link.id !== 'voluntarie-se' ? (
                <BotaoLink
                  key={link.id}
                  nome={link.nome}
                  endereco={link.endereco}
                />
              ) : (
                <BotaoLink
                  key={link.id}
                  nome={link.nome}
                  endereco={link.endereco}
                  variante="destaque"
                />
              )
            )}
          </View>
          <Text style={styles.aviso}>
            Os links externos foram centralizados para facilitar a confirmação e a
            substituição por endereços oficiais atualizados.
          </Text>
        </View>
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
  cabecalho: {
    marginBottom: 18,
  },
  selo: {
    alignSelf: 'flex-start',
    backgroundColor: cores.pessegoClaro,
    color: cores.primarioEscuro,
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 14,
  },
  titulo: {
    color: cores.primarioEscuro,
    fontSize: 38,
    fontWeight: '900',
  },
  subtitulo: {
    color: cores.primario,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 2,
  },
  apresentacao: {
    color: cores.textoSuave,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 14,
  },
  cardDestaque: {
    backgroundColor: cores.superficie,
    borderRadius: 8,
    padding: 18,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 8,
    elevation: 2,
    shadowColor: cores.sombra,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  rotulo: {
    color: cores.primario,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
  },
  tituloCard: {
    color: cores.texto,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  categoria: {
    color: cores.acento,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  descricao: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
  },
  secaoLinks: {
    marginTop: 24,
  },
  tituloSecao: {
    color: cores.texto,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
  },
  gradeLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  aviso: {
    color: cores.textoSuave,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 12,
  },
});
