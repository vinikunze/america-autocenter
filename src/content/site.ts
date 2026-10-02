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
  tagline: "Auto center em Sinop/MT",
  shortDescription:
    "Alinhamento, freios, suspensão, escapamento e revisão em Sinop. Você recebe o orçamento fechado no WhatsApp antes do serviço começar, e tudo sai com garantia por escrito.",

  city: "Sinop",
  state: "MT",
  address: {
    street: "Rua das Primaveras, 7354",
    district: "", // CONFIRMAR: bairro não consta no cadastro público
    city: "Sinop",
    state: "MT",
    zip: "78550-617",
    /**
     * Coordenadas da ficha oficial da oficina no Google Maps.
     * Buscar por endereço deixava o alfinete na rua, não na loja —
     * estas coordenadas vêm do próprio registro do negócio no Google.
     */
    lat: -11.822386,
    lng: -55.4916222,
    /** Ficha do negócio no Google Maps (avaliações, fotos, horários). */
    googleMapsUrl:
      "https://www.google.com/maps/place/Am%C3%A9rica+Auto+Center/@-11.8223361,-55.4924968,17z/data=!3m1!4b1!4m6!3m5!1s0x93a781000dbf01e7:0xe87d5a7d8e6bdf91!8m2!3d-11.822386!4d-55.4916222!16s%2Fg%2F11x_f8rbct",
  },

  /** Confirmado pelo totem da fachada: (66) 9 9260-7556. */
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
    { days: "Segunda a sexta", time: "08h00 às 18h00" },
    { days: "Sábado", time: "08h00 às 12h00" },
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
    src: "/fotos/fachada.jpg",
    alt: "Fachada da América Auto Center na Rua das Primaveras, em Sinop",
    caption: "Nossa estrutura",
    legend: "Rua das Primaveras, 7354, Sinop/MT",
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
  alinhamento: { src: "", alt: "Alinhamento sendo feito em um veículo" },
  oleo: { src: "", alt: "Troca de óleo em veículo suspenso" },
  freios: { src: "", alt: "Disco e pastilha de freio sendo trocados" },
  suspensao: { src: "", alt: "Amortecedor sendo substituído" },
  revisao: { src: "", alt: "Revisão geral sendo feita no box" },
  escapamento: { src: "", alt: "Escapamento sendo soldado" },
  bicos: { src: "", alt: "Bicos injetores em teste de limpeza" },
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
    id: "alinhamento",
    icon: "steering",
    title: "Alinhamento e balanceamento",
    description:
      "Com a geometria conferida e as rodas equilibradas, o pneu dura mais, o volante para de vibrar e o carro volta a andar reto.",
    points: ["Alinhamento", "Balanceamento", "Rodízio de pneus"],
  },
  {
    id: "oleo",
    icon: "oil",
    title: "Troca de óleo e filtros",
    description:
      "Óleo na especificação do fabricante, troca dos filtros e descarte do usado feito da forma correta.",
    points: ["Óleo na especificação", "Filtros", "Descarte correto"],
  },
  {
    id: "freios",
    icon: "brake",
    title: "Freios",
    description:
      "Pastilhas, discos, tambores e fluido. É o item que não admite economia, e onde a peça certa faz toda a diferença.",
    points: ["Medição de disco", "Sangria do sistema", "Teste antes de entregar"],
  },
  {
    id: "suspensao",
    icon: "shock",
    title: "Suspensão",
    description:
      "Amortecedores, molas, bandejas, pivôs e terminais. Acaba com o barulho na lombada e com o carro puxando para o lado.",
    points: ["Diagnóstico de ruído", "Peças reforçadas", "Feita para estrada de MT"],
  },
  {
    id: "revisao",
    icon: "clipboard",
    title: "Revisão geral",
    description:
      "Checagem completa antes da viagem ou na revisão de rotina. Você descobre o problema enquanto ele ainda é barato.",
    points: ["Checklist completo", "Prioridade do que é urgente", "Orçamento na hora"],
  },
  {
    id: "escapamento",
    icon: "exhaust",
    title: "Escapamento",
    description:
      "Solda, troca de silencioso, catalisador e coletor. Resolve o barulho, o cheiro dentro do carro e a reprovação na vistoria.",
    points: ["Solda e reparo", "Troca de silencioso", "Fim do ronco"],
  },
  {
    id: "bicos",
    icon: "injector",
    title: "Limpeza de bicos",
    description:
      "Bicos injetores limpos e testados: o motor volta a pegar liso, o consumo cai e a marcha lenta para de oscilar.",
    points: ["Limpeza e teste", "Menos consumo", "Motor mais macio"],
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
      "Nenhuma peça é trocada sem o seu ok. Você recebe o valor fechado no WhatsApp e decide com calma, sem ninguém te apressando.",
  },
  {
    icon: "camera" as IconName,
    title: "Você vê o que foi feito",
    description:
      "Você recebe foto do antes e do depois, e leva a peça velha na mão se quiser. Aqui transparência não é discurso, é como a gente trabalha.",
  },
  {
    icon: "stamp" as IconName,
    title: "Garantia por escrito",
    description:
      "Peça e mão de obra cobertas por 90 dias. Se der problema no que a gente mexeu, é só voltar que resolvemos.",
  },
  {
    icon: "clock" as IconName,
    title: "Agilidade de verdade",
    description:
      "Serviço de manutenção rápida sai no mesmo dia. A gente sabe que o seu carro é sua ferramenta de trabalho.",
  },
];

/* --------------------------------------------------------------------- */
/*  COMO FUNCIONA                                                         */
/* --------------------------------------------------------------------- */

export const steps = [
  {
    title: "Chame no WhatsApp",
    description:
      "Conte o que está acontecendo com o carro. Se souber o modelo e o ano, o atendimento fica ainda mais rápido.",
  },
  {
    title: "Diagnóstico e orçamento",
    description:
      "A gente avalia o veículo, mostra o que precisa ser feito e manda o valor fechado antes de começar qualquer coisa.",
  },
  {
    title: "Serviço feito e garantido",
    description:
      "Você aprova, a gente faz e devolve o carro pronto, testado e com garantia por escrito.",
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
      "Pode passar direto, sim. Mas quem agenda pelo WhatsApp tem prioridade no box e evita espera. Basta mandar o modelo do carro e o que está acontecendo.",
  },
  {
    question: "Vocês fazem orçamento sem compromisso?",
    answer:
      "Sim. A gente avalia o veículo, explica o que precisa ser feito e manda o valor fechado. Nada é trocado sem a sua aprovação.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Pix, dinheiro, cartão de débito e crédito parcelado. Chame no WhatsApp para confirmar as condições de parcelamento do momento.",
  },
  {
    question: "A peça e o serviço têm garantia?",
    answer:
      "Tem. Trabalhamos com peças novas de marcas reconhecidas e damos 90 dias de garantia por escrito, em peça e mão de obra.",
  },
  {
    question: "Vocês atendem carros de qualquer marca?",
    answer:
      "Atendemos as principais marcas nacionais e importadas que rodam em Sinop e região, incluindo utilitários e picapes.",
  },
  {
    question: "Onde fica a América Auto Center?",
    answer:
      "Estamos na Rua das Primaveras, 7354, em Sinop. É só tocar em “Como chegar” aqui no site que o Google Maps traça a rota de onde você estiver.",
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
  | "exhaust"
  | "injector"
  | "shield"
  | "camera"
  | "stamp"
  | "clock";
