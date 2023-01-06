import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags */}
          <meta name="description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.heveleneducadorafisica.com.br/" />
          <meta property="og:description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />
          <meta property="og:image" content="https://i.ibb.co/tpMhLY4/heve-metatag.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.heveleneducadorafisica.com.br/" />
          <meta property="twitter:description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />
          <meta property="twitter:image" content="https://i.ibb.co/tpMhLY4/heve-metatag.jpg"></meta>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
