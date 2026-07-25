export type Difficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert"
export type UnitStatus = "Core" | "Extension"

export interface CurriculumUnit {
  id: string
  title: string
  difficulty: Difficulty
  status: UnitStatus
  prerequisites: string[]
  discipline: string
  discipline_title: string
  summary: string
  hours: number
  rank: number
}

export interface Discipline {
  slug: string
  title: string
  prefix: string
  description: string
  group: string
  unit_count: number
  core_count: number
  extension_count: number
  core_hours: number
  extension_hours: number
}

export const discipline_groups = {
  "First principles": [
    "Foundations",
    "Learning",
    "Logic",
    "Writing",
    "Communication",
    "Mathematics",
    "Statistics-and-Data",
    "Research"
  ],
  "Computation and systems": [
    "Computer-Science",
    "Security",
    "Artificial-Intelligence",
    "Systems-Science",
    "Engineering",
    "Architecture-and-Design"
  ],
  "The natural world": [
    "Physics",
    "Astronomy",
    "Chemistry",
    "Earth-Climate-and-Energy",
    "Biology",
    "Health-and-Medicine",
    "Geography"
  ],
  "Society and institutions": [
    "Economics",
    "Finance",
    "Business-and-Management",
    "Political-Science",
    "Law",
    "Psychology",
    "Cognitive-Science",
    "Sociology-and-Anthropology",
    "Education",
    "Life-Skills"
  ],
  "Culture and meaning": [
    "History",
    "Philosophy",
    "Theology-and-Comparative-Religion",
    "Islamic-Studies",
    "Linguistics",
    "Literature",
    "Art",
    "Music"
  ]
} as const

export const disciplines: Discipline[] = [
  {
    "slug": "Architecture-and-Design",
    "title": "Architecture and Design",
    "prefix": "ARC",
    "description": "Architecture and design turn human purposes, environmental conditions, materials, and cultural meanings into usable form. They educate judgment about the spaces, products, and systems that quietly organize everyday life.",
    "group": "Computation and systems",
    "unit_count": 14,
    "core_count": 11,
    "extension_count": 3,
    "core_hours": 294,
    "extension_hours": 200
  },
  {
    "slug": "Art",
    "title": "Art",
    "prefix": "ART",
    "description": "Art develops visual literacy, disciplined making, historical awareness, and the capacity to interpret form without reducing it to decoration. It reveals how images and objects preserve, contest, and reshape human experience.",
    "group": "Culture and meaning",
    "unit_count": 14,
    "core_count": 11,
    "extension_count": 3,
    "core_hours": 257,
    "extension_hours": 200
  },
  {
    "slug": "Artificial-Intelligence",
    "title": "Artificial Intelligence",
    "prefix": "AIX",
    "description": "Artificial intelligence explains systems that perceive, predict, generate, plan, and act, while exposing the limits and social consequences of computational judgment. Educated use requires technical literacy, evaluation, governance, and the ability to refuse unjustified automation.",
    "group": "Computation and systems",
    "unit_count": 16,
    "core_count": 12,
    "extension_count": 4,
    "core_hours": 396,
    "extension_hours": 274
  },
  {
    "slug": "Astronomy",
    "title": "Astronomy",
    "prefix": "AST",
    "description": "Astronomy situates Earth and human history within a measurable universe. It joins observation, physics, computation, and inference to explain planets, stars, galaxies, cosmic history, and the conditions for life.",
    "group": "The natural world",
    "unit_count": 13,
    "core_count": 9,
    "extension_count": 4,
    "core_hours": 209,
    "extension_hours": 250
  },
  {
    "slug": "Biology",
    "title": "Biology",
    "prefix": "BIO",
    "description": "Biology explains living organization from molecules and cells to organisms, evolution, and ecosystems. It is indispensable for understanding health, agriculture, biotechnology, biodiversity, and humanity's place in nature.",
    "group": "The natural world",
    "unit_count": 18,
    "core_count": 16,
    "extension_count": 2,
    "core_hours": 433,
    "extension_hours": 150
  },
  {
    "slug": "Business-and-Management",
    "title": "Business and Management",
    "prefix": "BUS",
    "description": "Business and management study how people coordinate resources, information, incentives, and responsibility to create value through organizations. They help an educated person evaluate enterprises without confusing efficiency, profit, legality, and social value.",
    "group": "Society and institutions",
    "unit_count": 16,
    "core_count": 15,
    "extension_count": 1,
    "core_hours": 394,
    "extension_hours": 100
  },
  {
    "slug": "Chemistry",
    "title": "Chemistry",
    "prefix": "CHM",
    "description": "Chemistry explains how composition, structure, energy, and reaction produce the material world. It connects fundamental physics to biology, medicine, environment, manufacturing, food, and modern materials.",
    "group": "The natural world",
    "unit_count": 17,
    "core_count": 14,
    "extension_count": 3,
    "core_hours": 322,
    "extension_hours": 200
  },
  {
    "slug": "Cognitive-Science",
    "title": "Cognitive Science",
    "prefix": "COG",
    "description": "Cognitive science integrates computation, psychology, neuroscience, linguistics, and philosophy to investigate mind and intelligence. It helps distinguish useful models of cognition from metaphors that merely redescribe behavior.",
    "group": "Society and institutions",
    "unit_count": 13,
    "core_count": 12,
    "extension_count": 1,
    "core_hours": 370,
    "extension_hours": 100
  },
  {
    "slug": "Communication",
    "title": "Communication",
    "prefix": "COM",
    "description": "Communication develops the ability to listen, explain, persuade, deliberate, negotiate, and interpret media across differences. It makes knowledge socially usable and helps expose manipulation, misunderstanding, and failures of common ground.",
    "group": "First principles",
    "unit_count": 15,
    "core_count": 12,
    "extension_count": 3,
    "core_hours": 307,
    "extension_hours": 200
  },
  {
    "slug": "Computer-Science",
    "title": "Computer Science",
    "prefix": "CSC",
    "description": "Computer science explains computation as an idea, a machine, and an infrastructure. It enables people to design software and reason about algorithms, data, operating systems, databases, networks, and the limits of computability.",
    "group": "Computation and systems",
    "unit_count": 22,
    "core_count": 19,
    "extension_count": 3,
    "core_hours": 516,
    "extension_hours": 200
  },
  {
    "slug": "Earth-Climate-and-Energy",
    "title": "Earth, Climate, and Energy",
    "prefix": "ECS",
    "description": "Earth, climate, and energy study the coupled physical, chemical, biological, and human systems that sustain civilization. They are essential for reasoning about resources, hazards, climate change, energy transitions, and environmental responsibility.",
    "group": "The natural world",
    "unit_count": 16,
    "core_count": 14,
    "extension_count": 2,
    "core_hours": 344,
    "extension_hours": 150
  },
  {
    "slug": "Economics",
    "title": "Economics",
    "prefix": "ECO",
    "description": "Economics studies choice, production, exchange, institutions, distribution, growth, and instability under scarcity and power. It equips learners to analyze markets and policy while recognizing externalities, measurement limits, and competing accounts of welfare.",
    "group": "Society and institutions",
    "unit_count": 17,
    "core_count": 15,
    "extension_count": 2,
    "core_hours": 431,
    "extension_hours": 150
  },
  {
    "slug": "Education",
    "title": "Education",
    "prefix": "EDU",
    "description": "Education studies how people learn, how teaching and assessment shape opportunity, and how institutions transmit knowledge and culture. It enables a lifelong learner to design instruction while questioning inequity, hidden curricula, and unsupported learning claims.",
    "group": "Society and institutions",
    "unit_count": 15,
    "core_count": 14,
    "extension_count": 1,
    "core_hours": 407,
    "extension_hours": 100
  },
  {
    "slug": "Engineering",
    "title": "Engineering",
    "prefix": "ENG",
    "description": "Engineering transforms scientific knowledge and human requirements into reliable systems under real constraints. It develops design judgment about safety, failure, uncertainty, cost, maintenance, sustainability, and responsibility.",
    "group": "Computation and systems",
    "unit_count": 18,
    "core_count": 15,
    "extension_count": 3,
    "core_hours": 468,
    "extension_hours": 148
  },
  {
    "slug": "Finance",
    "title": "Finance",
    "prefix": "FIN",
    "description": "Finance studies decisions across time under uncertainty: saving, borrowing, valuation, investment, risk, and institutional intermediation. It supports personal agency and public judgment while making leverage, incentives, and model risk visible.",
    "group": "Society and institutions",
    "unit_count": 14,
    "core_count": 12,
    "extension_count": 2,
    "core_hours": 311,
    "extension_hours": 124
  },
  {
    "slug": "Foundations",
    "title": "Foundations",
    "prefix": "FND",
    "description": "Foundations make the curriculum genuinely start from zero by establishing language, number, observation, digital operation, practical measurement, and civic orientation. They prevent later disciplines from hiding essential entry knowledge behind assumed schooling.",
    "group": "First principles",
    "unit_count": 16,
    "core_count": 16,
    "extension_count": 0,
    "core_hours": 274,
    "extension_hours": 0
  },
  {
    "slug": "Geography",
    "title": "Geography",
    "prefix": "GEO",
    "description": "Geography explains how physical environments, human populations, economies, cultures, and political power are organized across space. It develops map literacy and scale-sensitive judgment about place, movement, territory, and uneven development.",
    "group": "The natural world",
    "unit_count": 13,
    "core_count": 11,
    "extension_count": 2,
    "core_hours": 272,
    "extension_hours": 150
  },
  {
    "slug": "Health-and-Medicine",
    "title": "Health and Medicine",
    "prefix": "HLT",
    "description": "Health and medicine provide the literacy needed to understand bodies, disease, evidence, prevention, care systems, and public health. The subject supports informed decisions while preserving the boundary between education and licensed clinical practice.",
    "group": "The natural world",
    "unit_count": 16,
    "core_count": 14,
    "extension_count": 2,
    "core_hours": 370,
    "extension_hours": 150
  },
  {
    "slug": "History",
    "title": "History",
    "prefix": "HST",
    "description": "History reconstructs change over time through critical use of incomplete and contested evidence. It gives institutions, ideas, sciences, religions, and identities the chronology and context without which the modern world becomes unintelligible.",
    "group": "Culture and meaning",
    "unit_count": 20,
    "core_count": 19,
    "extension_count": 1,
    "core_hours": 479,
    "extension_hours": 100
  },
  {
    "slug": "Islamic-Studies",
    "title": "Islamic Studies",
    "prefix": "ISL",
    "description": "Islamic Studies examines revelation, interpretation, law, theology, spirituality, intellectual traditions, societies, and civilizations on their own terms and through critical scholarship. It prevents both devotional commitment and academic distance from being mistaken for the only legitimate mode of inquiry.",
    "group": "Culture and meaning",
    "unit_count": 19,
    "core_count": 15,
    "extension_count": 4,
    "core_hours": 394,
    "extension_hours": 224
  },
  {
    "slug": "Law",
    "title": "Law",
    "prefix": "LAW",
    "description": "Law studies how authoritative rules are made, interpreted, justified, enforced, and contested across jurisdictions. It enables citizens to reason about rights, duties, institutions, remedies, and constitutional order without confusing legal literacy with professional advice.",
    "group": "Society and institutions",
    "unit_count": 16,
    "core_count": 15,
    "extension_count": 1,
    "core_hours": 457,
    "extension_hours": 100
  },
  {
    "slug": "Learning",
    "title": "Learning",
    "prefix": "LRN",
    "description": "Learning develops deliberate control over attention, memory, practice, feedback, planning, and self-correction. It turns the rest of the curriculum from a reading list into a sustainable system for durable knowledge and transfer.",
    "group": "First principles",
    "unit_count": 15,
    "core_count": 14,
    "extension_count": 1,
    "core_hours": 348,
    "extension_hours": 100
  },
  {
    "slug": "Life-Skills",
    "title": "Life Skills",
    "prefix": "LIF",
    "description": "Life skills convert knowledge into everyday agency: health and safety, relationships, household competence, work, civic participation, leadership, and meaning. They make practical judgment an explicit object of education rather than an assumed by-product.",
    "group": "Society and institutions",
    "unit_count": 16,
    "core_count": 15,
    "extension_count": 1,
    "core_hours": 383,
    "extension_hours": 100
  },
  {
    "slug": "Linguistics",
    "title": "Linguistics",
    "prefix": "LIN",
    "description": "Linguistics studies language as sound, structure, meaning, cognition, history, and social practice. It improves analysis of grammar and communication while challenging myths about correctness, language change, identity, and linguistic ability.",
    "group": "Culture and meaning",
    "unit_count": 15,
    "core_count": 13,
    "extension_count": 2,
    "core_hours": 331,
    "extension_hours": 150
  },
  {
    "slug": "Literature",
    "title": "Literature",
    "prefix": "LIT",
    "description": "Literature trains sustained attention to language, form, imagination, voice, and the lives of others across cultures and periods. It deepens interpretation while preserving the difference between textual evidence, historical context, and personal response.",
    "group": "Culture and meaning",
    "unit_count": 15,
    "core_count": 13,
    "extension_count": 2,
    "core_hours": 320,
    "extension_hours": 150
  },
  {
    "slug": "Logic",
    "title": "Logic",
    "prefix": "LOG",
    "description": "Logic clarifies what follows from what, how arguments fail, and where certainty ends. It supports proof, scientific inference, law, philosophy, computation, public reasoning, and resistance to persuasive error.",
    "group": "First principles",
    "unit_count": 15,
    "core_count": 11,
    "extension_count": 4,
    "core_hours": 198,
    "extension_hours": 224
  },
  {
    "slug": "Mathematics",
    "title": "Mathematics",
    "prefix": "MAT",
    "description": "Mathematics develops exact reasoning about quantity, structure, space, change, uncertainty, and abstraction. It supplies models and proof methods used throughout science, engineering, computation, economics, and disciplined decision-making.",
    "group": "First principles",
    "unit_count": 28,
    "core_count": 18,
    "extension_count": 10,
    "core_hours": 396,
    "extension_hours": 600
  },
  {
    "slug": "Music",
    "title": "Music",
    "prefix": "MUS",
    "description": "Music develops attentive listening, embodied timing, performance, composition, analysis, and historical understanding. It reveals how patterned sound carries identity, ritual, technology, emotion, and social organization.",
    "group": "Culture and meaning",
    "unit_count": 14,
    "core_count": 11,
    "extension_count": 3,
    "core_hours": 231,
    "extension_hours": 200
  },
  {
    "slug": "Philosophy",
    "title": "Philosophy",
    "prefix": "PHI",
    "description": "Philosophy examines knowledge, reality, mind, value, science, politics, and the assumptions beneath other inquiries. It trains conceptual precision and reasoned disagreement where evidence alone cannot select an answer without interpretation or values.",
    "group": "Culture and meaning",
    "unit_count": 20,
    "core_count": 17,
    "extension_count": 3,
    "core_hours": 494,
    "extension_hours": 200
  },
  {
    "slug": "Physics",
    "title": "Physics",
    "prefix": "PHY",
    "description": "Physics seeks economical, testable accounts of matter, motion, fields, energy, space, and time. It supplies foundational models for astronomy, chemistry, engineering, climate science, and modern technology while teaching the reach and limits of idealization.",
    "group": "The natural world",
    "unit_count": 21,
    "core_count": 18,
    "extension_count": 3,
    "core_hours": 470,
    "extension_hours": 200
  },
  {
    "slug": "Political-Science",
    "title": "Political Science",
    "prefix": "POL",
    "description": "Political science studies power, collective choice, states, regimes, policy, and relations among political communities. It equips citizens to compare institutions and evidence without reducing politics to personalities or moral slogans.",
    "group": "Society and institutions",
    "unit_count": 15,
    "core_count": 14,
    "extension_count": 1,
    "core_hours": 433,
    "extension_hours": 100
  },
  {
    "slug": "Psychology",
    "title": "Psychology",
    "prefix": "PSY",
    "description": "Psychology studies behavior and experience through biological, cognitive, developmental, social, and clinical perspectives. It helps evaluate claims about people while revealing individual variation, measurement limits, and the danger of intuitive overconfidence.",
    "group": "Society and institutions",
    "unit_count": 15,
    "core_count": 13,
    "extension_count": 2,
    "core_hours": 357,
    "extension_hours": 150
  },
  {
    "slug": "Research",
    "title": "Research",
    "prefix": "RSH",
    "description": "Research provides the common architecture for asking answerable questions, finding evidence, choosing methods, managing uncertainty, and communicating reproducible conclusions. It also teaches when formal, empirical, historical, interpretive, or design inquiry requires different warrants.",
    "group": "First principles",
    "unit_count": 16,
    "core_count": 15,
    "extension_count": 1,
    "core_hours": 446,
    "extension_hours": 100
  },
  {
    "slug": "Security",
    "title": "Security",
    "prefix": "SEC",
    "description": "Security studies threats, vulnerabilities, controls, resilience, privacy, conflict, and recovery from personal to strategic scales. It replaces absolute-safety thinking with adversarial, risk-based judgment and responsible practice.",
    "group": "Computation and systems",
    "unit_count": 14,
    "core_count": 13,
    "extension_count": 1,
    "core_hours": 409,
    "extension_hours": 100
  },
  {
    "slug": "Sociology-and-Anthropology",
    "title": "Sociology and Anthropology",
    "prefix": "SOC",
    "description": "Sociology and anthropology explain how culture, institutions, inequality, identity, kinship, and social change shape lives. They make the familiar strange, the unfamiliar intelligible, and individual explanations accountable to social structure and ethnographic evidence.",
    "group": "Society and institutions",
    "unit_count": 15,
    "core_count": 14,
    "extension_count": 1,
    "core_hours": 407,
    "extension_hours": 100
  },
  {
    "slug": "Statistics-and-Data",
    "title": "Statistics and Data",
    "prefix": "STA",
    "description": "Statistics and data develop calibrated reasoning from variable, incomplete, and biased observations. They are essential for estimating uncertainty, designing studies, testing claims, drawing causal inferences, and communicating evidence without false precision.",
    "group": "First principles",
    "unit_count": 18,
    "core_count": 15,
    "extension_count": 3,
    "core_hours": 446,
    "extension_hours": 250
  },
  {
    "slug": "Systems-Science",
    "title": "Systems Science",
    "prefix": "SYS",
    "description": "Systems science studies feedback, accumulation, networks, adaptation, complexity, risk, and intervention across domains. It helps explain why local improvements can fail and why dynamic consequences differ from static intentions.",
    "group": "Computation and systems",
    "unit_count": 14,
    "core_count": 12,
    "extension_count": 2,
    "core_hours": 370,
    "extension_hours": 150
  },
  {
    "slug": "Theology-and-Comparative-Religion",
    "title": "Theology and Comparative Religion",
    "prefix": "REL",
    "description": "Theology and comparative religion develop literate, fair inquiry into religious texts, doctrines, practices, institutions, experiences, and truth claims. They distinguish internal theological reasoning from historical and social-scientific explanation while enabling disciplined comparison.",
    "group": "Culture and meaning",
    "unit_count": 15,
    "core_count": 14,
    "extension_count": 1,
    "core_hours": 381,
    "extension_hours": 100
  },
  {
    "slug": "Writing",
    "title": "Writing",
    "prefix": "WRT",
    "description": "Writing turns observation and thought into sentences, arguments, explanations, narratives, and durable public knowledge. It develops revision, style, citation, genre awareness, and the ability to discover weaknesses through composition.",
    "group": "First principles",
    "unit_count": 15,
    "core_count": 13,
    "extension_count": 2,
    "core_hours": 335,
    "extension_hours": 150
  }
]

export const units: CurriculumUnit[] = [
  {
    "id": "ARC-B01",
    "title": "Design problems, users, context, affordance, function, form, and iteration",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ENG-B01",
      "ART-B01"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Problem/need;  2. user/context",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ARC-B02",
    "title": "Sketching, diagramming, prototyping, critique, and visual hierarchy",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ARC-B01",
      "ART-B02"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Exploratory sketch;  2. systems/flow diagram",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ARC-I01",
    "title": "Human-centered design, research, accessibility, ergonomics, and inclusive design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-B02",
      "PSY-B02",
      "RSH-I06"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "User research;  2. task/journey",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "ARC-I02",
    "title": "Product, service, information, and interaction design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-I01",
      "CSC-I11"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Product form/use;  2. service blueprint",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "ARC-I03",
    "title": "Architectural space, program, structure, envelope, materials, light, climate, and construction",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-B02",
      "ENG-I01",
      "ECS-B03"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Site/program;  2. space/circulation",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ARC-I04",
    "title": "Global architectural history: vernacular, sacred, civic, domestic, industrial, and modern traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-B01",
      "ART-I02",
      "HST-I01"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Vernacular/ancient;  2. Islamic/Asian/African/Indigenous",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "ARC-I05",
    "title": "Urban design: public realm, density, land use, transport, infrastructure, housing, and place",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-I03",
      "GEO-B04"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Block/street/public realm;  2. density/mix",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ARC-I06",
    "title": "Landscape architecture, ecology, water, agriculture, and public space",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-I03",
      "ECS-I01"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Site/terrain/soil;  2. plants/ecology",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ARC-I07",
    "title": "Design systems, typography, grids, branding, and communication",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ARC-B02",
      "COM-I04"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Type/readability;  2. grid/layout",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ARC-A01",
    "title": "Sustainable, bioclimatic, circular, and resilient buildings and settlements",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ARC-I03",
      "ARC-I06",
      "ENG-A03"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Passive climate design;  2. energy/daylight",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "ARC-A02",
    "title": "Codes, procurement, professional ethics, preservation, and community participation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ARC-I03",
      "LAW-I03",
      "COM-A03"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Code/zoning/access;  2. contracts/procurement",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "ARC-A03",
    "title": "Computational design, simulation, fabrication, and smart environments",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ARC-I02",
      "ENG-I04",
      "MAT-A04"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Parametric rules;  2. optimization/simulation",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "ARC-A04",
    "title": "Integrated research-design-build or urban intervention",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ARC-A01",
      "ARC-A02",
      "ENG-A05"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Partner/site research;  2. brief/co-design",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "ARC-E01",
    "title": "Original architectural or design research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ARC-A03",
      "ARC-A04",
      "RSH-E01"
    ],
    "discipline": "Architecture-and-Design",
    "discipline_title": "Architecture and Design",
    "summary": "Original design question;  2. precedent/theory",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "ART-B01",
    "title": "Seeing and describing: line, shape, color, value, texture, space, form, and composition",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B03",
      "FND-B09"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Line/shape;  2. color/value",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ART-B02",
    "title": "Drawing, observation, proportion, perspective, light, and visual iteration",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ART-B01",
      "MAT-B07"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Contour/gesture;  2. proportion/negative space",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ART-B03",
    "title": "Materials and processes: painting, print, sculpture, photography, craft, digital, and time-based media",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ART-B01",
      "FND-B08"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Painting/pigment;  2. print",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "ART-I01",
    "title": "Representation, abstraction, symbolism, iconography, style, patronage, and audience",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-B01",
      "LIT-B01"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Mimesis/abstraction;  2. symbol/icon",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "ART-I02",
    "title": "Prehistoric, ancient, classical, African, Asian, Indigenous, and American arts",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I01",
      "HST-B05"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Prehistoric/material;  2. Africa/West Asia",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ART-I03",
    "title": "Islamic, Byzantine, medieval, and connected early modern arts",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I02",
      "HST-I01"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Byzantine/Christian;  2. Islamic architecture/object/book",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "ART-I04",
    "title": "Renaissance, early modern, colonial, and global exchange",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I03",
      "HST-I02"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Renaissance workshops/perspective;  2. courts/reformations",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ART-I05",
    "title": "Modernism, photography, design, mass culture, and global modernities",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I04",
      "HST-I04"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Revolution/realism;  2. photography",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ART-I06",
    "title": "Contemporary art, installation, performance, digital media, institutions, and markets",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I05",
      "HST-I06"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Concept/installation;  2. performance/body",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ART-I07",
    "title": "Criticism, aesthetics, interpretation, conservation, museums, provenance, and restitution",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ART-I01",
      "PHI-I07",
      "HST-A02"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Description/interpretation/judgment;  2. aesthetic theory",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "ART-A01",
    "title": "Studio practice: research, concept, iteration, critique, portfolio, and exhibition",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ART-B02",
      "ART-B03",
      "ART-I07"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Question/research;  2. material experiments",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "ART-A02",
    "title": "Visual culture, media, politics, identity, religion, science, and technology",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ART-I06",
      "COM-I05",
      "SOC-I04"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Image/power;  2. advertising/media",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "ART-A03",
    "title": "Curatorial, archival, conservation, and public-art practice",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ART-I07",
      "RSH-I05"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Curatorial thesis;  2. selection/research",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "ART-E01",
    "title": "Original artistic or art-historical research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ART-A01",
      "ART-A02",
      "RSH-E01"
    ],
    "discipline": "Art",
    "discipline_title": "Art",
    "summary": "Original question/practice;  2. archive/material",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "AIX-B01",
    "title": "AI concepts, history, task types, capabilities, and limitations",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I03",
      "CSC-B01"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Intelligence and automation;  2. symbolic/statistical history",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "AIX-B02",
    "title": "Everyday AI use, prompting, verification, privacy, and human oversight",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "AIX-B01",
      "COM-I06"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Task suitability and risk;  2. context, instruction, examples, output format",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "AIX-I01",
    "title": "Agents, search, constraint satisfaction, planning, and game playing",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AIX-B01",
      "CSC-I02"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "State/action/goal;  2. uninformed/heuristic search",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "AIX-I02",
    "title": "Knowledge representation, reasoning, uncertainty, and probabilistic models",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-I03",
      "STA-I01",
      "CSC-I01"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Logic/rules/ontologies;  2. inference and defaults",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "AIX-I03",
    "title": "Machine-learning problem formulation and supervised/unsupervised learning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-I04",
      "CSC-I03"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Task, target, data, loss;  2. features/labels/splits",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "AIX-I04",
    "title": "Feature engineering, trees, ensembles, kernels, clustering, and dimensionality reduction",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AIX-I03",
      "MAT-I06"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "preprocessing/feature design;  2. trees and ensembles",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "AIX-I05",
    "title": "Neural networks, backpropagation, optimization, and representation learning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AIX-I03",
      "MAT-A05"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Neuron/layer/activation;  2. computation graph/backprop",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "AIX-A01",
    "title": "Deep learning for language, vision, audio, and multimodal data",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AIX-I05",
      "CSC-I02"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Convolution and spatial models;  2. sequences/attention",
    "hours": 50,
    "rank": 9
  },
  {
    "id": "AIX-I06",
    "title": "Reinforcement learning and sequential decision-making",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "AIX-I01",
      "STA-I05",
      "MAT-A05"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "MDPs, return, policy;  2. dynamic programming",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "AIX-A02",
    "title": "Foundation models, transformers, tokenization, pretraining, and scaling",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AIX-A01",
      "LIN-B03"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Tokens/embeddings;  2. self-attention/transformer",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "AIX-A03",
    "title": "LLM inference, prompting, retrieval, tools, agents, fine-tuning, and evaluation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AIX-A02",
      "CSC-A02"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Decoding/context;  2. structured prompting",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "AIX-A04",
    "title": "Generative-model failure modes, interpretability, robustness, and security",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AIX-A02",
      "SEC-A01",
      "STA-A06"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Hallucination/calibration;  2. distribution shift/adversarial inputs",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "AIX-A05",
    "title": "Fairness, accountability, transparency, labor, copyright, safety, and governance",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AIX-I03",
      "PHI-I05",
      "LAW-I06",
      "ECO-I03"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Stakeholders/impact;  2. fairness and discrimination",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "AIX-A06",
    "title": "Robotics, perception, control, and embodied intelligence",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "AIX-A01",
      "ENG-I04",
      "SYS-I03"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Robot frames/kinematics;  2. sensing/localization",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "AIX-E01",
    "title": "AI research methods and frontier architectures",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "AIX-A01",
      "AIX-A03",
      "RSH-E01"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Frontier literature/problem;  2. baselines/ablations",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "AIX-E02",
    "title": "Advanced AI safety, alignment, evaluation science, and institutional design",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "AIX-A04",
      "AIX-A05",
      "SYS-A04"
    ],
    "discipline": "Artificial-Intelligence",
    "discipline_title": "Artificial Intelligence",
    "summary": "Objective/oversight problems;  2. scalable evaluation and monitoring",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "AST-B01",
    "title": "Sky, coordinate systems, time, seasons, phases, eclipses, and naked-eye observation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B07",
      "GEO-B01"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Celestial sphere and daily motion;  2. altitude/azimuth and equatorial coordinates",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "AST-B02",
    "title": "Telescopes, detectors, spectra, images, and astronomical measurement",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "AST-B01",
      "PHY-B05"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Aperture/resolution;  2. optical/radio/space telescopes",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "AST-B03",
    "title": "Solar system: formation, Sun, planets, moons, small bodies, and exploration",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "AST-B02",
      "PHY-B03"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Formation and orbital dynamics;  2. Sun/terrestrial planets",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "AST-I01",
    "title": "Stellar structure, fusion, classification, birth, evolution, and death",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AST-B02",
      "PHY-I04",
      "CHM-B02"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Luminosity, temperature, spectra, HR diagram;  2. hydrostatic equilibrium/fusion",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "AST-I02",
    "title": "Milky Way, interstellar medium, star populations, and galactic dynamics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AST-I01",
      "PHY-I01"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Galactic components;  2. gas/dust/star formation",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "AST-I03",
    "title": "Galaxies, active nuclei, clusters, and large-scale structure",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AST-I02",
      "PHY-I05"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Morphology/scaling;  2. formation/evolution/mergers",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "AST-I04",
    "title": "Expanding universe, Big Bang evidence, dark matter, and dark energy",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AST-I03",
      "PHY-I05",
      "STA-I03"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Distance ladder/redshift;  2. expansion and Hubble law",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "AST-I05",
    "title": "Exoplanets, habitability, biosignatures, and astrobiology",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "AST-B03",
      "BIO-I05",
      "CHM-I03"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Transit/radial velocity/imaging;  2. planet populations",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "AST-A01",
    "title": "Relativistic astrophysics: compact objects, accretion, and gravitational waves",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "AST-I01",
      "PHY-A04"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "White dwarfs/neutron stars;  2. black holes",
    "hours": 50,
    "rank": 10
  },
  {
    "id": "AST-A02",
    "title": "Cosmology: geometry, inflation, nucleosynthesis, background radiation, structure formation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "AST-I04",
      "PHY-A04",
      "MAT-A10"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "FRW geometry/dynamics;  2. thermal history/nucleosynthesis",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "AST-A03",
    "title": "Observational astronomy, surveys, inference, and computational astrophysics",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "AST-B02",
      "STA-A02",
      "PHY-I08"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Proposal/selection function;  2. reduction/calibration",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "AST-A04",
    "title": "History and philosophy of cosmological worldviews",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "AST-I04",
      "HST-I07",
      "REL-I06"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Ancient/medieval cosmologies;  2. Islamic/European astronomy",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "AST-E01",
    "title": "Frontier astrophysics and cosmology research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "AST-A01",
      "AST-A02",
      "AST-A03"
    ],
    "discipline": "Astronomy",
    "discipline_title": "Astronomy",
    "summary": "Frontier question/literature;  2. instrument/survey/simulation",
    "hours": 100,
    "rank": 14
  },
  {
    "id": "BIO-B01",
    "title": "Characteristics of life, cells, membranes, biomolecules, and microscopy",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B03",
      "RSH-B03"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Life and cell theory;  2. prokaryote/eukaryote",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "BIO-B02",
    "title": "Energy, enzymes, respiration, photosynthesis, and metabolism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BIO-B01",
      "CHM-B05"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Free energy/coupling;  2. enzymes/regulation",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "BIO-B03",
    "title": "DNA, genes, chromosomes, replication, expression, and cell division",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BIO-B01",
      "CHM-I03"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "DNA/RNA structure;  2. replication/repair",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "BIO-I01",
    "title": "Mendelian, molecular, quantitative, and population genetics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-B03",
      "STA-B03"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Segregation/assortment/linkage;  2. pedigrees/probability",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "BIO-B04",
    "title": "Evolution: variation, inheritance, selection, drift, speciation, and common descent",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BIO-B03",
      "STA-B03"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Variation/inheritance;  2. natural/sexual selection",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "BIO-I02",
    "title": "Phylogeny, systematics, tree of life, and history of life",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-B04",
      "MAT-I01"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Homology/analogy;  2. cladograms/characters",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "BIO-B05",
    "title": "Organisms, structure-function, homeostasis, development, and behavior",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BIO-B01",
      "BIO-B02"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Organization/tissues;  2. exchange/transport",
    "hours": 13,
    "rank": 8
  },
  {
    "id": "BIO-I03",
    "title": "Plant, animal, fungal, and microbial form and physiology",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-B05",
      "BIO-I02"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Plant transport/growth;  2. animal organ systems",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "BIO-I04",
    "title": "Developmental biology, signaling, regeneration, and aging",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-B03",
      "BIO-B05"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Cell signaling;  2. patterning/differentiation",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "BIO-I05",
    "title": "Ecology: populations, communities, ecosystems, biomes, and biodiversity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-B04",
      "BIO-B05",
      "STA-B04"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Population growth/life history;  2. competition/predation/mutualism",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "BIO-A01",
    "title": "Conservation, restoration, global change biology, and human ecology",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BIO-I05",
      "ECS-I08"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Extinction risk/genetic diversity;  2. reserve/landscape design",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "BIO-I06",
    "title": "Immunology, pathogens, host-microbe relations, and disease ecology",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-I01",
      "BIO-I03"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Barriers/innate immunity;  2. adaptive response/memory",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "BIO-I07",
    "title": "Neuroscience: neurons, circuits, sensation, action, plasticity, and evolution",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BIO-I03",
      "PHY-B04"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Membrane/electrical signaling;  2. synapses/neurotransmitters",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "BIO-A02",
    "title": "Genomics, epigenetics, systems biology, and bioinformatics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BIO-I01",
      "STA-A04",
      "CSC-I02"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Sequencing/assembly;  2. annotation/comparative genomics",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "BIO-A03",
    "title": "Molecular and cell biology: regulation, trafficking, cytoskeleton, and cell fate",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "BIO-I04",
      "CHM-A02"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Genome regulation;  2. protein folding/turnover",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "BIO-A04",
    "title": "Biotechnology, synthetic biology, gene editing, and bioethics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BIO-A02",
      "ENG-I04",
      "PHI-I05"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Cloning/expression;  2. CRISPR/editing",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "BIO-A05",
    "title": "Experimental design, model organisms, field methods, and biological inference",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BIO-I05",
      "RSH-I04",
      "STA-A01"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Biological question/model choice;  2. controls/randomization",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "BIO-E01",
    "title": "Integrative and frontier biological research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "BIO-A02",
      "BIO-A03",
      "BIO-A05"
    ],
    "discipline": "Biology",
    "discipline_title": "Biology",
    "summary": "Multi-scale question;  2. literature/model",
    "hours": 100,
    "rank": 19
  },
  {
    "id": "BUS-B01",
    "title": "Organizations, stakeholders, value propositions, business models, and sectors",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I05",
      "ECO-B01"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Organization/sector;  2. stakeholder and need",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "BUS-B02",
    "title": "Accounting: transactions, statements, cash flow, costs, controls, and interpretation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BUS-B01",
      "FIN-B01"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Equation/double entry;  2. income/balance/cash statements",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "BUS-B03",
    "title": "Customers, markets, segmentation, positioning, channels, and ethical marketing",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BUS-B01",
      "PSY-B02"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Customer problem/research;  2. segmentation/targeting",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "BUS-B04",
    "title": "Operations, processes, capacity, quality, inventory, and supply chains",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BUS-B01",
      "SYS-B01"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Process mapping;  2. capacity/bottleneck/flow",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "BUS-I01",
    "title": "Organizational behavior, culture, incentives, teams, power, and change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-B01",
      "SOC-I03",
      "PSY-I04"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Motivation/incentive;  2. teams/coordination",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "BUS-I02",
    "title": "Management: planning, organizing, staffing, directing, control, and judgment",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-I01",
      "SYS-I06"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Goals/priorities;  2. organization/delegation",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "BUS-I03",
    "title": "Strategy: industry, capabilities, positioning, competition, cooperation, and execution",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-B01",
      "ECO-I01"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Industry/value chain;  2. resources/capabilities",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "BUS-I04",
    "title": "Entrepreneurship: problem discovery, experiments, product-market fit, funding, and scaling",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-B03",
      "RSH-I04",
      "FIN-I01"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Problem discovery;  2. assumption mapping/experiments",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "BUS-I05",
    "title": "Product management, design, technology, innovation, and lifecycle",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-I04",
      "ARC-I02",
      "CSC-I10"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Product vision/outcome;  2. discovery/research",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "BUS-I06",
    "title": "Project management: scope, schedule, cost, risk, procurement, and agile/plan-driven delivery",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-B04",
      "COM-I07",
      "SYS-A02"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Charter/scope;  2. work/schedule/resources",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "BUS-I07",
    "title": "Human resources, hiring, development, performance, compensation, and labor relations",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-I01",
      "LAW-I04"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Workforce planning/job design;  2. fair hiring",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "BUS-I08",
    "title": "Business law, governance, compliance, ethics, sustainability, and social impact",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "BUS-B02",
      "LAW-I06",
      "PHI-I05"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Entity/fiduciary governance;  2. contract/regulatory duties",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "BUS-A01",
    "title": "International business, institutions, culture, geopolitics, and global supply chains",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BUS-I03",
      "GEO-I01",
      "POL-I06"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Entry/ownership;  2. institutional/currency risk",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "BUS-A02",
    "title": "Leadership, decision systems, crisis management, and organizational resilience",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BUS-I02",
      "COM-A03",
      "SYS-I05"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Authority/legitimacy/service;  2. vision/sensemaking",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "BUS-A03",
    "title": "Analytics, experiments, forecasting, and evidence-based management",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "BUS-B02",
      "STA-A01",
      "SYS-A04"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Decision/metric;  2. data quality/dashboard",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "BUS-E01",
    "title": "Enterprise creation or transformation capstone",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "BUS-I04",
      "BUS-I06",
      "BUS-A02",
      "BUS-A03"
    ],
    "discipline": "Business-and-Management",
    "discipline_title": "Business and Management",
    "summary": "Mandate/evidence;  2. strategy/model",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "CHM-B01",
    "title": "Matter, substances, mixtures, phases, measurement, and laboratory safety",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B01",
      "RSH-B04"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Macroscopic/particle descriptions;  2. pure substances/mixtures",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "CHM-B02",
    "title": "Atoms, isotopes, ions, periodicity, and amount of substance",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B01",
      "MAT-B03"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Atomic evidence/models;  2. nuclei/isotopes",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "CHM-B03",
    "title": "Bonding, molecular shape, intermolecular forces, and structure-property relations",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B02",
      "PHY-B04"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Ionic/covalent/metallic models;  2. Lewis/resonance/formal charge",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "CHM-B04",
    "title": "Reactions, equations, stoichiometry, limiting reagents, and yield",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B02",
      "MAT-B04"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Reaction evidence/types;  2. formulas/equations",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "CHM-B05",
    "title": "Energy, enthalpy, entropy, equilibrium, acids, bases, and solubility",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B04",
      "PHY-B06"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Enthalpy/calorimetry;  2. entropy/free energy",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "CHM-B06",
    "title": "Redox, electrochemistry, reaction rates, and mechanisms",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CHM-B04",
      "PHY-B04",
      "MAT-B06"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Oxidation states/balancing;  2. galvanic/electrolytic cells",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "CHM-I01",
    "title": "Quantum chemistry, orbitals, spectroscopy, and molecular symmetry",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-B03",
      "PHY-I06",
      "MAT-I06"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Wave mechanics/orbitals;  2. many-electron atoms",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "CHM-I02",
    "title": "Thermodynamics, statistical mechanics, kinetics, and transport",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-B05",
      "CHM-B06",
      "PHY-I04"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Laws/potentials;  2. phase/chemical equilibria",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "CHM-I03",
    "title": "Organic structure, stereochemistry, reactivity, synthesis, and biomolecules",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-B03",
      "CHM-B06"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Functional groups/nomenclature;  2. conformation/stereochemistry",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "CHM-A01",
    "title": "Advanced organic synthesis, retrosynthesis, catalysis, and chemical biology",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "CHM-I03",
      "CHM-I01"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Retrosynthesis/selectivity;  2. pericyclic/radical reactions",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "CHM-I04",
    "title": "Inorganic, coordination, organometallic, and solid-state chemistry",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-I01",
      "CHM-B06"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Main-group chemistry;  2. coordination/ligand fields",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "CHM-I05",
    "title": "Analytical chemistry: equilibria, separations, spectroscopy, electroanalysis, and validation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-B05",
      "CHM-I01",
      "STA-I03"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Sampling/calibration;  2. titrimetric/electrochemical",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "CHM-I06",
    "title": "Polymer, colloid, surface, nanomaterial, and materials chemistry",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CHM-I02",
      "CHM-I04"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Polymerization/architecture;  2. molecular weight/thermal behavior",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "CHM-A02",
    "title": "Biochemistry: proteins, nucleic acids, membranes, metabolism, and molecular recognition",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CHM-I03",
      "BIO-B01"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Proteins/folding/enzymes;  2. nucleic acids",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "CHM-A03",
    "title": "Environmental, atmospheric, geochemical, industrial, and green chemistry",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CHM-I02",
      "CHM-I05",
      "ECS-I01"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Air/water/soil reactions;  2. cycles/speciation/transport",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "CHM-A04",
    "title": "Computational chemistry and molecular modeling",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "CHM-I01",
      "MAT-A04",
      "CSC-B03"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Molecular mechanics;  2. electronic-structure methods",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "CHM-E01",
    "title": "Chemical research design, synthesis, characterization, and literature",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "CHM-A01",
      "CHM-I05",
      "RSH-E01"
    ],
    "discipline": "Chemistry",
    "discipline_title": "Chemistry",
    "summary": "Novel question/search;  2. route/method and safety",
    "hours": 100,
    "rank": 18
  },
  {
    "id": "COG-B01",
    "title": "Minds as biological, computational, embodied, social, and cultural systems",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "BIO-I07",
      "CSC-B01"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Interdisciplinary mind;  2. brain/body",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "COG-B02",
    "title": "Representation, computation, information, and levels of analysis",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "COG-B01",
      "PHI-I02"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Representation criteria;  2. algorithms/process",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "COG-I01",
    "title": "Perception, action, attention, predictive processing, and embodiment",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-B02",
      "PSY-B02"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Perceptual inference;  2. active sensing",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "COG-I02",
    "title": "Concepts, categories, imagery, memory, reasoning, and problem solving",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-B02",
      "PSY-I03"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Concept theories;  2. categorization",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "COG-I03",
    "title": "Language cognition, acquisition, production, comprehension, and bilingualism",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-B02",
      "LIN-I03"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Acquisition;  2. lexical access",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "COG-I04",
    "title": "Cognitive neuroscience: methods, localization, networks, plasticity, and inference",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-I01",
      "PSY-I06",
      "STA-I03"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Lesion/single-unit;  2. EEG/MEG",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "COG-I05",
    "title": "Computational cognitive modeling, symbolic, Bayesian, neural, and dynamical approaches",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-B02",
      "STA-I05",
      "AIX-I02"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Symbolic architectures;  2. Bayesian models",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "COG-I06",
    "title": "Social cognition, culture, development, and distributed cognition",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COG-I02",
      "SOC-I03",
      "PSY-I01"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Theory of mind;  2. joint attention/learning",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "COG-A01",
    "title": "Consciousness, self, agency, emotion, and altered states",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COG-I01",
      "COG-I04",
      "PHI-I02"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Conscious access;  2. major theories",
    "hours": 50,
    "rank": 10
  },
  {
    "id": "COG-A02",
    "title": "Comparative, animal, developmental, and evolutionary cognition",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COG-I06",
      "BIO-B04"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Comparative method;  2. perception/memory/tools",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "COG-A03",
    "title": "Human and machine intelligence, cognitive architectures, and alignment",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COG-I05",
      "AIX-A02",
      "PHI-A03"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Intelligence definitions;  2. cognitive/AI architectures",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "COG-A04",
    "title": "Cognitive enhancement, neuroethics, and societal implications",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COG-A01",
      "HLT-A02",
      "PHI-I05"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Education/training;  2. drugs/stimulation/interfaces",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "COG-E01",
    "title": "Integrative mind and cognition research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "COG-A01",
      "COG-A03",
      "RSH-E01"
    ],
    "discipline": "Cognitive-Science",
    "discipline_title": "Cognitive Science",
    "summary": "Cross-level question;  2. formal theory",
    "hours": 100,
    "rank": 14
  },
  {
    "id": "COM-B01",
    "title": "Listening, turn-taking, questions, and conversational repair",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B01",
      "FND-I04"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Attending and paraphrasing;  2. Open, closed, probing, and clarifying questions",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "COM-B02",
    "title": "Audience, intent, context, tone, and nonverbal signals",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "COM-B01"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Communicator goals and audience models;  2. Setting, relationship, culture, and stakes",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "COM-B03",
    "title": "Explanation, demonstration, and storytelling",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "COM-B02",
      "WRT-B05"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Prior knowledge and explanatory gap;  2. Definition, example, analogy, mechanism, and contrast",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "COM-I01",
    "title": "Rhetorical situation, ethos, pathos, logos, and framing",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-B02",
      "LOG-B02"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Exigence, audience, constraints, and genre;  2. Credibility and identification",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "COM-I02",
    "title": "Discussion, disagreement, dialectic, and intellectual charity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-B01",
      "LOG-B06"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Dialogue goals and norms;  2. Position, interest, evidence, and value",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "COM-I03",
    "title": "Public speaking, speech structure, delivery, and anxiety regulation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-B03",
      "COM-I01"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Audience outcome and central message;  2. Opening, body, transitions, close",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "COM-A01",
    "title": "Debate, cross-examination, and impromptu speaking",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "COM-I02",
      "COM-I03",
      "LOG-I05"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Resolution, case, burden, and clash;  2. Evidence comparison and refutation",
    "hours": 50,
    "rank": 8
  },
  {
    "id": "COM-I04",
    "title": "Visual communication, charts, slides, and information design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B09",
      "STA-B04",
      "WRT-I04"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Visual hierarchy and cognitive load;  2. Chart choice, scales, labels, and uncertainty",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "COM-I05",
    "title": "Media institutions, formats, incentives, and gatekeeping",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-I01",
      "SOC-B03"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "News, entertainment, advertising, public relations, and social media;  2. Ownership, funding, audience, and business models",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "COM-I06",
    "title": "Misinformation, propaganda, persuasion, verification, and platform literacy",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-I01",
      "COM-I05",
      "LOG-I04"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Error, rumor, disinformation, propaganda, and satire;  2. Emotional and identity mechanisms",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "COM-A02",
    "title": "Journalism, interviewing, editorial judgment, and media production",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "COM-I03",
      "COM-I06",
      "RSH-I05"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "News judgment and public value;  2. Source development and interviewing",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "COM-I07",
    "title": "Negotiation: interests, positions, alternatives, concessions, and agreements",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-I02",
      "PSY-I04"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Preparation, interests, positions, BATNA, and reservation point;  2. Distributive and integrative bargaining",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "COM-A03",
    "title": "Facilitation, mediation, conflict resolution, and difficult conversations",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COM-I07",
      "LAW-I07"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Conflict diagnosis and escalation;  2. Process design, ground rules, and participation",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "COM-A04",
    "title": "Cross-cultural, multilingual, organizational, and crisis communication",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "COM-I02",
      "LIN-I05",
      "SOC-I03"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Cultural dimensions and within-group variation;  2. Lingua franca, interpretation, translation, and plain language",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "COM-E01",
    "title": "Communication strategy and institutional public reasoning",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "COM-A02",
      "COM-A03",
      "COM-A04"
    ],
    "discipline": "Communication",
    "discipline_title": "Communication",
    "summary": "Stakeholder and information-ecosystem analysis;  2. Objectives, narratives, channels, messengers, and timing",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "CSC-B01",
    "title": "Information, representation, bits, data, and abstraction",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B08",
      "MAT-B02"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Information and encoding;  2. bits, binary, hex",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "CSC-B02",
    "title": "Algorithms, state, control flow, and computational problem solving",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CSC-B01",
      "LOG-B02"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Problem specification;  2. sequence, state, assignment",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "CSC-B03",
    "title": "Programming with values, functions, collections, input/output, and tests",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CSC-B02",
      "MAT-B06"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Values, types, expressions;  2. functions and scope",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "CSC-B04",
    "title": "Files, structured data, command line, version control, and debugging",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "CSC-B03",
      "FND-B08"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Paths, streams, permissions;  2. shell navigation/pipelines",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "CSC-I01",
    "title": "Data structures and algorithmic complexity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B03",
      "MAT-I01"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "ADTs and invariants;  2. arrays/lists/stacks/queues",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "CSC-I02",
    "title": "Core algorithms: search, sort, graph, string, numeric, and randomized",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-I01",
      "STA-B03"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Search/sort/select;  2. traversal and shortest paths",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "CSC-I03",
    "title": "Algorithm design: divide-and-conquer, greedy, dynamic programming, reductions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-I01",
      "MAT-I08"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Divide-and-conquer;  2. greedy and exchange proofs",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "CSC-I04",
    "title": "Automata, formal languages, computability, and complexity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-I01",
      "LOG-I03"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Regular languages/finite automata;  2. grammars/pushdown automata",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "CSC-I05",
    "title": "Computer architecture: logic, instruction sets, memory, processors, input/output",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B01",
      "PHY-B04"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Boolean logic and circuits;  2. data path/control and ISA",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "CSC-I06",
    "title": "Operating systems: processes, concurrency, memory, storage, and isolation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-I05",
      "CSC-I01"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Kernel, syscall, privilege;  2. process/thread/scheduling",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "CSC-A01",
    "title": "Parallel, concurrent, and distributed computing",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CSC-I06",
      "CSC-I02"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Parallel decomposition and models;  2. locks, actors, lock-free orientation",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "CSC-I07",
    "title": "Networks and the Internet: layers, routing, transport, naming, and web",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B04",
      "CSC-I05"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Signals, packets, layering;  2. link/IP, addressing, routing",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "CSC-I08",
    "title": "Databases: modeling, relational algebra, SQL, transactions, and indexes",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B04",
      "MAT-B08"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Conceptual/relational modeling;  2. algebra and SQL",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "CSC-A02",
    "title": "Distributed data, streaming, warehouses, and information retrieval",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CSC-I08",
      "CSC-A01"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Partitioning/replication;  2. consistency and distributed transactions",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "CSC-I09",
    "title": "Programming languages: paradigms, types, semantics, compilation, and runtimes",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-I04",
      "CSC-I05"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Syntax/semantics;  2. scope, binding, closures",
    "hours": 24,
    "rank": 16
  },
  {
    "id": "CSC-I10",
    "title": "Software engineering: requirements, design, testing, maintenance, and teamwork",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B04",
      "WRT-I02"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Requirements/stakeholders;  2. modular design/APIs",
    "hours": 24,
    "rank": 17
  },
  {
    "id": "CSC-A03",
    "title": "Architecture, reliability, observability, performance, and operations",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CSC-I06",
      "CSC-I07",
      "CSC-I10"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Architectural styles/interfaces;  2. SLOs, redundancy, degradation",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "CSC-I11",
    "title": "Human-computer interaction, accessibility, graphics, and interactive systems",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "CSC-B03",
      "PSY-B02"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Users, tasks, context;  2. perception/action and interaction principles",
    "hours": 24,
    "rank": 19
  },
  {
    "id": "CSC-A04",
    "title": "Compilers, virtual machines, and language implementation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "CSC-I09",
      "CSC-I06"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Lexing/parsing;  2. AST, types, semantic analysis",
    "hours": 50,
    "rank": 20
  },
  {
    "id": "CSC-A05",
    "title": "Graphics, vision, robotics, embedded, and specialized platforms",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "CSC-I02",
      "MAT-I06",
      "ENG-I04"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Geometric transformations/rendering;  2. image formation/features",
    "hours": 50,
    "rank": 21
  },
  {
    "id": "CSC-A06",
    "title": "Social, ethical, environmental, and professional computing",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "CSC-I10",
      "PHI-I05",
      "ECO-I03"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Stakeholders and power;  2. privacy/security/fairness",
    "hours": 50,
    "rank": 22
  },
  {
    "id": "CSC-E01",
    "title": "Computer science research frontiers",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "CSC-A01",
      "CSC-A03",
      "CSC-A04"
    ],
    "discipline": "Computer-Science",
    "discipline_title": "Computer Science",
    "summary": "Frontier mapping and literature;  2. formal/empirical/systems questions",
    "hours": 100,
    "rank": 23
  },
  {
    "id": "ECS-B01",
    "title": "Earth as a coupled system: spheres, cycles, reservoirs, fluxes, and deep time",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SYS-B01",
      "GEO-B01",
      "CHM-B01"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Geosphere/hydrosphere/atmosphere/biosphere;  2. reservoirs/fluxes",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ECS-B02",
    "title": "Minerals, rocks, plate tectonics, geologic structures, and surface processes",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ECS-B01",
      "PHY-B03"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Minerals/rock cycle;  2. Earth interior",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ECS-B03",
    "title": "Atmosphere, weather, circulation, clouds, and forecasting",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ECS-B01",
      "PHY-B06"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Composition/vertical structure;  2. pressure, humidity, stability",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "ECS-B04",
    "title": "Oceans, cryosphere, hydrologic cycle, and water resources",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ECS-B01",
      "PHY-B05"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Water cycle/basin;  2. ocean properties/currents",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "ECS-I01",
    "title": "Biogeochemical cycles, soils, ecosystems, and Earth history",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-B02",
      "ECS-B04",
      "BIO-B05",
      "CHM-B05"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Carbon/nitrogen/phosphorus cycles;  2. soil formation/function",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ECS-I02",
    "title": "Radiation balance, greenhouse effect, feedback, and climate dynamics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-B03",
      "PHY-I04",
      "SYS-B02"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Solar/terrestrial radiation;  2. greenhouse physics",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "ECS-I03",
    "title": "Paleoclimate, observations, models, attribution, projections, and uncertainty",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-I02",
      "STA-A02",
      "RSH-A02"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Proxy records;  2. instrumental observations",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ECS-I04",
    "title": "Climate impacts, vulnerability, adaptation, mitigation, and justice",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-I03",
      "GEO-I04",
      "ECO-I03",
      "PHI-I05"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Hazard/exposure/vulnerability;  2. food/water/health/ecosystems",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ECS-I05",
    "title": "Energy fundamentals, primary sources, conversion, efficiency, power, and grids",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B04",
      "PHY-B06",
      "CHM-B06"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Energy/work/power;  2. primary/final/useful energy",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ECS-I06",
    "title": "Fossil, nuclear, renewable, storage, transmission, and demand systems",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-I05",
      "ENG-I03"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Coal/oil/gas chains;  2. fission/fuel cycle",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "ECS-A01",
    "title": "Energy transition modeling, economics, policy, and life-cycle assessment",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ECS-I04",
      "ECS-I06",
      "ECO-I04",
      "SYS-A04"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Transition pathways;  2. cost/learning/finance",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "ECS-I07",
    "title": "Natural hazards, disaster risk, resilience, and early warning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-B02",
      "ECS-B03",
      "SYS-I05"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Geologic/weather/hydrologic hazards;  2. exposure/vulnerability",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "ECS-I08",
    "title": "Resources, pollution, biodiversity loss, land use, and planetary boundaries",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECS-I01",
      "CHM-A03",
      "BIO-I05"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Extraction/material flows;  2. air/water/soil pollution",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "ECS-A02",
    "title": "Geophysics, geochemistry, remote sensing, and Earth-system computation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ECS-B02",
      "CHM-A03",
      "PHY-I08"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Seismic/gravity/magnetic methods;  2. isotope/element systems",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "ECS-A03",
    "title": "Environmental governance, common resources, and international climate institutions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ECS-I04",
      "POL-I06",
      "LAW-A04"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Commons/property;  2. domestic agencies/law",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "ECS-E01",
    "title": "Earth-system and climate research frontiers",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ECS-I03",
      "ECS-A02",
      "RSH-E01"
    ],
    "discipline": "Earth-Climate-and-Energy",
    "discipline_title": "Earth, Climate, and Energy",
    "summary": "Frontier question;  2. observations/proxies/models",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "ECO-B01",
    "title": "Scarcity, opportunity cost, incentives, marginal reasoning, and production",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I02",
      "MAT-B06"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Choice/constraint;  2. opportunity cost",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ECO-B02",
    "title": "Supply, demand, elasticity, equilibrium, surplus, and market adjustment",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ECO-B01",
      "MAT-B05"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Demand/supply;  2. shifts/movements",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ECO-I01",
    "title": "Consumer choice, firm production, costs, competition, monopoly, and strategic behavior",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-B02",
      "MAT-I03"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Preferences/budget;  2. production/cost",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "ECO-I02",
    "title": "Game theory, information, uncertainty, contracts, and behavioral economics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-I01",
      "STA-B03",
      "PSY-I04"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Strategic games;  2. sequential/repeated",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "ECO-I03",
    "title": "Institutions, property, transaction costs, externalities, public goods, inequality, and welfare",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-B02",
      "PHI-I06"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Institutions/property;  2. transaction costs",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ECO-B03",
    "title": "National accounts, growth, inflation, unemployment, money, and business cycles",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ECO-B01",
      "STA-B04"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "GDP/income/expenditure;  2. price indices/inflation",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "ECO-I04",
    "title": "Macroeconomic models, fiscal policy, monetary policy, expectations, and stabilization",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-B03",
      "MAT-I07"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Aggregate demand/supply;  2. consumption/investment",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ECO-I05",
    "title": "Banking, credit, financial systems, crises, and central banks",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-B03",
      "FIN-B01"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Intermediation/money creation;  2. balance sheets/leverage",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ECO-I06",
    "title": "International trade, finance, exchange rates, migration, and globalization",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-B02",
      "ECO-B03",
      "GEO-I01"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Comparative advantage;  2. trade distribution/policy",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ECO-I07",
    "title": "Economic growth, development, poverty, capability, institutions, and structural change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-I03",
      "ECO-I04",
      "HST-I08"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Growth accounting;  2. poverty/inequality/capability",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "ECO-I08",
    "title": "Labor, education, health, urban, environmental, and public economics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ECO-I03",
      "STA-I04"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Labor supply/demand;  2. human capital/signaling",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "ECO-A01",
    "title": "Econometrics, identification, experiments, and policy evaluation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-A01",
      "ECO-I01"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Economic estimands;  2. regression/endogeneity",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "ECO-A02",
    "title": "Political economy, collective choice, regulation, and state capacity",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ECO-I03",
      "POL-I03",
      "SYS-A01"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Voting/social choice;  2. collective action",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "ECO-A03",
    "title": "History of economic thought and comparative economic systems",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ECO-I07",
      "HST-I08",
      "PHI-I06"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Ancient/Islamic/scholastic economy;  2. classical/Marxian",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "ECO-A04",
    "title": "Climate, energy, natural resources, innovation, and long-run transition",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ECO-I08",
      "ECS-I05",
      "SYS-A04"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Resource scarcity/rents;  2. pollution/carbon pricing",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "ECO-A05",
    "title": "Advanced microeconomic and macroeconomic theory",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ECO-I02",
      "ECO-I04",
      "MAT-A05"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "General equilibrium/welfare;  2. information/mechanisms",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "ECO-E01",
    "title": "Economic research and model criticism",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ECO-A01",
      "ECO-A05",
      "RSH-E01"
    ],
    "discipline": "Economics",
    "discipline_title": "Economics",
    "summary": "Question/contribution;  2. theory/institution",
    "hours": 100,
    "rank": 18
  },
  {
    "id": "EDU-B01",
    "title": "Purposes of education, learner variation, development, and educational relationships",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LRN-B01",
      "PSY-I01"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Personal/civic/economic purposes;  2. development",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "EDU-B02",
    "title": "Learning objectives, explanation, examples, questioning, practice, and feedback",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "EDU-B01",
      "LRN-B06"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Observable objectives;  2. explanation/modeling",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "EDU-B03",
    "title": "Learning environment, motivation, belonging, expectations, and classroom culture",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "EDU-B01",
      "PSY-B03"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Safety/belonging;  2. routines/norms",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "EDU-I01",
    "title": "Curriculum design: scope, sequence, prerequisites, coherence, and hidden curriculum",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-B02",
      "SYS-B01"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "End goals;  2. knowledge graph/prerequisites",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "EDU-I02",
    "title": "Assessment: validity, reliability, formative/summative use, rubrics, and grading",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-B02",
      "STA-I03"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Construct/evidence;  2. formative/summative",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "EDU-I03",
    "title": "Pedagogies: direct instruction, inquiry, discussion, apprenticeship, projects, and collaboration",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-B02",
      "RSH-B03"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Explicit instruction;  2. inquiry/problem learning",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "EDU-I04",
    "title": "Literacy, numeracy, disciplinary knowledge, misconceptions, and conceptual change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-I03",
      "LRN-I04"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Reading/writing development;  2. numeracy",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "EDU-I05",
    "title": "Inclusion, disability, multilingualism, culture, differentiation, and universal design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-B03",
      "ARC-I01",
      "LIN-I05"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Barrier/social model;  2. UDL/accessibility",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "EDU-I06",
    "title": "Educational technology, media, AI, privacy, access, and learning analytics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-I01",
      "AIX-B02",
      "SEC-I02"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Learning need/technology fit;  2. multimedia/cognitive load",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "EDU-I07",
    "title": "Education systems: family, school, university, vocational, informal, and lifelong learning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "EDU-B01",
      "SOC-B03"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Family/early learning;  2. school systems",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "EDU-A01",
    "title": "Teacher knowledge, lesson study, observation, mentoring, and professional learning",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "EDU-I03",
      "RSH-I06"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Content/pedagogical content knowledge;  2. planning/enactment",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "EDU-A02",
    "title": "Program evaluation, experiments, qualitative inquiry, and improvement science",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "EDU-I02",
      "RSH-A01",
      "STA-A01"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Theory of change;  2. implementation/process",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "EDU-A03",
    "title": "Education history, philosophy, policy, finance, governance, and inequality",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "EDU-I07",
      "HST-I07",
      "PHI-I06",
      "POL-I04"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Historical institutions;  2. educational philosophies",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "EDU-A04",
    "title": "Independent course, workshop, or public-learning design",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "EDU-I01",
      "EDU-I02",
      "EDU-I05"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Learner/context;  2. outcomes/graph",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "EDU-E01",
    "title": "Educational research and institutional transformation",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "EDU-A02",
      "EDU-A03",
      "RSH-E01"
    ],
    "discipline": "Education",
    "discipline_title": "Education",
    "summary": "Systemic problem;  2. political/learning theory",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "ENG-B01",
    "title": "Engineering problem framing, requirements, constraints, trade-offs, and design cycle",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B10",
      "MAT-B05"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Need/stakeholder;  2. requirement/specification",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ENG-B02",
    "title": "Sketching, models, prototypes, measurement, tolerances, and technical documentation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ENG-B01",
      "PHY-B01",
      "WRT-B05"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Sketch/projection;  2. diagram/model",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ENG-I01",
    "title": "Mechanics of materials, structures, statics, dynamics, and failure",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-B02",
      "PHY-I01",
      "MAT-I06"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Loads/equilibrium;  2. stress/strain",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "ENG-I02",
    "title": "Reliability, safety factors, hazards, risk, standards, and engineering ethics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-B01",
      "SYS-I05",
      "PHI-I05"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Failure probability/reliability;  2. factors/margins",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "ENG-I03",
    "title": "Electrical circuits, electronics, signals, power, and energy conversion",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-B02",
      "PHY-I02"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Circuit laws;  2. diodes/transistors/op-amps",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ENG-I04",
    "title": "Sensors, actuators, embedded computation, feedback, and control",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-I03",
      "CSC-I05",
      "SYS-I03"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Sensor physics/calibration;  2. actuator/driver",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "ENG-I05",
    "title": "Thermofluids: thermodynamics, heat transfer, fluid mechanics, and machines",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-I04",
      "MAT-I07"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Properties/control volumes;  2. energy/entropy",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ENG-I06",
    "title": "Materials selection, manufacturing, metrology, and quality",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-I01",
      "CHM-I06"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Material families/properties;  2. selection",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ENG-I07",
    "title": "Civil infrastructure: structures, water, transport, geotechnics, and construction",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-I01",
      "ECS-B02"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Structural systems;  2. geotechnics/foundations",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ENG-I08",
    "title": "Chemical and process engineering: balances, transport, reactors, and separations",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "ENG-I05",
      "CHM-I02"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Material/energy balances;  2. transport",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "ENG-I09",
    "title": "Biological and medical engineering",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "ENG-I04",
      "BIO-I03",
      "HLT-I02"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Biological constraints;  2. biomechanics/biomaterials",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "ENG-I10",
    "title": "Software and systems engineering integration",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ENG-I04",
      "CSC-I10",
      "SYS-B01"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "System requirements;  2. hardware/software partition",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "ENG-A01",
    "title": "Systems architecture, interfaces, verification, validation, and lifecycle",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ENG-I02",
      "ENG-I10",
      "SYS-A02"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Mission/use cases;  2. functional/physical architecture",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "ENG-A02",
    "title": "Human factors, usability, accessibility, and sociotechnical design",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ENG-A01",
      "CSC-I11",
      "SOC-I03"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Human capabilities/error;  2. task/work analysis",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "ENG-A03",
    "title": "Sustainable design, life-cycle assessment, circularity, and infrastructure resilience",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ENG-I02",
      "ECS-I08",
      "ECO-I03"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Functional unit/boundary;  2. lifecycle inventory/impact",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "ENG-A04",
    "title": "Engineering project leadership, cost, schedule, procurement, and regulation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ENG-A01",
      "BUS-I06",
      "LAW-I06"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Work breakdown/estimate;  2. schedule/resources",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "ENG-A05",
    "title": "Integrated design-build-test capstone",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ENG-A01",
      "ENG-A02",
      "ENG-A03",
      "ENG-A04"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Need/research;  2. requirements/concepts",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "ENG-E01",
    "title": "Frontier engineering research and responsible innovation",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ENG-A05",
      "RSH-E01"
    ],
    "discipline": "Engineering",
    "discipline_title": "Engineering",
    "summary": "Frontier need/state of art;  2. scientific/engineering hypothesis",
    "hours": 100,
    "rank": 19
  },
  {
    "id": "FIN-B01",
    "title": "Money, accounts, payments, interest, inflation, credit, and financial institutions",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I02",
      "ECO-B03"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Money/payment rails;  2. account/statement",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "FIN-B02",
    "title": "Budgeting, cash flow, emergency reserves, debt, and financial records",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FIN-B01",
      "MAT-B03"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Income/expense/cash timing;  2. needs/goals",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "FIN-B03",
    "title": "Insurance, risk pooling, fraud, consumer protection, and financial safety",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FIN-B01",
      "STA-B03",
      "SEC-B02"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Risk/pooling;  2. premium/deductible/limit/exclusion",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "FIN-B04",
    "title": "Saving, compounding, pensions, investing, diversification, fees, and taxes",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FIN-B01",
      "FIN-B02",
      "STA-I01"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Time horizon;  2. compound return",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "FIN-B05",
    "title": "Housing, mortgages, education, major purchases, and life-cycle planning",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FIN-B02",
      "FIN-B04"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Total ownership cost;  2. rent/buy",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "FIN-I01",
    "title": "Time value, discounted cash flow, bonds, equities, and project valuation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FIN-B04",
      "MAT-B06"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Present/future value;  2. annuity/perpetuity",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "FIN-I02",
    "title": "Risk-return, portfolios, asset pricing, market efficiency, and behavioral finance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FIN-I01",
      "STA-I04"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Return/risk/covariance;  2. portfolio frontier",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "FIN-I03",
    "title": "Financial statements, corporate financing, capital structure, payout, and governance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FIN-I01",
      "BUS-B02"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Statement linkage;  2. working capital",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "FIN-I04",
    "title": "Derivatives, hedging, options, futures, and risk management",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "FIN-I02",
      "STA-I05"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Forwards/futures;  2. options/payoffs",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "FIN-I05",
    "title": "Banking, monetary transmission, liquidity, leverage, and financial stability",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FIN-I01",
      "ECO-I05"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Bank balance sheet;  2. maturity/liquidity transformation",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "FIN-A01",
    "title": "International, public, Islamic, development, and sustainable finance",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "FIN-I03",
      "FIN-I05",
      "ECO-I06"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "FX/cross-border risk;  2. sovereign/municipal finance",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "FIN-A02",
    "title": "Fintech, digital assets, algorithmic markets, regulation, and cyber risk",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "FIN-I05",
      "CSC-I07",
      "LAW-I06",
      "SEC-I04"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Digital payments/lending;  2. blockchain/tokens",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "FIN-A03",
    "title": "Financial history, crises, bubbles, inequality, and political economy",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "FIN-I05",
      "HST-I08",
      "ECO-A02"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Money/debt history;  2. bubbles/manias",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "FIN-E01",
    "title": "Advanced valuation, quantitative finance, and empirical research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "FIN-I04",
      "STA-A04",
      "RSH-E01"
    ],
    "discipline": "Finance",
    "discipline_title": "Finance",
    "summary": "Stochastic processes;  2. continuous-time pricing",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "FND-B01",
    "title": "Language, reference, and ordinary meaning",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Signs and referents—objects, actions, properties, names;  2. Words in context—literal meaning, convention, deixis, polysemy",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "FND-B05",
    "title": "Reading words, sentences, paragraphs, and instructions",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B01"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Decoding and fluent phrasing;  2. Sentence roles, connectors, pronouns, and negation",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "FND-B09",
    "title": "Reading tables, diagrams, maps, and interfaces",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "FND-B07"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Rows, columns, headers, units, totals, and missing values;  2. Legends, axes, arrows, nodes, layers, and scale",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "FND-I01",
    "title": "Information navigation and source orientation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "FND-B08"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Information need and search vocabulary;  2. Contents, index, abstract, headings, metadata, and hyperlinks",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "FND-B06",
    "title": "Vocabulary building and dictionary use",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B01",
      "FND-B05"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Context clues and word families;  2. Denotation, connotation, register, and collocation",
    "hours": 13,
    "rank": 9
  },
  {
    "id": "FND-B02",
    "title": "Counting, quantity, comparison, and estimation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "One-to-one counting and cardinality;  2. More, less, equal, ordering, and zero",
    "hours": 13,
    "rank": 10
  },
  {
    "id": "FND-B07",
    "title": "Time, scale, measurement, and spatial orientation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B02",
      "FND-B03"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Before/after, duration, calendars, clocks, and timelines;  2. Length, mass, volume, temperature, and unit comparison",
    "hours": 13,
    "rank": 11
  },
  {
    "id": "FND-I02",
    "title": "Everyday quantitative judgment",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B02",
      "FND-B07"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Rates, ratios, percentages, and percentage points;  2. Averages, ranges, totals, and denominators",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "FND-B03",
    "title": "Observation, description, classification, and pattern",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Observation versus inference;  2. Descriptive attributes and measurement",
    "hours": 13,
    "rank": 13
  },
  {
    "id": "FND-B10",
    "title": "Questions, uncertainty, and checking",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B01",
      "FND-B03"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Open, closed, clarifying, causal, evaluative, and procedural questions;  2. Known, unknown, uncertain, and unknowable",
    "hours": 13,
    "rank": 14
  },
  {
    "id": "FND-I03",
    "title": "Fact, model, interpretation, opinion, and value",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "FND-B10"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Observable claims and records;  2. Models, assumptions, idealization, and scope",
    "hours": 24,
    "rank": 15
  },
  {
    "id": "FND-B04",
    "title": "Agency, goals, habits, and responsibility",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Needs, wants, values, and goals;  2. Choice, constraint, consequence, and responsibility",
    "hours": 13,
    "rank": 16
  },
  {
    "id": "FND-B08",
    "title": "Basic digital-device and file operation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B04",
      "FND-B05"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Hardware, operating system, application, account, and network;  2. Input, navigation, settings, accessibility, and updates",
    "hours": 13,
    "rank": 17
  },
  {
    "id": "FND-I04",
    "title": "Personal safety, consent, boundaries, and help-seeking",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B04",
      "FND-B05"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Hazard, warning sign, immediate danger, and precaution;  2. Consent as informed, voluntary, specific, ongoing, and revocable",
    "hours": 24,
    "rank": 18
  },
  {
    "id": "FND-I05",
    "title": "Civic and institutional orientation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B04",
      "FND-I01"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Household, school, workplace, association, market, court, municipality, and state;  2. Roles, rules, records, offices, jurisdictions, and escalation",
    "hours": 24,
    "rank": 19
  },
  {
    "id": "FND-I06",
    "title": "Integrated foundational literacy",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-B06",
      "FND-B09",
      "FND-I02",
      "FND-I03",
      "FND-I04",
      "FND-I05"
    ],
    "discipline": "Foundations",
    "discipline_title": "Foundations",
    "summary": "Read a mixed prose/numeric/visual brief;  2. Identify claims, uncertainty, risk, and responsible institution",
    "hours": 24,
    "rank": 20
  },
  {
    "id": "GEO-B01",
    "title": "Location, place, region, scale, distance, direction, and spatial pattern",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B07",
      "FND-B09"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Absolute/relative location;  2. place/landscape",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "GEO-B02",
    "title": "Maps, projections, coordinates, symbols, scale, and cartographic judgment",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "GEO-B01",
      "MAT-B03"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Coordinates/orientation;  2. scale",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "GEO-B03",
    "title": "Physical geography: landforms, water, weather, climate, soils, and biomes",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "GEO-B01",
      "ECS-B01"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Landforms/tectonics;  2. climate/weather",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "GEO-B04",
    "title": "Human geography: population, settlement, migration, culture, and urbanization",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "GEO-B01",
      "SOC-B01"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Population;  2. settlement/urbanization",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "GEO-I01",
    "title": "Economic geography: resources, agriculture, industry, trade, transport, and uneven development",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "GEO-B04",
      "ECO-B01"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Resources/agriculture;  2. industrial location",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "GEO-I02",
    "title": "Political geography: territory, borders, states, nations, geopolitics, and colonial spatial orders",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "GEO-B04",
      "POL-B01",
      "HST-B05"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Territory/border;  2. state/nation",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "GEO-I03",
    "title": "Cultural, linguistic, religious, and historical landscapes",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "GEO-B04",
      "LIN-I05",
      "REL-B03"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Diffusion/contact;  2. language landscapes",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "GEO-I04",
    "title": "Environment-society relations, hazards, vulnerability, justice, and sustainability",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "GEO-B03",
      "GEO-B04",
      "SYS-I05"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Human-environment models;  2. hazard/exposure",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "GEO-I05",
    "title": "Geographic information systems, remote sensing, spatial data, and geostatistics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "GEO-B02",
      "STA-I06",
      "CSC-B04"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Raster/vector/CRS;  2. collection/geocoding",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "GEO-A01",
    "title": "Urban and regional systems, planning, housing, mobility, and infrastructure",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "GEO-I01",
      "GEO-I04",
      "ARC-I05"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Urban form/land;  2. housing/segregation",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "GEO-A02",
    "title": "Spatial analysis, network geography, and geocomputation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "GEO-I05",
      "SYS-I02",
      "STA-A02"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Spatial dependence;  2. point/area models",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "GEO-A03",
    "title": "Fieldwork, participatory mapping, and critical cartography",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "GEO-I05",
      "RSH-I06",
      "PHI-I05"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Field question/sampling;  2. observation/interview/GPS",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "GEO-E01",
    "title": "Integrative geographic research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "GEO-A01",
      "GEO-A02",
      "GEO-A03"
    ],
    "discipline": "Geography",
    "discipline_title": "Geography",
    "summary": "Spatial question/theory;  2. multiscale data",
    "hours": 100,
    "rank": 14
  },
  {
    "id": "HLT-B01",
    "title": "Health, disease, disability, functioning, prevention, and health systems",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "BIO-B05",
      "FND-I05"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Health models;  2. disease/illness/disability",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "HLT-B02",
    "title": "Anatomy and physiology by organ system",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HLT-B01",
      "BIO-I03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Anatomical language/tissues;  2. nervous/endocrine",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "HLT-B03",
    "title": "Nutrition, movement, sleep, stress, substances, and sexual health",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HLT-B01",
      "CHM-A02"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Energy/nutrients/eating patterns;  2. activity/fitness/sedentary risk",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "HLT-B04",
    "title": "First aid, emergencies, warning signs, and appropriate help-seeking",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HLT-B01",
      "FND-I04"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Scene safety/assessment;  2. emergency activation/CPR orientation",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "HLT-I01",
    "title": "Pathology, infection, immunity, injury, genetics, and chronic disease",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-B02",
      "BIO-I06"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Cell injury/inflammation;  2. infection/immunity",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "HLT-I02",
    "title": "Diagnosis, screening, prognosis, treatment, rehabilitation, and palliative care",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-I01",
      "STA-I03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "History/exam/test;  2. differential reasoning",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "HLT-I03",
    "title": "Medicines, vaccines, devices, benefits, harms, interactions, and adherence",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-I02",
      "CHM-I03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Drug targets/dose/route;  2. kinetics/dynamics",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "HLT-I04",
    "title": "Mental health, distress, disorder, crisis, therapy, and recovery",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-B01",
      "PSY-I05"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Well-being/distress/disorder;  2. major symptom patterns",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "HLT-I05",
    "title": "Evidence-based medicine, clinical trials, absolute risk, and shared decisions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-I02",
      "RSH-I04",
      "STA-I03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Clinical question;  2. trial/design hierarchy",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "HLT-I06",
    "title": "Public health: epidemiology, surveillance, prevention, and health promotion",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-I01",
      "STA-I04",
      "SOC-I03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Population measures;  2. surveillance/epidemiology",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "HLT-A01",
    "title": "Outbreaks, global health, one health, and health security",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HLT-I06",
      "BIO-I06",
      "ECS-I07"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Outbreak detection;  2. transmission/control",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "HLT-I07",
    "title": "Healthcare organization, access, quality, safety, financing, and inequality",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HLT-B01",
      "ECO-I03",
      "POL-I04"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Delivery models;  2. workforce/access",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "HLT-A02",
    "title": "Medical ethics, consent, capacity, allocation, end of life, and research",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HLT-I05",
      "PHI-A02",
      "LAW-I05"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Autonomy/capacity/consent;  2. benefit/nonharm",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "HLT-A03",
    "title": "Critical appraisal of guidelines, claims, tests, and medical media",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HLT-I05",
      "COM-I06",
      "RSH-A03"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Claim/source/conflict;  2. diagnostic/screening evidence",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "HLT-A04",
    "title": "Genomic, digital, AI-assisted, and precision medicine",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "HLT-I03",
      "BIO-A02",
      "AIX-A05"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Genomic risk/tests;  2. biomarkers/stratification",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "HLT-E01",
    "title": "Health research and policy synthesis",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "HLT-A01",
      "HLT-A02",
      "RSH-E01"
    ],
    "discipline": "Health-and-Medicine",
    "discipline_title": "Health and Medicine",
    "summary": "Burden/equity question;  2. evidence synthesis",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "HST-B01",
    "title": "Time, chronology, periodization, change, continuity, cause, and contingency",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B07",
      "LOG-B05"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Chronology/timeline;  2. period labels",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "HST-B02",
    "title": "Primary sources, context, provenance, corroboration, silence, and anachronism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HST-B01",
      "RSH-I01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Source/event distinction;  2. creator/audience/purpose",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "HST-B03",
    "title": "Historical narrative, comparison, interpretation, and evidence-based argument",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HST-B02",
      "WRT-I01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Event/selection;  2. narrative sequence",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "HST-B04",
    "title": "Human origins, migration, foraging, agriculture, cities, writing, and early states",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HST-B01",
      "BIO-B04",
      "GEO-B01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Human evolution/migration;  2. foraging societies",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "HST-B05",
    "title": "Ancient Afro-Eurasian and American civilizations to c. 500 CE",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HST-B04",
      "GEO-B04"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Mesopotamia/Egypt/Africa;  2. South/East Asia",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "HST-I01",
    "title": "Post-classical worlds, c. 500–1500: Africa, Asia, Europe, Americas, and Islamic civilization",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-B05",
      "REL-B03"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Byzantium/Europe;  2. Islamic worlds",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "HST-I02",
    "title": "Connected early modern world, c. 1450–1750: empires, oceans, exchange, slavery, reform, and science",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I01",
      "GEO-I01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Gunpowder/land empires;  2. maritime expansion",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "HST-I03",
    "title": "Revolutions and industrial transformations, c. 1750–1914",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I02",
      "ECO-B02"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Enlightenment/revolutions;  2. industrialization",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "HST-I04",
    "title": "Imperialism, nationalism, world wars, genocide, and mass society, c. 1870–1945",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I03",
      "POL-B02"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "New imperialism;  2. mass politics/nationalism",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "HST-I05",
    "title": "Cold War, decolonization, development, rights, and globalization, 1945–1991",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I04",
      "POL-I06"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Bipolar order/nuclear age;  2. Asian/African/Middle Eastern decolonization",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "HST-I06",
    "title": "Contemporary world since 1991: digital order, conflict, climate, migration, and changing power",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I05",
      "COM-I05"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Post-Cold-War orders;  2. wars/terror/security",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "HST-I07",
    "title": "History of knowledge, science, medicine, technology, and education",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I02",
      "RSH-B03"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Knowledge institutions/traditions;  2. Islamic/Asian/European exchanges",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "HST-I08",
    "title": "Economic, labor, business, and material history",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I03",
      "ECO-B01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Household/subsistence;  2. trade/money/finance",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "HST-I09",
    "title": "Political, legal, military, diplomatic, and institutional history",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I01",
      "POL-B01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "State/administration;  2. law/court",
    "hours": 24,
    "rank": 15
  },
  {
    "id": "HST-I10",
    "title": "Social, family, gender, demographic, environmental, and everyday-life history",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I01",
      "SOC-B01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Family/kinship;  2. gender/sexuality",
    "hours": 24,
    "rank": 16
  },
  {
    "id": "HST-I11",
    "title": "Intellectual, religious, literary, artistic, and cultural history",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I01",
      "PHI-B01",
      "REL-B02"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Concepts/context;  2. texts/reception",
    "hours": 24,
    "rank": 17
  },
  {
    "id": "HST-A01",
    "title": "Historiography: schools, archives, quantification, microhistory, global and connected history",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HST-B03",
      "RSH-I05"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Narrative/positivism;  2. social/Annales/Marxist",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "HST-A02",
    "title": "Public history, heritage, museums, monuments, memory, and contested pasts",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HST-A01",
      "COM-I06",
      "PHI-I05"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Collective memory/history;  2. museum/exhibition",
    "hours": 50,
    "rank": 19
  },
  {
    "id": "HST-A03",
    "title": "Comparative civilization, periodization critique, and world-historical synthesis",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "HST-I06",
      "HST-I08",
      "HST-I11"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Civilization concept/critique;  2. comparison/connection",
    "hours": 50,
    "rank": 20
  },
  {
    "id": "HST-E01",
    "title": "Original historical research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "HST-A01",
      "HST-A02",
      "RSH-E01"
    ],
    "discipline": "History",
    "discipline_title": "History",
    "summary": "Question/archive;  2. source corpus/criticism",
    "hours": 100,
    "rank": 21
  },
  {
    "id": "ISL-B01",
    "title": "Arabia, Late Antiquity, Prophetic biography, revelation, and first community",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "HST-B05",
      "REL-B02"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Late-antique Arabia;  2. Meccan life/revelation",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "ISL-B02",
    "title": "Qur'an: structure, themes, recitation, compilation, and translation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ISL-B01",
      "REL-B01"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Revelation/recitation;  2. sura structure/Meccan-Medinan",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "ISL-B03",
    "title": "Sunnah and hadith: role, transmission, collections, and basic criticism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ISL-B01",
      "HST-B02"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Sunnah/hadith roles;  2. isnad/matn",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "ISL-B04",
    "title": "Worship, ethics, spirituality, community, and Muslim diversity",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "ISL-B02",
      "ISL-B03"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Faith/practice;  2. prayer/fast/alms/pilgrimage",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "ISL-I01",
    "title": "Arabic for Islamic sources and Qur'anic language orientation",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "LIN-B02",
      "ISL-B02"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Script/phonology;  2. morphology/roots",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "ISL-I02",
    "title": "Qur'anic sciences, exegesis, hermeneutics, and interpretive traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-B02",
      "RSH-I05"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Revelation occasions/order;  2. qira'at/text sciences",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "ISL-I03",
    "title": "Hadith sciences, transmitter criticism, textual criticism, and authority",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-B03",
      "LOG-I04"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Transmission categories;  2. narrator criticism",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "ISL-I04",
    "title": "Jurisprudence: legal schools, sources, legal theory, maxims, objectives, and fatwa",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-B04",
      "LAW-B01"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Fiqh/sharia/fatwa;  2. Qur'an/Sunnah/consensus/analogy",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "ISL-I05",
    "title": "Theology and philosophy: major schools, arguments, debates, and intellectual exchange",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-B04",
      "PHI-A04"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Early debates;  2. Mu'tazili/Ash'ari/Maturidi/Athari",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "ISL-I06",
    "title": "Spirituality and Sufism: Qur'anic roots, virtue, practice, orders, texts, and critiques",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-B04",
      "REL-I07"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Qur'anic virtue/ihsan;  2. asceticism",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "ISL-I07",
    "title": "Islamic civilization, c. 600–1500: caliphates, societies, scholarship, arts, economies, and global connections",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "HST-I01",
      "ISL-B01"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Caliphates/polities;  2. cities/economies/society",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "ISL-I08",
    "title": "Ottoman, Safavid, Mughal, African, Southeast Asian, and other Muslim societies, c. 1500–1800",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-I07",
      "HST-I02"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Ottoman;  2. Safavid",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "ISL-I09",
    "title": "Colonialism, reform, revival, nation-states, movements, and contemporary Muslim societies",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "ISL-I08",
      "HST-I05"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Colonial transformations;  2. reform/modernism/revival",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "ISL-A01",
    "title": "Advanced legal reasoning, disagreement, authority, institutions, and contemporary applications",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ISL-I04",
      "LAW-I07"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Advanced usul/ijtihad;  2. legal disagreement/fatwa",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "ISL-A02",
    "title": "Advanced tafsir, hadith, theology, philosophy, and intellectual history",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "ISL-I02",
      "ISL-I03",
      "ISL-I05"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Manuscript/commentary traditions;  2. advanced exegetical disputes",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "ISL-A03",
    "title": "Islam, science, economics, politics, gender, pluralism, and modern ethics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ISL-I09",
      "PHI-I05",
      "ECO-I03",
      "POL-I03"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Modern knowledge/science;  2. economy/finance",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "ISL-A04",
    "title": "Islamic art, architecture, literature, manuscript, and material culture",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ISL-I07",
      "ART-I03",
      "LIT-I04"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Mosque/city;  2. calligraphy/manuscript",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "ISL-A05",
    "title": "Historiography, orientalism, decolonial critique, archives, and digital Islamic studies",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "ISL-I09",
      "HST-A01",
      "RSH-A04"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Muslim historiography;  2. orientalism/philology",
    "hours": 50,
    "rank": 19
  },
  {
    "id": "ISL-E01",
    "title": "Primary-source research in an Islamic scholarly discipline",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "ISL-I01",
      "ISL-A02",
      "RSH-E01"
    ],
    "discipline": "Islamic-Studies",
    "discipline_title": "Islamic Studies",
    "summary": "Advanced language/text;  2. manuscript/edition",
    "hours": 100,
    "rank": 20
  },
  {
    "id": "LAW-B01",
    "title": "Rules, norms, rights, duties, powers, liability, jurisdiction, and legal institutions",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I05",
      "LOG-B01"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Legal/normative rule;  2. right/duty/power/immunity",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LAW-B02",
    "title": "Sources of law: constitution, statute, regulation, precedent, custom, treaty, and religious law",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LAW-B01",
      "HST-B02"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Constitution/statute;  2. regulation",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LAW-B03",
    "title": "Persons, legal identity, capacity, privacy, property, agreements, and remedies",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LAW-B01",
      "FND-I04"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Natural/legal persons;  2. capacity/guardianship",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "LAW-I01",
    "title": "Legal reading, issue spotting, rule synthesis, analogy, interpretation, and argument",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-B02",
      "LOG-B03",
      "WRT-I01"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Facts/procedure/holding;  2. issue/rule synthesis",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "LAW-I02",
    "title": "Constitutional law: structure, separation, federalism, review, rights, emergency, and amendment",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-B02",
      "POL-B02"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Founding/amendment;  2. separation/checks",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "LAW-I03",
    "title": "Administrative and public law: delegation, regulation, procedure, review, and accountability",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-I02",
      "POL-I05"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Delegation/authority;  2. rulemaking",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "LAW-I04",
    "title": "Private law: contract, tort, property, family, inheritance, and commercial relations",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-B03",
      "ECO-B02"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Contract formation/defense/remedy;  2. tort duty/breach/causation",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LAW-I05",
    "title": "Criminal law and procedure: culpability, offenses, evidence, policing, trial, punishment, and rights",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-B03",
      "PHI-B04"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Act/mental state/defenses;  2. offenses/inchoate/complicity",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LAW-I06",
    "title": "Corporate, labor, competition, consumer, tax, technology, and data law",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-I03",
      "LAW-I04",
      "BUS-B01"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Entities/governance;  2. employment/labor",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LAW-I07",
    "title": "Civil procedure, evidence, advocacy, negotiation, mediation, and dispute resolution",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LAW-I01",
      "COM-I07",
      "STA-I03"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Pleading/jurisdiction;  2. discovery/motions",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "LAW-A01",
    "title": "Comparative legal systems: civil, common, customary, mixed, and Islamic traditions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LAW-B02",
      "HST-I09",
      "ISL-I04"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Civil/common traditions;  2. customary/Indigenous",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "LAW-A02",
    "title": "Jurisprudence: positivism, natural law, realism, interpretation, justice, and critical approaches",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LAW-I01",
      "PHI-I06"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Positivism/natural law;  2. realism",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "LAW-A03",
    "title": "International public law, human rights, humanitarian law, criminal law, and use of force",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LAW-I02",
      "POL-I06"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Sources/subjects;  2. treaties/responsibility",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "LAW-A04",
    "title": "Environmental, climate, energy, health, and global administrative law",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LAW-I03",
      "ECS-I04",
      "HLT-I06"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Pollution/resource regulation;  2. impact/precaution",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LAW-A05",
    "title": "Legislation, institutional design, access to justice, and legal reform",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LAW-I03",
      "LAW-A02",
      "POL-I04"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Problem/authority;  2. statutory drafting",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "LAW-E01",
    "title": "Advanced legal research and comparative argument",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LAW-A01",
      "LAW-A02",
      "RSH-E01"
    ],
    "discipline": "Law",
    "discipline_title": "Law",
    "summary": "Novel legal question;  2. multilingual/multi-jurisdiction sources",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "LRN-B01",
    "title": "Goals, motivation, identity, and study environment",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B04",
      "FND-B05"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Values and learning goals;  2. Intrinsic/extrinsic motivation, expectancy, and value",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LRN-B02",
    "title": "Attention, distraction, rest, and cognitive load",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LRN-B01"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Selective and sustained attention;  2. Task switching, interruption, devices, and mind wandering",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LRN-B03",
    "title": "Encoding, working memory, and long-term memory",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "LRN-B02"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Sensory, working, and long-term memory;  2. Attention, elaboration, organization, and dual coding",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "LRN-B05",
    "title": "Retrieval practice, spacing, and interleaving",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LRN-B03"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Recall, recognition, and testing effect;  2. Expanding and fixed spacing",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "LRN-B06",
    "title": "Practice, feedback, error correction, and desirable difficulty",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LRN-B03"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Knowledge, skill, and performance decomposition;  2. Worked examples, guided practice, and fading",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "LRN-B04",
    "title": "Note-taking, annotation, and knowledge organization",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "LRN-B02"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Capture versus thinking;  2. Annotation for questions, structure, claims, and evidence",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "LRN-I01",
    "title": "Concept maps, atomic notes, synthesis notes, and external memory",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LRN-B04",
      "LRN-B05"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Concepts, propositions, hierarchy, and cross-links;  2. Atomic claims and permanent notes",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LRN-I02",
    "title": "Metacognition, calibration, and illusions of competence",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LRN-B05",
      "LRN-B06"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Monitoring and control;  2. predictions, confidence, and calibration",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LRN-I03",
    "title": "Planning, deliberate practice, and progress measurement",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LRN-B01",
      "LRN-I02"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Backward planning from performance;  2. Baseline, target, leading and lagging indicators",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LRN-I04",
    "title": "Transfer, analogy, abstraction, and varied practice",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LRN-B06",
      "LRN-I02"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Near and far transfer;  2. Surface and structural similarity",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "LRN-I05",
    "title": "Collaborative learning, explanation, teaching, and peer review",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LRN-B06",
      "FND-I04"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Joint goals, roles, norms, and psychological safety;  2. Elaboration through explanation and questioning",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "LRN-A01",
    "title": "Expertise, mental models, tacit knowledge, and plateaus",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LRN-I03",
      "LRN-I04"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Novice/expert representation and chunking;  2. Mental models, conditional knowledge, and pattern recognition",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "LRN-A02",
    "title": "Independent curriculum design and resource evaluation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LRN-I01",
      "LRN-A01",
      "RSH-I02"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Scope, terminal performances, and dependency mapping;  2. Coverage versus depth and core versus extension",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "LRN-A03",
    "title": "Long-term retention, review systems, and knowledge maintenance",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LRN-I01",
      "LRN-I03",
      "LRN-A01"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Retention horizon and acceptable forgetting;  2. Review queues, cumulative tests, projects, and teaching",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LRN-E01",
    "title": "Science of learning research and instructional experimentation",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LRN-A01",
      "PSY-A03",
      "RSH-A03"
    ],
    "discipline": "Learning",
    "discipline_title": "Learning",
    "summary": "Major learning theories and mechanisms;  2. Laboratory, classroom, and ecological evidence",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "LIF-B01",
    "title": "Values, roles, priorities, goals, routines, and personal review",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B04",
      "LRN-B01"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Values/evidence;  2. roles/seasons",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LIF-B02",
    "title": "Time, attention, commitments, habits, rest, and sustainable productivity",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIF-B01",
      "LRN-B02"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Time inventory;  2. commitment capture",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LIF-B03",
    "title": "Household systems: food, cleaning, clothing, maintenance, documents, and utilities",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIF-B01",
      "FND-I02"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Food safety/cooking;  2. cleaning/laundry",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "LIF-B04",
    "title": "First aid, fire, weather, evacuation, contacts, supplies, and emergency plans",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I04",
      "HLT-B04"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Local hazards;  2. alerts/contacts",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "LIF-B05",
    "title": "Digital life: files, backup, privacy, reputation, attention, and healthy media use",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B08",
      "SEC-B02"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "File/naming/archive;  2. backup/recovery",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "LIF-I01",
    "title": "Relationships: empathy, boundaries, consent, attachment, repair, friendship, family, and community",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-B01",
      "PSY-I04"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Empathy/curiosity;  2. attachment/trust",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "LIF-I02",
    "title": "Personal decisions: options, uncertainty, trade-offs, bias, commitment, and review",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-I03",
      "SYS-I06"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Decision frame;  2. options/base rates",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LIF-I03",
    "title": "Personal finance, consumer judgment, contracts, insurance, and long-term planning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FIN-B05",
      "LAW-B03"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Net worth/cash flow;  2. credit/debt",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LIF-I04",
    "title": "Career: strengths, exploration, applications, interviews, negotiation, work habits, and transitions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIF-B01",
      "COM-I07",
      "BUS-I01"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Strength/evidence/interests;  2. labor-market exploration",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LIF-I05",
    "title": "Civic participation: institutions, voting, deliberation, service, associations, and local action",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "FND-I05",
      "POL-B02",
      "COM-I02"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Jurisdictions/representatives;  2. voting/information",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "LIF-I06",
    "title": "Leadership: service, vision, trust, delegation, feedback, meetings, conflict, and succession",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "COM-A03",
      "BUS-I02"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Service/legitimacy;  2. vision/goals",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "LIF-I07",
    "title": "Practical making, tools, repair, energy, transport, and technology judgment",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIF-B03",
      "ENG-B02",
      "ECS-I05"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Tool/safety/material;  2. diagnose/repair",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "LIF-A01",
    "title": "Caregiving, parenting, aging, grief, disability, and end-of-life preparation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIF-I01",
      "HLT-I02",
      "LAW-I04"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Care relationship/burden;  2. child development/parenting",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "LIF-A02",
    "title": "Crisis judgment, resilience, recovery, mutual aid, and community preparedness",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIF-B04",
      "SYS-I05",
      "COM-A04"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Crisis signals/triage;  2. command/communication",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LIF-A03",
    "title": "Meaning, vocation, leisure, beauty, service, mortality, and a coherent life",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIF-B01",
      "PHI-B04",
      "REL-I06",
      "ART-B01"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Flourishing traditions;  2. vocation/work/service",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "LIF-E01",
    "title": "Long-horizon life stewardship and intergenerational contribution",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LIF-A01",
      "LIF-A02",
      "LIF-A03"
    ],
    "discipline": "Life-Skills",
    "discipline_title": "Life Skills",
    "summary": "Decades/generations;  2. family/community institutions",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "LIN-B01",
    "title": "Human language, linguistic diversity, description, prescription, and language myths",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B01",
      "SOC-B01"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Language/design features;  2. grammar/lexicon/use",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LIN-B02",
    "title": "Speech sounds, articulation, phonetic transcription, and sign-language modality",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIN-B01",
      "FND-B03"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Vocal tract;  2. consonants",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LIN-I01",
    "title": "Phonology: contrast, features, syllables, stress, tone, and sound patterns",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-B02",
      "MAT-B08"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Phoneme/allophone;  2. features/natural classes",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "LIN-B03",
    "title": "Words, morphemes, word formation, and lexical structure",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIN-B01",
      "FND-B06"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Word/morpheme/allomorph;  2. inflection/derivation",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "LIN-I02",
    "title": "Syntax: constituency, dependency, agreement, case, order, and recursion",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-B03",
      "LOG-I03"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Category/constituency;  2. phrase/dependency structure",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "LIN-I03",
    "title": "Semantics, reference, truth conditions, lexical meaning, and composition",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-I02",
      "LOG-I03"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Reference/predication;  2. entailment/truth conditions",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "LIN-I04",
    "title": "Pragmatics, implicature, presupposition, deixis, discourse, and speech acts",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-I03",
      "COM-B02"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Context/deixis;  2. implicature/cooperation",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LIN-I05",
    "title": "Sociolinguistics: variation, dialect, register, identity, multilingualism, policy, and power",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-B01",
      "SOC-B03"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Variation/change;  2. dialect/register/style",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LIN-I06",
    "title": "Language acquisition, processing, literacy, and psycholinguistics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-I02",
      "PSY-B02"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Child acquisition;  2. lexical/sentence processing",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LIN-I07",
    "title": "Historical linguistics, language families, reconstruction, contact, and change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-I01",
      "LIN-I02",
      "HST-B02"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Sound change;  2. analogy/grammaticalization",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "LIN-I08",
    "title": "Writing systems, orthography, corpus methods, lexicography, translation, and interpretation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIN-B03",
      "RSH-I01"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Script types/orthography;  2. corpus design/concordance",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "LIN-A01",
    "title": "Typology, universals, formal grammars, and competing linguistic theories",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "LIN-I01",
      "LIN-I02",
      "LIN-I03"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Sampling/typology;  2. universals/implicational patterns",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "LIN-A02",
    "title": "Computational linguistics, speech technology, NLP, and language models",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIN-I08",
      "CSC-I02",
      "AIX-A02"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Text/speech preprocessing;  2. tagging/parsing",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "LIN-A03",
    "title": "Language documentation, revitalization, field methods, and ethics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIN-I05",
      "LIN-I07",
      "RSH-I06"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Community goals/consent;  2. elicitation/recording",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LIN-E01",
    "title": "Linguistic research and theory",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LIN-A01",
      "LIN-A03",
      "RSH-E01"
    ],
    "discipline": "Linguistics",
    "discipline_title": "Linguistics",
    "summary": "Original pattern/question;  2. data/language sample",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "LIT-B01",
    "title": "Close reading: speaker, character, setting, image, symbol, tone, form, and ambiguity",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "WRT-B05"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Speaker/scene;  2. diction/image",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LIT-B02",
    "title": "Narrative: plot, time, perspective, voice, genre, and world-building",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIT-B01"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Plot/story;  2. time/pacing",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LIT-B03",
    "title": "Poetry: line, meter, rhythm, sound, figure, form, and translation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIT-B01",
      "LIN-B02"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Line/stanza;  2. meter/rhythm",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "LIT-B04",
    "title": "Drama and performance: scene, dialogue, action, stage, audience, and adaptation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LIT-B01",
      "COM-B03"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Action/conflict;  2. dialogue/subtext",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "LIT-I01",
    "title": "Interpretation, evidence, context, intertextuality, canon, and reader response",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-B02",
      "HST-B02",
      "WRT-I01"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Interpretive question;  2. textual warrant",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "LIT-I02",
    "title": "Epic, lyric, drama, scripture, tale, romance, novel, essay, memoir, and oral traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-B02",
      "LIT-B03",
      "LIT-B04"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Epic/lyric;  2. drama/tale/romance",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "LIT-I03",
    "title": "Literary criticism: formalist, historicist, psychoanalytic, Marxist, feminist, postcolonial, and other approaches",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-I01",
      "PHI-I04",
      "SOC-I04"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Formalist;  2. historicist/Marxist",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LIT-I04",
    "title": "Ancient and classical African, West Asian, South Asian, East Asian, Mediterranean, and American traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-I02",
      "HST-B05"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "African/West Asian;  2. South Asian",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LIT-I05",
    "title": "Medieval and early modern world literatures, including Arabic, Persian, European, African, and Asian traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-I04",
      "HST-I01"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Arabic/Persian;  2. African/oral/manuscript",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LIT-I06",
    "title": "Modern world literature: colonialism, nation, industrialization, modernism, diaspora, and decolonization",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-I05",
      "HST-I05"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Novel/modernity;  2. colonial/anticolonial",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "LIT-I07",
    "title": "Contemporary literature, film, digital narrative, genre fiction, and global circulation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LIT-I06",
      "COM-I05"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Post-1990 fiction/poetry;  2. film language/adaptation",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "LIT-A01",
    "title": "Comparative literature, translation studies, reception, and world-literature debates",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIT-I03",
      "LIN-I08"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Comparison/commensurability;  2. translation theory",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "LIT-A02",
    "title": "Textual scholarship, manuscripts, editions, archives, and digital humanities",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "LIT-I01",
      "RSH-I05",
      "CSC-B04"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Material text/codicology;  2. variants/stemmatics",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "LIT-A03",
    "title": "Literature, ethics, religion, politics, ecology, science, and mind",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "LIT-I03",
      "PHI-I05"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Literature/moral imagination;  2. sacred/secular",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LIT-E01",
    "title": "Advanced literary scholarship or major creative-critical work",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LIT-A01",
      "LIT-A02",
      "RSH-E01"
    ],
    "discipline": "Literature",
    "discipline_title": "Literature",
    "summary": "Original corpus/question;  2. languages/archive",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "LOG-B01",
    "title": "Claims, questions, definitions, and arguments",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "FND-I03"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Declarative, interrogative, imperative, and expressive utterances;  2. Claims and truth conditions",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "LOG-B02",
    "title": "Premises, conclusions, inference indicators, and argument maps",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B01"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Explicit and implicit premises;  2. Conclusion and premise indicators",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "LOG-B03",
    "title": "Validity, soundness, strength, cogency, and counterexample",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B02"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Necessary versus probable support;  2. Validity and invalidating interpretations",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "LOG-B04",
    "title": "Ambiguity, vagueness, equivocation, and operational definition",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B01",
      "FND-B06"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Lexical and syntactic ambiguity;  2. Borderline cases and sorites structure",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "LOG-B05",
    "title": "Deduction, induction, abduction, and analogy",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B02"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Deductive entailment;  2. Enumerative and statistical induction",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "LOG-B06",
    "title": "Relevance, presumption, and common informal fallacies",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B03",
      "LOG-B04"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Relevance failures—ad hominem, appeal to emotion, red herring;  2. Weak induction—hasty generalization, false cause, weak analogy",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "LOG-I01",
    "title": "Propositional syntax and truth tables",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-B03",
      "MAT-B08"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Atomic propositions and connectives;  2. Scope, parentheses, translation, and well-formed formulas",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "LOG-I02",
    "title": "Natural deduction and semantic consequence",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-I01"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Introduction and elimination rules;  2. Conditional and indirect proof",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "LOG-I03",
    "title": "Predicate logic, quantifiers, identity, and relations",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-I02",
      "MAT-I01"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Predicates, names, variables, domains;  2. Universal and existential quantification",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "LOG-A01",
    "title": "Soundness, completeness, compactness, and Löwenheim–Skolem orientation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "LOG-I03",
      "MAT-A08"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Formal languages, structures, satisfaction, and consequence;  2. Metalanguage and object language",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "LOG-I04",
    "title": "Inductive logic, confirmation, and base-rate reasoning",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-B05",
      "STA-B03"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Sample-to-population and population-to-case inference;  2. Prior probability, likelihood, and posterior direction",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "LOG-I05",
    "title": "Causal argument, explanation, mechanisms, and rival hypotheses",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "LOG-I04",
      "RSH-B03"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Correlation, temporal order, intervention, and counterfactual dependence;  2. Mechanisms and causal chains",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "LOG-I06",
    "title": "Modal, deontic, temporal, and epistemic logic orientation",
    "difficulty": "Intermediate",
    "status": "Extension",
    "prerequisites": [
      "LOG-I03"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Necessity, possibility, and possible-world semantics;  2. Obligation, permission, and prohibition",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "LOG-A02",
    "title": "Computability, proof systems, paradoxes, and limits of formalization",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "LOG-I03",
      "CSC-I04",
      "MAT-A08"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Effective procedure and equivalent computation models;  2. Encoding, diagonalization, and self-reference",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "LOG-E01",
    "title": "Model theory, proof theory, and nonclassical logics",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "LOG-A01",
      "LOG-A02"
    ],
    "discipline": "Logic",
    "discipline_title": "Logic",
    "summary": "Elementary equivalence, definability, types, and saturation;  2. Sequent calculi, normalization, and cut elimination",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "MAT-B01",
    "title": "Numerals, place value, arithmetic, and estimation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Base-ten notation and magnitude;  2. Addition/subtraction meanings and algorithms",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "MAT-B02",
    "title": "Integers, divisibility, primes, and modular arithmetic",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B01"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Signed quantities and number line;  2. Integer operations",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "MAT-B03",
    "title": "Fractions, ratios, proportions, percentages, and units",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B01",
      "FND-B07"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Fractions as number, quotient, ratio, and operator;  2. Equivalent fractions and operations",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "MAT-B04",
    "title": "Variables, expressions, identities, and algebraic manipulation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B02",
      "MAT-B03"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Variables and parameters;  2. Expressions and substitution",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "MAT-B05",
    "title": "Equations, inequalities, systems, and coordinate graphs",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B04"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Solution sets and inverse operations;  2. Linear/quadratic equations",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "MAT-B06",
    "title": "Functions, composition, inverse, and linear, polynomial, exponential, and logarithmic families",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B05"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Input/output, domain, range, graph, and table;  2. Composition and inverse",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "MAT-B07",
    "title": "Euclidean geometry, measurement, congruence, similarity, and coordinates",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B03"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Points, lines, angles, polygons, circles;  2. Perimeter, area, surface, volume",
    "hours": 13,
    "rank": 8
  },
  {
    "id": "MAT-I02",
    "title": "Trigonometry, circles, vectors, and analytic geometry",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-B06",
      "MAT-B07"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Radians and unit circle;  2. Sine/cosine/tangent graphs and identities",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "MAT-B08",
    "title": "Sets, relations, quantifiers, notation, and elementary combinatorics",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I03",
      "MAT-B02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Sets, membership, subset, operations;  2. Product, relation, function, equivalence, order",
    "hours": 13,
    "rank": 10
  },
  {
    "id": "MAT-I01",
    "title": "Discrete mathematics: counting, graphs, trees, recursion, and invariants",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-B08",
      "LOG-I01"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Recurrence and recursion;  2. Graphs, walks, paths, cycles, trees",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "MAT-I08",
    "title": "Proof: direct, contrapositive, contradiction, induction, construction",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-B08",
      "LOG-I02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Definitions and theorem anatomy;  2. Direct and contrapositive proof",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "MAT-I03",
    "title": "Limits, continuity, derivatives, and one-variable differential calculus",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-B06",
      "MAT-I02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Rates and limiting behavior;  2. Epsilon-delta orientation and continuity",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "MAT-I04",
    "title": "Integration, fundamental theorem, sequences, and series",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-I03",
      "MAT-I08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Accumulation and Riemann sums;  2. Antiderivatives and fundamental theorem",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "MAT-I05",
    "title": "Multivariable and vector calculus",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-I04",
      "MAT-I02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Multivariable limits and partial derivatives;  2. Gradient and constrained extrema",
    "hours": 24,
    "rank": 15
  },
  {
    "id": "MAT-I07",
    "title": "Ordinary differential equations and dynamical systems",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-I04",
      "MAT-I06"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Direction fields and initial-value problems;  2. First-order separable/linear equations",
    "hours": 24,
    "rank": 16
  },
  {
    "id": "MAT-I06",
    "title": "Linear algebra: vector spaces, matrices, transformations, eigenstructure",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MAT-B05",
      "MAT-I08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Linear systems and elimination;  2. Vectors, subspaces, basis, dimension",
    "hours": 24,
    "rank": 17
  },
  {
    "id": "MAT-A04",
    "title": "Numerical analysis and scientific computing",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "MAT-I04",
      "MAT-I06",
      "CSC-B03"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Floating point, conditioning, stability, error;  2. Root finding and interpolation",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "MAT-A05",
    "title": "Optimization: convexity, constraints, duality, and variational methods",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "MAT-I05",
      "MAT-I06"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Unconstrained first/second order conditions;  2. Convex sets/functions",
    "hours": 50,
    "rank": 19
  },
  {
    "id": "MAT-A01",
    "title": "Real analysis, metric spaces, and rigorous calculus",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-I04",
      "MAT-I08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Real-number completeness;  2. Sequences, limits, compactness",
    "hours": 50,
    "rank": 20
  },
  {
    "id": "MAT-A09",
    "title": "Measure, integration, and functional analysis",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-A01",
      "MAT-I06"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Sigma-algebras and measures;  2. Measurable functions and Lebesgue integral",
    "hours": 50,
    "rank": 21
  },
  {
    "id": "MAT-A02",
    "title": "Abstract algebra: groups, rings, fields, and modules",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-I01",
      "MAT-I08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Groups and homomorphisms;  2. Quotients and actions",
    "hours": 50,
    "rank": 22
  },
  {
    "id": "MAT-A03",
    "title": "Number theory and algebraic structures",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-A02"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Diophantine equations and congruences;  2. Arithmetic functions and quadratic residues",
    "hours": 50,
    "rank": 23
  },
  {
    "id": "MAT-A06",
    "title": "Complex analysis and transforms",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-A01",
      "MAT-I05"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Complex differentiation and analyticity;  2. Cauchy theorem/formula",
    "hours": 50,
    "rank": 24
  },
  {
    "id": "MAT-A07",
    "title": "Topology and differential geometry",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-A01",
      "MAT-I08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Topological spaces, bases, continuity;  2. Connectedness and compactness",
    "hours": 50,
    "rank": 25
  },
  {
    "id": "MAT-A08",
    "title": "Foundations: axiomatic set theory, computability, and metamathematics",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-I01",
      "MAT-I08",
      "LOG-I03"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Axiomatic sets, ordinals, cardinals;  2. Choice and equivalent principles",
    "hours": 50,
    "rank": 26
  },
  {
    "id": "MAT-A10",
    "title": "Partial differential equations and mathematical physics",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MAT-I05",
      "MAT-I07",
      "MAT-A01"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Classification and well-posedness;  2. Heat, wave, Laplace equations",
    "hours": 50,
    "rank": 27
  },
  {
    "id": "MAT-E01",
    "title": "Category theory and categorical structures",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "MAT-A02",
      "MAT-A07",
      "MAT-A08"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Categories, functors, natural transformations;  2. Universal properties and adjunctions",
    "hours": 100,
    "rank": 28
  },
  {
    "id": "MAT-E02",
    "title": "Research mathematics and theorem creation",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "MAT-A01",
      "MAT-A02",
      "MAT-A07"
    ],
    "discipline": "Mathematics",
    "discipline_title": "Mathematics",
    "summary": "Problem selection and literature;  2. Examples, computation, conjecture",
    "hours": 100,
    "rank": 29
  },
  {
    "id": "MUS-B01",
    "title": "Active listening: pulse, rhythm, pitch, melody, harmony, texture, timbre, form, and expression",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B03",
      "PHY-B05"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Pulse/rhythm;  2. pitch/melody",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "MUS-B02",
    "title": "Voice/instrument fundamentals, posture, practice, ensemble, and hearing protection",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MUS-B01",
      "LRN-B06"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Safe technique;  2. tone/intonation",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "MUS-B03",
    "title": "Notation, meter, scales, intervals, chords, keys, and basic ear training",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MUS-B01",
      "MAT-B03"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Staff/rhythm;  2. intervals/scales",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "MUS-I01",
    "title": "Tonal harmony, counterpoint, form, analysis, arrangement, and composition",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-B03"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Voice leading;  2. harmonic function/chromaticism",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "MUS-I02",
    "title": "Rhythm, tuning, modality, improvisation, orchestration, and non-Western theoretical systems",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-B02",
      "MUS-B03"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Complex rhythm/meter;  2. tuning/temperament",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "MUS-I03",
    "title": "Global music histories: oral traditions, court, sacred, folk, classical, popular, and diasporic music",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-B01",
      "HST-I11"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Oral/sacred/court;  2. notation/instruments",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "MUS-I04",
    "title": "Western art-music history in global context",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-I01",
      "HST-I02"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Medieval/Renaissance;  2. Baroque",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "MUS-I05",
    "title": "African, Islamic, South Asian, East Asian, Southeast Asian, Indigenous, and Latin American traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-I02",
      "GEO-I03"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "African systems/diaspora;  2. Arab/Turkish/Persian",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "MUS-I06",
    "title": "Jazz, blues, rock, electronic, film, hip-hop, and global popular music",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-I03",
      "HST-I06"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Blues/jazz;  2. rock/pop",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "MUS-I07",
    "title": "Acoustics, recording, synthesis, production, distribution, and music technology",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-B03",
      "PHY-I03",
      "CSC-B04"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Sound/spectrum;  2. microphone/room",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "MUS-I08",
    "title": "Music, ritual, identity, politics, industry, copyright, and community",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "MUS-I03",
      "SOC-B03",
      "LAW-I06"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Ritual/community;  2. identity/nation/protest",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "MUS-A01",
    "title": "Performance, improvisation, composition, production, or conducting portfolio",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MUS-B02",
      "MUS-I01",
      "MUS-I07"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Artistic concept;  2. advanced technique",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "MUS-A02",
    "title": "Musicology, ethnomusicology, analysis, cognition, and archival methods",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "MUS-I03",
      "RSH-I06",
      "COG-I01"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Historical musicology;  2. ethnography",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "MUS-E01",
    "title": "Original musical or scholarly work",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "MUS-A01",
      "MUS-A02",
      "RSH-E01"
    ],
    "discipline": "Music",
    "discipline_title": "Music",
    "summary": "Original question/vision;  2. sustained creation/research",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "PHI-B01",
    "title": "Philosophical questions, conceptual analysis, dialogue, and ways of life",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "LOG-B01",
      "HST-B03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Wonder/aporia;  2. concept/counterexample",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "PHI-B02",
    "title": "Knowledge: belief, truth, justification, skepticism, testimony, and disagreement",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHI-B01",
      "LOG-B03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Belief/truth/justification;  2. Gettier and analysis",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "PHI-B03",
    "title": "Reality: substance, identity, time, causation, freedom, and possibility",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHI-B01",
      "LOG-B05"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Object/property;  2. identity/change",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "PHI-B04",
    "title": "Value, action, virtue, duty, consequence, care, and moral pluralism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHI-B01",
      "FND-B04"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Good/right/virtue;  2. consequentialism",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "PHI-I01",
    "title": "Rational choice, action, responsibility, and practical reason",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B04",
      "STA-B03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Desire/reason/action;  2. intention/weakness",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "PHI-I02",
    "title": "Mind: consciousness, perception, self, embodiment, and other minds",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B03",
      "PSY-B02"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Dualism/physicalism;  2. behavior/function",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "PHI-I03",
    "title": "Philosophy of science: explanation, law, model, evidence, realism, and demarcation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B02",
      "RSH-B03",
      "HST-I07"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Induction/falsification;  2. explanation/law",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "PHI-A01",
    "title": "Philosophy of mathematics, logic, probability, and computation",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "PHI-I03",
      "LOG-A02",
      "MAT-A08"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Platonism/formalism/structuralism;  2. logical consequence",
    "hours": 50,
    "rank": 9
  },
  {
    "id": "PHI-I04",
    "title": "Philosophy of language: meaning, reference, speech acts, and interpretation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B02",
      "LIN-I03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Sense/reference;  2. descriptions/names",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "PHI-I05",
    "title": "Applied ethics: technology, environment, research, media, business, and war",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B04",
      "SYS-I05"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Stakeholders/harms;  2. technology/media",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "PHI-A02",
    "title": "Bioethics and philosophy of medicine",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHI-I05",
      "HLT-I02"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Health/disease/disability;  2. consent/capacity",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "PHI-A03",
    "title": "AI, information, and digital ethics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHI-I05",
      "AIX-B01",
      "SEC-I02"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Agency/responsibility;  2. privacy/surveillance",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "PHI-I06",
    "title": "Social and political philosophy: authority, liberty, equality, justice, rights, and power",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B04",
      "HST-I03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Authority/consent;  2. liberty/rights",
    "hours": 24,
    "rank": 14
  },
  {
    "id": "PHI-I07",
    "title": "Aesthetics: art, beauty, interpretation, expression, and taste",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B01",
      "ART-B01"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Art definition;  2. beauty/taste",
    "hours": 24,
    "rank": 15
  },
  {
    "id": "PHI-I08",
    "title": "Philosophy of religion: God, revelation, evil, faith, reason, and pluralism",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHI-B02",
      "REL-B02"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Divine concepts;  2. cosmological/design/ontological arguments",
    "hours": 24,
    "rank": 16
  },
  {
    "id": "PHI-A04",
    "title": "Ancient Greek, Roman, Indian, Chinese, Islamic, African, and medieval traditions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHI-B01",
      "HST-I01"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Greek/Roman;  2. Indian",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "PHI-A05",
    "title": "Early modern, Enlightenment, German idealist, and nineteenth-century philosophy",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHI-A04",
      "HST-I03"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Rationalism/empiricism;  2. social contract",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "PHI-A06",
    "title": "Analytic, phenomenological, existential, pragmatist, critical, feminist, and postcolonial traditions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHI-A05",
      "HST-I05"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Analytic turns;  2. phenomenology/existentialism",
    "hours": 50,
    "rank": 19
  },
  {
    "id": "PHI-A07",
    "title": "Metaethics, normative theory, and moral psychology",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "PHI-B04",
      "PHI-I01",
      "PSY-I04"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Realism/expressivism;  2. reasons/motivation",
    "hours": 50,
    "rank": 20
  },
  {
    "id": "PHI-E01",
    "title": "Independent philosophical research and constructive synthesis",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "PHI-A01",
      "PHI-A06",
      "RSH-E01"
    ],
    "discipline": "Philosophy",
    "discipline_title": "Philosophy",
    "summary": "Original problem;  2. literature/argument map",
    "hours": 100,
    "rank": 21
  },
  {
    "id": "PHY-B01",
    "title": "Physical quantities, units, dimensional analysis, estimation, and measurement",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B07",
      "MAT-B03",
      "RSH-B03"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "SI quantities and vectors/scalars;  2. dimensions and conversion",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "PHY-B02",
    "title": "Kinematics, vectors, frames, and motion graphs",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B01",
      "MAT-B05"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Position/displacement;  2. velocity/acceleration",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "PHY-B03",
    "title": "Forces, Newtonian mechanics, momentum, energy, and rotation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B02",
      "MAT-I02"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Newton laws/free bodies;  2. friction, gravity, circular motion",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "PHY-B04",
    "title": "Charge, current, circuits, voltage, power, and magnetism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B01",
      "MAT-B05"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Charge and electric force/field;  2. potential and energy",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "PHY-B05",
    "title": "Oscillations, waves, sound, light, and geometric optics",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B02",
      "MAT-B06"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Harmonic motion;  2. wave speed/frequency/amplitude",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "PHY-B06",
    "title": "Temperature, heat, gases, entropy, and thermodynamic processes",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PHY-B01",
      "MAT-B06"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Temperature/equilibrium;  2. heat/capacity/phase",
    "hours": 13,
    "rank": 7
  },
  {
    "id": "PHY-I01",
    "title": "Analytical and computational classical mechanics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B03",
      "MAT-I04",
      "MAT-I07"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Newtonian systems;  2. constraints/generalized coordinates",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "PHY-I02",
    "title": "Electromagnetic fields, potentials, induction, and Maxwell equations",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B04",
      "MAT-I05",
      "MAT-I07"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Electrostatics/Gauss;  2. potential/boundaries",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "PHY-I03",
    "title": "Wave equation, interference, diffraction, Fourier methods, and physical optics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B05",
      "MAT-I07"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Wave equation/modes;  2. superposition/coherence",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "PHY-I04",
    "title": "Thermodynamics, kinetic theory, statistical mechanics, and information",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B06",
      "STA-I01",
      "MAT-I04"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Thermodynamic potentials/relations;  2. ensembles/microstates",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "PHY-I05",
    "title": "Special relativity, spacetime, energy-momentum, and covariance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-I01",
      "MAT-I06"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Postulates and events;  2. Lorentz transformations",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "PHY-I06",
    "title": "Quantum phenomena, states, amplitudes, operators, and measurement",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-I03",
      "MAT-I06",
      "STA-I01"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Quantization/interference evidence;  2. complex states and amplitudes",
    "hours": 24,
    "rank": 13
  },
  {
    "id": "PHY-A01",
    "title": "Quantum mechanics: Schrödinger equation, spin, atoms, and approximation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHY-I06",
      "MAT-I06",
      "MAT-I07"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Schrödinger dynamics;  2. wells/barriers/oscillator",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "PHY-I07",
    "title": "Experimental physics: instruments, uncertainty, calibration, and signal analysis",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-B01",
      "STA-I03",
      "RSH-I04"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Instrument response/calibration;  2. uncertainty/noise",
    "hours": 24,
    "rank": 15
  },
  {
    "id": "PHY-I08",
    "title": "Computational physics and numerical modeling",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PHY-I01",
      "MAT-A04",
      "CSC-B04"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Model/discretization;  2. ODE/integration",
    "hours": 24,
    "rank": 16
  },
  {
    "id": "PHY-A02",
    "title": "Condensed matter, solids, semiconductors, superconductivity, and materials",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHY-A01",
      "PHY-I04"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Crystal/bonding;  2. lattice vibrations",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "PHY-A03",
    "title": "Nuclear and particle physics, symmetries, and the Standard Model",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHY-A01",
      "PHY-I05"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Nuclei/binding/decay;  2. reactions/fission/fusion",
    "hours": 50,
    "rank": 18
  },
  {
    "id": "PHY-A04",
    "title": "General relativity, gravitation, and curved spacetime",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "PHY-I05",
      "MAT-A07"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Equivalence/geodesics;  2. metric/curvature",
    "hours": 50,
    "rank": 19
  },
  {
    "id": "PHY-A05",
    "title": "Fluid, plasma, continuum, and nonlinear physics",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "PHY-I01",
      "MAT-A10",
      "SYS-I04"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Continuum/conservation;  2. ideal/viscous flow",
    "hours": 50,
    "rank": 20
  },
  {
    "id": "PHY-A06",
    "title": "History, interpretation, and philosophy of physical theory",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PHY-I06",
      "HST-I07",
      "PHI-I03"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Mechanics/revolution narratives;  2. field/thermodynamics",
    "hours": 50,
    "rank": 21
  },
  {
    "id": "PHY-E01",
    "title": "Quantum field theory and frontier physics",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "PHY-A01",
      "PHY-A03",
      "MAT-A10"
    ],
    "discipline": "Physics",
    "discipline_title": "Physics",
    "summary": "Classical fields/symmetry;  2. quantization/Fock space",
    "hours": 100,
    "rank": 22
  },
  {
    "id": "POL-B01",
    "title": "Power, authority, legitimacy, state, nation, government, and citizenship",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I05",
      "HST-B03"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Power forms;  2. authority/legitimacy",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "POL-B02",
    "title": "Regimes, constitutions, democracy, autocracy, representation, and accountability",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "POL-B01",
      "PHI-I06"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Regime types;  2. constitutional limits",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "POL-B03",
    "title": "Political ideologies: liberal, conservative, socialist, nationalist, religious, feminist, green, and postcolonial",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "POL-B01",
      "HST-I03"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Ideology and left/right limits;  2. liberal/conservative",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "POL-I01",
    "title": "Comparative politics: institutions, parties, elections, executives, legislatures, courts, and federalism",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-B02",
      "STA-B02"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Comparative method;  2. executives/legislatures",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "POL-I02",
    "title": "Political behavior: opinion, identity, participation, media, polarization, and collective action",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-B02",
      "PSY-I04",
      "COM-I05"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Opinion/identity;  2. participation/turnout",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "POL-I03",
    "title": "Political economy, state capacity, corruption, development, and distribution",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-B01",
      "ECO-I03"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "State/market institutions;  2. taxation/capacity",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "POL-I04",
    "title": "Public policy: agendas, instruments, implementation, bureaucracy, evaluation, and failure",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-I01",
      "RSH-I04",
      "ECO-I03"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Problem/agenda;  2. instruments",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "POL-I05",
    "title": "Public administration, budgeting, regulation, service delivery, and institutional design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-I04",
      "BUS-I02"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Bureaucracy/merit;  2. budgeting",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "POL-I06",
    "title": "International relations: sovereignty, diplomacy, war, cooperation, institutions, trade, and global governance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "POL-B01",
      "HST-I04",
      "GEO-I02"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Sovereignty/system;  2. realism/liberalism/constructivism",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "POL-A01",
    "title": "Comparative constitutionalism, democratic erosion, coups, revolutions, and transitions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I01",
      "HST-I05"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Constitutional origins;  2. courts/executive constraints",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "POL-A02",
    "title": "Security studies, strategy, intelligence, deterrence, peace, and conflict resolution",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I06",
      "SYS-A01"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Strategic theory;  2. deterrence/coercion",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "POL-A03",
    "title": "International political economy, development, climate, technology, migration, and health governance",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I03",
      "POL-I06",
      "SYS-A05"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "International organizations;  2. development/finance",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "POL-A04",
    "title": "Political methodology: cases, measurement, formal models, experiments, and causal inference",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I01",
      "STA-A01",
      "RSH-A01"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Concepts/measurement;  2. cases/comparison",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "POL-A05",
    "title": "Normative institutional analysis and responsible statecraft",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I04",
      "PHI-I06",
      "LAW-A01"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Legitimate ends;  2. institutional feasibility",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "POL-E01",
    "title": "Political research and policy design",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "POL-A03",
      "POL-A04",
      "RSH-E01"
    ],
    "discipline": "Political-Science",
    "discipline_title": "Political Science",
    "summary": "Original question;  2. theory/evidence",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "PSY-B01",
    "title": "Psychological science, levels of explanation, history, methods, and ethics",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "RSH-B03",
      "BIO-B05"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Behavior/experience;  2. biological/cognitive/social/cultural levels",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "PSY-B02",
    "title": "Sensation, perception, attention, consciousness, learning, and memory",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PSY-B01",
      "BIO-I07"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Psychophysics/senses;  2. perceptual organization",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "PSY-B03",
    "title": "Motivation, emotion, stress, and self-regulation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "PSY-B01",
      "BIO-B05"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Drives/goals/incentives;  2. emotion components/theories",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "PSY-I01",
    "title": "Development across infancy, childhood, adolescence, adulthood, and aging",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "BIO-I04"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Prenatal/infancy;  2. cognition/language",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "PSY-I02",
    "title": "Intelligence, personality, individual differences, assessment, and behavior genetics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "BIO-I01",
      "STA-I03"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Trait/state;  2. intelligence models",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "PSY-I03",
    "title": "Judgment, decision-making, reasoning, heuristics, and behavioral change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "STA-B03",
      "LOG-I04"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Normative/descriptive choice;  2. heuristics/biases",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "PSY-I04",
    "title": "Social psychology: self, attribution, attitudes, influence, groups, prejudice, relationships, and conflict",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B03",
      "STA-B02"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Self/attribution;  2. attitudes/persuasion",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "PSY-I05",
    "title": "Psychopathology, diagnosis, mental health, therapy, prevention, and recovery",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B03",
      "HLT-B01"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Distress/disorder models;  2. classification/assessment",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "PSY-I06",
    "title": "Biological psychology: brain, hormones, genes, drugs, and behavior",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "BIO-I07"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Genes/development;  2. neural systems",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "PSY-I07",
    "title": "Cultural, community, educational, organizational, health, and forensic psychology",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "PSY-I01",
      "PSY-I04",
      "SOC-B01"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Culture/community;  2. learning/school",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "PSY-A01",
    "title": "Psychometrics, experimental design, replication, meta-analysis, and open science",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PSY-I02",
      "STA-I04",
      "RSH-A03"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Scale construction;  2. factor/IRT orientation",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "PSY-A02",
    "title": "Clinical evidence, therapeutic mechanisms, ethics, and limits of lay application",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PSY-I05",
      "HLT-I05",
      "PHI-A02"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Trial/effectiveness evidence;  2. common/specific mechanisms",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "PSY-A03",
    "title": "Learning, memory, expertise, metacognition, and educational application",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "PSY-B02",
      "LRN-A01",
      "STA-A01"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Memory mechanisms;  2. practice/feedback",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "PSY-A04",
    "title": "Advanced social, developmental, cultural, and personality theory",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "PSY-I01",
      "PSY-I02",
      "PSY-I04"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Person-situation dynamics;  2. lifespan systems",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "PSY-E01",
    "title": "Original psychological research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "PSY-A01",
      "RSH-E01"
    ],
    "discipline": "Psychology",
    "discipline_title": "Psychology",
    "summary": "Theory/question;  2. valid measure/design",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "RSH-B01",
    "title": "Inquiry, answerable questions, constructs, and scope",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B10",
      "LOG-B01"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Curiosity to problem;  2. Descriptive, causal, interpretive, evaluative, design questions",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "RSH-B02",
    "title": "Search, discovery, libraries, databases, references, and citation trails",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I01",
      "WRT-B04"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Search concepts and synonyms;  2. catalogs, scholarly databases, repositories",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "RSH-B03",
    "title": "Observation, hypothesis, model, prediction, test, and explanation",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "RSH-B01",
      "LOG-B05"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Observation and anomaly;  2. hypothesis and alternative",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "RSH-B04",
    "title": "Research ethics, consent, integrity, authorship, and conflicts of interest",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "RSH-B01",
      "PHI-B04"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Harm, benefit, justice, respect;  2. informed consent and vulnerable participants",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "RSH-I01",
    "title": "Primary, secondary, and tertiary sources; authority and provenance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-B02",
      "FND-I03"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Primary/secondary/tertiary by question;  2. genre, venue, peer review",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "RSH-I02",
    "title": "Literature review, synthesis, disagreement, and gap identification",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-I01",
      "WRT-I01"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Review question and boundaries;  2. coding concepts/methods/results",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "RSH-I03",
    "title": "Operationalization, validity, reliability, sampling, and measurement",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-B03",
      "STA-B02"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Construct to indicator;  2. content/criterion/construct validity",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "RSH-I04",
    "title": "Experimental and quasi-experimental design",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-I03",
      "STA-I03"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Treatment, control, assignment;  2. blinding, placebo, compliance",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "RSH-I05",
    "title": "Historical, archival, textual, and comparative methods",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-I01",
      "HST-B02"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Archive construction and source survival;  2. internal/external criticism",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "RSH-I06",
    "title": "Interviews, observation, ethnography, case study, and qualitative analysis",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "RSH-I03",
      "SOC-B02"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Sampling and access;  2. interview guides and probing",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "RSH-A01",
    "title": "Mixed methods, triangulation, case selection, and integration",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "RSH-I04",
      "RSH-I05",
      "RSH-I06"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Complementarity and design rationale;  2. sequential/convergent/embedded designs",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "RSH-A02",
    "title": "Reproducibility, replication, open science, data and code stewardship",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "RSH-I04",
      "STA-I06",
      "CSC-I06"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Computational and empirical reproducibility;  2. preregistration and registered reports",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "RSH-A03",
    "title": "Systematic review, meta-analysis, evidence grading, and publication bias",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "RSH-I02",
      "STA-I03"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Protocol and eligibility;  2. comprehensive search/screening",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "RSH-A04",
    "title": "Philosophy of method, underdetermination, paradigms, and research programs",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "RSH-B03",
      "PHI-I03",
      "HST-I07"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Induction, falsification, confirmation;  2. theory-ladenness and underdetermination",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "RSH-A05",
    "title": "Peer review, grant proposals, publication, and scholarly communities",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "RSH-I02",
      "WRT-A01",
      "RSH-B04"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Venue and audience;  2. constructive review",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "RSH-E01",
    "title": "Independent original research and responsible dissemination",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "RSH-A01",
      "RSH-A02",
      "RSH-A04",
      "RSH-A05"
    ],
    "discipline": "Research",
    "discipline_title": "Research",
    "summary": "Original question and contribution;  2. protocol, ethics, feasibility",
    "hours": 100,
    "rank": 17
  },
  {
    "id": "SEC-B01",
    "title": "Assets, threats, vulnerabilities, controls, risk, and adversaries",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I04",
      "STA-B03"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Asset and mission;  2. threat/hazard/adversary",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "SEC-B02",
    "title": "Personal digital hygiene: authentication, updates, backup, phishing, privacy",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SEC-B01",
      "FND-B08"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Password managers and MFA;  2. updates and least privilege",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "SEC-B03",
    "title": "Physical, household, travel, and emergency security",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SEC-B01",
      "LIF-B04"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Situational awareness without hypervigilance;  2. access, lighting, fire, valuables",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "SEC-I01",
    "title": "Confidentiality, integrity, availability, authenticity, and accountability",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SEC-B01",
      "CSC-B01"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Security properties;  2. identity/authentication/authorization",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "SEC-I02",
    "title": "Privacy, identity, surveillance, consent, and data protection",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SEC-I01",
      "LAW-B03"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Personal data and identity;  2. collection, inference, linkage",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "SEC-I03",
    "title": "Cryptographic concepts: encryption, hashing, signatures, keys, protocols",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SEC-I01",
      "MAT-B02"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Threat models and Kerckhoffs principle;  2. symmetric/asymmetric encryption",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "SEC-I04",
    "title": "System, application, network, cloud, and supply-chain security",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SEC-I01",
      "CSC-I06",
      "CSC-I07"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Hardening/isolation;  2. input, auth, session, web flaws",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "SEC-A01",
    "title": "Threat modeling, secure design, testing, and vulnerability management",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SEC-I04",
      "CSC-I10"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Assets/actors/abuse cases;  2. trust/data-flow diagrams",
    "hours": 50,
    "rank": 9
  },
  {
    "id": "SEC-A02",
    "title": "Incident response, forensics, continuity, recovery, and crisis exercises",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SEC-I04",
      "COM-A04"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Preparation/roles;  2. detection/triage/containment",
    "hours": 50,
    "rank": 10
  },
  {
    "id": "SEC-I05",
    "title": "Human factors, social engineering, insider risk, and security culture",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SEC-B02",
      "PSY-I04"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Attention, trust, urgency, authority;  2. phishing/pretext/physical tactics",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "SEC-A03",
    "title": "Governance, assurance, standards, audit, and security economics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SEC-A01",
      "LAW-I06",
      "ECO-I03"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Policy, ownership, risk appetite;  2. control frameworks/standards",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "SEC-A04",
    "title": "Intelligence, military strategy, deterrence, terrorism, and hybrid conflict",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "POL-I06",
      "HST-I06",
      "LAW-A03"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Intelligence cycle and uncertainty;  2. force, strategy, operations",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "SEC-A05",
    "title": "Safety engineering, catastrophic risk, and critical infrastructure",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SEC-A02",
      "SYS-I05",
      "ENG-I02"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Hazard analysis and defense-in-depth;  2. human/technical/common-cause failure",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "SEC-E01",
    "title": "Security research, red teaming, and strategic foresight",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "SEC-A01",
      "SEC-A03",
      "SEC-A04"
    ],
    "discipline": "Security",
    "discipline_title": "Security",
    "summary": "Research ethics/scope;  2. adversarial hypothesis and attack path",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "SOC-B01",
    "title": "Society, culture, norms, roles, status, identity, and socialization",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I03",
      "HST-B03"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Social relation/structure;  2. culture/meaning",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "SOC-B02",
    "title": "Sociological and anthropological questions, comparison, fieldwork, and reflexivity",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SOC-B01",
      "RSH-B01"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Sociological imagination;  2. emic/etic",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "SOC-B03",
    "title": "Institutions: family, religion, education, economy, polity, law, media, and medicine",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SOC-B01",
      "FND-I05"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Family/kinship;  2. religion/education",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "SOC-I01",
    "title": "Classical and contemporary social theory: order, conflict, action, meaning, structure, and power",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B01",
      "HST-I03"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Marx/Durkheim/Weber;  2. interaction/action",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "SOC-I02",
    "title": "Biological and cultural anthropology, archaeology, language, and human variation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B02",
      "BIO-B04",
      "LIN-B01"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Primate/human evolution;  2. culture/subsistence/kinship",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "SOC-I03",
    "title": "Groups, organizations, networks, interaction, deviance, and collective behavior",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B03",
      "PSY-I04"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Interaction/self;  2. groups/norms",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "SOC-I04",
    "title": "Stratification, class, race, ethnicity, caste, gender, sexuality, disability, and intersectionality",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B01",
      "HST-I10"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Class/status/mobility;  2. race/ethnicity/caste",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "SOC-I05",
    "title": "Population, fertility, mortality, migration, urbanization, and demographic transition",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B03",
      "STA-B04"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Demographic measures;  2. fertility/mortality",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "SOC-I06",
    "title": "Work, technology, consumption, media, globalization, and social change",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B03",
      "HST-I06",
      "CSC-A06"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Labor/process/profession;  2. automation/platforms",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "SOC-I07",
    "title": "Ethnography, interviewing, survey, comparative, historical, and network methods",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SOC-B02",
      "RSH-I06",
      "STA-B02"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Ethnography;  2. interview/focus group",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "SOC-A01",
    "title": "Political sociology, states, movements, revolutions, nationalism, and civil society",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SOC-I01",
      "POL-I03"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "State/class;  2. nationalism/citizenship",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "SOC-A02",
    "title": "Economic sociology, organizations, professions, markets, and institutions",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SOC-I01",
      "ECO-I03"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Embedded markets;  2. networks/trust",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "SOC-A03",
    "title": "Science, knowledge, health, education, environment, and digital-society studies",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SOC-I06",
      "RSH-A04"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Knowledge/expertise;  2. science/technology",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "SOC-A04",
    "title": "Decolonial, feminist, interpretive, critical, and global social theory",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SOC-I01",
      "HST-I05"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Coloniality/decolonization;  2. feminist standpoint/intersection",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "SOC-E01",
    "title": "Original social research and theory building",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "SOC-I07",
      "SOC-A04",
      "RSH-E01"
    ],
    "discipline": "Sociology-and-Anthropology",
    "discipline_title": "Sociology and Anthropology",
    "summary": "Social puzzle;  2. theory/concepts",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "STA-B01",
    "title": "Data, variables, cases, measurement, and data-generating processes",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I02",
      "FND-I03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Questions, cases, variables, values;  2. Categorical/quantitative and discrete/continuous data",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "STA-B02",
    "title": "Sampling, bias, missingness, observational studies, and experiments",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "STA-B01",
      "RSH-B01"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Target population and frame;  2. Random, stratified, cluster, convenience samples",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "STA-B04",
    "title": "Distributions, summary statistics, visualization, and robust description",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "STA-B01",
      "MAT-B03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Frequency and distribution shape;  2. Center, spread, quantiles",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "STA-B03",
    "title": "Chance, conditional probability, independence, and Bayes' rule",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "MAT-B03",
      "MAT-B08"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Sample spaces and events;  2. Addition/multiplication rules",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "STA-I01",
    "title": "Random variables, expectation, variance, covariance, and common distributions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-B03",
      "MAT-I04"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Discrete/continuous random variables;  2. CDF, density, mass",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "STA-I02",
    "title": "Laws of large numbers, central limit theorem, and simulation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-I01",
      "CSC-B03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Sampling distributions;  2. LLN and stabilization",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "STA-I03",
    "title": "Estimation, uncertainty intervals, testing, effect size, and power",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-B02",
      "STA-I02"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Estimands and estimators;  2. Bias, variance, consistency",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "STA-I04",
    "title": "Linear, generalized linear, and multilevel regression",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-I03",
      "MAT-I06"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Linear model and least squares;  2. Diagnostics, transformations, interactions",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "STA-I05",
    "title": "Bayesian modeling, priors, likelihoods, posteriors, and prediction",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-I01",
      "STA-I03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Prior, likelihood, posterior;  2. Conjugacy and computation",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "STA-I06",
    "title": "Data cleaning, provenance, formats, querying, and reproducible analysis",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-B04",
      "CSC-B04"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Tidy/relational structures and schemas;  2. Parsing, types, joins, reshape",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "STA-A01",
    "title": "Causal inference: potential outcomes, graphs, identification, and designs",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-I04",
      "LOG-I05",
      "RSH-I03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Counterfactuals and estimands;  2. DAGs, backdoors, colliders",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "STA-A02",
    "title": "Time series, spatial, survival, and longitudinal data",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-I04",
      "STA-I05"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Dependence and repeated measures;  2. Trend, seasonality, ARIMA/state space",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "STA-A03",
    "title": "Nonparametric, resampling, robust, and high-dimensional methods",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "STA-I03",
      "MAT-A01"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Rank and distribution-free methods;  2. bootstrap and permutation",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "STA-A04",
    "title": "Statistical learning, regularization, validation, and decision rules",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-I04",
      "MAT-A05",
      "CSC-I03"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Prediction loss and generalization;  2. train/validation/test and cross-validation",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "STA-A05",
    "title": "Survey, administrative, sensor, text, image, and network data",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-I04",
      "STA-I06"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Survey weights and complex samples;  2. administrative linkage",
    "hours": 50,
    "rank": 16
  },
  {
    "id": "STA-A06",
    "title": "Privacy, fairness, uncertainty communication, and statistical ethics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "STA-A01",
      "PHI-I05",
      "SEC-I02"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Confidentiality, reidentification, minimization;  2. disclosure control and differential privacy",
    "hours": 50,
    "rank": 17
  },
  {
    "id": "STA-E01",
    "title": "Mathematical statistics and asymptotic theory",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "STA-A03",
      "MAT-A09"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Sufficiency, completeness, exponential families;  2. decision theory and optimality",
    "hours": 100,
    "rank": 18
  },
  {
    "id": "STA-E02",
    "title": "Original statistical methodology and domain collaboration",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "STA-A01",
      "STA-A04",
      "STA-E01"
    ],
    "discipline": "Statistics-and-Data",
    "discipline_title": "Statistics and Data",
    "summary": "Domain problem and estimand;  2. literature and methodological gap",
    "hours": 100,
    "rank": 19
  },
  {
    "id": "SYS-B01",
    "title": "Systems, boundaries, stocks, flows, state, environment, and scale",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B03",
      "MAT-B06"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Whole/parts/relations;  2. purpose and boundary",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "SYS-B02",
    "title": "Causal loops, feedback, delay, accumulation, and unintended consequences",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "SYS-B01",
      "LOG-I05"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Causal links/polarity;  2. reinforcing/balancing loops",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "SYS-I01",
    "title": "System dynamics, differential and difference models, and simulation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SYS-B02",
      "MAT-I07",
      "CSC-B03"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Stock-flow equations;  2. discrete/continuous time",
    "hours": 24,
    "rank": 4
  },
  {
    "id": "SYS-I02",
    "title": "Networks: structure, diffusion, centrality, contagion, and robustness",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SYS-B01",
      "MAT-I01",
      "STA-B03"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Nodes/edges/directed/weighted;  2. degree/path/community/centrality",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "SYS-I03",
    "title": "Control, stability, observability, adaptation, and cybernetics",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SYS-I01",
      "MAT-I06"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Plant/controller/reference;  2. open/closed loop",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "SYS-I04",
    "title": "Emergence, self-organization, nonlinear dynamics, and complexity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SYS-I01",
      "SYS-I02"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Micro rules/macro patterns;  2. nonlinearity and phase space",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "SYS-I05",
    "title": "Risk, uncertainty, resilience, redundancy, and failure propagation",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "SYS-I02",
      "STA-I05"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Hazard/exposure/consequence;  2. aleatory/epistemic uncertainty",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "SYS-I06",
    "title": "Decision theory, utility, value of information, and multi-criteria choice",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "STA-I05",
      "MAT-A05",
      "PHI-I01"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Acts/states/outcomes;  2. expected utility and risk attitude",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "SYS-A01",
    "title": "Game theory, strategic interaction, mechanism design, and collective action",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SYS-I06",
      "ECO-I02"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Strategic/normal games;  2. Nash and mixed strategies",
    "hours": 50,
    "rank": 10
  },
  {
    "id": "SYS-A02",
    "title": "Operations research, scheduling, queues, inventory, and logistics",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SYS-I06",
      "MAT-A05"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Linear/integer programs;  2. networks/routing",
    "hours": 50,
    "rank": 11
  },
  {
    "id": "SYS-A03",
    "title": "Agent-based modeling, cellular automata, and evolutionary systems",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "SYS-I04",
      "CSC-I03"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Agents/rules/environment;  2. cellular automata",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "SYS-A04",
    "title": "Scenario analysis, forecasting, foresight, and deep uncertainty",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SYS-I05",
      "STA-A02"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Forecast target/base rate;  2. trend/model/judgment ensembles",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "SYS-A05",
    "title": "Systems intervention, leverage points, governance, and evaluation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "SYS-B02",
      "SYS-I06",
      "RSH-A01"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Problem/system framing;  2. leverage points and behavior",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "SYS-E01",
    "title": "Complex adaptive systems research and transdisciplinary synthesis",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "SYS-A03",
      "SYS-A04",
      "SYS-A05"
    ],
    "discipline": "Systems-Science",
    "discipline_title": "Systems Science",
    "summary": "Multi-level question;  2. cross-domain concepts and commensurability",
    "hours": 100,
    "rank": 15
  },
  {
    "id": "REL-B01",
    "title": "Religious literacy: sacred, ritual, myth, doctrine, ethics, community, and experience",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-I03",
      "HST-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Defining religion;  2. sacred/myth/symbol",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "REL-B02",
    "title": "Studying religion: insider/outsider, theology, history, comparison, and reductionism",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "REL-B01",
      "RSH-I01"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Theology/religious studies;  2. insider/outsider",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "REL-B03",
    "title": "Ancient religions and the historical emergence of major traditions",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "REL-B01",
      "HST-B05"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Prehistoric/ancient ritual;  2. Mesopotamian/Egyptian/Iranian",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "REL-I01",
    "title": "Judaism: scripture, covenant, law, rabbinic tradition, philosophy, practice, and modern diversity",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-B02",
      "REL-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Hebrew Bible/history;  2. covenant/Torah",
    "hours": 24,
    "rank": 5
  },
  {
    "id": "REL-I02",
    "title": "Christianity: Bible, Jesus, church, creeds, sacraments, theology, reformations, and global forms",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-B02",
      "REL-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Jesus/New Testament;  2. early church/creeds",
    "hours": 24,
    "rank": 6
  },
  {
    "id": "REL-I03",
    "title": "Hindu traditions: Vedas, Upanishads, epics, philosophy, devotion, practice, and modern forms",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-B02",
      "REL-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Vedic traditions;  2. Upanishads/philosophy",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "REL-I04",
    "title": "Buddhist traditions: Buddha, teachings, schools, texts, practices, and global forms",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-B02",
      "REL-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Buddha/context;  2. teachings/community",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "REL-I05",
    "title": "Chinese, Japanese, African, Indigenous, and new religious traditions",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-B02",
      "REL-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Confucian/Daoist;  2. Shinto/Japanese syntheses",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "REL-I06",
    "title": "Theology: revelation, scripture, tradition, reason, God/ultimate reality, creation, humanity, salvation, and last things",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-I01",
      "REL-I02",
      "REL-I03",
      "REL-I04"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Revelation/scripture/tradition/reason;  2. ultimate reality/God",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "REL-I07",
    "title": "Religious ethics, law, ritual, mysticism, institutions, authority, gender, and reform",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-I06",
      "SOC-B03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Norm/source;  2. ritual/body",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "REL-I08",
    "title": "Religion, secularization, nationalism, science, modernity, and public life",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "REL-I07",
      "HST-I05",
      "PHI-I03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Secularization theories;  2. colonialism/modern reform",
    "hours": 24,
    "rank": 12
  },
  {
    "id": "REL-A01",
    "title": "Comparative theology, philosophy of religion, and interreligious reasoning",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "REL-I06",
      "PHI-I08"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Comparison purpose/ethics;  2. translation/incommensurability",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "REL-A02",
    "title": "Scripture, canon, hermeneutics, historical criticism, and lived interpretation",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "REL-I06",
      "LIN-I03",
      "RSH-I05"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Canon/text history;  2. language/genre",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "REL-A03",
    "title": "Religion, conflict, peacebuilding, pluralism, and law",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "REL-I08",
      "POL-I06",
      "LAW-A03"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Identity/mobilization;  2. violence/justification",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "REL-E01",
    "title": "Advanced theological or religious-studies research",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "REL-A01",
      "REL-A02",
      "RSH-E01"
    ],
    "discipline": "Theology-and-Comparative-Religion",
    "discipline_title": "Theology and Comparative Religion",
    "summary": "Tradition/question;  2. languages/sources",
    "hours": 100,
    "rank": 16
  },
  {
    "id": "WRT-B01",
    "title": "Purpose, audience, genre, and writing process",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "FND-B05",
      "FND-B06"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Writing situations and constraints;  2. Intended reader, prior knowledge, stakes, and action",
    "hours": 13,
    "rank": 2
  },
  {
    "id": "WRT-B02",
    "title": "Sentence boundaries, grammar, punctuation, and usage",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "WRT-B01"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Clause, phrase, subject, predicate, and modification;  2. Fragments, run-ons, agreement, tense, and reference",
    "hours": 13,
    "rank": 3
  },
  {
    "id": "WRT-B03",
    "title": "Paragraph unity, cohesion, emphasis, and transitions",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "WRT-B02"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Controlling idea and paragraph function;  2. Given/new information, lexical chains, and pronoun reference",
    "hours": 13,
    "rank": 4
  },
  {
    "id": "WRT-B04",
    "title": "Summary, paraphrase, quotation, and attribution",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "WRT-B03",
      "FND-I01"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Main idea, selection, compression, and neutral representation;  2. Paraphrase by concept rather than synonym substitution",
    "hours": 13,
    "rank": 5
  },
  {
    "id": "WRT-B05",
    "title": "Description, narration, explanation, and instruction",
    "difficulty": "Beginner",
    "status": "Core",
    "prerequisites": [
      "WRT-B03"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Concrete observation and selective detail;  2. Event, scene, chronology, pacing, and causation",
    "hours": 13,
    "rank": 6
  },
  {
    "id": "WRT-I01",
    "title": "Thesis, reasons, evidence, warrants, and objections",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "WRT-B04",
      "LOG-B03"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Arguable, qualified, significant thesis;  2. Reasons and line of reasoning",
    "hours": 24,
    "rank": 7
  },
  {
    "id": "WRT-I02",
    "title": "Essay and report architecture",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "WRT-B05",
      "WRT-I01"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Question, scope, and controlling purpose;  2. Classical, problem-solution, comparative, chronological, and IMRaD structures",
    "hours": 24,
    "rank": 8
  },
  {
    "id": "WRT-I03",
    "title": "Revision at argument, structure, paragraph, sentence, and word levels",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "WRT-I02",
      "LRN-B06"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Revision hierarchy and diagnostic reading;  2. Argument and evidence revision",
    "hours": 24,
    "rank": 9
  },
  {
    "id": "WRT-I04",
    "title": "Style: clarity, precision, concision, voice, rhythm, and register",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "WRT-B03",
      "WRT-I03"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Concrete subjects and strong verbs;  2. Nominalization, abstraction, passive voice, and agency",
    "hours": 24,
    "rank": 10
  },
  {
    "id": "WRT-I05",
    "title": "Citation systems, source synthesis, and plagiarism avoidance",
    "difficulty": "Intermediate",
    "status": "Core",
    "prerequisites": [
      "WRT-B04",
      "RSH-B02"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Why and when to cite;  2. Author-date, notes-bibliography, numeric, and legal systems",
    "hours": 24,
    "rank": 11
  },
  {
    "id": "WRT-A01",
    "title": "Academic article, literature review, and research proposal",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "WRT-I02",
      "WRT-I05",
      "RSH-I02"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Scholarly conversation, contribution, and disciplinary genre;  2. Abstract, introduction, methods, results, discussion, and limitations",
    "hours": 50,
    "rank": 12
  },
  {
    "id": "WRT-A02",
    "title": "Technical, scientific, legal, policy, and business writing",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "WRT-I04",
      "WRT-I05"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Requirements, specifications, procedures, and technical reports;  2. Scientific uncertainty, figures, methods, and results",
    "hours": 50,
    "rank": 13
  },
  {
    "id": "WRT-A03",
    "title": "Public scholarship, journalism, editing, and publication",
    "difficulty": "Advanced",
    "status": "Core",
    "prerequisites": [
      "WRT-I03",
      "COM-I04",
      "RSH-I05"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Public question, news value, angle, and reader service;  2. Reporting, interviewing, verification, attribution, and correction",
    "hours": 50,
    "rank": 14
  },
  {
    "id": "WRT-A04",
    "title": "Creative nonfiction, fiction, poetry, and dramatic writing",
    "difficulty": "Advanced",
    "status": "Extension",
    "prerequisites": [
      "WRT-I04",
      "LIT-I03"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Image, scene, voice, character, desire, and conflict;  2. Narrative distance, point of view, time, and structure",
    "hours": 50,
    "rank": 15
  },
  {
    "id": "WRT-E01",
    "title": "Sustained original scholarly or literary work",
    "difficulty": "Expert",
    "status": "Extension",
    "prerequisites": [
      "WRT-A01",
      "WRT-A03"
    ],
    "discipline": "Writing",
    "discipline_title": "Writing",
    "summary": "Project conception, contribution, audience, and scope;  2. Long-form architecture and research system",
    "hours": 100,
    "rank": 16
  }
]
