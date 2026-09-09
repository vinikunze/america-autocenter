/**
 * =====================================================================
 *  FONTE ÚNICA DE VERDADE DO SITE
 * =====================================================================
 *  Todo o conteúdo editável da landing page vive neste arquivo.
 *  Para atualizar textos, telefone, endereço, serviços, FAQ ou
 *  depoimentos, altere APENAS aqui — nenhum componente precisa ser
 *  tocado.
 *
 *  ⚠️  CAMPOS MARCADOS COM "// CONFIRMAR" foram inferidos de registros
 *      públicos (CNPJ / cadastros comerciais) e precisam de validação
 *      do cliente antes de subir a campanha de tráfego pago.
 * =====================================================================
 */

export const business = {
  /** Nome fantasia usado em toda a comunicação. */
  name: "América Auto Center",
  /** Razão social — usada no rodapé e no schema.org. */
  legalName: "A. M. Custódio LTDA",
  cnpj: "61.356.543/0001-30",
  /** Descrição curta (meta description / OpenGraph). */
  tagline: "Centro automotivo completo em Sinop/MT",
  shortDescription:
    "Peças, acessórios e serviços automotivos com diagnóstico honesto, peças de primeira linha e garantia por escrito. Agende pelo WhatsApp e saia com o carro pronto no mesmo dia.",

  city: "Sinop",
  state: "MT",
  address: {
    street: "Rua das Primaveras, 7354",
    district: "", // CONFIRMAR: bairro não consta no cadastro público
    city: "Sinop",
    state: "MT",
    zip: "78550-617",
    /** Usado no link "Como chegar" e no iframe do mapa. */
    mapsQuery: "Rua das Primaveras, 7354 - Sinop - MT, 78550-617",
  },

  /**
   * CONFIRMAR: o cadastro público registra 66 9260-7556 (8 dígitos).
   * Celulares em MT têm 9 dígitos, então assumimos o 9 inicial.
   * Confirme antes de publicar — este número recebe 100% dos leads.
   */
  phone: {
    display: "(66) 9 9260-7556",
    /** Formato E.164 sem símbolos, usado em tel: e wa.me */
    raw: "5566992607556",
  },

  email: "americaautocenter11@gmail.com",
  instagram: {
    handle: "@a.mcustodio",
    url: "https://www.instagram.com/a.mcustodio/",
  },

  /** CONFIRMAR: horários presumidos do padrão do setor em Sinop. */
  hours: [
    { days: "Segunda a sexta", time: "08h00 – 18h00" },
    { days: "Sábado", time: "08h00 – 12h00" },
    { days: "Domingo e feriados", time: "Fechado" },
  ],
  /** Formato schema.org (openingHours). Mantenha em sincronia com `hours`. */
  hoursSchema: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],

  /** Mensagem pré-preenchida ao abrir o WhatsApp. */
  whatsappMessage:
    "Olá! Vim pelo site da América Auto Center e gostaria de fazer um orçamento.",
} as const;

/**
 * URL canônica de produção (canonical, sitemap, OpenGraph e schema.org).
 * Definida pelo ambiente de deploy; o valor abaixo é o padrão do domínio
 * próprio. Ajuste ao registrar o domínio definitivo.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://americaautocenter.com.br"; // CONFIRMAR

/** Prefixo de subdiretório, quando o site não é servido da raiz. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* --------------------------------------------------------------------- */
/*  PROVA / NÚMEROS DA VITRINE                                            */
/*  Use somente números que o cliente possa comprovar.                    */
/* --------------------------------------------------------------------- */

export const highlights = [
  { value: "Mesmo dia", label: "Serviços rápidos sem deixar o carro parado" },
  { value: "90 dias", label: "Garantia por escrito em peça e mão de obra" },
  { value: "Sem surpresa", label: "Orçamento aprovado antes de qualquer reparo" },
  { value: "Sinop/MT", label: "Estrutura própria na Rua das Primaveras" },
] as const;

/* --------------------------------------------------------------------- */
/*  PROVA SOCIAL DA PRIMEIRA DOBRA                                        */
/*  ⚠️ Só entram números que o cliente possa comprovar. Deixe `value`     */
/*  vazio e o item some da barra — melhor um item a menos do que um       */
/*  número inventado, que quebra a confiança e viola as políticas de      */
/*  anúncio do Google e da Meta.                                          */
/* --------------------------------------------------------------------- */

export const socialProof = [
  {
    /** Preencha quando houver avaliações reais no Perfil da Empresa no Google. */
    value: "", // ex.: "4,9"
    label: "no Google",
    kind: "rating" as const,
  },
  {
    value: "", // ex.: "+1.200"
    label: "clientes atendidos",
    kind: "count" as const,
  },
  {
    value: "90 dias",
    label: "de garantia por escrito",
    kind: "badge" as const,
  },
];

/* --------------------------------------------------------------------- */
/*  FOTOS                                                                 */
/*                                                                        */
/*  Cada slot abaixo é um espaço já dimensionado no layout. Enquanto      */
/*  `src` estiver vazio, entra um bloco gráfico no lugar — o site não     */
/*  quebra. Para publicar a foto de verdade:                              */
/*                                                                        */
/*    1. salve o arquivo em `public/fotos/` (JPG ou WebP, ~200 KB);       */
/*    2. preencha `src` com o caminho, ex.: "/fotos/fachada.jpg";         */
/*    3. escreva o `alt` descrevendo a cena (acessibilidade e SEO).       */
/*                                                                        */
/*  Respeite a proporção indicada em cada slot: fora dela a imagem é      */
/*  cortada no centro.                                                    */
/* --------------------------------------------------------------------- */

export type Photo = {
  src: string;
  alt: string;
  /** Rótulo sobreposto no canto inferior. Vazio = sem rótulo. */
  caption?: string;
  legend?: string;
};

export const photos = {
  /** 4:3 — fachada ou box principal. Aparece no bloco de destaque. */
  fachada: {
    src: "",
    alt: "Fachada da América Auto Center em Sinop",
    caption: "Nossa estrutura",
    legend: "Rua das Primaveras, 7354",
  },
  /** 4:3 — atendimento no box, mecânico trabalhando. */
  atendimento: {
    src: "",
    alt: "Mecânico atendendo um veículo no box da oficina",
    caption: "Mão de obra",
    legend: "Serviço acompanhado de perto",
  },
  /** 4:3 — prateleira de peças / estoque. */
  pecas: {
    src: "",
    alt: "Prateleira com peças novas para veículos",
    caption: "Peças novas",
    legend: "Marcas reconhecidas",
  },
  /** 4:3 — pneus ou alinhamento. */
  pneus: {
    src: "",
    alt: "Pneu sendo montado na roda",
    caption: "Pneus",
    legend: "Montagem e balanceamento",
  },
  /** 16:9 — fundo escurecido da seção "Por que a América". */
  bastidor: {
    src: "",
    alt: "",
  },
} satisfies Record<string, Photo>;

/** Foto de topo de cada card de serviço. 16:10. Vazio = bloco gráfico. */
export const servicePhotos: Record<string, Photo> = {
  pecas: { src: "", alt: "Peças automotivas novas em estoque" },
  revisao: { src: "", alt: "Checklist de revisão sendo preenchido" },
  oleo: { src: "", alt: "Troca de óleo em veículo suspenso" },
  freios: { src: "", alt: "Disco e pastilha de freio sendo trocados" },
  suspensao: { src: "", alt: "Amortecedor sendo substituído" },
  alinhamento: { src: "", alt: "Alinhamento 3D em execução" },
  pneus: { src: "", alt: "Pneu novo sendo montado" },
};

/* --------------------------------------------------------------------- */
/*  SERVIÇOS                                                              */
/*  ⚠️ CONFIRMAR a lista com o cliente. A atividade registrada no CNPJ é  */
/*  comércio de peças e acessórios (CNAE 4530-7/03); os serviços abaixo   */
/*  são o mix padrão de um auto center. Remova o que não for oferecido.   */
/* --------------------------------------------------------------------- */

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  /** Bullets curtos, escaneáveis. Máx. 3. */
  points: string[];
};

export const services: Service[] = [
  {
    id: "pecas",
    icon: "piston",
    title: "Peças e acessórios",
    description:
      "Linha completa de peças novas para carros e utilitários, das marcas que o mecânico confia — com pronta entrega.",
    points: ["Marcas originais e genuínas", "Consulta por placa", "Pronta entrega"],
  },
  {
    id: "revisao",
    icon: "clipboard",
    title: "Revisão preventiva",
    description:
      "Checklist completo de 30 itens antes da viagem: você descobre o problema antes que ele custe caro.",
    points: ["Checklist de 30 itens", "Relatório com fotos", "Orçamento na hora"],
  },
  {
    id: "oleo",
    icon: "oil",
    title: "Troca de óleo e filtros",
    description:
      "Óleo na especificação exata do fabricante, com troca de filtros e descarte ambientalmente correto.",
    points: ["Lubrificantes de linha premium", "Feito em até 40 min", "Selo de controle"],
  },
  {
    id: "freios",
    icon: "brake",
    title: "Freios",
    description:
      "Pastilhas, discos, tambores e fluido. O item que não admite economia — e onde a peça certa faz toda a diferença.",
    points: ["Medição de disco", "Sangria do sistema", "Teste em pista"],
  },
  {
    id: "suspensao",
    icon: "shock",
    title: "Suspensão e direção",
    description:
      "Amortecedores, molas, bandejas, pivôs e terminais. Fim do barulho na lombada e do carro puxando para o lado.",
    points: ["Diagnóstico de ruído", "Peças reforçadas", "Ideal para estradas de MT"],
  },
  {
    id: "alinhamento",
    icon: "steering",
    title: "Alinhamento e balanceamento",
    description:
      "Geometria conferida por computador: pneu dura mais, volante para de vibrar e o carro anda reto.",
    points: ["Alinhamento 3D", "Balanceamento das 4 rodas", "Rodízio de pneus"],
  },
  {
    id: "pneus",
    icon: "tire",
    title: "Pneus e borracharia",
    description:
      "Montagem, conserto, calibragem e venda de pneus para carro, picape e utilitário — com garantia de procedência.",
    points: ["Montagem e conserto", "Calibragem com nitrogênio", "Pronto atendimento"],
  },
];

/* --------------------------------------------------------------------- */
/*  DIFERENCIAIS                                                          */
/* --------------------------------------------------------------------- */

export const differentials = [
  {
    icon: "shield" as IconName,
    title: "Orçamento antes, sempre",
    description:
      "Nenhuma peça é trocada sem o seu ok. Você recebe o valor fechado no WhatsApp e decide com calma.",
  },
  {
    icon: "camera" as IconName,
    title: "Você vê o que foi feito",
    description:
      "Fotos do antes e depois e a peça velha na sua mão. Transparência não é discurso, é procedimento.",
  },
  {
    icon: "stamp" as IconName,
    title: "Garantia por escrito",
    description:
      "Peça e mão de obra cobertas por 90 dias. Deu problema no que a gente mexeu, a gente resolve.",
  },
  {
    icon: "clock" as IconName,
    title: "Agilidade de verdade",
    description:
      "Serviços de manutenção rápida saem no mesmo dia. Seu carro é sua ferramenta de trabalho.",
  },
];

/* --------------------------------------------------------------------- */
/*  COMO FUNCIONA                                                         */
/* --------------------------------------------------------------------- */

export const steps = [
  {
    title: "Chame no WhatsApp",
    description:
      "Conte o que está acontecendo com o carro. Se souber a placa, o atendimento fica ainda mais rápido.",
  },
  {
    title: "Diagnóstico e orçamento",
    description:
      "Nossa equipe avalia o veículo, mostra o que precisa ser feito e envia o valor fechado antes de começar.",
  },
  {
    title: "Serviço feito e garantido",
    description:
      "Você aprova, a gente executa e devolve o carro pronto, testado e com garantia por escrito.",
  },
];

/* --------------------------------------------------------------------- */
/*  DEPOIMENTOS                                                           */
/*  A seção só aparece no site quando este array tiver itens.             */
/*  ⚠️ NUNCA invente depoimentos: use avaliações reais do Google/Instagram*/
/*  Formato: { name, role, text, rating }                                 */
/* --------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [];

/* --------------------------------------------------------------------- */
/*  FAQ — também alimenta o schema.org FAQPage (SEO)                      */
/* --------------------------------------------------------------------- */

export const faq = [
  {
    question: "Preciso agendar ou posso passar aí direto?",
    answer:
      "Você pode passar direto, mas quem agenda pelo WhatsApp tem prioridade no box e evita espera. Basta mandar o modelo do carro e o que está acontecendo.",
  },
  {
    question: "Vocês fazem orçamento sem compromisso?",
    answer:
      "Sim. Avaliamos o veículo, explicamos o que precisa ser feito e enviamos o valor fechado. Nada é trocado sem a sua aprovação.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Pix, dinheiro, cartão de débito e crédito parcelado. Fale com a nossa equipe para conferir as condições de parcelamento vigentes.",
  },
  {
    question: "A peça e o serviço têm garantia?",
    answer:
      "Sim. Trabalhamos com peças novas de marcas reconhecidas e damos garantia por escrito de 90 dias em peça e mão de obra.",
  },
  {
    question: "Vocês atendem carros de qualquer marca?",
    answer:
      "Atendemos as principais marcas nacionais e importadas que circulam em Sinop e região, incluindo utilitários e picapes.",
  },
  {
    question: "Onde fica a América Auto Center?",
    answer:
      "Estamos na Rua das Primaveras, 7354, em Sinop/MT. Toque em “Como chegar” no site e o Google Maps traça a rota a partir de onde você estiver.",
  },
];

/* --------------------------------------------------------------------- */

export type IconName =
  | "piston"
  | "clipboard"
  | "oil"
  | "brake"
  | "shock"
  | "steering"
  | "tire"
  | "shield"
  | "camera"
  | "stamp"
  | "clock";
