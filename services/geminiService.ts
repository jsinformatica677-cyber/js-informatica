import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { BUSINESS_INFO, SERVICES, PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const productsList = PRODUCTS.map(p => `- ${p.name} (R$ ${p.price.toFixed(2)})`).join('\n');
const servicesList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da "Js Informatica", uma assistência técnica localizada em Horizonte, CE.
Seu nome é "Técnico Virtual JS".

Detalhes da empresa:
Endereço: ${BUSINESS_INFO.address}, ${BUSINESS_INFO.cityState}.
Telefone: ${BUSINESS_INFO.phone}.
Horário: ${BUSINESS_INFO.hours}.

SERVIÇOS OFERECIDOS:
${servicesList}

PRODUTOS NA LOJA:
${productsList}

Seu objetivo é atuar em duas frentes:
1. **Suporte Técnico Nível 1**: Ajudar clientes com diagnósticos básicos.
2. **Vendedor**: Sugerir produtos da loja quando relevante.

Diretrizes:
1. **Diagnóstico**: Se o cliente descrever um problema (ex: "celular não carrega"), dê 2 ou 3 passos simples para ele testar (ex: "Testou outro cabo? Limpou a entrada?"). Se não resolver, recomende trazer para a loja.
2. **Produtos**: Se o cliente precisar de um acessório (cabo, carregador, fone), cite os produtos que temos na loja com o preço.
3. **Orçamento**: Não dê preços de serviços complexos (troca de tela), diga que precisa avaliar presencialmente.
4. **Tom**: Profissional, amigável e direto. Fale português do Brasil.
5. **Redirecionamento**: Em casos complexos, sugira clicar no botão "Ligar Agora" ou ir ao WhatsApp.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Desculpe, o sistema de chat está indisponível no momento (Chave de API não configurada). Por favor, nos chame no WhatsApp.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, // Reduced temperature for more consistent technical advice
        maxOutputTokens: 350,
      }
    });

    return response.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Tivemos um problema técnico momentâneo. Por favor, entre em contato pelo telefone.";
  }
};