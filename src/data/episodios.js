// Episodios demonstrativos. Substitua titulos, descricoes e links pelos dados oficiais quando forem confirmados.
const episodios = [
  {
    id: '1',
    titulo: 'Navegando pela sustentabilidade: cultura náutica e preservação ambiental em Itajaí',
    categoria: 'Sustentabilidade',
    ano: '2024',
    duracao: '47 min',
    descricaoCurta:
      'Navegando pela sustentabilidade: cultura náutica e preservação ambiental em Itajaí.',
    descricaoCompleta:
      'Neste episódio, recebemos Ana Júlia Krensiglova, coordenadora da Associação Náutica de Itajaí (ANI), e Adriano Marenzi, professor e biólogo marinho. Vamos explorar a relação de Itajaí com o mar, as ações da ANI no fortalecimento da cultura náutica local e as iniciativas ambientais para preservar os costões do Litoral Norte catarinense.',
    participantes: ['Oxigênio Central de Podcast', 'Ana Júlia Krensiglova, Adriano Marenzi'],
    link: 'https://open.spotify.com/episode/00T3Rch8aWrUysBnMQDp7M',
    destaque: true,
    demonstrativo: true,
  },
  {
    id: '2',
    titulo: 'Arte e cultura em movimento',
    categoria: 'Cultura',
    ano: '2024',
    duracao: '56 min',
    descricaoCurta:
      'Arte e cultura em movimento.',
    descricaoCompleta:
      'O podcast Oxigênio, Central de Podcast celebra a efervescência cultural de Itajaí com dois convidados ilustres. Wagner Kuhnen, tatuador, artista plástico, baterista da banda Ninguém Sabe e oficineiro do projeto Arte nos Bairros, compartilha sua vivência na transformação cultural das comunidades locais. Já Vê Domingos, professor de licenciatura em Artes Visuais e renomado músico, reflete sobre a importância da arte na formação pessoal e no fortalecimento da identidade de Itajaí.',
    participantes: ['Oxigênio Central de Podcast', 'Wagner Kuhnen, Vê Domingos'],
    link: 'https://open.spotify.com/episode/2X4bqbh0hRGPMp4UeU3us5',
    destaque: false,
    demonstrativo: true,
  },
  {
    id: '3',
    titulo: 'Gestão e Tributação, com o Professor Eduardo Krieger',
    categoria: 'Gestão e Tributação',
    ano: '2024',
    duracao: '73 min',
    descricaoCurta:
      'Gestão e Tributação, com o Professor Eduardo Krieger.',
    descricaoCompleta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe o professor Eduardo Krieger, um especialista em Administração e Direito Tributário, com formação acadêmica sólida pela Univali. Na conversa, ele explora a relação entre gestão e tributação, destacando os desafios e oportunidades dessas áreas no contexto do desenvolvimento econômico e social de Itajaí e região.',
    participantes: ['Oxigênio Central de Podcast', 'Eduardo Krieger'],
    link: 'https://open.spotify.com/episode/543A3xDCVOldbWTo4rzhwn',
    destaque: false,
    demonstrativo: true,
  },
  {
    id: '4',
    titulo: 'Reciclagem e sustentabilidade: a trajetória de dona Marli Martins à frente da Reciclavale',
    categoria: 'Sustentabilidade',
    ano: '2024',
    duracao: '60 min',
    descricaoCurta:
      'Reciclagem e sustentabilidade: a trajetória de dona Marli Martins à frente da Reciclavale.',
    descricaoCompleta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe Dona Marli Martins, CEO e fundadora da Cooperativa Reciclavale, de Itajaí. Com uma trajetória marcada pelo compromisso com a sustentabilidade, ela compartilha sua experiência à frente da cooperativa, discutindo os desafios e conquistas na promoção da reciclagem e da economia circular.',
    participantes: ['Oxigênio Central de Podcast', 'Dona Marli Martins'],
    link: 'https://open.spotify.com/episode/5UUZL2SQVkZmYjMUQdr1hV',
    destaque: false,
    demonstrativo: true,
  },
  {
    id: '5',
    titulo: 'Combate à dengue: desafios e ações de Lúcio Vieira em Itajaí',
    categoria: 'Saúde',
    ano: '2024',
    duracao: '40 min',
    descricaoCurta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe Lúcio Vieira, coordenador do programa de combate à dengue de Itajaí. Com vasta experiência na área de saúde pública, Lúcio compartilha os desafios enfrentados no controle da dengue na região, as estratégias adotadas para prevenir surtos e os esforços para conscientizar a população sobre a importância do combate ao mosquito transmissor.',
    descricaoCompleta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe Lúcio Vieira, coordenador do programa de combate à dengue de Itajaí. Com vasta experiência na área de saúde pública, Lúcio compartilha os desafios enfrentados no controle da dengue na região, as estratégias adotadas para prevenir surtos e os esforços para conscientizar a população sobre a importância do combate ao mosquito transmissor.',
    participantes: ['Oxigênio Central de Podcast',   'Lúcio Vieira'],
    link: 'https://open.spotify.com/episode/7KMozBHwTFwYezTcXR1elp',
    destaque: false,
    demonstrativo: true,
  },
  {
    id: '6',
    titulo: 'Solidariedade em ação: dona Bernadete Berto e o voluntariado na AMT de Itajaí',
    categoria: 'Cidadania',
    ano: '2024',
    duracao: '38 min',
    descricaoCurta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe Dona Bernadete Berto, voluntária da Associação Madre Teresa (AMT) de Itajaí. Com uma vida dedicada ao voluntariado, Dona Bernadete compartilha sua experiência de mais de anos ajudando a AMT a oferecer apoio e acolhimento a famílias em situação de vulnerabilidade social.',
    descricaoCompleta:
      'Neste episódio, o podcast Oxigênio, Central de Podcast recebe Dona Bernadete Berto, voluntária da Associação Madre Teresa (AMT) de Itajaí. Com uma vida dedicada ao voluntariado, Dona Bernadete compartilha sua experiência de mais de 20 anos ajudando a AMT a oferecer apoio e acolhimento a famílias em situação de vulnerabilidade social.',
    participantes: ['Oxigênio Central de Podcast', 'Dona Bernadete Berto'],
    link: 'https://open.spotify.com/episode/4Gqy90CsPclC4DhB5HCQJg',
    destaque: false,
    demonstrativo: true,
  },
];

export default episodios;
