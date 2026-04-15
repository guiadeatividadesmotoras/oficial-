# Guia de Atividades para Foco e Coordenação Infantil — Landing Page

## 📋 Descrição do Projeto

Landing page de alta conversão, **mobile-first**, no estilo **VSL em texto** para o produto digital "Guia de Atividades para Foco e Coordenação Infantil". A página é focada em persuasão emocional, retenção de leitura e condução gradual ao CTA.

---

## ✅ Funcionalidades Implementadas

### Estrutura da Página (em ordem)
1. **Barra de prova social** fixa no topo (não é botão CTA)
2. **Headline forte** — dor + curiosidade
3. **Subheadline / Gancho** — promessa + instrução para ler
4. **Vídeo principal** — formato TikTok (9:16), Vimeo embed
5. **Vídeo depoimento** — formato TikTok (9:16), Vimeo embed
6. **Comentários / Prova social** — 3 cards estilo Instagram
7. **Seção Problema** — dor intensa com lista de sintomas + caixa emocional de culpa
8. **Seção Agitação** — consequências futuras, urgência emocional
9. **Big Idea** — virada, solução simples
10. **Apresentação do Produto** — imagem + descrição como método guiado
11. **Benefícios Antes vs. Depois** — comparativo visual
12. **Prova / Lógica** — estatísticas, neuroplasticidade
13. **Quebra de Objeções** — 4 objeções respondidas
14. **O que recebe** — lista completa de entregáveis
15. **Oferta** — preço original R$147 → R$67 + parcelamento + garantia
16. **CTA Principal** — apenas depois da construção de valor
17. **Fechamento Emocional** — tempo passando, responsabilidade
18. **Bloco Decisão** — 2 escolhas (❌ não comprar vs ✅ comprar)
19. **CTA Final** — reforço máximo

### Funcionalidades JS
- **Scroll progress bar** no topo da tela
- **Fade-in com Intersection Observer** em todas as seções
- **Contador de leitores ativos** (simulado, social proof)
- **Pulse animation** nos botões CTA ao entrar na viewport
- **Shimmer effect** nos botões CTA
- **Badge de urgência** após 3 minutos na página

### Regras Estratégicas Aplicadas
- ✅ **Nenhum botão no topo** da página
- ✅ **Nenhum botão fixo** na tela
- ✅ **CTA apenas após metade da página** (após construção de valor completa)
- ✅ **Dor intensa e real**, sem exagero
- ✅ **Produto nunca chamado de PDF** — apresentado como "método prático guiado"

---

## 🗂️ Estrutura de Arquivos

```
index.html          — Página principal
css/style.css       — Estilos mobile-first, design escuro premium
js/main.js          — Animações e interatividade
README.md           — Documentação
```

---

## 🔗 URIs e Links

| Recurso | Caminho |
|---------|---------|
| Página principal | `/index.html` |
| Vídeo principal | Vimeo 1181423029 |
| Vídeo depoimento | Vimeo 1181422852 |
| Imagem produto | GitHub raw (vendasexpertoficial) |
| Link checkout CTA | `https://pay.cakto.com.br/3e6jg76_843810` |

---

## ⚙️ Dados do Produto na Página

| Campo | Valor |
|-------|-------|
| Nome | Guia de Atividades para Foco e Coordenação Infantil |
| Preço original | R$ 147,00 |
| Preço promocional | R$ 67,00 |
| Parcelamento | Até 12x no cartão |
| Garantia | 7 dias incondicional |
| Faixa etária | 3 a 10 anos |
| Número de atividades | +250 |

---

## 🚀 Próximos Passos Recomendados

1. **Pixel de rastreamento** — adicionar Meta Pixel / Google Analytics
2. **Teste A/B de headline** — testar variações do título principal
3. **Timer de contagem regressiva** — adicionar countdown real de urgência
4. **Mais depoimentos** — adicionar galeria de prints de WhatsApp
5. **Seção FAQ** expandível com accordion
6. **OG Tags** — meta tags para compartilhamento no WhatsApp/Facebook
7. **Trocar link de checkout** pelo link definitivo da plataforma
