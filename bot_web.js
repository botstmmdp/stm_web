// =============================================
// BOT WEB STM - Motor Conversacional
// Sindicato de Trabajadores Municipales
// =============================================

let botState = 'menu';

// ===== MENSAJES DEL BOT =====
const botMessages = {
    welcome: `👋 ¡Hola! Soy el asistente virtual del <strong>Sindicato de Trabajadores Municipales</strong>.\n\n¿En qué puedo ayudarte hoy?\n\n1️⃣ Afiliación\n2️⃣ Dirección y contacto\n3️⃣ ¿Cómo acceder a MiSTM?\n4️⃣ Chatbot por WhatsApp\n5️⃣ Hablar con una persona`,

    menu: `🏠 <strong>MENÚ PRINCIPAL</strong>\n\n1️⃣ Afiliación\n2️⃣ Dirección y contacto\n3️⃣ ¿Cómo acceder a MiSTM?\n4️⃣ Chatbot por WhatsApp\n5️⃣ Hablar con una persona`,

    afiliacion: `📋 <strong>AFILIACIÓN STM</strong>\n\nPara afiliarte al Sindicato de Trabajadores Municipales podés iniciar el trámite online o acercarte personalmente.\n\n<button onclick="openAfiliacionModal(); toggleWebBot();" style="background:var(--primary); color:white; border:none; padding:10px 15px; border-radius:8px; margin-top:10px; margin-bottom:10px; cursor:pointer; width:100%; font-weight:bold; font-family:'Inter',sans-serif; display:flex; align-items:center; justify-content:center; gap:8px;"><i class="fas fa-file-signature"></i> INICIAR AFILIACIÓN ONLINE</button>\n\n¿Querés ver los datos de contacto?\n\n1️⃣ Sí\n2️⃣ Volver al menú principal`,

    contacto: `📍 <strong>CONTACTO STM</strong>\n\n📧 Email:\nmunicipales@sindicatomdq.com.ar\n\n☎ Teléfonos:\n223 4723756\n223 4729815\n\n📌 Atención presencial:\nMoreno 4359\n\n🕒 Horarios:\nLunes a Viernes\n8:00 a 12:00 hs y 16:00 a 19:30 hs\n\nSábados\n8:30 a 12:30 hs\n\n1️⃣ Volver al menú principal`,

    mistm: `📱 <strong>MiSTM - Aplicación para afiliados</strong>\n\nCon MiSTM podés acceder a:\n✔ Beneficios\n✔ Convenios\n✔ Novedades\n✔ Información útil del sindicato\n\n⚠ Para utilizar la aplicación debés estar afiliado/a al STM y contar con usuario y contraseña.\n\n<button onclick="window.open('https://prueba.simplexcomunicacion.com.ar/', '_blank'); toggleWebBot();" style="background:var(--primary); color:white; border:none; padding:10px 15px; border-radius:8px; margin-top:10px; margin-bottom:10px; cursor:pointer; width:100%; font-weight:bold; font-family:'Inter',sans-serif; display:flex; align-items:center; justify-content:center; gap:8px;"><i class="fas fa-external-link-alt"></i> INGRESAR A MISTM WEB</button>\n\n¿Cómo acceder?\n\n1️⃣ Pasos para ingresar\n2️⃣ No tengo usuario o contraseña\n3️⃣ Volver al menú principal`,

    mistm_pasos: `📲 <strong>PASOS PARA INGRESAR A MiSTM</strong>\n\n1️⃣ Ingresá a la plataforma web\n2️⃣ Escribí tu usuario\n3️⃣ Escribí tu contraseña\n4️⃣ Presioná "Ingresar"\n\n<button onclick="window.open('https://prueba.simplexcomunicacion.com.ar/', '_blank'); toggleWebBot();" style="background:var(--primary); color:white; border:none; padding:10px 15px; border-radius:8px; margin-top:10px; margin-bottom:10px; cursor:pointer; width:100%; font-weight:bold; font-family:'Inter',sans-serif; display:flex; align-items:center; justify-content:center; gap:8px;"><i class="fas fa-external-link-alt"></i> INGRESAR A MISTM WEB</button>\n\n⚠ Recordá:\nSolo pueden acceder afiliados/as activos/as del STM.\n\nSi tenés problemas para ingresar podés escribir a:\n\n📧 bot.stmmdp@gmail.com\n\n1️⃣ Volver al menú principal`,

    mistm_recuperar: `🔐 <strong>RECUPERACIÓN DE ACCESO</strong>\n\nSi no tenés usuario o contraseña, o no podés ingresar a MiSTM, escribinos indicando:\n\n✔ Nombre y apellido\n✔ DNI\n✔ Número de legajo\n\n📧 Email de soporte:\nbot.stmmdp@gmail.com\n\n1️⃣ Volver al menú principal`,

    whatsapp: `💬 <strong>CHATBOT STM POR WHATSAPP</strong>\n\nTambién podés comunicarte con nuestro chatbot por WhatsApp.\n\n📱 Número:\n2235 03-5645\n\n✉ Enviá la palabra:\n<strong>"HOLA"</strong>\n\ny comenzá la conversación automáticamente.\n\n1️⃣ Volver al menú principal`,

    persona: `🙋 <strong>Atención personalizada</strong>\n\nPodés comunicarte con nosotros por:\n\n📧 municipales@sindicatomdq.com.ar\n\n☎ 223 4723756\n☎ 223 4729815\n\n📌 Moreno 4359\n\n🕒 Horarios:\nLunes a Viernes\n8:00 a 12:00 hs y 16:00 a 19:30 hs\n\nSábados\n8:30 a 12:30 hs\n\n1️⃣ Volver al menú principal`
};

// ===== RESPUESTAS CONVERSACIONALES =====
const botResponses = {
    saludo: `😊 ¡Hola! ¿En qué te puedo ayudar?\n\nPodés preguntarme sobre:\n• Afiliación\n• Datos de contacto y dirección\n• Cómo usar la app MiSTM\n• Nuestro chatbot de WhatsApp\n• Hablar con una persona\n\nO simplemente escribime tu consulta y te guío. 💬`,

    gracias: `😊 ¡De nada! Me alegro de poder ayudarte.\n\nSi necesitás algo más, escribime sin problema. ¡Estoy acá para vos! 👋`,

    noEntiendo: `🤔 No estoy seguro de entender tu consulta.\n\nProbá preguntándome de otra forma, o elegí una de estas opciones:\n\n1️⃣ Afiliación\n2️⃣ Dirección y contacto\n3️⃣ ¿Cómo acceder a MiSTM?\n4️⃣ Chatbot por WhatsApp\n5️⃣ Hablar con una persona`
};

// ===== DICCIONARIO DE KEYWORDS PARA NLP =====
const keywords = {
    afiliacion: ['afiliar', 'afiliacion', 'afiliación', 'afilio', 'asociar', 'asociarme', 'inscribir', 'inscribirme', 'socio', 'miembro', 'unirme', 'quiero entrar', 'hacerme socio', 'ser parte', 'requisitos', 'recibo', 'sueldo'],
    contacto: ['contacto', 'dirección', 'direccion', 'telefono', 'teléfono', 'mail', 'email', 'correo', 'donde', 'dónde', 'ubicacion', 'ubicación', 'horario', 'horarios', 'atencion', 'atención', 'moreno', 'sede', 'oficina', 'domicilio', 'llamo', 'llamar', 'numero'],
    mistm: ['mistm', 'mi stm', 'app', 'aplicacion', 'aplicación', 'sistema', 'plataforma', 'acceder', 'ingresar', 'entrar', 'login', 'usuario', 'contraseña', 'clave', 'password', 'descargar', 'bajar', 'instalar'],
    whatsapp: ['whatsapp', 'wsp', 'whats', 'chatbot whatsapp', 'bot whatsapp', 'wpp'],
    persona: ['persona', 'humano', 'hablar', 'operador', 'empleado', 'asesor', 'gente', 'alguien', 'personal', 'representante', 'atender', 'reclamar', 'reclamo', 'queja'],
    saludo: ['hola', 'buenas', 'buenos dias', 'buen dia', 'buenas tardes', 'buenas noches', 'hey', 'que tal', 'qué tal', 'como estas', 'cómo estás'],
    gracias: ['gracias', 'gracia', 'muchas gracias', 'te agradezco', 'genial', 'excelente', 'perfecto', 'barbaro', 'bárbaro', 'crack'],
    menu: ['menu', 'menú', 'volver', 'inicio', 'principal', 'opciones', 'ayuda', 'help']
};

// ===== DETECCIÓN DE INTENCIÓN (NLP) =====
function detectIntent(text) {
    const lower = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const original = text.toLowerCase();

    // Atajos numéricos
    if (/^1$/.test(text.trim())) return 'num_1';
    if (/^2$/.test(text.trim())) return 'num_2';
    if (/^3$/.test(text.trim())) return 'num_3';
    if (/^4$/.test(text.trim())) return 'num_4';
    if (/^5$/.test(text.trim())) return 'num_5';
    if (/^si$/i.test(text.trim()) || /^sí$/i.test(text.trim())) return 'num_1';

    // Búsqueda por keywords
    for (const [intent, words] of Object.entries(keywords)) {
        for (const word of words) {
            const normalizedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (original.includes(word) || lower.includes(normalizedWord)) {
                return intent;
            }
        }
    }

    return 'unknown';
}

// ===== PROCESAMIENTO DE ENTRADA =====
function processInput(text) {
    const intent = detectIntent(text);

    // Atajos numéricos (respetan el contexto del estado actual)
    if (intent.startsWith('num_')) {
        const num = intent.split('_')[1];

        // Contexto: Afiliación
        if (botState === 'afiliacion') {
            if (num === '1') { botState = 'contacto'; return botMessages.contacto; }
            if (num === '2') { botState = 'menu'; return botMessages.menu; }
        }

        // Contexto: MiSTM
        if (botState === 'mistm') {
            if (num === '1') { botState = 'mistm_pasos'; return botMessages.mistm_pasos; }
            if (num === '2') { botState = 'mistm_recuperar'; return botMessages.mistm_recuperar; }
            if (num === '3') { botState = 'menu'; return botMessages.menu; }
        }

        // Contexto: Pantallas con solo "Volver"
        if (['contacto', 'whatsapp', 'persona', 'mistm_pasos', 'mistm_recuperar'].includes(botState)) {
            if (num === '1') { botState = 'menu'; return botMessages.menu; }
        }

        // Desde menú o cualquier estado: números van a temas principales
        if (num === '1') { botState = 'afiliacion'; return botMessages.afiliacion; }
        if (num === '2') { botState = 'contacto'; return botMessages.contacto; }
        if (num === '3') { botState = 'mistm'; return botMessages.mistm; }
        if (num === '4') { botState = 'whatsapp'; return botMessages.whatsapp; }
        if (num === '5') { botState = 'persona'; return botMessages.persona; }
    }

    // Intenciones por lenguaje natural (funcionan desde CUALQUIER estado)
    if (intent === 'saludo') { botState = 'menu'; return botResponses.saludo; }
    if (intent === 'gracias') { return botResponses.gracias; }
    if (intent === 'menu') { botState = 'menu'; return botMessages.menu; }
    if (intent === 'afiliacion') { botState = 'afiliacion'; return botMessages.afiliacion; }
    if (intent === 'contacto') { botState = 'contacto'; return botMessages.contacto; }
    if (intent === 'mistm') { botState = 'mistm'; return botMessages.mistm; }
    if (intent === 'whatsapp') { botState = 'whatsapp'; return botMessages.whatsapp; }
    if (intent === 'persona') { botState = 'persona'; return botMessages.persona; }

    return botResponses.noEntiendo;
}

// ===== FUNCIONES DE UI =====
function addBotBubble(html) {
    const body = document.getElementById('botBody');
    const bubble = document.createElement('div');
    bubble.className = 'bot-bubble';
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    
    bubble.innerHTML = `<span class="bubble-text">${html.replace(/\n/g, '<br>')}</span><div class="message-meta"><span>${time}</span></div>`;
    
    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight;
}

function sendBotMessage() {
    const input = document.getElementById('botInput');
    if (input.value.trim() === '') return;

    const body = document.getElementById('botBody');

    // Burbuja del usuario
    const userMsg = document.createElement('div');
    userMsg.className = 'bot-bubble user-bubble';
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    
    userMsg.innerHTML = `<span class="bubble-text">${input.value}</span><div class="message-meta"><span>${time}</span> <i class="fas fa-check-double double-check"></i></div>`;

    body.appendChild(userMsg);
    const userText = input.value;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Animación de escribiendo...
    const typingMsg = document.createElement('div');
    typingMsg.className = 'bot-bubble';
    typingMsg.innerHTML = '<div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
    body.appendChild(typingMsg);
    body.scrollTop = body.scrollHeight;

    // Procesar y responder
    setTimeout(() => {
        body.removeChild(typingMsg);
        const response = processInput(userText);
        addBotBubble(response);
    }, 2500);
}

function toggleWebBot() {
    document.getElementById('webBotWidget').classList.toggle('active');
    const tooltip = document.getElementById('botHelpTooltip');
    if (tooltip) tooltip.classList.remove('show');
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Mensaje de bienvenida
    setTimeout(() => addBotBubble(botMessages.welcome), 1500);
});
