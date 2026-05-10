<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>DUELIST NEXUS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Hanken+Grotesk:wght@400;500;700&amp;family=JetBrains+Mono:wght@500&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#13131b",
                    "surface-container": "#1f1f27",
                    "secondary-fixed": "#f1daff",
                    "tertiary": "#3de4e7",
                    "surface-container-highest": "#34343d",
                    "on-primary-container": "#554300",
                    "outline-variant": "#4d4635",
                    "on-secondary": "#4b007e",
                    "primary-fixed-dim": "#e9c349",
                    "on-tertiary-fixed": "#002020",
                    "surface": "#13131b",
                    "on-primary-fixed": "#241a00",
                    "surface-container-high": "#292932",
                    "on-tertiary-fixed-variant": "#004f51",
                    "on-error-container": "#ffdad6",
                    "primary-fixed": "#ffe088",
                    "inverse-on-surface": "#302f39",
                    "outline": "#99907c",
                    "surface-variant": "#34343d",
                    "inverse-primary": "#735c00",
                    "error": "#ffb4ab",
                    "on-background": "#e4e1ed",
                    "surface-container-lowest": "#0d0d16",
                    "secondary-container": "#6c11af",
                    "surface-tint": "#e9c349",
                    "surface-container-low": "#1b1b23",
                    "inverse-surface": "#e4e1ed",
                    "secondary": "#dfb7ff",
                    "primary": "#f2ca50",
                    "on-tertiary": "#003738",
                    "on-primary-fixed-variant": "#574500",
                    "on-secondary-container": "#d5a4ff",
                    "on-surface": "#e4e1ed",
                    "tertiary-fixed-dim": "#2ddbde",
                    "on-primary": "#3c2f00",
                    "on-surface-variant": "#d0c5af",
                    "tertiary-fixed": "#5af8fb",
                    "surface-bright": "#393842",
                    "on-error": "#690005",
                    "on-tertiary-container": "#004e4f",
                    "on-secondary-fixed": "#2d004f",
                    "secondary-fixed-dim": "#dfb7ff",
                    "background": "#13131b",
                    "tertiary-container": "#00c7ca",
                    "on-secondary-fixed-variant": "#690bac",
                    "primary-container": "#d4af37",
                    "error-container": "#93000a"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1440px",
                    "unit": "4px",
                    "gutter": "24px",
                    "margin-safe": "32px"
            },
            "fontFamily": {
                    "display-lg": ["Bebas Neue"],
                    "label-sm": ["JetBrains Mono"],
                    "headline-lg": ["Bebas Neue"],
                    "headline-lg-mobile": ["Bebas Neue"],
                    "body-lg": ["Hanken Grotesk"],
                    "body-md": ["Hanken Grotesk"]
            },
            "fontSize": {
                    "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "0.05em", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}],
                    "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "400"}],
                    "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(27, 27, 35, 0.7);
        }
        .card-sheen {
            position: relative;
            overflow: hidden;
        }
        .card-sheen::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 45%, rgba(242, 202, 80, 0.1) 50%, transparent 55%);
            pointer-events: none;
        }
        .mystical-glow {
            box-shadow: 0 0 15px rgba(108, 17, 175, 0.3);
        }
        .champion-glow {
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        }
        .field-pattern {
            background-image: radial-gradient(#6c11af 0.5px, transparent 0.5px);
            background-size: 24px 24px;
            opacity: 0.05;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-primary/30">
<!-- TopAppBar -->
<header class="w-full top-0 sticky bg-surface dark:bg-surface-dim border-b-2 border-primary-container/30 shadow-[0_0_15px_rgba(233,195,73,0.2)] flex justify-between items-center px-gutter py-4 z-50">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary text-3xl">token</span>
<h1 class="font-display-lg text-headline-lg text-primary tracking-widest uppercase">DUELIST NEXUS</h1>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-8 font-label-sm uppercase tracking-widest">
<a class="text-primary border-b-2 border-primary hover:text-secondary hover:scale-105 transition-all active:scale-95 duration-200" href="#">Duel Portal</a>
<a class="text-on-surface-variant hover:text-secondary hover:scale-105 transition-all active:scale-95 duration-200" href="#">Decks</a>
<a class="text-on-surface-variant hover:text-secondary hover:scale-105 transition-all active:scale-95 duration-200" href="#">Library</a>
</div>
<div class="flex items-center gap-3">
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">contrast</button>
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">settings</button>
</div>
</div>
</header>
<div class="flex h-[calc(100vh-80px)] overflow-hidden relative">
<!-- SideNavBar -->
<aside class="hidden lg:flex flex-col h-full w-64 bg-surface-container dark:bg-surface-container-low border-r-2 border-primary-container/40 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.5)] py-margin-safe z-40">
<div class="px-6 mb-8">
<div class="flex items-center gap-3 mb-4">
<img alt="Duelist Profile Avatar" class="w-10 h-10 rounded-full border border-primary" data-alt="A detailed digital illustration of a legendary anime-style duelist profile icon. The character has spiky silver hair and intense violet eyes, wearing a dark leather jacket with gold trim. The background is a swirl of magical purple energy and glowing card silhouettes in a high-fidelity game art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMqk7HPBnyD9ozLl5aQZwF0LpYrWC1o9MraFGt0ru5OWkGWP1RAgKiEQMjb8zqxpKK6NxA2QFkkFO7qC6iXb8fvUfVpxv3M2rmANJgesxUvgXih0eBulfNB_AFl8khNuUXx6EzgM3lODnPZ1cu_jOxn-E-EgYh_wsSZT0ytRieKuRJ_gyg9m06cnc9eVaTExcvhdXLX9IUSqq-q0CzRTp3mtnuGKzEk3zVOZz4lMKRwVHvWsuixEWB9NmDPjcbehuFzv2QNIhkgaG"/>
<div>
<p class="font-headline-lg text-[18px] text-primary">Master Duelist</p>
<p class="font-label-sm text-[10px] text-on-surface-variant">Rank: King of Games</p>
</div>
</div>
<button class="w-full py-3 px-4 bg-primary text-on-primary font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-colors active:scale-95 duration-150">
<span class="material-symbols-outlined text-[18px]">add</span>
                    New Duel Chat
                </button>
</div>
<nav class="flex-1 overflow-y-auto space-y-1">
<p class="px-6 text-[10px] font-label-sm text-on-surface-variant uppercase tracking-tighter mb-2 opacity-50">Memory Vault</p>
<div class="bg-secondary-container text-on-secondary-container border-l-4 border-primary px-4 py-3 flex items-center gap-3 active:translate-x-1 duration-150 cursor-pointer">
<span class="material-symbols-outlined">history</span>
<span class="font-body-md text-body-md">Duel History</span>
</div>
<div class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high hover:shadow-[0_0_10px_rgba(105,11,172,0.4)] transition-all active:translate-x-1 duration-150 cursor-pointer">
<span class="material-symbols-outlined">style</span>
<span class="font-body-md text-body-md">Deck Archive</span>
</div>
<div class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high hover:shadow-[0_0_10px_rgba(105,11,172,0.4)] transition-all active:translate-x-1 duration-150 cursor-pointer">
<span class="material-symbols-outlined">auto_stories</span>
<span class="font-body-md text-body-md">Ritual Logs</span>
</div>
<div class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high hover:shadow-[0_0_10px_rgba(105,11,172,0.4)] transition-all active:translate-x-1 duration-150 cursor-pointer">
<span class="material-symbols-outlined">brightness_3</span>
<span class="font-body-md text-body-md">Shadow Realm</span>
</div>
<div class="mt-8 px-6 space-y-4">
<div class="p-3 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors cursor-pointer group">
<p class="text-[12px] font-label-sm text-on-surface-variant group-hover:text-primary">Duel #1 - Deck Strat</p>
<p class="text-[10px] text-outline">2 hours ago</p>
</div>
<div class="p-3 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors cursor-pointer group">
<p class="text-[12px] font-label-sm text-on-surface-variant group-hover:text-primary">Duel #2 - Combo Tips</p>
<p class="text-[10px] text-outline">Yesterday</p>
</div>
</div>
</nav>
</aside>
<!-- Main Chat Window -->
<main class="flex-1 flex flex-col relative bg-surface-container-lowest">
<div class="absolute inset-0 field-pattern pointer-events-none"></div>
<!-- Chat Canvas -->
<div class="flex-1 overflow-y-auto px-gutter py-8 space-y-8 scroll-smooth z-10">
<!-- Assistant Message -->
<div class="flex items-start gap-4 max-w-3xl">
<div class="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-secondary text-secondary mystical-glow">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">visibility</span>
</div>
<div class="glass-panel border-2 border-secondary/40 p-6 rounded-tr-xl rounded-b-xl mystical-glow card-sheen">
<p class="font-headline-lg text-[18px] text-secondary mb-2 uppercase tracking-wide">Nexus Oracle</p>
<p class="text-on-surface leading-relaxed">
                            Welcome to the Nexus, Duelist. I am here to analyze your strategies and optimize your deck for the upcoming tournament. What tactics shall we discuss today?
                        </p>
<div class="mt-4 flex gap-2">
<span class="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-[10px] font-label-sm text-tertiary">#Strategy</span>
<span class="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full text-[10px] font-label-sm text-tertiary">#MetaAnalysis</span>
</div>
</div>
</div>
<!-- User Message -->
<div class="flex items-start gap-4 max-w-3xl ml-auto flex-row-reverse">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-primary-container text-on-primary champion-glow">
<span class="material-symbols-outlined">person</span>
</div>
<div class="bg-surface-container-high border-2 border-primary/40 p-6 rounded-tl-xl rounded-b-xl champion-glow">
<p class="font-headline-lg text-[18px] text-primary mb-2 uppercase tracking-wide text-right">Champion</p>
<p class="text-on-surface leading-relaxed text-right">
                            I need a combo to break a board of three negates using my current Dragon Deck.
                        </p>
</div>
</div>
<!-- Assistant Thinking -->
<div class="flex items-start gap-4 max-w-3xl">
<div class="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-secondary text-secondary mystical-glow animate-pulse">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">visibility</span>
</div>
<div class="glass-panel border-2 border-secondary/20 p-4 rounded-tr-xl rounded-b-xl italic text-secondary/70 flex items-center gap-3">
<div class="flex gap-1">
<div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
<div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
<div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
</div>
<span class="font-label-sm tracking-widest">The Assistant is thinking...</span>
</div>
</div>
</div>
<!-- InputBar -->
<footer class="p-gutter z-20">
<div class="max-w-4xl mx-auto glass-panel border-2 border-primary-container/40 p-1 rounded-xl shadow-2xl relative">
<div class="flex flex-col">
<!-- Description Box Style -->
<div class="bg-surface-container-low p-4 rounded-t-lg border-b border-outline-variant/30">
<textarea class="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md resize-none h-24 placeholder:text-outline/50" placeholder="State your command, Duelist..."></textarea>
</div>
<!-- Actions -->
<div class="flex justify-between items-center px-4 py-3">
<div class="flex gap-4">
<button class="material-symbols-outlined text-outline hover:text-primary transition-colors">attachment</button>
<button class="material-symbols-outlined text-outline hover:text-primary transition-colors">image</button>
<button class="material-symbols-outlined text-outline hover:text-primary transition-colors">auto_awesome</button>
</div>
<button class="bg-gradient-to-b from-primary to-primary-container px-10 py-2 rounded-lg font-display-lg text-headline-lg text-[20px] text-on-primary-container border border-primary-fixed hover:scale-105 hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all active:scale-95">
                                SEND
                            </button>
</div>
</div>
</div>
</footer>
</main>
<!-- Decorative Right Column (Side Art) -->
<aside class="hidden xl:block w-72 h-full bg-surface-container-lowest border-l-2 border-primary-container/20 p-8">
<div class="relative h-full flex flex-col items-center justify-center opacity-40">
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest z-10"></div>
<img alt="Mystical side art" class="w-full grayscale brightness-50" data-alt="A vertical, tall digital painting of an ancient stone obelisk carved with glowing violet runes. Ethereal golden light beams from the top of the obelisk, cutting through a dark, foggy abyss. The art style is hyper-detailed fantasy, reminiscent of cinematic gaming splash screens, with particles of dust and magic floating in the air. Deep purples and metallic golds dominate the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHbSPk54DgjFqskZWpZ8CcBAYR6i1HAzd4Itn2N0nZgJtyRj3AQerwTBzBzcrL8Wmry5CqG6RL89tW2vGcCzj0HPuP0cMCBz6QqxFWw80V3X__iRi8Z_6AhvqcfFpNjJzNPbSynfX09N3jyj9RMfFqH_riy7e44ohD_3h1E55wn-VwtXDr-9O5BZUfEMCf_x6nXjJEb1VSISNRSqj-wRRvB5fOIXgln4IcCWYw7MjyXFwjGjRR6uXQN6PT3buZlFnEgHWi6HF1jPf"/>
<p class="font-display-lg text-headline-lg text-primary rotate-90 whitespace-nowrap opacity-20 text-[120px] absolute pointer-events-none">STRATEGY</p>
</div>
</aside>
</div>
</body></html>
