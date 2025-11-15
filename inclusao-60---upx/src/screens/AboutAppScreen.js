import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useApp } from '../context/AppContext';

export default function AboutAppScreen() {
  const { globalScale, highContrast } = useApp();

  return (
    <ScrollView
      style={[
        styles.container,
        highContrast && { backgroundColor: '#000' },
      ]}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text
        style={[
          styles.title,
          { fontSize: 24 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Sobre o Aplicativo
      </Text>

      <Text
        style={[
          styles.paragraph,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        O aplicativo <Text style={styles.bold}>Inclusão Digital 60+</Text> foi desenvolvido
        como uma ferramenta simples, didática e acessível, criada para apoiar
        pessoas idosas no processo de aprendizagem digital. Ele faz parte de um
        projeto academico focado em promover autonomia, inclusão e segurança no
        uso cotidiano de tecnologias.
      </Text>

      <Text
        style={[
          styles.subtitle,
          { fontSize: 20 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Objetivo do App
      </Text>

      <Text
        style={[
          styles.paragraph,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        O objetivo do aplicativo é ensinar, passo a passo, como utilizar
        ferramentas digitais essenciais, como <Text style={styles.bold}>WhatsApp, PIX e
        E-mail</Text>. Muitas pessoas idosas enfrentam dificuldades com recursos
        simples do celular, o que pode prejudicar sua independência, afastá-las
        do convívio social e até mesmo expô-las a golpes virtuais.
      </Text>

      <Text
        style={[
          styles.subtitle,
          { fontSize: 20 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Benefícios
      </Text>

      <Text
        style={[
          styles.paragraph,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        ✔ Ensina de forma <Text style={styles.bold}>simples e prática</Text>{'\n'}
        ✔ Aulas com texto acessível e recurso de <Text style={styles.bold}>áudio (leitura em voz alta)</Text>{'\n'}  
        ✔ Vídeos tutoriais complementares{'\n'}  
        ✔ Testes rápidos para reforçar o aprendizado{'\n'}  
        ✔ Interface limpa e adequada para idosos{'\n'}  
        ✔ Recursos de acessibilidade: <Text style={styles.bold}>Aumentar/Diminuir fonte</Text> e{' '}{'\n'}
        <Text style={styles.bold}>Modo alto contraste</Text>{'\n'}  
        ✔ Ajuda a prevenir golpes digitais pelo uso correto das ferramentas{'\n'}  
      </Text>

      <Text
        style={[
          styles.subtitle,
          { fontSize: 20 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Como funciona?
      </Text>

      <Text
        style={[
          styles.paragraph,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        • O usuário escolhe uma aula (WhatsApp, PIX ou E-mail){'\n'}
        • Cada aula possui diversos passos claros e com linguagem acessível{'\n'}
        • Cada passo pode ser ouvido através do botão <Text style={styles.bold}>“Ouvir”</Text>{'\n'}
        • Após estudar, o usuário realiza um <Text style={styles.bold}>teste</Text> para fixar o conteúdo{'\n'}
        • O progresso é salvo automaticamente no dispositivo
      </Text>

      <Text
        style={[
          styles.subtitle,
          { fontSize: 20 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Por que é importante?
      </Text>

      <Text
        style={[
          styles.paragraph,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        A inclusão digital na terceira idade promove independência,
        autoestima, segurança e qualidade de vida. Além disso, reduz a
        vulnerabilidade a golpes online e aproxima as pessoas idosas de seus
        familiares através de ferramentas de comunicação.
      </Text>

      <Text
        style={[
          styles.footer,
          { fontSize: 15 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Este aplicativo foi desenvolvido como parte de um projeto acadêmico de
        tecnologia e inclusão social, buscando contribuir de forma prática e
        humana para uma sociedade mais acessível.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontWeight: '800',
    color: '#286A4E',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 8,
    color: '#286A4E',
  },
  paragraph: {
    lineHeight: 26,
    textAlign: 'justify',
    color: '#333',
  },
  bold: {
    fontWeight: '800',
    color: '#286A4E',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    opacity: 0.8,
  },
});
