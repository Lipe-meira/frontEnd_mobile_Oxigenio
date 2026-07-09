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
    destaque: false,
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
  {
    id: '7',
    titulo: 'Projeto Rondon: impactos da extensão universitária sob o olhar da profa. Ednéia Casagranda Bueno',
    categoria: 'Cultura',
    ano: '2025',
    duracao: '24 min',
    descricaoCurta:
      'Projeto Rondon: impactos da extensão universitária sob o olhar da profa. Ednéia Casagranda Bueno',
    descricaoCompleta:
      'O conhecimento é capaz de transformar vidas. Esta é uma das missões dos universitários que participam do Projeto Rondon, do Ministério da Defesa, que leva capacitação e partilha de vivências a diversas regiões do Brasil. Para falar sobre o impacto dos projetos de extensão universitária na vida das pessoas, o Oxigênio - Central de Podcasts recebeu neste episódio a professora pós-doutorada Ednéia Casagranda Bueno, coordenadora do Conjunto A da Universidade do Vale do Itajaí (Univali) na Operação Amazonas 2025. Ouça e entenda um pouco mais sobre este lindo projeto, que desde os anos 70 dá uma “lição de brasilidades” a universitários de todo o país.',
    participantes: ['Oxigênio Central de Podcast', 'Ednéia Casagranda Bueno'],
    link: 'https://open.spotify.com/episode/32J89bwfBDnoDtOyhT81ma',
    destaque: false,
    demonstrativo: true,
  },

   {
    id: '8',
    titulo: '“Se despir”: lições de vida e de cidadania, com a universitária Manuela de Pádua Portero',
    categoria: 'Cidadania',
    ano: '2025',
    duracao: '35 min',
    descricaoCurta:
      '“Se despir”: lições de vida e de cidadania, com a universitária Manuela de Pádua Portero',
    descricaoCompleta:
      'Se você é capaz de esquecer o seu “vocabulário”, você tem asas para voar. Em outras palavras, “se despir” dos preceitos. Esta é uma das mensagens que a universitária Manuela de Pádua Portero, do curso de Psicologia da Universidade do Vale do Itajaí (Univali), esclareceu neste episódio do Oxigênio - Central de Podcasts sobre a participação na Operação Sentinelas Avançadas II, do Projeto Rondon. Ouça e conheça algumas das experiências transformadoras que marcaram a vida de Manuela e seus colegas.',
    participantes: ['Oxigênio Central de Podcast', 'Manuela de Pádua Portero'],
    link: 'https://open.spotify.com/episode/5ZxNtNdFX53gVql64Mapzq',
    destaque: false,
    demonstrativo: true,
  },

   {
    id: '9',
    titulo: 'Bem-estar do verde: dicas para o cultivo de hortaliças, temperos e plantas, com Renê Artur Ferreira',
    categoria: 'Meio Ambiente',
    ano: '2025',
    duracao: '40 min',
    descricaoCurta:
      'Bem-estar do verde: dicas para o cultivo de hortaliças, temperos e plantas, com Renê Artur Ferreira',
    descricaoCompleta:
      'O cultivo de plantas, hortaliças e temperos traz não apenas benefícios para a saúde física, mas também para a saúde mental. Embora a prática seja recomendada por especialistas, muitas pessoas não possuem a expertise para cultivar um espaço verde dentro de casa ou do apartamento, por exemplo. Neste episódio do Oxigênio Central de Podcast, o engenheiro agrônomo e responsável pelo Horto Medicinal da Univali, professor Renê Artur Ferreira, nos dá dicas sobre o cultivo de plantas em ambientes internos. Ouça e comece hoje mesmo!',
    participantes: ['Oxigênio Central de Podcast', 'Renê Artur Ferreira'],
    link: 'https://open.spotify.com/episode/24ab3VeZRsPvMLyVKfJa9n',
    destaque: false,
    demonstrativo: true,
  },

   {
    id: '10',
    titulo: 'Entre Linhas e Agulhas: Rose Bittencourt e os 50 anos costurando histórias!',
    categoria: 'Cultura',
    ano: '2025',
    duracao: '35 min',
    descricaoCurta:
      'Entre Linhas e Agulhas: Rose Bittencourt e os 50 anos costurando histórias!',
    descricaoCompleta:
      'A costura é uma arte, carrega histórias, e passa de geração em geração conectando pessoas. Neste episódio do podcast, os estudantes do curso de Design de Moda entrevistam Rose Bittencourt, costureira com mais de 50 anos de trajetória. Ao longo da conversa, Rose compartilha sua experiência na costura e de vida, as transformações que pode viver na moda e a importância do trabalho manual, compartilhou também algumas curiosidades sobre esses anos de carreira. Um episódio para quem valoriza o feito à mão, a sabedoria de quem viveu a moda de perto e a inspiração de uma vida dedicada à costura. Aperte o play e conheça essa história!',
    participantes: ['Oxigênio Central de Podcast', 'Rose Bittencourt'],
    link: 'https://open.spotify.com/episode/1cdgzEqN7u7kb562vYt6Kd',
    destaque: false,
    demonstrativo: true,
  },

     {
    id: '11',
    titulo: 'Costura que cura: a arte de costurar como aliada da saúde mental, com Jaqueline Tesch e Matheus Oliver',
    categoria: 'Saúde e Bem-estar',
    ano: '2025',
    duracao: '58 min',
    descricaoCurta:
      'Costura que cura: a arte de costurar como aliada da saúde mental, com Jaqueline Tesch e Matheus Oliver',
    descricaoCompleta:
      'Costura que cura: a arte de costurar como aliada da saúde mental, com Jaqueline Tesch e Matheus OliverA prática da costura vai muito além da criação de peças e roupas: ela também pode ser uma poderosa aliada no cuidado com a saúde emocional. Em meio a tecidos, linhas e agulhas, muitas pessoas encontram um espaço de silêncio, foco e acolhimento. Neste episódio do Oxigênio Central Podcast, conversamos sobre como a costura pode funcionar como uma forma de terapia e autocuidado. Ouça e descubra os benefícios de costurar o próprio bem-estar!',
    participantes: ['Oxigênio Central de Podcast', 'Jaqueline Tesch e Matheus Oliver'],
    link: 'https://open.spotify.com/episode/43CqWVYUXCdbPrClqGDwm9',
    destaque: false,
    demonstrativo: true,
  },

   {
    id: '12',
    titulo: 'O papel dos congressos na formação acadêmica de estudantes de comunicação - Especial Intercom Sul 2026',
    categoria: 'Cultura',
    ano: '2026',
    duracao: '8 min',
    descricaoCurta:
      'O papel dos congressos na formação acadêmica de estudantes de comunicação - Especial Intercom Sul 2026',
    descricaoCompleta:
      'Neste episódio você acompanhará algumas entrevistas feitas pelos acadêmicos de jornalismo da Univali no Intercom Sul 2026, realizado entre os dias 4 e 6 de junho em Toledo, no Oeste do Paraná. Além de praticar as técnicas de entrevista, reportagem e comunicação, os acadêmicos Caio da Costa, Júlia Kato e Luiza Kramer descobriram um pouco mais sobre a importância dos congressos para o desenvolvimento de novos conhecimentos científicos e conexões fundamentais ao longo da carreira, seja na área da comunicação ou fora dela. Nosso objetivo com este episódio do Oxigênio é dar visibilidade ao trabalho dos estudantes e estimular você, que está nos ouvindo, a procurar novos horizontes, novos voos dentro da área em que está atuando! ',
    participantes: ['Oxigênio Central de Podcast', 'Caio da Costa, Júlia Kato e Luiza Kramer'],
    link: 'https://open.spotify.com/episode/6FAjW9rBmTRlBubJwMqqDB',
    destaque: true,
    demonstrativo: true,
  },
];

export default episodios;
