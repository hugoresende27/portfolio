(function () {

    const translations = {
        pt: {
            'meta-title': 'Hugo Resende — Integrações ERP, Loja Online e Marketplaces',
            'meta-description': 'Ligo o seu ERP à loja online e aos marketplaces, sem correções à mão. Programador backend especializado em integrações de e-commerce para distribuidores e retalho em Portugal.',
            'header-post': 'Integrações ERP & E-commerce',
            'nav-home': 'home',
            'nav-problema': 'problema',
            'nav-servicos': 'serviços',
            'nav-diagnostico': 'diagnóstico',
            'nav-experiencia': 'experiência',
            'nav-contact': 'contacto',
            'hero-headline': 'Ligo o seu ERP à loja online e aos marketplaces — sem correções à mão.',
            'hero-subtitle': 'Programador backend especializado em integrações de e-commerce. Stock, preços e encomendas sincronizados entre todos os canais, de forma fiável.',
            'sync-loja': 'Loja Online',
            'sync-status-text': 'stock, preços e encomendas em sincronização contínua',
            'hero-cta': 'Falar sobre a minha integração',
            'problema-heading': ' <span>reconhece</span> algum destes? ',
            'problema-1': 'O site mostra "disponível", o cliente compra, e afinal não há stock.',
            'problema-2': 'Alguém passa horas por semana a exportar e importar ficheiros entre o ERP e a loja.',
            'problema-3': 'Os preços não batem certo entre o site, os marketplaces e a loja física.',
            'problema-4': 'As encomendas dos marketplaces entram à mão no ERP, uma a uma.',
            'problema-5': 'A integração foi feita há anos por alguém que já não responde.',
            'servicos-heading': ' como <span>resolvo</span> ',
            'serv1-tag': 'sincronização',
            'serv1-title': 'ERP ↔ loja ↔ marketplaces',
            'serv1-desc': 'Stock, preços e produtos alinhados automaticamente em todos os canais. Sem exportações manuais, sem vendas de produtos sem stock.',
            'serv2-tag': 'encomendas',
            'serv2-title': 'Importação automática de encomendas',
            'serv2-desc': 'Encomendas dos marketplaces e da loja a entrar direto no ERP, com o documento fiscal correto (e-Fatura, SAF-T).',
            'serv3-tag': 'catálogo',
            'serv3-title': 'Feeds e catálogo por canal',
            'serv3-desc': 'Cada marketplace no seu formato, com os atributos e categorias certos.',
            'serv4-tag': 'recuperação',
            'serv4-title': 'Recuperar integrações abandonadas',
            'serv4-desc': 'Diagnóstico e reparação de ligações antigas que ninguém mantém — ou substituição, quando já não compensa arranjar.',
            'diagnostico-heading': ' começamos por um <span>diagnóstico</span> ',
            'diag-p1': 'Antes de qualquer compromisso grande, faço um diagnóstico da sua operação: analiso como os sistemas estão ligados, onde está a falhar, e entrego um documento com o que se resolve e o que custa.',
            'diag-p2': 'Assim sabe exatamente o que está a comprar antes de avançar.',
            'experiencia-heading': ' <span>experiência</span> ',
            'exp1-title': 'Plataformas de e-commerce',
            'exp1-desc': 'Vários anos em desenvolvimento backend de plataformas de e-commerce, incluindo uma plataforma internacional multi-mercado com integrações entre ERP, loja, pagamentos e logística.',
            'exp2-title': 'Addons CS-Cart',
            'exp2-desc-html': 'Dois addons publicados e aprovados no marketplace oficial do CS-Cart: <strong>Audit Trail Pro</strong> e <strong>Generate Admin</strong>.',
            'exp2-link': 'ver no marketplace CS-Cart →',
            'exp3-title': 'Requisitos legais & fiscais',
            'exp3-desc': 'Experiência em requisitos legais e fiscais de e-commerce em Portugal e noutros mercados europeus (faturação, RGPD, verificação de idade, checkout restrito).',
            'stack-list': 'PHP · MySQL · REST APIs · Redis · integrações ERP · CS-Cart · Magento · PrestaShop · WooCommerce · marketplaces (Worten, Fnac, Amazon)',
            'stack-archive-link': 'ver projetos pessoais mais antigos →',
            'contacto-heading': ' <span>falamos</span>? ',
            'contact-title': 'Descreva-me a sua operação',
            'contact-lead': 'Descreva-me como está montada a sua operação e digo-lhe, sem compromisso, se é recuperável ou se compensa refazer.',
            'copy-email-label': 'copiar email'
        },
        en: {
            'meta-title': 'Hugo Resende — ERP, Online Store & Marketplace Integrations',
            'meta-description': 'I connect your ERP to your online store and marketplaces, no manual fixes. Backend developer specialized in e-commerce integrations for distributors and retailers.',
            'header-post': 'ERP & E-commerce Integrations',
            'nav-home': 'home',
            'nav-problema': 'the problem',
            'nav-servicos': 'services',
            'nav-diagnostico': 'diagnosis',
            'nav-experiencia': 'experience',
            'nav-contact': 'contact',
            'hero-headline': 'I connect your ERP to your online store and marketplaces — no manual fixes.',
            'hero-subtitle': 'Backend developer specialized in e-commerce integrations. Stock, prices and orders synced across every channel, reliably.',
            'sync-loja': 'Online Store',
            'sync-status-text': 'stock, prices and orders in continuous sync',
            'hero-cta': "Let's talk about your integration",
            'problema-heading': ' recognize <span>any of these</span>? ',
            'problema-1': 'The site shows "in stock", the customer buys, and there is no stock after all.',
            'problema-2': 'Someone spends hours a week exporting and importing files between the ERP and the store.',
            'problema-3': "Prices don't match between the website, the marketplaces and the physical store.",
            'problema-4': 'Marketplace orders are entered into the ERP by hand, one by one.',
            'problema-5': 'The integration was built years ago by someone who no longer answers.',
            'servicos-heading': ' how I <span>solve it</span> ',
            'serv1-tag': 'sync',
            'serv1-title': 'ERP ↔ store ↔ marketplaces',
            'serv1-desc': 'Stock, prices and products automatically aligned across every channel. No manual exports, no selling products that are out of stock.',
            'serv2-tag': 'orders',
            'serv2-title': 'Automatic order import',
            'serv2-desc': "Orders from marketplaces and the store go straight into the ERP, with the correct tax document (e-invoice, SAF-T).",
            'serv3-tag': 'catalog',
            'serv3-title': 'Feeds and catalog per channel',
            'serv3-desc': 'Each marketplace in its own format, with the right attributes and categories.',
            'serv4-tag': 'recovery',
            'serv4-title': 'Rescuing abandoned integrations',
            'serv4-desc': "Diagnosis and repair of old connections nobody maintains anymore — or replacement, when fixing them no longer pays off.",
            'diagnostico-heading': ' we start with a <span>diagnosis</span> ',
            'diag-p1': "Before any big commitment, I run a diagnosis of your operation: I analyze how the systems are connected, where it's failing, and hand you a document with what needs fixing and what it costs.",
            'diag-p2': "That way you know exactly what you're buying before moving forward.",
            'experiencia-heading': ' <span>experience</span> ',
            'exp1-title': 'E-commerce platforms',
            'exp1-desc': 'Several years of backend development for e-commerce platforms, including an international multi-market platform with integrations between ERP, store, payments and logistics.',
            'exp2-title': 'CS-Cart addons',
            'exp2-desc-html': 'Two addons published and approved on the official CS-Cart marketplace: <strong>Audit Trail Pro</strong> and <strong>Generate Admin</strong>.',
            'exp2-link': 'view on the CS-Cart marketplace →',
            'exp3-title': 'Legal & tax requirements',
            'exp3-desc': 'Experience with legal and tax requirements for e-commerce in Portugal and other European markets (invoicing, GDPR, age verification, restricted checkout).',
            'stack-list': 'PHP · MySQL · REST APIs · Redis · ERP integrations · CS-Cart · Magento · PrestaShop · WooCommerce · marketplaces (Worten, Fnac, Amazon)',
            'stack-archive-link': 'see older personal projects →',
            'contacto-heading': " let's <span>talk</span>? ",
            'contact-title': 'Tell me about your operation',
            'contact-lead': "Describe how your operation is set up and I'll tell you, with no obligation, whether it's worth fixing or better to rebuild.",
            'copy-email-label': 'copy email'
        }
    };

    const STORAGE_KEY = 'lang';

    function getLang() {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'pt';
        } catch (e) {
            return 'pt';
        }
    }

    function apply(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang === 'pt' ? 'pt-pt' : 'en';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) {
                el.setAttribute('title', dict[key]);
                el.setAttribute('aria-label', dict[key]);
            }
        });

        document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-content');
            if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang, dict: dict } }));
    }

    function setLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* private mode / storage blocked - still apply for this view */ }
        apply(lang);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(btn.getAttribute('data-lang'));
            });
        });

        apply(getLang());
    });

    window.i18n = { getLang: getLang, translations: translations };

})();
