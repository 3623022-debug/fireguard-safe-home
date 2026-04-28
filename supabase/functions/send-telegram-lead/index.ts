import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2/cors";
import { z } from "https://esm.sh/zod@3.25.76";

const TELEGRAM_API_URL = "https://api.telegram.org";
const CHAT_ID = "1199420979";

const LeadSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(120),
  email: z.string().trim().email("Укажите корректный email").max(180),
  message: z.string().trim().min(1, "Напишите сообщение").max(2000),
});

const escapeMarkdown = (value: string) =>
  value.replace(/([_\\*\[\]\(\)~`>#+\-=|{}.!])/g, "\\$1");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!botToken) {
      throw new Error("TELEGRAM_BOT_TOKEN is not configured");
    }

    const parsed = LeadSchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, message } = parsed.data;
    const text = [
      "*🔥 Новая заявка на расчёт PYROSHIELD*",
      "",
      `*Имя:* ${escapeMarkdown(name)}`,
      `*Email:* ${escapeMarkdown(email)}`,
      "",
      "*Сообщение:*",
      escapeMarkdown(message),
    ].join("\n");

    const telegramResponse = await fetch(`${TELEGRAM_API_URL}/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      }),
    });

    const telegramData = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error", telegramData);
      return new Response(JSON.stringify({ error: "Не удалось отправить заявку в Telegram" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-telegram-lead error", error);
    return new Response(JSON.stringify({ error: "Ошибка отправки заявки" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
