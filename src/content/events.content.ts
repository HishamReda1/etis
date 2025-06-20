import { type Dictionary } from "intlayer";

const eventsContent = {
  key: "events",
  content: {
    en: {
      events: [
        {
          id: 8,
          title: "Honeywell Partners Meeting in Egypt",
          description: "A significant meeting was held between Honeywell partners in Egypt, including our General Manager Eng. Alaa Omar and Executive Director Eng. Mohamed Ghazy. The meeting focused on discussing future plans for 2025 and addressing current challenges in the market.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: [
            "/honeywell2025-3.jpeg",
            "/honeywell2025-1.jpeg",
            "/honeywell2025-2.jpeg",
            "/honeywell2025-4.jpeg"
          ],
        },
        {
          id: 1,
          title: "Being the Platinum Partner in the Egyptian Market for Honeywell Alerton BMS.",
          description: "Another Successful Milestone for Eits Automation Control Automation Contro Family in growing the business along with Honeywell in Egypt being recognized as \"New Technology Partner\" for Honeywell Alerton BMS for 2024 results & being the GOLD Parter in the Egyptian Market.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "mauritius",
          thumbnails: [
            "/platinum.jpeg",
            "/platinum-6.jpeg",
            "/platinum-1.jpeg",
            "/platinum-2.jpeg",
            "/platinum-3.jpeg",
            "/platinum-4.jpeg",
            "/platinum-5.jpeg",
            "/platinum-7.jpeg",
            "/platinum-8.jpeg",
          ],
        },
        {
          id: 6,
          title: "Eits Control Annual Event 2025",
          description: "Eits family got together at \"Ain Elhayah resort hotel\" to celebrate the achievements and successes of the year and to talk about future plans. What a great opportunity to end the year on such a high note.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "Being the GOLD Partner in the Egyptian Market for Honeywell Alerton BMS.",
          description: "Another Successful Milestone for Eits Automation Control Automation Contro Family in growing the business along with Honeywell in Egypt being recognized as \"New Technology Partner\" for Honeywell Alerton BMS for 2023 results & being the GOLD Parter in the Egyptian Market.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "mauritius",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "The presence of our CEO at Sontay's headquarters in the UK",
          description: "Another successful milestone for the EITS Automation Control family in expanding our presence in the Egyptian market. We are proud to be officially recognized as a 'New Technology Partner' by Sontay. This achievement was marked by the presence of our CEO at Sontay's headquarters in the UK, reflecting the strength of our partnership and our continuous commitment to bringing cutting-edge solutions to Egypt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "UK",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "Our Managing Director Eng. Mohamed Ghazy with the Minister of Health and Honeywell's Executives in Egypt",
          description: "Our Managing Director, Eng. Mohamed Ghazy, met with the Minister of Health and Honeywell's senior executives in Egypt to discuss the latest achievements in advancing the healthcare sector and enhancing development efforts across the country.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "Participation in Schneider Electric Event at Baron Hotel.",
          description: "EITS Automation Control had the honor to participate in the recent Schneider Electric event held at Baron Hotel. The event was highlighted by the attendance of a well-known TV presenter from the show 'El-Geda3an', showcasing the importance and growing recognition of our contributions in the automation and control sector.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Eits Control Annual Event 2023",
          description: "Eits family got together at \"jewel sports city hotel\" to celebrate the achievements and successes of the year and to talk about future plans. What a great opportunity to end the year on such a high note.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    },
    ar: {
      events: [
        {
          id: 8,
          title: "اجتماع شركاء هونيول في مصر",
          description: "تم عقد اجتماع مهم بين شركاء هونيول في مصر، من بينهم المدير العام لشركتنا المهندس علاء عمر والمهندس محمد غازي المدير التنفيذي. ركز الاجتماع على مناقشة الخطط المستقبلية لعام 2025 ومعالجة التحديات الحالية في السوق.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "مصر",
          thumbnails: [
            "/honeywell2025-3.jpeg",
            "/honeywell2025-1.jpeg",
            "/honeywell2025-2.jpeg",
            "/honeywell2025-4.jpeg"
          ],
        },
        {
          id: 1,
          title: "كوننا الشريك البلاتيني في السوق المصري لهونيول ألرتون BMS",
          description: "إنجاز ناجح آخر لعائلة إيتس للتحكم الآلي في تنمية الأعمال مع هونيول في مصر، حيث تم الاعتراف بنا كشريك تكنولوجي جديد لهونيول ألرتون BMS لعام 2024 وكوننا الشريك الذهبي في السوق المصري.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "موريشيوس",
          thumbnails: [
            "/platinum.jpeg",
            "/platinum-6.jpeg",
            "/platinum-1.jpeg",
            "/platinum-2.jpeg",
            "/platinum-3.jpeg",
            "/platinum-4.jpeg",
            "/platinum-5.jpeg",
            "/platinum-7.jpeg",
            "/platinum-8.jpeg",
          ],
        },
        {
          id: 6,
          title: "الحدث السنوي لإيتس للتحكم 2025",
          description: "اجتمعت عائلة إيتس في منتجع 'عين الحياة' للاحتفال بإنجازات ونجاحات العام والتحدث عن الخطط المستقبلية. فرصة رائعة لإنهاء العام على هذا النحو المميز.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "مصر",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "كوننا الشريك الذهبي في السوق المصري لهونيول ألرتون BMS",
          description: "إنجاز ناجح آخر لعائلة إيتس للتحكم الآلي في تنمية الأعمال مع هونيول في مصر، حيث تم الاعتراف بنا كشريك تكنولوجي جديد لهونيول ألرتون BMS لعام 2023 وكوننا الشريك الذهبي في السوق المصري.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "موريشيوس",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "حضور الرئيس التنفيذي في مقر سونتاي في المملكة المتحدة",
          description: "Another successful milestone for the EITS Automation Control family in expanding our presence in the Egyptian market. We are proud to be officially recognized as a 'New Technology Partner' by Sontay. This achievement was marked by the presence of our CEO at Sontay's headquarters in the UK, reflecting the strength of our partnership and our continuous commitment to bringing cutting-edge solutions to Egypt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "UK",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "Our Managing Director Eng. Mohamed Ghazy with the Minister of Health and Honeywell's Executives in Egypt",
          description: "Our Managing Director, Eng. Mohamed Ghazy, met with the Minister of Health and Honeywell's senior executives in Egypt to discuss the latest achievements in advancing the healthcare sector and enhancing development efforts across the country.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "Participation in Schneider Electric Event at Baron Hotel.",
          description: "EITS Automation Control had the honor to participate in the recent Schneider Electric event held at Baron Hotel. The event was highlighted by the attendance of a well-known TV presenter from the show 'El-Geda3an', showcasing the importance and growing recognition of our contributions in the automation and control sector.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Eits Control Annual Event 2023",
          description: "Eits family got together at \"jewel sports city hotel\" to celebrate the achievements and successes of the year and to talk about future plans. What a great opportunity to end the year on such a high note.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egypt",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    },
    fr: {
      events: [
        {
          id: 8,
          title: "Réunion des Partenaires Honeywell en Égypte",
          description: "Une réunion importante a eu lieu entre les partenaires Honeywell en Égypte, incluant notre Directeur Général Ing. Alaa Omar et le Directeur Exécutif Ing. Mohamed Ghazy. La réunion s'est concentrée sur la discussion des plans futurs pour 2025 et l'adresse des défis actuels sur le marché.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Égypte",
          thumbnails: [
            "/honeywell2025-3.jpeg",
            "/honeywell2025-1.jpeg",
            "/honeywell2025-2.jpeg",
            "/honeywell2025-4.jpeg"
          ],
        },
        {
          id: 1,
          title: "Devenir Partenaire Platine sur le Marché Égyptien pour Honeywell Alerton BMS",
          description: "Une autre étape réussie pour la famille Eits Automation Control dans le développement des affaires avec Honeywell en Égypte, étant reconnue comme \"Nouveau Partenaire Technologique\" pour Honeywell Alerton BMS pour les résultats 2024 et devenant Partenaire Or sur le Marché Égyptien.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Maurice",
          thumbnails: [
            "/platinum.jpeg",
            "/platinum-6.jpeg",
            "/platinum-1.jpeg",
            "/platinum-2.jpeg",
            "/platinum-3.jpeg",
            "/platinum-4.jpeg",
            "/platinum-5.jpeg",
            "/platinum-7.jpeg",
            "/platinum-8.jpeg",
          ],
        },
        {
          id: 6,
          title: "Événement Annuel Eits Control 2025",
          description: "La famille Eits s'est réunie au resort 'Ain Elhayah' pour célébrer les réalisations et les succès de l'année et discuter des plans futurs. Quelle belle opportunité de terminer l'année sur une telle note positive.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Égypte",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "Devenir Partenaire Or sur le Marché Égyptien pour Honeywell Alerton BMS",
          description: "Une autre étape réussie pour la famille Eits Automation Control dans le développement des affaires avec Honeywell en Égypte, étant reconnue comme \"Nouveau Partenaire Technologique\" pour Honeywell Alerton BMS pour les résultats 2023 et devenant Partenaire Or sur le Marché Égyptien.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Maurice",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "La Présence de notre PDG au Siège de Sontay au Royaume-Uni",
          description: "Une autre étape réussie pour la famille EITS Automation Control dans l'expansion de notre présence sur le marché égyptien. Nous sommes fiers d'être officiellement reconnus comme 'Nouveau Partenaire Technologique' par Sontay. Cette réalisation a été marquée par la présence de notre PDG au siège de Sontay au Royaume-Uni, reflétant la force de notre partenariat et notre engagement continu à apporter des solutions de pointe en Égypte.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Royaume-Uni",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "Notre Directeur Général Ing. Mohamed Ghazy avec le Ministre de la Santé et les Dirigeants de Honeywell en Égypte",
          description: "Notre Directeur Général, Ing. Mohamed Ghazy, a rencontré le Ministre de la Santé et les dirigeants de Honeywell en Égypte pour discuter des dernières réalisations dans l'avancement du secteur de la santé et l'amélioration des efforts de développement à travers le pays.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Égypte",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "Participation à l'Événement Schneider Electric à l'Hôtel Baron",
          description: "EITS Automation Control a eu l'honneur de participer au récent événement Schneider Electric organisé à l'Hôtel Baron. L'événement a été marqué par la présence d'un présentateur TV bien connu de l'émission 'El-Geda3an', démontrant l'importance et la reconnaissance croissante de nos contributions dans le secteur de l'automatisation et du contrôle.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Égypte",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Événement Annuel Eits Control 2023",
          description: "La famille Eits s'est réunie à l'hôtel 'jewel sports city' pour célébrer les réalisations et les succès de l'année et discuter des plans futurs. Quelle belle opportunité de terminer l'année sur une telle note positive.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Égypte",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    },
    es: {
      events: [
        {
          id: 8,
          title: "Reunión de Socios de Honeywell en Egipto",
          description: "Se celebró una importante reunión entre los socios de Honeywell en Egipto, incluyendo nuestro Director General Ing. Alaa Omar y el Director Ejecutivo Ing. Mohamed Ghazy. La reunión se centró en discutir los planes futuros para 2025 y abordar los desafíos actuales en el mercado.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egipto",
          thumbnails: [
            "/honeywell2025-3.jpeg",
            "/honeywell2025-1.jpeg",
            "/honeywell2025-2.jpeg",
            "/honeywell2025-4.jpeg"
          ],
        },
        {
          id: 1,
          title: "Ser Socio Platino en el Mercado Egipcio para Honeywell Alerton BMS",
          description: "Otro hito exitoso para la familia Eits Automation Control en el crecimiento del negocio junto con Honeywell en Egipto, siendo reconocidos como \"Nuevo Socio Tecnológico\" para Honeywell Alerton BMS para los resultados de 2024 y siendo Socio Oro en el Mercado Egipcio.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Mauricio",
          thumbnails: [
            "/platinum.jpeg",
            "/platinum-6.jpeg",
            "/platinum-1.jpeg",
            "/platinum-2.jpeg",
            "/platinum-3.jpeg",
            "/platinum-4.jpeg",
            "/platinum-5.jpeg",
            "/platinum-7.jpeg",
            "/platinum-8.jpeg",
          ],
        },
        {
          id: 6,
          title: "Evento Anual de Eits Control 2025",
          description: "La familia Eits se reunió en el resort 'Ain Elhayah' para celebrar los logros y éxitos del año y hablar sobre los planes futuros. Qué gran oportunidad para terminar el año con una nota tan alta.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egipto",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "Ser Socio Oro en el Mercado Egipcio para Honeywell Alerton BMS",
          description: "Otro hito exitoso para la familia Eits Automation Control en el crecimiento del negocio junto con Honeywell en Egipto, siendo reconocidos como \"Nuevo Socio Tecnológico\" para Honeywell Alerton BMS para los resultados de 2023 y siendo Socio Oro en el Mercado Egipcio.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Mauricio",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "La Presencia de nuestro CEO en la Sede de Sontay en el Reino Unido",
          description: "Otro hito exitoso para la familia EITS Automation Control en la expansión de nuestra presencia en el mercado egipcio. Estamos orgullosos de ser reconocidos oficialmente como 'Nuevo Socio Tecnológico' por Sontay. Este logro fue marcado por la presencia de nuestro CEO en la sede de Sontay en el Reino Unido, reflejando la fortaleza de nuestra asociación y nuestro compromiso continuo de llevar soluciones de vanguardia a Egipto.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Reino Unido",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "Nuestro Director General Ing. Mohamed Ghazy con el Ministro de Salud y los Ejecutivos de Honeywell en Egipto",
          description: "Nuestro Director General, Ing. Mohamed Ghazy, se reunió con el Ministro de Salud y los ejecutivos senior de Honeywell en Egipto para discutir los últimos logros en el avance del sector de la salud y la mejora de los esfuerzos de desarrollo en todo el país.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egipto",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "Participación en el Evento de Schneider Electric en el Hotel Baron",
          description: "EITS Automation Control tuvo el honor de participar en el reciente evento de Schneider Electric celebrado en el Hotel Baron. El evento fue destacado por la asistencia de un conocido presentador de TV del programa 'El-Geda3an', mostrando la importancia y el creciente reconocimiento de nuestras contribuciones en el sector de la automatización y el control.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egipto",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Evento Anual de Eits Control 2023",
          description: "La familia Eits se reunió en el hotel 'jewel sports city' para celebrar los logros y éxitos del año y hablar sobre los planes futuros. Qué gran oportunidad para terminar el año con una nota tan alta.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Egipto",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    },
    de: {
      events: [
        {
          id: 8,
          title: "Honeywell Partner-Treffen in Ägypten",
          description: "Ein wichtiges Treffen fand zwischen Honeywell-Partnern in Ägypten statt, darunter unser General Manager Ing. Alaa Omar und Executive Director Ing. Mohamed Ghazy. Das Treffen konzentrierte sich auf die Diskussion zukünftiger Pläne für 2025 und die Bewältigung aktueller Herausforderungen auf dem Markt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Ägypten",
          thumbnails: ["/honeywell2025-3.jpeg", "/honeywell2025-1.jpeg", "/honeywell2025-2.jpeg", "/honeywell2025-4.jpeg"]
        },
        {
          id: 1,
          title: "Platin-Partner im ägyptischen Markt für Honeywell Alerton BMS",
          description: "Ein weiterer erfolgreicher Meilenstein für die Eits Automation Control Familie im Geschäftswachstum mit Honeywell in Ägypten, anerkannt als \"Neuer Technologiepartner\" für Honeywell Alerton BMS für die Ergebnisse 2024 und als Gold-Partner im ägyptischen Markt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Mauritius",
          thumbnails: ["/platinum.jpeg", "/platinum-6.jpeg", "/platinum-1.jpeg", "/platinum-2.jpeg", "/platinum-3.jpeg", "/platinum-4.jpeg", "/platinum-5.jpeg", "/platinum-7.jpeg", "/platinum-8.jpeg"]
        },
        {
          id: 6,
          title: "Eits Control Jahresveranstaltung 2025",
          description: "Die Eits-Familie kam im 'Ain Elhayah Resort Hotel' zusammen, um die Erfolge und Errungenschaften des Jahres zu feiern und über zukünftige Pläne zu sprechen. Eine großartige Gelegenheit, das Jahr auf einer so positiven Note zu beenden.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Ägypten",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "Gold-Partner im ägyptischen Markt für Honeywell Alerton BMS",
          description: "Ein weiterer erfolgreicher Meilenstein für die Eits Automation Control Familie im Geschäftswachstum mit Honeywell in Ägypten, anerkannt als \"Neuer Technologiepartner\" für Honeywell Alerton BMS für die Ergebnisse 2023 und als Gold-Partner im ägyptischen Markt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Mauritius",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "Anwesenheit unseres CEO im Hauptsitz von Sontay in Großbritannien",
          description: "Ein weiterer erfolgreicher Meilenstein für die EITS Automation Control Familie bei der Expansion unserer Präsenz im ägyptischen Markt. Wir sind stolz darauf, offiziell als 'Neuer Technologiepartner' von Sontay anerkannt zu sein. Dieser Erfolg wurde durch die Anwesenheit unseres CEO im Hauptsitz von Sontay in Großbritannien markiert, was die Stärke unserer Partnerschaft und unser kontinuierliches Engagement für zukunftsweisende Lösungen in Ägypten widerspiegelt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Großbritannien",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "Unser Geschäftsführer Ing. Mohamed Ghazy mit dem Gesundheitsminister und Honeywell-Führungskräften in Ägypten",
          description: "Unser Geschäftsführer, Ing. Mohamed Ghazy, traf sich mit dem Gesundheitsminister und Honeywell-Führungskräften in Ägypten, um die neuesten Fortschritte im Gesundheitssektor und die Verbesserung der Entwicklungsbemühungen im ganzen Land zu diskutieren.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Ägypten",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "Teilnahme an der Schneider Electric Veranstaltung im Baron Hotel",
          description: "EITS Automation Control hatte die Ehre, an der kürzlich stattgefundenen Schneider Electric Veranstaltung im Baron Hotel teilzunehmen. Die Veranstaltung wurde durch die Anwesenheit eines bekannten TV-Moderators der Show 'El-Geda3an' hervorgehoben, was die Bedeutung und wachsende Anerkennung unserer Beiträge im Automatisierungs- und Steuerungssektor zeigt.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Ägypten",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Eits Control Jahresveranstaltung 2023",
          description: "Die Eits-Familie kam im 'Jewel Sports City Hotel' zusammen, um die Erfolge und Errungenschaften des Jahres zu feiern und über zukünftige Pläne zu sprechen. Eine großartige Gelegenheit, das Jahr auf einer so positiven Note zu beenden.",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "Ägypten",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    },
    zh: {
      events: [
        {
          id: 8,
          title: "霍尼韦尔埃及合作伙伴会议",
          description: "在埃及举行了一次重要的霍尼韦尔合作伙伴会议，包括我们的总经理工程师Alaa Omar和执行董事工程师Mohamed Ghazy。会议重点讨论了2025年的未来计划和应对当前市场挑战。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "埃及",
          thumbnails: ["/honeywell2025-3.jpeg", "/honeywell2025-1.jpeg", "/honeywell2025-2.jpeg", "/honeywell2025-4.jpeg"]
        },
        {
          id: 1,
          title: "成为霍尼韦尔Alerton BMS埃及市场的铂金合作伙伴",
          description: "Eits自动化控制家族在与霍尼韦尔在埃及的业务发展中取得了又一个成功的里程碑，被认可为霍尼韦尔Alerton BMS 2024年成果的'新技术合作伙伴'，并成为埃及市场的黄金合作伙伴。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "毛里求斯",
          thumbnails: ["/platinum.jpeg", "/platinum-6.jpeg", "/platinum-1.jpeg", "/platinum-2.jpeg", "/platinum-3.jpeg", "/platinum-4.jpeg", "/platinum-5.jpeg", "/platinum-7.jpeg", "/platinum-8.jpeg"]
        },
        {
          id: 6,
          title: "Eits Control 2025年度活动",
          description: "Eits家族在'Ain Elhayah度假酒店'相聚，庆祝年度成就和成功，并讨论未来计划。这是一个以如此积极的方式结束这一年的绝佳机会。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "埃及",
          thumbnails: [
            "/Eits-Annual-Event-2024-11.jpeg",
            "/Eits-Annual-Event-2024-1.jpeg",
            "/Eits-Annual-Event-2024-2.jpeg",
            "/Eits-Annual-Event-2024-3.jpeg",
            "/Eits-Annual-Event-2024-4.jpeg",
            "/Eits-Annual-Event-2024-5.jpeg",
            "/Eits-Annual-Event-2024-6.jpeg",
            "/Eits-Annual-Event-2024-7.jpeg",
            "/Eits-Annual-Event-2024-8.jpeg",
            "/Eits-Annual-Event-2024-9.jpeg",
            "/Eits-Annual-Event-2024-10.jpeg",
            "/Eits-Annual-Event-2024-12.jpeg",
            "/Eits-Annual-Event-2024-13.jpeg",
            "/Eits-Annual-Event-2024-14.jpeg",
            "/Eits-Annual-Event-2024-15.jpeg",
            "/Eits-Annual-Event-2024-16.jpeg",
            "/Eits-Annual-Event-2024-17.jpeg",
            "/Eits-Annual-Event-2024-18.jpeg",
            "/Eits-Annual-Event-2024-19.jpeg",
            "/Eits-Annual-Event-2024-20.jpeg",
            "/Eits-Annual-Event-2024-21.jpeg",
            "/Eits-Annual-Event-2024-22.jpeg",
            "/Eits-Annual-Event-2024-23.jpeg",
            "/Eits-Annual-Event-2024-24.jpeg",
            "/Eits-Annual-Event-2024-25.jpeg",
            "/Eits-Annual-Event-2024-26.jpeg",
          ],
        },
        {
          id: 2,
          title: "成为霍尼韦尔Alerton BMS埃及市场的黄金合作伙伴",
          description: "Eits自动化控制家族在与霍尼韦尔在埃及的业务发展中取得了又一个成功的里程碑，被认可为霍尼韦尔Alerton BMS 2023年成果的'新技术合作伙伴'，并成为埃及市场的黄金合作伙伴。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "毛里求斯",
          thumbnails: ["/golden.webp", "/contract.webp", "/ghazy.webp"],
        },
        {
          id: 3,
          title: "我们的首席执行官访问英国Sontay总部",
          description: "EITS自动化控制家族在扩大埃及市场业务方面取得了又一个成功的里程碑。我们很自豪被Sontay正式认可为'新技术合作伙伴'。这一成就的标志是我们首席执行官访问英国Sontay总部，反映了我们合作伙伴关系的实力以及我们持续致力于为埃及带来尖端解决方案的承诺。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "英国",
          thumbnails: ["/sontay3.jpeg", "/sontay1.jpeg", "/sontay2.jpeg"],
        },
        {
          id: 7,
          title: "我们的总经理工程师Mohamed Ghazy与埃及卫生部长和霍尼韦尔高管会面",
          description: "我们的总经理工程师Mohamed Ghazy与埃及卫生部长和霍尼韦尔高级管理人员会面，讨论在推进医疗保健部门和加强全国发展努力方面的最新成就。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "埃及",
          thumbnails: ["minstry.jpeg"],
        },
        {
          id: 4,
          title: "参加Baron酒店的施耐德电气活动",
          description: "EITS自动化控制有幸参加了最近在Baron酒店举行的施耐德电气活动。该活动的亮点是来自'El-Geda3an'节目的知名电视主持人的出席，展示了我们在自动化和控制领域贡献的重要性和日益增长的认可度。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "埃及",
          thumbnails: ["/shnider1.jpeg", "/shnider2.jpeg", "/shnider3.jpeg"],
        },
        {
          id: 5,
          title: "Eits Control 2023年度活动",
          description: "Eits家族在'jewel sports city酒店'相聚，庆祝年度成就和成功，并讨论未来计划。这是一个以如此积极的方式结束这一年的绝佳机会。",
          link: "https://www.linkedin.com/company/eits-automation-control/posts/?feedView=images",
          location: "埃及",
          thumbnails: [
            "/team.webp",
            "/ahmed hamada.webp",
            "/engineer-Nabila.webp",
            "/hussenAbdulnasserEtis.webp",
          ],
        },
      ],
    }
  }
} satisfies Dictionary;

export default eventsContent; 