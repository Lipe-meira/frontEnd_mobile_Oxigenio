import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BotaoLink from '../components/BotaoLink';
import links from '../data/links';
import cores from '../styles/cores';

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.area} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>Sobre o projeto</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Oxigênio - Central de Podcast</Text>
          <Text style={styles.texto}>
            O Oxigênio é apresentado em materiais públicos da Univali como um
            projeto de extensão relacionado à produção de programas temáticos e
            séries em formato de podcast, com temas de interesse público e
            conteúdo educativo.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Proposta do aplicativo</Text>
          <Text style={styles.texto}>
            Este aplicativo é um protótipo acadêmico criado para centralizar
            episódios demonstrativos e atalhos para plataformas externas em uma
            interface simples, organizada e fácil de atualizar.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Oportunidade identificada</Text>
          <Text style={styles.texto}>
            Durante a análise dos canais públicos, foi identificada a oportunidade
            de reunir os conteúdos em uma única interface, facilitando a
            localização do acervo e o acesso às plataformas externas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Metodologia e limitações</Text>
          <Text style={styles.texto}>
            O levantamento foi feito a partir de materiais públicos disponíveis na
            internet. Não houve entrevista com os responsáveis pelo projeto, não
            foi possível confirmar a situação atual do Oxigênio e os episódios
            exibidos neste app são demonstrativos.
          </Text>
        </View>

        <Text style={styles.tituloSecao}>Canais externos</Text>
        <View style={styles.gradeLinks}>
          {links.map((link) => (
            <BotaoLink
              key={link.id}
              nome={link.nome}
              endereco={link.endereco}
              variante={link.id === 'voluntarie-se' ? 'destaque' : 'suave'}
            />
          ))}
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
  titulo: {
    color: cores.primarioEscuro,
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 16,
  },
  card: {
    backgroundColor: cores.superficie,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 12,
  },
  subtitulo: {
    color: cores.texto,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
  texto: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 23,
  },
  tituloSecao: {
    color: cores.texto,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 12,
  },
  gradeLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
