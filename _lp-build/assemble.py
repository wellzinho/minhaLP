#!/usr/bin/env python3
from pathlib import Path

root = Path(__file__).resolve().parent.parent
build = Path(__file__).resolve().parent

styles = (build / "styles.css").read_text(encoding="utf-8")
body = (build / "body.html").read_text(encoding="utf-8")
scripts = (build / "scripts.js").read_text(encoding="utf-8")

template = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing Pages que Convertem para Advogados, Médicos e Estética | Wellington Silveira — Curitiba/PR</title>
  <meta name="description" content="Crio landing pages de alta conversão para advogados, psicólogos, clínicas de estética e empresas de energia solar em Curitiba. Designer com experiência em Bradesco, BV e Vivo. Orçamento grátis pelo WhatsApp." />
  <meta name="keywords" content="landing page para advogado curitiba, landing page para psicólogo, landing page energia solar, landing page estética curitiba, wellington silveira designer" />
  <meta property="og:title" content="Wellington Silveira — Landing Pages que Convertem" />
  <meta property="og:description" content="Design de alto impacto para advogados, saúde, estética e energia solar. A partir de R$500. Orçamento grátis." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://wellingtonsilveira.com.br/" />
  <link rel="icon" type="image/jpeg" href="/wiconfav.jpeg" />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wellington Silveira",
    "description": "Criação de landing pages de alta conversão para profissionais liberais e empresas",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+55-41-99764-3618",
    "url": "https://wellingtonsilveira.com.br",
    "priceRange": "R$500+",
    "serviceArea": "Curitiba, Paraná, Brasil"
  }
  </script>
  <style>
{styles}
  </style>
</head>
<body>
{body}
  <script>
{scripts}
  </script>
</body>
</html>
"""

out = template.replace("{styles}", styles).replace("{body}", body).replace("{scripts}", scripts)
(root / "index.html").write_text(out, encoding="utf-8")
print("index.html assembled:", len(out), "bytes")
