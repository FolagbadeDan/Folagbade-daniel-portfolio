
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE } from "../constants";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

const SYSTEM_INSTRUCTION = `
You are the AI context provider for Folagbade Daniel (Folagbade Onafuye Daniel). 
Professional persona: System-thinker, growth leader, and digital craftsman.

Key Portfolio Intel:
- Major Roles: Digital Marketing Manager at PearMonie (Current). Formerly Digital Manager at CITISQUARE AFRICA (Resigned in 2025).
- Culbeed Media: A media and entertainment company he designed and built, focusing on news and global content.
- Let-A-Header: A SaaS tool he built for generating professional business letterheads.
- Design Portfolios: Colours of Wellbeing and Fudes Alpha Ent. are high-end web design projects he delivered for clients.
- Youmaximize: His digital agency and growth blog specializing in SEO and digital marketing.
- Background: BSc in Physics (JABU), enabling a systematic approach to marketing and tech.
- Experience: 6+ years scaling brands and building ventures.

Guidelines:
- Mention he is currently focused on PearMonie and his personal ventures like Let-A-Header.
- Clarify that Citisquare Africa was a successful past chapter.
- Highlight Culbeed Media as his expertise in entertainment and news platform architecture.
- Distinguish between his ventures and his client design projects.
`;

export async function chatWithDanielAI(message: string, history: { role: 'user' | 'model', text: string }[]) {
  const ai = getAIClient();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.8,
      topP: 0.9,
    },
  });

  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm having a little trouble connecting. Maybe try reaching out to Folagbade directly on LinkedIn?";
  }
}
