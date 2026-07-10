/* =========================================================
   Studio Madaji Khaoula — Système de traduction FR / EN
   ========================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "smk-lang";

  /* ---------------------------------------------------------
     Dictionnaire de traductions
     Clé identique en FR/EN = même structure de site
  --------------------------------------------------------- */
  var translations = {
    fr: {
      /* --- Commun (header / footer) --- */
      "common.skip": "Aller au contenu",
      "common.nav.home": "Accueil",
      "common.nav.about": "À propos",
      "common.nav.services": "Services",
      "common.nav.projects": "Projets",
      "common.nav.contact": "Contact",
      "common.nav.aria": "Navigation principale",
      "common.nav.toggle_aria": "Ouvrir le menu",
      "common.lang.aria": "Choix de la langue",
      "common.footer.tagline": "Architecture, urbanisme et design intérieur au Maroc.",
      "common.footer.rights": "© 2026 Studio Madaji Khaoula. Tous droits réservés.",
      "common.btn.consultation": "Demander une consultation",
      "common.btn.back_projects": "Retour aux projets",
      "common.view_label": "Voir le projet →",

      /* --- Accueil --- */
      "home.title": "Studio Madaji Khaoula — Architecte Maroc",
      "home.description": "Studio d'architecture, urbanisme et design intérieur au Maroc pour villas, équipements publics, commerces et espaces d'exception.",
      "home.eyebrow": "— Studio Madaji Khaoula · Maroc",
      "home.h1": "Architecture marocaine contemporaine, pensée comme un art de vivre.",
      "home.p": "Studio Madaji Khaoula accompagne les particuliers, les entreprises et les collectivités dans la création de projets d'architecture, d'urbanisme et de design intérieur alliant esthétique, fonctionnalité et durabilité.",
      "home.btn.projects": "Découvrir nos projets",
      "home.studio.eyebrow": "Le studio",
      "home.studio.h2": "Une pratique sensible, précise et profondément contextuelle.",
      "home.studio.p": "Fondé par Madaji Khaoula, le studio conçoit des espaces qui associent lignes intemporelles, confort d'usage et responsabilité durable. Chaque projet est abordé comme une composition unique entre lumière, matière, paysage et mode de vie.",
      "home.card.h3": "Architecture • Urbanisme • Intérieurs",
      "home.card.p": "Studio Madaji Khaoula conçoit des villas, équipements, intérieurs et territoires avec une exigence calme : précision, matière, lumière et durabilité.",
      "home.founder.eyebrow": "Fondatrice &amp; direction créative",
      "home.founder.quote": "« Nous concevons des lieux qui ne cherchent pas l'effet immédiat, mais la justesse durable : une proportion, une matière, une lumière, une manière d'habiter. »",
      "home.founder.p1": "À la croisée de l'architecture, de l'urbanisme et du design intérieur, le studio défend une approche précise, contextuelle et silencieusement luxueuse — où chaque projet devient une réponse au climat, au site, aux usages et à la mémoire du lieu.",
      "home.cta.h2": "Discutons de votre projet.",
      "home.cta.p": "Transformons votre vision en espace d'exception.",

      /* --- Services --- */
      "services.title": "Services — Studio Madaji Khaoula",
      "services.description": "Architecture, urbanisme et design intérieur réunis dans une même exigence.",
      "services.eyebrow": "Services",
      "services.h1": "Architecture, urbanisme et design intérieur réunis dans une même exigence.",
      "services.item1.h3": "Architecture",
      "services.item1.p": "Conception de villas, résidences, équipements publics et espaces professionnels avec une approche esthétique, fonctionnelle et durable.",
      "services.item2.h3": "Urbanisme",
      "services.item2.p": "Études urbaines, aménagements, planification et conception d'espaces cohérents, humains et adaptés à leur contexte.",
      "services.item3.h3": "Design Intérieur",
      "services.item3.p": "Création d'intérieurs élégants, chaleureux et raffinés pour résidences, boutiques, espaces commerciaux et professionnels.",
      "services.item4.h3": "Conseil &amp; Suivi de Projet",
      "services.item4.p": "Accompagnement personnalisé depuis l'idée initiale jusqu'à la réalisation du projet.",
      "services.cta.h2": "Discutons de votre projet.",
      "services.cta.p": "Transformons votre vision en espace d'exception.",

      /* --- Projets (liste) --- */
      "projects.title": "Projets — Studio Madaji Khaoula",
      "projects.description": "Studio d'architecture, urbanisme et design intérieur au Maroc pour villas, équipements publics, commerces et espaces d'exception.",
      "projects.eyebrow": "Portfolio authentique",
      "projects.h1": "Nos Projets",
      "projects.p": "Une sélection de réalisations authentiques en architecture, urbanisme et design intérieur.",
      "projects.filter.all": "Tous les projets",
      "projects.filter.villas": "Résidentiels",
      "projects.filter.ecoles": "Écoles &amp; Équipements Publics",
      "projects.filter.interieur": "Design Intérieur",

      "projects.cat.villas.eyebrow": "Résidentiels",
      "projects.cat.villas.title": "Villas contemporaines et résidences de prestige",
      "projects.cat.ecoles.eyebrow": "Écoles &amp; Équipements Publics",
      "projects.cat.ecoles.title": "Équipements ancrés dans leur territoire",
      "projects.cat.interieur.eyebrow": "Design Intérieur",
      "projects.cat.interieur.title": "Intérieurs commerciaux raffinés",

      "projects.tag.villas": "Villas",
      "projects.tag.ecoles": "Écoles &amp; Équipements Publics",
      "projects.tag.interieur": "Design Intérieur",

      "card.villa-contemporaine.title": "Villa Contemporaine aux Palmiers",
      "card.villa-contemporaine.desc": "Villa de prestige organisée autour de volumes géométriques, de larges baies vitrées, d'un jardin luxuriant et d'une relation fluide entre intérieur, terrasse et piscine.",
      "card.maison-patio.title": "Maison Patio en Pierre",
      "card.maison-patio.desc": "Projet résidentiel où la pierre, l'eau et les ombres végétales composent une atmosphère calme, minérale et intemporelle.",
      "card.villa-lumiere.title": "Villa Lumière du Soir",
      "card.villa-lumiere.desc": "Une résidence contemporaine mise en valeur par la lumière du soir, la présence de la piscine et une matérialité douce entre béton, bois et paysage.",
      "card.ecole-rurale.title": "École Rurale Durable",
      "card.ecole-rurale.desc": "Équipement scolaire conçu avec des matériaux à forte présence locale, une volumétrie simple et une implantation respectueuse du paysage montagneux.",
      "card.ecole-paysage.title": "École du Paysage",
      "card.ecole-paysage.desc": "Projet éducatif intégré à son environnement naturel, où les teintes de terre, la pierre et les volumes bas créent une architecture humble et durable.",
      "card.equipement-terre.title": "Équipement Public en Terre",
      "card.equipement-terre.desc": "Vue d'ensemble d'un équipement public où les circulations, la toiture et les matériaux ancrent le bâtiment dans un territoire aride et minéral.",
      "card.boutique-luxe.title": "Boutique de Luxe — Galerie",
      "card.boutique-luxe.desc": "Aménagement d'une boutique raffinée où les boiseries bordeaux, les détails dorés et la lumière chaude créent une expérience client intimiste et haut de gamme.",
      "card.salon-boutique.title": "Salon Boutique Haute Couture",
      "card.salon-boutique.desc": "Un espace d'accueil luxueux travaillé autour du bordeaux profond, du mobilier enveloppant, du miroir doré et d'une mise en scène lumineuse élégante.",
      "card.residence-signature.title": "Résidence Signature — Design Intérieur",
      "card.residence-signature.desc": "Projet de design intérieur réalisé autour d'une ambiance lumineuse, de matières nobles et d'une composition élégante des espaces de vie.",

      "projects.cta.h2": "Un projet en tête ?",
      "projects.cta.p": "Parlons-en ensemble.",

      /* --- Fiches projet (détail) --- */
      "detail.villa-contemporaine.title": "Villa Contemporaine aux Palmiers — Studio Madaji Khaoula",
      "detail.villa-contemporaine.description": "Villa de prestige organisée autour de volumes géométriques, de larges baies vitrées, d'un jardin luxuriant et d'une relation fluide entre intérieur, terrasse et piscine. Cette fiche rassemble les vues complémentaires du même projet réalisé.",
      "detail.villa-contemporaine.eyebrow": "Villas",
      "detail.villa-contemporaine.h1": "Villa Contemporaine aux Palmiers",
      "detail.villa-contemporaine.p": "Villa de prestige organisée autour de volumes géométriques, de larges baies vitrées, d'un jardin luxuriant et d'une relation fluide entre intérieur, terrasse et piscine. Cette fiche rassemble les vues complémentaires du même projet réalisé.",

      "detail.maison-patio.title": "Maison Patio en Pierre — Studio Madaji Khaoula",
      "detail.maison-patio.description": "Projet résidentiel où la pierre, l'eau et les ombres végétales composent une atmosphère calme, minérale et intemporelle. Les images réunies montrent les différentes vues du même ensemble architectural.",
      "detail.maison-patio.eyebrow": "Villas",
      "detail.maison-patio.h1": "Maison Patio en Pierre",
      "detail.maison-patio.p": "Projet résidentiel où la pierre, l'eau et les ombres végétales composent une atmosphère calme, minérale et intemporelle. Les images réunies montrent les différentes vues du même ensemble architectural.",

      "detail.villa-lumiere.title": "Villa Lumière du Soir — Studio Madaji Khaoula",
      "detail.villa-lumiere.description": "Une résidence contemporaine mise en valeur par la lumière du soir, la présence de la piscine et une matérialité douce entre béton, bois et paysage. Cette fiche rassemble les vues complémentaires du même projet réalisé.",
      "detail.villa-lumiere.eyebrow": "Villas",
      "detail.villa-lumiere.h1": "Villa Lumière du Soir",
      "detail.villa-lumiere.p": "Une résidence contemporaine mise en valeur par la lumière du soir, la présence de la piscine et une matérialité douce entre béton, bois et paysage. Cette fiche rassemble les vues complémentaires du même projet réalisé.",

      "detail.ecole-rurale.title": "École Rurale Durable — Studio Madaji Khaoula",
      "detail.ecole-rurale.description": "Équipement scolaire conçu avec des matériaux à forte présence locale, une volumétrie simple et une implantation respectueuse du paysage montagneux.",
      "detail.ecole-rurale.eyebrow": "Écoles &amp; Équipements Publics",
      "detail.ecole-rurale.h1": "École Rurale Durable",
      "detail.ecole-rurale.p": "Équipement scolaire conçu avec des matériaux à forte présence locale, une volumétrie simple et une implantation respectueuse du paysage montagneux.",

      "detail.ecole-paysage.title": "École du Paysage — Studio Madaji Khaoula",
      "detail.ecole-paysage.description": "Projet éducatif intégré à son environnement naturel, où les teintes de terre, la pierre et les volumes bas créent une architecture humble et durable.",
      "detail.ecole-paysage.eyebrow": "Écoles &amp; Équipements Publics",
      "detail.ecole-paysage.h1": "École du Paysage",
      "detail.ecole-paysage.p": "Projet éducatif intégré à son environnement naturel, où les teintes de terre, la pierre et les volumes bas créent une architecture humble et durable.",

      "detail.equipement-terre.title": "Équipement Public en Terre — Studio Madaji Khaoula",
      "detail.equipement-terre.description": "Vue d'ensemble d'un équipement public où les circulations, la toiture et les matériaux ancrent le bâtiment dans un territoire aride et minéral.",
      "detail.equipement-terre.eyebrow": "Écoles &amp; Équipements Publics",
      "detail.equipement-terre.h1": "Équipement Public en Terre",
      "detail.equipement-terre.p": "Vue d'ensemble d'un équipement public où les circulations, la toiture et les matériaux ancrent le bâtiment dans un territoire aride et minéral.",

      "detail.boutique-luxe.title": "Boutique de Luxe — Galerie — Studio Madaji Khaoula",
      "detail.boutique-luxe.description": "Aménagement d'une boutique raffinée où les boiseries bordeaux, les détails dorés et la lumière chaude créent une expérience client intimiste et haut de gamme.",
      "detail.boutique-luxe.eyebrow": "Design Intérieur",
      "detail.boutique-luxe.h1": "Boutique de Luxe — Galerie",
      "detail.boutique-luxe.p": "Aménagement d'une boutique raffinée où les boiseries bordeaux, les détails dorés et la lumière chaude créent une expérience client intimiste et haut de gamme.",

      "detail.salon-boutique.title": "Salon Boutique Haute Couture — Studio Madaji Khaoula",
      "detail.salon-boutique.description": "Un espace d'accueil luxueux travaillé autour du bordeaux profond, du mobilier enveloppant, du miroir doré et d'une mise en scène lumineuse élégante.",
      "detail.salon-boutique.eyebrow": "Design Intérieur",
      "detail.salon-boutique.h1": "Salon Boutique Haute Couture",
      "detail.salon-boutique.p": "Un espace d'accueil luxueux travaillé autour du bordeaux profond, du mobilier enveloppant, du miroir doré et d'une mise en scène lumineuse élégante.",

      "detail.residence-signature.title": "Résidence Signature — Design Intérieur — Studio Madaji Khaoula",
      "detail.residence-signature.description": "Projet de design intérieur réalisé autour d'une ambiance lumineuse, de matières nobles et d'une composition élégante des espaces de vie. Les vues réunies présentent les différentes séquences du même projet achevé.",
      "detail.residence-signature.eyebrow": "Design Intérieur",
      "detail.residence-signature.h1": "Résidence Signature — Design Intérieur",
      "detail.residence-signature.p": "Projet de design intérieur réalisé autour d'une ambiance lumineuse, de matières nobles et d'une composition élégante des espaces de vie. Les vues réunies présentent les différentes séquences du même projet achevé.",

      /* --- Contact --- */
      "contact.title": "Contact — Studio Madaji Khaoula",
      "contact.description": "Discutons de votre projet d'architecture, d'urbanisme ou de design intérieur au Maroc.",
      "contact.eyebrow": "Contact",
      "contact.h1": "Discutons de votre projet.",
      "contact.p": "Transformons votre vision en espace d'exception.",
      "contact.form.name": "Votre nom",
      "contact.form.email": "Votre email",
      "contact.form.message": "Parlez-nous de votre projet",
      "contact.form.submit": "Envoyer la demande",
      "contact.form.availability": "Disponible 24h/24 — 7j/7",
      "contact.card.h3": "Coordonnées",

      /* --- À propos --- */
      "about.title": "À propos — Studio Madaji Khaoula",
      "about.description": "Studio d'architecture, d'urbanisme et de design intérieur fondé par Madaji Khaoula.",
      "about.eyebrow": "À propos",
      "about.h1": "Une vision architecturale élégante, humaine et durable.",
      "about.p": "Studio Madaji Khaoula est un studio d'architecture, d'urbanisme et de design intérieur fondé par Madaji Khaoula, architecte passionnée par la création d'espaces uniques, fonctionnels et intemporels.",
      "about.pillar1.h3": "Vision",
      "about.pillar1.p": "Créer des lieux durables, élégants et profondément adaptés à leur contexte culturel, naturel et humain.",
      "about.pillar2.h3": "Mission",
      "about.pillar2.p": "Accompagner chaque client avec méthode, écoute et précision, de l'idée initiale aux détails de réalisation.",
      "about.pillar3.h3": "Valeurs",
      "about.pillar3.p": "Créativité, excellence, écoute, durabilité, précision et innovation guident chaque décision de conception.",

      /* --- 404 --- */
      "404.title": "Page introuvable — Studio Madaji Khaoula",
      "404.description": "Cette page n'existe pas.",
      "404.eyebrow": "Erreur 404",
      "404.h1": "Cette page n'existe pas.",
      "404.p": "Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.",
      "404.btn": "Retour à l'accueil"
    },

    en: {
      /* --- Common (header / footer) --- */
      "common.skip": "Skip to content",
      "common.nav.home": "Home",
      "common.nav.about": "About",
      "common.nav.services": "Services",
      "common.nav.projects": "Projects",
      "common.nav.contact": "Contact",
      "common.nav.aria": "Main navigation",
      "common.nav.toggle_aria": "Open menu",
      "common.lang.aria": "Language selection",
      "common.footer.tagline": "Architecture, urban planning and interior design in Morocco.",
      "common.footer.rights": "© 2026 Studio Madaji Khaoula. All rights reserved.",
      "common.btn.consultation": "Request a consultation",
      "common.btn.back_projects": "Back to projects",
      "common.view_label": "View project →",

      /* --- Home --- */
      "home.title": "Studio Madaji Khaoula — Architect Morocco",
      "home.description": "Architecture, urban planning and interior design studio in Morocco for villas, public facilities, commercial spaces and exceptional projects.",
      "home.eyebrow": "— Studio Madaji Khaoula · Morocco",
      "home.h1": "Contemporary Moroccan architecture, conceived as an art of living.",
      "home.p": "Studio Madaji Khaoula supports individuals, businesses and communities in creating architecture, urban planning and interior design projects that combine aesthetics, functionality and sustainability.",
      "home.btn.projects": "Discover our projects",
      "home.studio.eyebrow": "The studio",
      "home.studio.h2": "A sensitive, precise and deeply contextual practice.",
      "home.studio.p": "Founded by Madaji Khaoula, the studio designs spaces that combine timeless lines, everyday comfort and sustainable responsibility. Each project is approached as a unique composition of light, material, landscape and lifestyle.",
      "home.card.h3": "Architecture • Urban Planning • Interiors",
      "home.card.p": "Studio Madaji Khaoula designs villas, facilities, interiors and territories with a quiet rigor: precision, material, light and sustainability.",
      "home.founder.eyebrow": "Founder &amp; Creative Direction",
      "home.founder.quote": "\u201cWe design places that don't seek immediate effect, but lasting rightness: a proportion, a material, a light, a way of living.\u201d",
      "home.founder.p1": "At the crossroads of architecture, urban planning and interior design, the studio champions an approach that is precise, contextual and quietly luxurious — where every project becomes a response to climate, site, use and the memory of the place.",
      "home.cta.h2": "Let's discuss your project.",
      "home.cta.p": "Let's turn your vision into an exceptional space.",

      /* --- Services --- */
      "services.title": "Services — Studio Madaji Khaoula",
      "services.description": "Architecture, urban planning and interior design united by the same standard of excellence.",
      "services.eyebrow": "Services",
      "services.h1": "Architecture, urban planning and interior design united by the same standard of excellence.",
      "services.item1.h3": "Architecture",
      "services.item1.p": "Design of villas, residences, public facilities and professional spaces with an aesthetic, functional and sustainable approach.",
      "services.item2.h3": "Urban Planning",
      "services.item2.p": "Urban studies, developments, planning and design of coherent, human-scaled spaces adapted to their context.",
      "services.item3.h3": "Interior Design",
      "services.item3.p": "Creation of elegant, warm and refined interiors for residences, boutiques, commercial and professional spaces.",
      "services.item4.h3": "Consulting &amp; Project Follow-up",
      "services.item4.p": "Personalized support from the initial idea through to the completion of the project.",
      "services.cta.h2": "Let's discuss your project.",
      "services.cta.p": "Let's turn your vision into an exceptional space.",

      /* --- Projects (list) --- */
      "projects.title": "Projects — Studio Madaji Khaoula",
      "projects.description": "Architecture, urban planning and interior design studio in Morocco for villas, public facilities, commercial spaces and exceptional projects.",
      "projects.eyebrow": "Authentic portfolio",
      "projects.h1": "Our Projects",
      "projects.p": "A selection of authentic work in architecture, urban planning and interior design.",
      "projects.filter.all": "All projects",
      "projects.filter.villas": "Residential",
      "projects.filter.ecoles": "Schools &amp; Public Facilities",
      "projects.filter.interieur": "Interior Design",

      "projects.cat.villas.eyebrow": "Residential",
      "projects.cat.villas.title": "Contemporary villas and prestige residences",
      "projects.cat.ecoles.eyebrow": "Schools &amp; Public Facilities",
      "projects.cat.ecoles.title": "Facilities rooted in their territory",
      "projects.cat.interieur.eyebrow": "Interior Design",
      "projects.cat.interieur.title": "Refined commercial interiors",

      "projects.tag.villas": "Villas",
      "projects.tag.ecoles": "Schools &amp; Public Facilities",
      "projects.tag.interieur": "Interior Design",

      "card.villa-contemporaine.title": "Contemporary Palm Villa",
      "card.villa-contemporaine.desc": "A prestige villa organized around geometric volumes, large glass bay windows, a lush garden and a fluid relationship between interior, terrace and pool.",
      "card.maison-patio.title": "Stone Patio House",
      "card.maison-patio.desc": "A residential project where stone, water and plant shadows come together to create a calm, mineral and timeless atmosphere.",
      "card.villa-lumiere.title": "Evening Light Villa",
      "card.villa-lumiere.desc": "A contemporary residence enhanced by evening light, the presence of the pool and a soft materiality between concrete, wood and landscape.",
      "card.ecole-rurale.title": "Sustainable Rural School",
      "card.ecole-rurale.desc": "A school facility designed with strongly locally-sourced materials, simple volumetry and a layout respectful of the mountainous landscape.",
      "card.ecole-paysage.title": "Landscape School",
      "card.ecole-paysage.desc": "An educational project integrated into its natural environment, where earth tones, stone and low volumes create a humble, sustainable architecture.",
      "card.equipement-terre.title": "Earth Public Facility",
      "card.equipement-terre.desc": "An overview of a public facility where circulation paths, roofing and materials anchor the building in an arid, mineral territory.",
      "card.boutique-luxe.title": "Luxury Boutique — Gallery",
      "card.boutique-luxe.desc": "The layout of a refined boutique where burgundy woodwork, gold details and warm light create an intimate, high-end customer experience.",
      "card.salon-boutique.title": "Haute Couture Boutique Salon",
      "card.salon-boutique.desc": "A luxurious reception space built around deep burgundy, enveloping furniture, a gold mirror and elegant, warmly lit staging.",
      "card.residence-signature.title": "Signature Residence — Interior Design",
      "card.residence-signature.desc": "An interior design project built around a luminous ambiance, noble materials and an elegant composition of living spaces.",

      "projects.cta.h2": "A project in mind?",
      "projects.cta.p": "Let's talk about it.",

      /* --- Project detail pages --- */
      "detail.villa-contemporaine.title": "Contemporary Palm Villa — Studio Madaji Khaoula",
      "detail.villa-contemporaine.description": "A prestige villa organized around geometric volumes, large glass bay windows, a lush garden and a fluid relationship between interior, terrace and pool. This page brings together complementary views of the same completed project.",
      "detail.villa-contemporaine.eyebrow": "Villas",
      "detail.villa-contemporaine.h1": "Contemporary Palm Villa",
      "detail.villa-contemporaine.p": "A prestige villa organized around geometric volumes, large glass bay windows, a lush garden and a fluid relationship between interior, terrace and pool. This page brings together complementary views of the same completed project.",

      "detail.maison-patio.title": "Stone Patio House — Studio Madaji Khaoula",
      "detail.maison-patio.description": "A residential project where stone, water and plant shadows come together to create a calm, mineral and timeless atmosphere. The images gathered here show different views of the same architectural ensemble.",
      "detail.maison-patio.eyebrow": "Villas",
      "detail.maison-patio.h1": "Stone Patio House",
      "detail.maison-patio.p": "A residential project where stone, water and plant shadows come together to create a calm, mineral and timeless atmosphere. The images gathered here show different views of the same architectural ensemble.",

      "detail.villa-lumiere.title": "Evening Light Villa — Studio Madaji Khaoula",
      "detail.villa-lumiere.description": "A contemporary residence enhanced by evening light, the presence of the pool and a soft materiality between concrete, wood and landscape. This page brings together complementary views of the same completed project.",
      "detail.villa-lumiere.eyebrow": "Villas",
      "detail.villa-lumiere.h1": "Evening Light Villa",
      "detail.villa-lumiere.p": "A contemporary residence enhanced by evening light, the presence of the pool and a soft materiality between concrete, wood and landscape. This page brings together complementary views of the same completed project.",

      "detail.ecole-rurale.title": "Sustainable Rural School — Studio Madaji Khaoula",
      "detail.ecole-rurale.description": "A school facility designed with strongly locally-sourced materials, simple volumetry and a layout respectful of the mountainous landscape.",
      "detail.ecole-rurale.eyebrow": "Schools &amp; Public Facilities",
      "detail.ecole-rurale.h1": "Sustainable Rural School",
      "detail.ecole-rurale.p": "A school facility designed with strongly locally-sourced materials, simple volumetry and a layout respectful of the mountainous landscape.",

      "detail.ecole-paysage.title": "Landscape School — Studio Madaji Khaoula",
      "detail.ecole-paysage.description": "An educational project integrated into its natural environment, where earth tones, stone and low volumes create a humble, sustainable architecture.",
      "detail.ecole-paysage.eyebrow": "Schools &amp; Public Facilities",
      "detail.ecole-paysage.h1": "Landscape School",
      "detail.ecole-paysage.p": "An educational project integrated into its natural environment, where earth tones, stone and low volumes create a humble, sustainable architecture.",

      "detail.equipement-terre.title": "Earth Public Facility — Studio Madaji Khaoula",
      "detail.equipement-terre.description": "An overview of a public facility where circulation paths, roofing and materials anchor the building in an arid, mineral territory.",
      "detail.equipement-terre.eyebrow": "Schools &amp; Public Facilities",
      "detail.equipement-terre.h1": "Earth Public Facility",
      "detail.equipement-terre.p": "An overview of a public facility where circulation paths, roofing and materials anchor the building in an arid, mineral territory.",

      "detail.boutique-luxe.title": "Luxury Boutique — Gallery — Studio Madaji Khaoula",
      "detail.boutique-luxe.description": "The layout of a refined boutique where burgundy woodwork, gold details and warm light create an intimate, high-end customer experience.",
      "detail.boutique-luxe.eyebrow": "Interior Design",
      "detail.boutique-luxe.h1": "Luxury Boutique — Gallery",
      "detail.boutique-luxe.p": "The layout of a refined boutique where burgundy woodwork, gold details and warm light create an intimate, high-end customer experience.",

      "detail.salon-boutique.title": "Haute Couture Boutique Salon — Studio Madaji Khaoula",
      "detail.salon-boutique.description": "A luxurious reception space built around deep burgundy, enveloping furniture, a gold mirror and elegant, warmly lit staging.",
      "detail.salon-boutique.eyebrow": "Interior Design",
      "detail.salon-boutique.h1": "Haute Couture Boutique Salon",
      "detail.salon-boutique.p": "A luxurious reception space built around deep burgundy, enveloping furniture, a gold mirror and elegant, warmly lit staging.",

      "detail.residence-signature.title": "Signature Residence — Interior Design — Studio Madaji Khaoula",
      "detail.residence-signature.description": "An interior design project built around a luminous ambiance, noble materials and an elegant composition of living spaces. The gathered views present different sequences of the same completed project.",
      "detail.residence-signature.eyebrow": "Interior Design",
      "detail.residence-signature.h1": "Signature Residence — Interior Design",
      "detail.residence-signature.p": "An interior design project built around a luminous ambiance, noble materials and an elegant composition of living spaces. The gathered views present different sequences of the same completed project.",

      /* --- Contact --- */
      "contact.title": "Contact — Studio Madaji Khaoula",
      "contact.description": "Let's discuss your architecture, urban planning or interior design project in Morocco.",
      "contact.eyebrow": "Contact",
      "contact.h1": "Let's discuss your project.",
      "contact.p": "Let's turn your vision into an exceptional space.",
      "contact.form.name": "Your name",
      "contact.form.email": "Your email",
      "contact.form.message": "Tell us about your project",
      "contact.form.submit": "Send request",
      "contact.form.availability": "Available 24/7",
      "contact.card.h3": "Contact details",

      /* --- About --- */
      "about.title": "About — Studio Madaji Khaoula",
      "about.description": "Architecture, urban planning and interior design studio founded by Madaji Khaoula.",
      "about.eyebrow": "About",
      "about.h1": "An elegant, human and sustainable architectural vision.",
      "about.p": "Studio Madaji Khaoula is an architecture, urban planning and interior design studio founded by Madaji Khaoula, an architect passionate about creating unique, functional and timeless spaces.",
      "about.pillar1.h3": "Vision",
      "about.pillar1.p": "Creating sustainable, elegant places deeply adapted to their cultural, natural and human context.",
      "about.pillar2.h3": "Mission",
      "about.pillar2.p": "Supporting every client with method, attentiveness and precision, from the initial idea to the finishing details.",
      "about.pillar3.h3": "Values",
      "about.pillar3.p": "Creativity, excellence, attentiveness, sustainability, precision and innovation guide every design decision.",

      /* --- 404 --- */
      "404.title": "Page Not Found — Studio Madaji Khaoula",
      "404.description": "This page doesn't exist.",
      "404.eyebrow": "Error 404",
      "404.h1": "This page doesn't exist.",
      "404.p": "The link you followed may be incorrect, or the page has been moved.",
      "404.btn": "Back to home"
    }
  };

  /* ---------------------------------------------------------
     Styles du sélecteur de langue (injectés au runtime,
     pas besoin de toucher à style.css)
  --------------------------------------------------------- */
var css = ""
  + ".lang-switch{position:relative;display:inline-flex;align-items:center;margin-left:20px;border:1px solid currentColor;border-radius:999px;padding:3px;opacity:0.95;width:74px;height:30px;}"
  + ".lang-switch .lang-thumb{position:absolute;top:3px;left:3px;width:33px;height:24px;border-radius:999px;background-color:var(--cream-50,#fff);transition:transform 0.25s ease;}"
  + ".lang-switch[data-active='en'] .lang-thumb{transform:translateX(34px);}"
  + ".lang-switch button{all:unset;position:relative;z-index:1;cursor:pointer;font-family:inherit;font-size:0.72rem;letter-spacing:0.04em;width:33px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:999px;transition:color 0.2s ease;}"
  + ".lang-switch button[aria-pressed='true']{color:var(--maroon-800,#6b1f2a);font-weight:600;}"
  + ".lang-switch button[aria-pressed='false']{color:inherit;}"
  + "@media (max-width:860px){.lang-switch{margin:16px 0 0;}}";
  var styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ---------------------------------------------------------
     Détermine la langue active
  --------------------------------------------------------- */
  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
    var browser = (navigator.language || "fr").slice(0, 2);
    return browser === "en" ? "en" : "fr";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  /* ---------------------------------------------------------
     Applique les traductions au DOM
  --------------------------------------------------------- */
  function applyLang(lang) {
  var dict = translations[lang] || translations.fr;
  document.documentElement.setAttribute("lang", lang);

  // Texte / HTML interne
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Attribut placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  // Attribut aria-label
  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  // Titre de la page
  var titleKey = document.documentElement.getAttribute("data-i18n-title");
  if (titleKey && dict[titleKey] !== undefined) {
    document.title = dict[titleKey];
  }

  // Meta description
  var descKey = document.documentElement.getAttribute("data-i18n-description");
  if (descKey && dict[descKey] !== undefined) {
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict[descKey]);
  }

  // Curseur / boutons du sélecteur de langue
  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  var switchWrap = document.querySelector(".lang-switch");
  if (switchWrap) switchWrap.setAttribute("data-active", lang);
}
  /* ---------------------------------------------------------
     Injecte le sélecteur FR / EN dans la nav
  --------------------------------------------------------- */
  function injectSwitcher() {
  var nav = document.querySelector(".main-nav");
  if (!nav || nav.querySelector(".lang-switch")) return;

  var wrap = document.createElement("div");
  wrap.className = "lang-switch";
  wrap.setAttribute("role", "group");
  wrap.setAttribute("data-i18n-aria-label", "common.lang.aria");
  wrap.setAttribute("aria-label", "Choix de la langue");
  wrap.setAttribute("data-active", getLang());

  var thumb = document.createElement("span");
  thumb.className = "lang-thumb";
  wrap.appendChild(thumb);

  var frBtn = document.createElement("button");
  frBtn.type = "button";
  frBtn.textContent = "FR";
  frBtn.setAttribute("data-lang", "fr");

  var enBtn = document.createElement("button");
  enBtn.type = "button";
  enBtn.textContent = "EN";
  enBtn.setAttribute("data-lang", "en");

  wrap.appendChild(frBtn);
  wrap.appendChild(enBtn);
  nav.appendChild(wrap);

  wrap.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    setLang(btn.getAttribute("data-lang"));
    wrap.setAttribute("data-active", btn.getAttribute("data-lang"));
  });
}

  /* ---------------------------------------------------------
     Init
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    injectSwitcher();
    applyLang(getLang());
  });
})();