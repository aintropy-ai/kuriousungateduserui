export const MOCK_QA = [
  {
    id: 'q1',
    question: 'Which NJ townships have the most employees with terminal leave benefits?',
    answer: 'Bergen County leads with 12,400 employees on terminal leave, representing 31.4% of eligible staff — significantly above the state average of 18.2%. Essex County follows at 9,200 (29.5%), and Hudson County at 8,100 (27.1%).',
    deeperAnswer: 'Bergen County leads with 12,400 employees on terminal leave, representing 31.4% of eligible staff — significantly above the state average of 18.2%. Essex County follows at 9,200 (29.5%), and Hudson County at 8,100 (27.1%). This pattern correlates strongly with union density: Bergen, Essex, and Hudson all have unionization rates above 62%, compared to a statewide average of 41%. Historical data shows this gap has widened 18% over the past decade, driven by an aging workforce and legacy benefit structures negotiated in the 1990s.',
    time: '0.18s',
    deeperTime: '3.2s',
    format: 'table',
    tableData: {
      headers: ['County', 'Employees on Terminal Leave', '% of Eligible Staff'],
      rows: [
        ['Bergen County', '12,400', '31.4%'],
        ['Essex County', '9,200', '29.5%'],
        ['Hudson County', '8,100', '27.1%'],
        ['State Average', '7,100', '18.2%'],
      ],
    },
    bulletData: [
      'Bergen County: 12,400 employees on terminal leave (31.4% of eligible staff)',
      'Essex County: 9,200 employees (29.5%) — second highest in the state',
      'Hudson County: 8,100 employees (27.1%)',
      'All three counties are significantly above the state average of 18.2%',
      'Correlates with unionization rates above 62% across all three counties',
    ],
    modalities: { documents: 3, data: 1 },
    modalityText: 'documents & data tables',
    sources: {
      primary: [
        { icon: '📄', name: 'NJ Civil Service Commission Report 2024', usedFor: 'county headcount data' },
        { icon: '📊', name: 'NJ Benefits Registry · Table 3', usedFor: 'terminal leave figures' },
      ],
      supporting: [
        { icon: '📄', name: 'State HR Policy Manual v6', usedFor: 'eligibility criteria' },
      ],
      additional: [
        { icon: '📄', name: 'Department of Human Services Annual Summary', usedFor: 'cross-reference validation' },
      ],
    },
    suggestions: [
      'How does Bergen compare to the state average?',
      'What benefits do terminal leave employees receive?',
    ],
    comparisonAnswers: {
      chatgpt: "I don't have access to New Jersey's government databases or the NJ Open Data archive. Based on my training data, I can share that terminal leave benefits in NJ public sector employment vary by municipality, but I'm unable to provide the specific 2024 county-level figures you're asking about. For accurate current statistics, I'd recommend checking the NJ Civil Service Commission website directly.",
      claude: "I don't have direct access to the NJ Open Data files or real-time government datasets. While I have some general knowledge of New Jersey public sector employment practices, I cannot accurately provide specific county-level terminal leave statistics from 2024 records without access to the relevant government databases.",
      gemini: "Without access to New Jersey's Open Data repository, I'm unable to provide accurate current figures for this query. I have general knowledge about NJ public sector employment but the specific county-by-county breakdown from the 57M government documents in the NJ Open Data archive is beyond what I can accurately retrieve.",
    },
  },
  {
    id: 'q2',
    question: 'How does Bergen compare to the state average?',
    answer: 'Bergen County is 74% above the NJ state average of 7,100 terminal leave employees. This gap has widened 12% over the past 3 years, driven by an aging workforce and stronger union representation in the county.',
    deeperAnswer: 'Bergen County is 74% above the NJ state average of 7,100 terminal leave employees. This gap has widened 12% over the past 3 years. Key drivers include: Bergen\'s median employee age of 51.3 years (vs 47.1 statewide), a unionization rate of 68% (vs 41% statewide), and benefit packages negotiated prior to 2005 that included uncapped terminal leave accrual.',
    time: '0.21s',
    deeperTime: '4.1s',
    format: 'text',
    tableData: null,
    bulletData: [
      'Bergen is 74% above the NJ state average of 7,100 terminal leave employees',
      'Gap has widened 12% over the past 3 years',
      'Bergen\'s median employee age: 51.3 years vs 47.1 statewide',
      'Unionization rate: 68% in Bergen vs 41% statewide',
      'Pre-2005 benefit packages included uncapped terminal leave accrual',
    ],
    modalities: { documents: 2, data: 2 },
    modalityText: 'documents & data tables',
    sources: {
      primary: [
        { icon: '📊', name: 'NJ Benefits Registry · Historical Data', usedFor: 'year-over-year comparison' },
        { icon: '📄', name: 'NJ Labor Statistics Report 2024', usedFor: 'state average figures' },
      ],
      supporting: [
        { icon: '📊', name: 'County Workforce Demographics Survey', usedFor: 'workforce age distribution' },
      ],
      additional: [],
    },
    suggestions: [
      'Which county is closest to the state average?',
      'What drove Bergen\'s growth over the last 5 years?',
    ],
    comparisonAnswers: {
      chatgpt: "I don't have access to the specific NJ government datasets needed to answer this accurately. I can tell you that Bergen County is one of New Jersey's most populous counties, but a precise statistical comparison to the statewide average for terminal leave benefits requires current government employment data I cannot access.",
      claude: "I'm unable to provide an accurate comparison without access to the NJ Open Data files. Bergen County is a large, affluent county in northeastern NJ, but specific employment benefit statistics comparing it to the state average are beyond what I can reliably retrieve from my training data.",
      gemini: "This comparison requires current data from NJ government employment records, which I don't have access to. I can share that Bergen County has historically had strong public sector union representation, but the specific figures comparing it to the state average for terminal leave would need to come from official NJ government sources.",
    },
  },
  {
    id: 'q3',
    question: 'How many migrant students are enrolled per school district?',
    answer: 'Newark Public Schools has the highest migrant student enrollment at 4,280 students (8.3% of total enrollment), followed by Paterson at 3,190 (9.1%) and Trenton at 2,840 (7.8%). Northern NJ districts show consistently higher enrollment rates.',
    deeperAnswer: 'Newark Public Schools leads with 4,280 migrant students (8.3%), followed by Paterson 3,190 (9.1%), Trenton 2,840 (7.8%), New Brunswick 2,100 (11.2%), and Elizabeth 1,980 (6.4%). New Brunswick has the highest percentage despite not being the largest district, primarily due to its proximity to agricultural employment corridors in Middlesex County.',
    time: '0.22s',
    deeperTime: '5.6s',
    format: 'table',
    tableData: {
      headers: ['School District', 'Migrant Students', '% of Enrollment'],
      rows: [
        ['Newark Public Schools', '4,280', '8.3%'],
        ['Paterson', '3,190', '9.1%'],
        ['Trenton', '2,840', '7.8%'],
        ['New Brunswick', '2,100', '11.2%'],
        ['Elizabeth', '1,980', '6.4%'],
      ],
    },
    bulletData: [
      'Newark Public Schools: 4,280 migrant students (8.3% of total enrollment)',
      'Paterson: 3,190 students (9.1%) — highest percentage among top 5 districts',
      'Trenton: 2,840 students (7.8%)',
      'New Brunswick: 2,100 students (11.2%) — highest percentage overall',
      'Elizabeth: 1,980 students (6.4%)',
      'Northern NJ districts show consistently higher enrollment rates overall',
    ],
    modalities: { documents: 2, data: 1, images: 1 },
    modalityText: 'documents, data & images',
    sources: {
      primary: [
        { icon: '📄', name: 'NJ DOE Enrollment Report 2024', usedFor: 'district enrollment figures' },
        { icon: '📊', name: 'Migrant Education Data Registry', usedFor: 'migrant student counts' },
      ],
      supporting: [
        { icon: '🖼️', name: 'District Enrollment Map · 2024', usedFor: 'geographic distribution' },
      ],
      additional: [],
    },
    suggestions: [
      'Which districts had the highest migrant enrollment growth in 2024?',
      'What support programs exist for migrant students in NJ?',
    ],
    comparisonAnswers: {
      chatgpt: "I don't have access to the NJ Department of Education's current enrollment data or the NJ Open Data archive. I can tell you that New Jersey has programs supporting migrant students, particularly in urban districts, but specific enrollment figures per district for 2024 are not available in my training data.",
      claude: "Specific migrant student enrollment figures per NJ school district are not something I can accurately provide without access to the relevant government datasets. I know NJ has significant migrant student populations in certain urban and agricultural areas, but the district-level breakdowns you're asking about require up-to-date DOE data.",
      gemini: "I don't have access to the NJ Open Data files containing current school enrollment records. While I know New Jersey has notable migrant student populations in cities like Newark and Paterson, I cannot provide accurate 2024 figures without the data available in the NJ Open Data archive.",
    },
  },
  {
    id: 'q4',
    question: 'What are the top 10 industries by registered businesses in NJ?',
    answer: 'Professional Services leads with 127,400 registered businesses (18.2%), followed by Retail Trade at 89,200 (12.7%), and Healthcare at 76,100 (10.9%). The top 10 industries account for 78% of all registered businesses in New Jersey.',
    deeperAnswer: 'Professional Services leads with 127,400 businesses (18.2%), followed by Retail Trade 89,200 (12.7%), Healthcare 76,100 (10.9%), Construction 68,400 (9.8%), Food Services 54,200 (7.7%), Finance & Insurance 48,900 (7.0%), Real Estate 41,300 (5.9%), Transportation 36,800 (5.3%), Education 29,400 (4.2%), and Manufacturing 26,700 (3.8%).',
    time: '0.19s',
    deeperTime: '4.8s',
    format: 'table',
    tableData: {
      headers: ['Industry', 'Registered Businesses', '% of Total'],
      rows: [
        ['Professional Services', '127,400', '18.2%'],
        ['Retail Trade', '89,200', '12.7%'],
        ['Healthcare', '76,100', '10.9%'],
        ['Construction', '68,400', '9.8%'],
        ['Food Services', '54,200', '7.7%'],
        ['Finance & Insurance', '48,900', '7.0%'],
        ['Real Estate', '41,300', '5.9%'],
        ['Transportation', '36,800', '5.3%'],
        ['Education', '29,400', '4.2%'],
        ['Manufacturing', '26,700', '3.8%'],
      ],
    },
    bulletData: [
      'Professional Services: 127,400 businesses (18.2% of total)',
      'Retail Trade: 89,200 businesses (12.7%)',
      'Healthcare: 76,100 businesses (10.9%)',
      'Construction: 68,400 businesses (9.8%)',
      'Food Services: 54,200 businesses (7.7%)',
      'Top 10 industries combined account for 78% of all registered NJ businesses',
    ],
    modalities: { documents: 2, data: 2 },
    modalityText: 'documents & data tables',
    sources: {
      primary: [
        { icon: '📊', name: 'NJ Business Registry 2024', usedFor: 'industry classification data' },
        { icon: '📄', name: 'Department of Treasury Annual Report', usedFor: 'registration statistics' },
      ],
      supporting: [
        { icon: '📊', name: 'Economic Development Dashboard', usedFor: 'industry growth trends' },
      ],
      additional: [
        { icon: '📄', name: 'NJ Commerce Report Q4 2024', usedFor: 'sector comparison context' },
      ],
    },
    suggestions: [
      'Which industry saw the fastest growth in 2024?',
      'How does NJ compare to neighboring states by industry?',
    ],
    comparisonAnswers: {
      chatgpt: "I can provide some general information about New Jersey's economy, but the specific 2024 breakdown of registered businesses by industry from the NJ Business Registry requires current government data I don't have access to. From general knowledge, NJ has strong professional services, pharma, and finance sectors, but precise rankings and counts are not available to me.",
      claude: "I don't have access to the NJ Business Registry or the 57 million documents in the NJ Open Data archive. I can share that New Jersey has a diverse economy with notable strength in pharmaceuticals, financial services, and professional sectors, but a precise 2024 ranking of industries by registered business count is beyond what I can accurately retrieve.",
      gemini: "Without access to the NJ Open Data files, I'm unable to provide accurate current figures on registered businesses by industry. New Jersey's economy is well-diversified, but the specific rankings and counts from 2024 government records are not something I can retrieve without access to the relevant databases.",
    },
  },
  {
    id: 'q5',
    question: 'How does impervious surface area compare across land use types?',
    answer: 'Commercial zones have the highest impervious surface coverage at 78.4%, followed by Industrial at 71.2% and High-Density Residential at 52.6%. Agricultural land has the lowest at 4.1%, while open space and parks average 8.3%.',
    deeperAnswer: 'Commercial zones lead at 78.4% impervious coverage, followed by Industrial 71.2%, High-Density Residential 52.6%, Transportation corridors 89.1%, Mixed-Use 61.3%, Low-Density Residential 38.7%, Institutional 44.2%, Agricultural 4.1%, and Open Space/Parks 8.3%. EPA stormwater compliance thresholds are exceeded in 34 of 121 NJ municipalities.',
    time: '0.24s',
    deeperTime: '6.1s',
    format: 'table',
    tableData: {
      headers: ['Land Use Type', 'Impervious Coverage'],
      rows: [
        ['Transportation Corridors', '89.1%'],
        ['Commercial Zones', '78.4%'],
        ['Industrial', '71.2%'],
        ['Mixed-Use', '61.3%'],
        ['High-Density Residential', '52.6%'],
        ['Institutional', '44.2%'],
        ['Low-Density Residential', '38.7%'],
        ['Open Space / Parks', '8.3%'],
        ['Agricultural', '4.1%'],
      ],
    },
    bulletData: [
      'Transportation Corridors: 89.1% impervious surface — highest of all land use types',
      'Commercial Zones: 78.4%',
      'Industrial: 71.2%',
      'High-Density Residential: 52.6%',
      'Agricultural land: 4.1% — lowest impervious coverage',
      'EPA stormwater thresholds exceeded in 34 of 121 NJ municipalities',
    ],
    modalities: { documents: 1, data: 1, images: 2 },
    modalityText: 'documents, data & images',
    sources: {
      primary: [
        { icon: '🖼️', name: 'NJ Land Use / Land Cover Map 2020', usedFor: 'impervious surface measurements' },
        { icon: '📊', name: 'DEP Environmental Data Registry', usedFor: 'land use classification data' },
      ],
      supporting: [
        { icon: '📄', name: 'NJ Stormwater Management Report', usedFor: 'compliance thresholds' },
        { icon: '🖼️', name: 'County Impervious Surface Overlay · 2020', usedFor: 'geographic comparison' },
      ],
      additional: [],
    },
    suggestions: [
      'Which NJ counties exceed EPA stormwater thresholds?',
      'How has impervious coverage changed since 2015?',
    ],
    comparisonAnswers: {
      chatgpt: "I don't have access to the NJ DEP Environmental Data Registry or the land use mapping data in the NJ Open Data archive. I can share that impervious surface coverage generally varies by land use type — commercial and industrial areas tend to have higher coverage than residential or agricultural areas — but specific NJ figures from 2020 maps require data I cannot access.",
      claude: "Without access to the NJ Open Data files, I'm unable to provide accurate impervious surface statistics by land use type for New Jersey. I understand the general concept — impervious surfaces like pavement and rooftops are higher in commercial and industrial zones — but precise percentages from the NJ DEP's land cover datasets are beyond my reach.",
      gemini: "The specific impervious surface coverage figures by land use type require NJ DEP environmental data I don't have access to. From general environmental science knowledge, commercial and industrial areas typically have much higher impervious coverage than residential or open space areas, but the exact NJ figures from the Open Data archive are not available to me.",
    },
  },
]

export const INITIAL_SUGGESTIONS = [
  'Which NJ townships have the most employees with terminal leave benefits?',
  'How many migrant students are enrolled per school district?',
  'What are the top 10 industries by registered businesses in NJ?',
  'How does impervious surface area compare across land use types?',
]

export const MOCK_CHAT_HISTORY = [
  { id: 'ch1', title: 'Which NJ townships have the most employees...', group: 'Today', qaId: 'q1' },
  { id: 'ch2', title: 'How many migrant students are enrolled...', group: 'Today', qaId: 'q3' },
  { id: 'ch3', title: 'Budget breakdown by county 2024', group: 'Yesterday', qaId: 'q4' },
  { id: 'ch4', title: 'Water infrastructure spending analysis', group: 'Last 7 Days', qaId: 'q2' },
  { id: 'ch5', title: 'Top industries by registered businesses', group: 'Last 7 Days', qaId: 'q4' },
]

export const MOCK_PROJECTS = []

export const getAnswerForQuestion = (question) => {
  const q = question.toLowerCase().trim()
  return MOCK_QA.find(item =>
    item.question.toLowerCase() === q ||
    item.suggestions.some(s => s.toLowerCase() === q) ||
    item.question.toLowerCase().includes(q.slice(0, 20))
  ) || MOCK_QA[Math.floor(Math.random() * MOCK_QA.length)]
}
