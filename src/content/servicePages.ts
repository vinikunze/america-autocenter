/**
 * =====================================================================
 *  CONTEÚDO DAS PÁGINAS DE SERVIÇO
 * =====================================================================
 *  Uma página por serviço, cada uma mirando o termo de busca que a
 *  pessoa realmente digita ("alinhamento e balanceamento em Sinop").
 *
 *  Isso existe por dois motivos concretos:
 *   1. Google Ads — cada grupo de anúncio cai numa página que fala do
 *      serviço anunciado. Índice de Qualidade sobe, custo por clique cai.
 *   2. Busca orgânica — sete portas de entrada em vez de uma.
 *
 *  ⚠️ O conteúdo abaixo descreve procedimentos padrão do setor. Não
 *  afirma prazo, preço, marca de equipamento nem tecnologia específica,
 *  porque nada disso foi confirmado pelo cliente. Se a oficina quiser
 *  destacar algo ("alinhamento 3D", "pronto em 1 hora"), confirme antes
 *  de escrever — prometer o que não se cumpre derruba a conta no Ads.
 * =====================================================================
 */

export type ServicePage = {
  /** Precisa bater com o `id` do serviço em `services`. */
  id: string;
  /** Vira a URL: /servicos/<slug>/ */
  slug: string;
  /** <title> da aba e do resultado de busca. */
  metaTitle: string;
  metaDescription: string;
  /** H1 da página. */
  heading: string;
  /** Parágrafo de abertura, abaixo do H1. */
  intro: string;
  /** Sinais de que o carro precisa deste serviço. */
  sintomas: string[];
  /** O que a oficina faz, em ordem. */
  etapas: { titulo: string; texto: string }[];
  /** Perguntas específicas deste serviço (alimenta o FAQPage da página). */
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    id: "alinhamento",
    slug: "alinhamento-e-balanceamento",
    metaTitle: "Alinhamento e balanceamento em Sinop/MT",
    metaDescription:
      "Carro puxando para o lado, volante torto ou vibrando? Alinhamento e balanceamento na América Auto Center, em Sinop. Orçamento pelo WhatsApp antes do serviço.",
    heading: "Alinhamento e balanceamento em Sinop",
    intro:
      "São dois serviços diferentes, por isso costumam ser feitos juntos. O alinhamento acerta os ângulos das rodas, e é ele que faz o carro andar reto e o pneu gastar por igual. Já o balanceamento distribui o peso de cada roda, e é o que tira a vibração do volante em velocidade.",
    sintomas: [
      "O carro puxa para um lado quando você solta um pouco o volante",
      "O volante fica torto mesmo com o carro andando reto",
      "O volante vibra a partir de determinada velocidade",
      "Um dos lados do pneu está gastando bem mais que o outro",
      "Você pegou um buraco forte ou subiu um meio-fio",
    ],
    etapas: [
      {
        titulo: "Inspeção antes de medir",
        texto:
          "Pneus, amortecedores, pivôs e terminais são conferidos primeiro. Alinhar um carro com folga na suspensão é jogar dinheiro fora: desregula de novo em poucos dias.",
      },
      {
        titulo: "Medição dos ângulos",
        texto:
          "As rodas são medidas e comparadas com a especificação do fabricante. Cada modelo tem a sua.",
      },
      {
        titulo: "Correção e balanceamento",
        texto:
          "Os ângulos são ajustados e cada roda é balanceada separadamente, para eliminar a vibração.",
      },
      {
        titulo: "Teste antes de entregar",
        texto:
          "O carro é testado para confirmar que anda reto e que a vibração sumiu.",
      },
    ],
    faq: [
      {
        question: "De quanto em quanto tempo preciso alinhar o carro?",
        answer:
          "A recomendação geral é a cada 10 mil km. Mas vale antes disso sempre que você trocar pneus, mexer na suspensão ou pegar um buraco forte. Em estrada de Mato Grosso, isso acontece com frequência.",
      },
      {
        question: "Alinhamento resolve a vibração do volante?",
        answer:
          "Normalmente não. Vibração em velocidade quase sempre é desbalanceamento das rodas, não desalinhamento. Por isso conferimos os dois.",
      },
      {
        question: "Preciso balancear ao trocar só um pneu?",
        answer:
          "Sim. A roda que recebeu o pneu novo precisa ser balanceada, porque o peso mudou. E aproveitar para conferir o alinhamento evita gastar o pneu novo torto.",
      },
    ],
  },
  {
    id: "oleo",
    slug: "troca-de-oleo",
    metaTitle: "Troca de óleo e filtros em Sinop/MT",
    metaDescription:
      "Troca de óleo com a especificação exata do fabricante, troca de filtros e descarte correto do usado. América Auto Center, Sinop/MT. Orçamento pelo WhatsApp.",
    heading: "Troca de óleo e filtros em Sinop",
    intro:
      "O óleo é o que impede o motor de se destruir por atrito. Atrasar a troca é o tipo de economia que cobra caro depois: óleo vencido perde a capacidade de lubrificar e o estrago aparece em peça que custa muitas vezes o valor da troca.",
    sintomas: [
      "A quilometragem ou o prazo da última troca já passou",
      "A luz do óleo acendeu no painel",
      "O nível na vareta está abaixo do mínimo",
      "O óleo está muito escuro ou com aspecto grosso",
      "O motor ficou mais barulhento do que o normal",
    ],
    etapas: [
      {
        titulo: "Conferência da especificação",
        texto:
          "Cada motor pede um óleo específico. Usamos o que o fabricante do seu veículo determina, não o que está sobrando na prateleira.",
      },
      {
        titulo: "Drenagem e troca do filtro",
        texto:
          "O óleo usado é drenado e o filtro de óleo é trocado junto. Trocar óleo mantendo o filtro velho contamina o óleo novo na hora.",
      },
      {
        titulo: "Abastecimento e conferência",
        texto:
          "O motor recebe o volume correto e o nível é conferido com o motor já aquecido.",
      },
      {
        titulo: "Descarte do usado",
        texto:
          "O óleo retirado vai para descarte, como manda a legislação ambiental. Óleo usado não pode ir para o lixo comum nem para o solo.",
      },
    ],
    faq: [
      {
        question: "De quanto em quanto tempo devo trocar o óleo?",
        answer:
          "Depende do motor e do tipo de óleo. O manual do veículo traz o intervalo certo. Vale lembrar que o prazo também conta: mesmo rodando pouco, o óleo envelhece e precisa ser trocado.",
      },
      {
        question: "Preciso trocar o filtro junto?",
        answer:
          "Sim, o filtro de óleo é trocado em toda troca. O filtro de ar e o de combustível têm intervalos próprios, e a gente avisa quando chegar a hora.",
      },
      {
        question: "Posso usar um óleo diferente do que o manual pede?",
        answer:
          "Não recomendamos. A especificação não é sugestão: viscosidade errada compromete a lubrificação e, em motor na garantia, pode dar problema com a montadora.",
      },
    ],
  },
  {
    id: "freios",
    slug: "freios",
    metaTitle: "Freios em Sinop/MT: pastilha, disco e fluido",
    metaDescription:
      "Pastilhas, discos, tambores e fluido de freio na América Auto Center, em Sinop/MT. Medição antes de trocar e teste antes de entregar. Orçamento pelo WhatsApp.",
    heading: "Freios em Sinop",
    intro:
      "Freio é o único item do carro em que economizar não compensa nunca. A boa notícia é que ele avisa antes de falhar, quase sempre com barulho ou com uma mudança no pedal. Quem leva no primeiro sinal costuma trocar só a pastilha. Quem espera, acaba trocando o disco junto.",
    sintomas: [
      "Barulho agudo de guincho ao frear",
      "Barulho de metal raspando, que já é sinal de que passou do ponto",
      "O pedal afunda mais do que antes ou ficou esponjoso",
      "O carro puxa para um lado quando você freia",
      "O volante ou o pedal treme na frenagem",
      "A luz de freio acendeu no painel",
    ],
    etapas: [
      {
        titulo: "Medição de pastilha e disco",
        texto:
          "A espessura é medida e comparada com o limite do fabricante. Isso define se o disco ainda serve ou se precisa ser trocado junto.",
      },
      {
        titulo: "Inspeção do sistema",
        texto:
          "Fluido, mangueiras, cilindros e pinças são conferidos. Pedal esponjoso muitas vezes é fluido velho ou ar no sistema, não pastilha gasta.",
      },
      {
        titulo: "Troca e sangria",
        texto:
          "As peças são substituídas e o sistema é sangrado para tirar o ar, que é o que deixa o pedal mole.",
      },
      {
        titulo: "Teste antes de entregar",
        texto:
          "O carro é testado em movimento. Freio só sai daqui depois de ser freado.",
      },
    ],
    faq: [
      {
        question: "Com que frequência preciso trocar as pastilhas?",
        answer:
          "Não há número fixo: depende muito de como e onde você dirige. Trânsito urbano gasta mais que estrada. Por isso medimos em vez de chutar.",
      },
      {
        question: "Preciso trocar o disco junto com a pastilha?",
        answer:
          "Só se ele estiver abaixo da espessura mínima ou empenado. Se estiver dentro do limite, trocamos apenas a pastilha e te mostramos a medição.",
      },
      {
        question: "E o fluido de freio, troca quando?",
        answer:
          "O fluido absorve umidade com o tempo, e isso reduz a eficiência da frenagem. O intervalo vem no manual do veículo, normalmente a cada dois anos.",
      },
    ],
  },
  {
    id: "suspensao",
    slug: "suspensao",
    metaTitle: "Suspensão em Sinop/MT: amortecedor, mola e pivô",
    metaDescription:
      "Barulho na lombada, carro balançando ou puxando para o lado? Suspensão na América Auto Center, em Sinop/MT. Diagnóstico e orçamento antes do serviço.",
    heading: "Suspensão em Sinop",
    intro:
      "Suspensão boa não é só conforto, é segurança. É ela que mantém o pneu grudado no chão quando você freia ou desvia de alguma coisa. E quem roda nas estradas da região exige bem mais dela do que a média do país.",
    sintomas: [
      "Barulho seco ao passar em lombada ou buraco",
      "O carro continua balançando depois de uma ondulação na pista",
      "O carro parece mais baixo de um lado",
      "A direção ficou com folga ou endureceu",
      "Pneu gastando de forma irregular, em partes",
      "O carro joga para os lados em curva mais rápida",
    ],
    etapas: [
      {
        titulo: "Diagnóstico do ruído",
        texto:
          "Barulho de suspensão vem de muitos lugares: amortecedor, mola, bandeja, pivô, terminal, bieleta, coxim. Localizamos a origem antes de orçar.",
      },
      {
        titulo: "Inspeção dos dois lados",
        texto:
          "A suspensão trabalha em par. Se um lado está no fim, o outro normalmente está perto.",
      },
      {
        titulo: "Troca das peças aprovadas",
        texto:
          "Você recebe o orçamento com o que é urgente e o que pode esperar, e decide o que fazer agora.",
      },
      {
        titulo: "Alinhamento depois",
        texto:
          "Mexeu na suspensão, o alinhamento sai de ponto. Conferir a geometria depois faz parte do serviço bem feito.",
      },
    ],
    faq: [
      {
        question: "Amortecedor precisa ser trocado aos pares?",
        answer:
          "Sim, sempre aos pares do mesmo eixo. Um amortecedor novo de um lado e um gasto do outro deixa o carro desequilibrado na frenagem.",
      },
      {
        question: "Preciso alinhar depois de mexer na suspensão?",
        answer:
          "Precisa. Qualquer peça trocada na suspensão altera a geometria das rodas. Sem o alinhamento, o pneu novo gasta torto.",
      },
      {
        question: "Dá para rodar com a suspensão fazendo barulho?",
        answer:
          "Depende da peça. Barulho de coxim é desconforto; folga em pivô ou terminal é risco real de perder o controle. Por isso o diagnóstico vem antes.",
      },
    ],
  },
  {
    id: "revisao",
    slug: "revisao-geral",
    metaTitle: "Revisão geral em Sinop/MT: checagem completa",
    metaDescription:
      "Revisão geral antes da viagem ou de rotina na América Auto Center, em Sinop/MT. Você recebe o que é urgente e o que pode esperar, com o valor antes.",
    heading: "Revisão geral em Sinop",
    intro:
      "A revisão existe para você descobrir o problema enquanto ele ainda é barato. Quase todo reparo caro começou como um item simples que ninguém olhou a tempo. E numa viagem pela BR, o que era uma peça vira um guincho.",
    sintomas: [
      "Você vai pegar estrada e quer sair tranquilo",
      "Faz tempo que o carro não passa por uma checagem",
      "Você acabou de comprar um usado e quer saber o estado real",
      "Apareceu algum ruído, cheiro ou luz no painel que você não sabe explicar",
      "O carro está voltando da garantia e você quer uma segunda opinião",
    ],
    etapas: [
      {
        titulo: "Checagem item a item",
        texto:
          "Óleo e filtros, freios, suspensão, direção, pneus, fluidos, correias, bateria, luzes e vazamentos aparentes.",
      },
      {
        titulo: "Separação por urgência",
        texto:
          "Você recebe a lista dividida: o que precisa ser feito agora, o que dá para programar e o que está em ordem.",
      },
      {
        titulo: "Orçamento antes de executar",
        texto:
          "Nada é trocado sem a sua aprovação. Se preferir fazer só o urgente agora, sem problema.",
      },
    ],
    faq: [
      {
        question: "A revisão é cobrada mesmo se eu não fizer nenhum serviço?",
        answer:
          "Fale com a equipe pelo WhatsApp antes de trazer o carro. A gente explica como funciona no seu caso, sem surpresa na hora de retirar.",
      },
      {
        question: "Quanto tempo o carro fica parado?",
        answer:
          "Depende do que for encontrado. A checagem em si é rápida; o que define o prazo é o serviço que você aprovar depois dela.",
      },
      {
        question: "Vocês fazem revisão de carro na garantia?",
        answer:
          "A revisão obrigatória de garantia precisa ser feita na rede autorizada da montadora. Agora, uma checagem independente para você saber o estado real do carro, fazemos sem problema.",
      },
    ],
  },
  {
    id: "escapamento",
    slug: "escapamento",
    metaTitle: "Escapamento em Sinop/MT: solda, silencioso e catalisador",
    metaDescription:
      "Escapamento barulhento, furado ou com cheiro entrando no carro? Solda e troca na América Auto Center, em Sinop/MT. Orçamento pelo WhatsApp antes.",
    heading: "Escapamento em Sinop",
    intro:
      "Escapamento furado não é só barulho. Ele pode deixar entrar gás no habitáculo, derrubar o desempenho do motor e reprovar o carro na vistoria. Boa parte dos casos se resolve com solda, sem precisar trocar a peça inteira.",
    sintomas: [
      "O carro ficou muito mais barulhento, principalmente ao acelerar",
      "Cheiro de escapamento entrando dentro do carro",
      "Chiado ou assobio vindo de baixo",
      "Barulho de peça batendo embaixo do carro",
      "Perda de força do motor",
      "Reprovação ou pendência em vistoria",
    ],
    etapas: [
      {
        titulo: "Inspeção do sistema",
        texto:
          "Coletor, catalisador, silencioso, ponteira, abraçadeiras e coxins são verificados para localizar o ponto exato do problema.",
      },
      {
        titulo: "Solda quando dá para recuperar",
        texto:
          "Furo e trinca em peça sadia são soldados. Trocar a peça inteira só quando ela realmente não tem mais recuperação.",
      },
      {
        titulo: "Troca do que não recupera",
        texto:
          "Silencioso, catalisador ou coletor comprometidos são substituídos.",
      },
      {
        titulo: "Teste com o motor ligado",
        texto:
          "O sistema é testado para confirmar que não sobrou vazamento nem ruído.",
      },
    ],
    faq: [
      {
        question: "Dá para soldar ou tem que trocar?",
        answer:
          "Depende do estado da peça. Furo pontual em peça ainda firme normalmente é soldado. Peça muito corroída não segura a solda e precisa ser trocada. De qualquer forma, mostramos a situação antes de orçar.",
      },
      {
        question: "Escapamento furado aumenta o consumo?",
        answer:
          "Pode aumentar, sim. Vazamento antes da sonda confunde a leitura que o módulo usa para calcular a mistura, e o motor pode passar a consumir mais.",
      },
      {
        question: "É perigoso rodar com o escapamento furado?",
        answer:
          "É. Se o furo estiver em posição que leve gás para dentro do carro, há risco real de intoxicação, principalmente com os vidros fechados e ar-condicionado em recirculação.",
      },
    ],
  },
  {
    id: "bicos",
    slug: "limpeza-de-bicos",
    metaTitle: "Limpeza de bicos injetores em Sinop/MT",
    metaDescription:
      "Marcha lenta oscilando, falha ao acelerar ou consumo alto? Limpeza e teste de bicos injetores na América Auto Center, em Sinop/MT.",
    heading: "Limpeza de bicos injetores em Sinop",
    intro:
      "O bico injetor pulveriza o combustível dentro do motor. Quando entope, o jato perde a forma e o motor passa a receber combustível de um jeito irregular. Daí vem a falha, a marcha lenta oscilando e o consumo subindo sem explicação.",
    sintomas: [
      "A marcha lenta oscila, parece que o carro vai morrer parado",
      "O motor falha ou engasga ao acelerar",
      "O consumo aumentou sem você mudar o jeito de dirigir",
      "O carro demora mais para pegar, principalmente frio",
      "Cheiro forte de combustível",
      "A luz de injeção acendeu no painel",
    ],
    etapas: [
      {
        titulo: "Diagnóstico antes de desmontar",
        texto:
          "Nem toda falha de motor é bico sujo. Vela, bobina e sensor dão sintoma parecido, então confirmamos a causa antes de mexer.",
      },
      {
        titulo: "Remoção e teste",
        texto:
          "Os bicos são retirados e testados para medir vazão e padrão do jato. É esse teste que mostra qual está realmente entupido.",
      },
      {
        titulo: "Limpeza e novo teste",
        texto:
          "Depois de limpos, os bicos são testados de novo. Se algum não voltar ao padrão, você fica sabendo antes de reinstalar.",
      },
      {
        titulo: "Reinstalação com vedações novas",
        texto:
          "Anéis e vedações são substituídos na montagem, para não criar vazamento depois.",
      },
    ],
    faq: [
      {
        question: "De quanto em quanto tempo preciso limpar os bicos?",
        answer:
          "Não é um item de troca por quilometragem. Se faz quando o sintoma aparece ou quando o teste indica. Combustível de má qualidade antecipa bastante esse momento.",
      },
      {
        question: "A limpeza resolve sempre?",
        answer:
          "Na maioria dos casos sim. Mas bico muito desgastado não volta ao padrão de vazão nem limpo. O teste mostra isso, e você decide com a informação na mão.",
      },
      {
        question: "Aquele aditivo de tanque substitui a limpeza?",
        answer:
          "Ajuda na manutenção preventiva, mas não desentope bico já comprometido. Quando o sintoma apareceu, o aditivo sozinho dificilmente resolve.",
      },
    ],
  },
];

/** Busca a página pelo id do serviço. */
export function findServicePage(id: string): ServicePage | undefined {
  return servicePages.find((page) => page.id === id);
}
