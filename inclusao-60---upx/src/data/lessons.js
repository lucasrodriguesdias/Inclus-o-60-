export const lessons = [

  // ------------ Whatsapp --------------------

  {
    id: 'whatsapp-basico',
    title: 'WhatsApp Básico',
    introVideo: 'https://www.youtube.com/watch?v=WqSYbWUTJBE',
    steps: [
      {
        id: 's1',
        text: 'Encontre o ícone do WhatsApp na tela inicial do seu celular. Ele é verde, com o desenho de um balão de conversa e um telefone branco no centro. Toque uma vez sobre ele para abrir o aplicativo. Aguarde alguns segundos até que a tela principal carregue.',
        speak: true,
      },
      {
        id: 's2',
        text: 'Na tela inicial do WhatsApp, você verá a lista das conversas mais recentes. Para iniciar uma nova conversa, toque no botão verde com um balão de conversa, localizado no canto inferior direito.',
        speak: true,
      },
      {
        id: 's3',
        text: 'Aparecerá uma lista com os seus contatos. Role o dedo para cima ou para baixo até encontrar a pessoa desejada. Para procurar mais rápido, toque no ícone de lupa e digite o nome.',
        speak: true,
      },
      {
        id: 's4',
        text: 'Ao abrir a conversa, toque no campo “Digite uma mensagem” para abrir o teclado. Escreva sua mensagem e toque no ícone de avião de papel para enviar.',
        speak: true,
      },
      {
        id: 's5',
        text: 'Para enviar uma foto, toque no ícone de clipe de papel e selecione “Galeria”. Escolha a foto desejada e toque em “Enviar”.',
        speak: true,
      },
      {
        id: 's6',
        text: 'Para enviar um áudio, mantenha o dedo pressionado no ícone de microfone, fale e solte para enviar automaticamente.',
        speak: true,
      },
      {
        id: 's7',
        text: 'Para saber se sua mensagem foi enviada e lida, observe os símbolos: um tique cinza (enviada), dois tiques cinzas (entregue) e dois tiques azuis (lida).',
        speak: true,
      },
      {
        id: 's8',
        text: 'Para fazer uma ligação, toque no ícone de telefone. Para uma chamada de vídeo, toque no ícone de câmera.',
        speak: true,
      },
      {
        id: 's9',
        text: 'Para voltar à tela inicial, toque na seta no canto superior esquerdo.',
        speak: true,
      },
    ],
    quiz: [
      { question: 'Qual é o botão usado para iniciar uma nova conversa?', options: ['Lupa', 'Balão verde', 'Telefone'], correctIndex: 1 },
      { question: 'O que indicam dois tiques azuis?', options: ['Mensagem enviada', 'Mensagem lida', 'Mensagem apagada'], correctIndex: 1 },
      { question: 'Como enviar um áudio?', options: ['Clicar rápido no microfone', 'Segurar o dedo no microfone', 'Balançar o celular'], correctIndex: 1 },
      { question: 'Qual botão serve para anexar uma foto?', options: ['Clipes de papel', 'Relógio', 'Telefone'], correctIndex: 0 },
      { question: 'Onde fica o campo para digitar mensagens?', options: ['Parte superior', 'Meio da tela', 'Parte inferior'], correctIndex: 2 },
      { question: 'O que significa 1 tique cinza?', options: ['Mensagem enviada', 'Mensagem entregue', 'Mensagem lida'], correctIndex: 0 },
      { question: 'Como iniciar uma chamada de vídeo?', options: ['Toque no ícone de vídeo', 'Toque na lupa', 'Deslize o dedo'], correctIndex: 0 },
      { question: 'Como procurar um contato rápido?', options: ['Usar o ícone de lupa', 'Usar o botão câmera', 'Usar o avião'], correctIndex: 0 },
      { question: 'Qual botão envia a mensagem?', options: ['Avião de papel', 'Tesoura', 'Engrenagem'], correctIndex: 0 },
      { question: 'Como voltar para a lista de conversas?', options: ['Tocar na seta', 'Apertar volume', 'Desinstalar o app'], correctIndex: 0 },
    ],
  },

  // ------------ PIX --------------------

  {
    id: 'pix-como-usar',
    title: 'PIX: Como usar',
    introVideo: 'https://www.youtube.com/watch?v=xQOHrGDzVuU',
    steps: [
      {
        id: 'p1',
        text: 'Abra o aplicativo do seu banco e use sua senha ou biometria para acessar a conta.',
        speak: true,
      },
      {
        id: 'p2',
        text: 'Na tela inicial, procure pela opção “PIX” e toque sobre ela.',
        speak: true,
      },
      {
        id: 'p3',
        text: 'Escolha entre “Enviar PIX” e “Receber PIX”, dependendo da sua necessidade.',
        speak: true,
      },
      {
        id: 'p4',
        text: 'Para enviar, digite a chave PIX da pessoa e confirme se o nome e banco estão corretos.',
        speak: true,
      },
      {
        id: 'p5',
        text: 'Digite o valor que deseja transferir, confira e toque em “Enviar PIX”.',
        speak: true,
      },
      {
        id: 'p6',
        text: 'Para receber, gere um QR Code ou copie sua chave PIX e envie para quem vai transferir.',
        speak: true,
      },
      {
        id: 'p7',
        text: 'Após o envio, o dinheiro entra em segundos. O comprovante pode ser visto no extrato.',
        speak: true,
      },
    ],
    quiz: [
      { question: 'Antes de confirmar um PIX, o que você deve fazer?', options: ['Nada', 'Conferir nome e valor', 'Desligar o celular'], correctIndex: 1 },
      { question: 'Quanto tempo leva para um PIX cair na conta?', options: ['Horas', 'Imediatamente', 'Dia seguinte'], correctIndex: 1 },
      { question: 'O que é uma chave PIX?', options: ['Senha secreta', 'Identificador como celular ou CPF', 'Número da conta'], correctIndex: 1 },
      { question: 'Qual opção você usa para receber dinheiro via PIX?', options: ['Extrato', 'Receber PIX', 'Investimentos'], correctIndex: 1 },
      { question: 'O que verificar antes de enviar um PIX?', options: ['Foto da pessoa', 'Cor do aplicativo', 'Nome e banco exibidos'], correctIndex: 2 },
      { question: 'É seguro compartilhar sua chave PIX publicamente?', options: ['Sim', 'Não', 'Só de madrugada'], correctIndex: 1 },
      { question: 'Onde ver o comprovante do PIX?', options: ['Extrato ou Histórico', 'WhatsApp', 'Galeria'], correctIndex: 0 },
      { question: 'O que pode ser usado como chave PIX?', options: ['Número de sapato', 'E-mail ou celular', 'Endereço'], correctIndex: 1 },
    ],
  },

  // ------------ E-MAIL -----------------

  {
    id: 'email-basico',
    title: 'E-mail: Enviar e Responder',
    introVideo: 'https://www.youtube.com/watch?v=zSAHLP7Vz7c',
    steps: [
      { id: 'e1', text: 'Abra o aplicativo de e-mail (Gmail, Outlook, etc.).', speak: true },
      { id: 'e2', text: 'Toque no botão “Escrever” para criar um novo e-mail.', speak: true },
      { id: 'e3', text: 'Digite o e-mail do destinatário e escreva o assunto.', speak: true },
      { id: 'e4', text: 'Escreva o texto principal do e-mail no corpo da mensagem.', speak: true },
      { id: 'e5', text: 'Para anexar arquivos, toque no ícone de clipe de papel.', speak: true },
      { id: 'e6', text: 'Ao finalizar, toque no ícone de avião de papel para enviar.', speak: true },
      { id: 'e7', text: 'Para responder um e-mail, abra a mensagem e toque em “Responder”.', speak: true },
      { id: 'e8', text: 'Para excluir, deslize o e-mail para o lado ou toque na lixeira.', speak: true },
    ],
    quiz: [
      { question: 'Onde escrever o resumo do e-mail?', options: ['Corpo do texto', 'Campo Assunto', 'Rodapé'], correctIndex: 1 },
      { question: 'Qual ícone envia o e-mail?', options: ['Lápis', 'Avião de papel', 'Lixeira'], correctIndex: 1 },
      { question: 'Onde digitar o endereço de quem vai receber o e-mail?', options: ['Campo Para', 'Assunto', 'Favoritos'], correctIndex: 0 },
      { question: 'Como anexar um arquivo?', options: ['Tocar no clipe de papel', 'Tocar no microfone', 'Tocar na câmera'], correctIndex: 0 },
      { question: 'Como responder um e-mail?', options: ['Tocar em Responder', 'Desinstalar o app', 'Tocar no alarme'], correctIndex: 0 },
      { question: 'Para que serve o campo Assunto?', options: ['Colocar a data', 'Resumir o conteúdo', 'Enviar emojis'], correctIndex: 1 },
      { question: 'Como excluir um e-mail?', options: ['Deslizar para o lado ou lixeira', 'Tocar no avião', 'Tocar no lápis'], correctIndex: 0 },
      { question: 'Onde fica o botão de escrever novo e-mail?', options: ['Menu superior', 'Canto inferior direito', 'Barra de status'], correctIndex: 1 },
    ],
  },
];
