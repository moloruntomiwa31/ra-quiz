const currentAffairs = [
  {
    question: 'Who was the most recent MMU President?',
    answer: 'Dr. Soye Asawo',
    options: [
      'Dr. Soye Asawo',
      'Dn. Michael Kehinde Oyegbile',
      'Hon. Dr. Dawari George',
      'Bro. Ayo Badejo',
    ],
    explanation:
      'According to the PAST MMU PRESIDENTS FROM THE LATEST section, Dr. Soye Asawo is listed first, indicating he is the most recent MMU President.',
  },
  {
    question: 'Which Baptist Conference hosted the Royal Ambassador Jamboree in 2021?',
    answer: 'Ibadan Conference',
    options: [
      'Lagos Conference',
      'Kaduna Conference',
      'Ibadan Conference',
      'United Baptist Conference',
    ],
    explanation:
      'According to the CHRONOLOGICAL ORDER OF RAN JAMBOREE section, the 7th Jamboree was hosted by Ibadan Conference in Ibadan in 2021.',
  },
  {
    question: "Which publication is used for the Royal Ambassador's Weekly Meeting?",
    answer: 'Christ Ambassador',
    options: ['Gifted Hands', 'Standing Tall', 'Christ Ambassador', 'Embassy Watch'],
    explanation:
      'According to the ROYAL AMBASSADOR PUBLICATIONS section, Christ Ambassador is used for Weekly Meeting.',
  },
  {
    question: 'Who served as Marshal of Royal Ambassadors from 1996 to 2002?',
    answer: 'Couns jonathan Oyeku',
    options: [
      'Couns Bayo Oyeniyi',
      'Couns jonathan Oyeku',
      'Couns Dawari George',
      'Couns FAS Akinola',
    ],
    explanation:
      'According to the CHRONOLOGICAL ORDER OF THE MARSHALS section, Couns jonathan Oyeku from kafachan baptist Conference served from 1996 – 2002.',
  },
  {
    question: 'Who is currently serving as the Director in the Conference Officers list?',
    answer: 'Amb. Pleni MOB Areo',
    options: [
      'Amb. Pleni MOB Areo',
      'Amb. Pleni. Kehinde Adeyinka',
      'Amb. Obafeyisara Adesoji',
      'Amb. Pleni. Kayode Adediran',
    ],
    explanation:
      'According to the CONFERENCE OFFICERS section, Amb. Pleni MOB Areo is listed as the Director.',
  },
  {
    question: 'Who is the current National Secretary of Royal Ambassadors?',
    answer: 'Amb. Okegbenle Taiwo',
    options: [
      'Amb. Okegbenle Taiwo',
      'Amb. Efeturi Kori-siakpere',
      'Amb. Wunjir Ninfas',
      'Coun. Bitebo Erogoba',
    ],
    explanation:
      'According to the NATIONAL OFFICERS section, Amb. Okegbenle Taiwo is listed as the National Secretary.',
  },
  {
    question: 'Which Royal Ambassador publication is the Annual Publication?',
    answer: 'Embassy Watch',
    options: ['Gifted Hands', 'Standing Tall', 'Embassy Watch', 'Christ Ambassador'],
    explanation:
      'According to the ROYAL AMBASSADOR PUBLICATIONS section, Embassy Watch is the Annual Publication.',
  },
  {
    question: 'Who is the current Mission Officer in the Conference Officers list?',
    answer: 'Amb. Adegoke Timothy',
    options: [
      'Amb. Oluwasola Oyediran',
      'Amb. Adegoke Timothy',
      'Amb. Oyeleke Olalekan',
      'Amb. Micheal Ademola',
    ],
    explanation:
      'According to the CONFERENCE OFFICERS section, Amb. Adegoke Timothy (irepodun) is listed as the Mission Officer.',
  },
  {
    question: 'Who is the first president of Nigeria?',
    answer: 'Dr. Nnamdi Azikiwe',
    options: [
      'Dr. Nnamdi Azikiwe',
      'Alhaji Shehu Aliyu Shagari',
      'Abubakar Tafawa Balewa',
      'Herbert Macaulay',
    ],
    explanation:
      'As stated in the NIGERIAN CURRENT AFFAIRS section, Dr. Nnamdi Azikiwe was the first president of Nigeria.',
  },
  {
    question: 'Which state in Nigeria has the highest number of Local Government Areas?',
    answer: 'Kano State',
    options: ['Lagos State', 'Niger State', 'Kano State', 'Bayelsa State'],
    explanation:
      'According to the document, Kano State has the highest number of Local Government Areas (LGAs) with 44 LGAs.',
  },
  {
    question: "Who is Nigeria's current Chief Justice of the Supreme Court?",
    answer: 'Justice Kudirat Kekere-Ekun',
    options: [
      'Justice Kudirat Kekere-Ekun',
      'Justice Olukayode Ariwoola',
      'Justice Walter Onnoghen',
      'Justice Ibrahim Tanko Muhammad',
    ],
    explanation:
      "As mentioned in the NIGERIAN CURRENT AFFAIRS section, Justice Kudirat Kekere-Ekun is Nigeria's current Chief Justice of the Supreme Court.",
  },
  {
    question: 'When was crude oil first discovered in Nigeria?',
    answer: 'Oloibiri Oilfield, located in Oloibiri in Ogbia LGA of Bayelsa State',
    options: [
      'Warri, Delta State',
      'Oloibiri Oilfield, located in Oloibiri in Ogbia LGA of Bayelsa State',
      'Port Harcourt, Rivers State',
      'Kaduna, Kaduna State',
    ],
    explanation:
      'According to the document, crude oil was first discovered in Nigeria at Oloibiri Oilfield, located in Oloibiri in Ogbia LGA of Bayelsa State.',
  },
  {
    question: 'When was the Nigerian Naira introduced?',
    answer: 'January 1, 1973',
    options: ['October 1, 1960', 'January 1, 1973', 'October 1, 1963', 'January 22, 1973'],
    explanation: 'According to the document, the Nigerian Naira was introduced on January 1, 1973.',
  },
  {
    question: 'Who is the current Senate President in Nigeria?',
    answer: 'Obong Godswill Obot Akpabio',
    options: ['Tajudeen Abbas', 'Obong Godswill Obot Akpabio', 'Ahmed Lawan', 'Bukola Saraki'],
    explanation:
      'As stated in the document, Obong Godswill Obot Akpabio is the current Senate President in Nigeria.',
  },
  {
    question: 'Who was the first woman to drive a car in Nigeria?',
    answer: 'Funmilayo Ransome Kuti',
    options: ['Flora Shaw', 'Mary Slessor', 'Funmilayo Ransome Kuti', 'Chineyere Kalu'],
    explanation:
      'According to the document, Funmilayo Ransome Kuti was the first woman to drive a car in Nigeria.',
  },
  {
    question: 'Who is the current Minister of Education in Nigeria?',
    answer: 'Prof. Tahir Mamman',
    options: ['Tunji Alausa', 'Prof. Tahir Mamman', 'Suwaiba Said Ahmad', 'Adamu Adamu'],
    explanation:
      "According to the NIGERIAN CURRENT AFFAIRS section, Prof. Tahir Mamman is Nigeria's Minister of Education.",
  },
  {
    question: 'When did Bola Ahmed Tinubu get sworn in as President?',
    answer: 'May 29, 2023',
    options: ['May 29, 2023', 'May 29, 2015', 'May 29, 2019', 'October 1, 2022'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, Bola Ahmed Tinubu was sworn in as President on May 29, 2023.',
  },
  {
    question: 'Who is the current Governor of the Central Bank of Nigeria?',
    answer: 'Mr. Olayemi Cardoso',
    options: [
      'Mr. Olayemi Cardoso',
      'Godwin Emefiele',
      'Dr. Olayemi Michael Cardoso',
      'Sanusi Lamido Sanusi',
    ],
    explanation:
      'As stated in the NIGERIAN CURRENT AFFAIRS section, Mr. Olayemi Cardoso is the current Governor of the Central Bank of Nigeria.',
  },
  {
    question:
      'Which Nigerian state is known for generating the highest Internally Generated Revenue (IGR)?',
    answer: 'Lagos State',
    options: ['Rivers State', 'Lagos State', 'Kano State', 'Niger State'],
    explanation:
      'According to the document, Lagos State is known for generating the highest Internally Generated Revenue (IGR).',
  },
  {
    question: 'Who is the current Minister of Petroleum Resources in Nigeria?',
    answer: 'Alhaji Bola Ahmed Tinubu',
    options: ['Heineken Lokpobiri', 'Alhaji Bola Ahmed Tinubu', 'Ekperikpe Ekpo', 'Timipre Sylva'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Alhaji Bola Ahmed Tinubu is listed as the Minister of Petroleum Resources.',
  },
  {
    question: 'When was the Central Bank of Nigeria established?',
    answer: 'March 4, 1958',
    options: ['January 1, 1973', 'October 1, 1960', 'March 4, 1958', 'December 16, 2011'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, the Central Bank of Nigeria (CBN) was established on March 4, 1958.',
  },
  {
    question: 'Who designed the Nigerian flag?',
    answer: 'Michael Taiwo Akinkunmi',
    options: [
      'Michael Taiwo Akinkunmi',
      'Flora Shaw',
      'Herbert Macaulay',
      'Funmilayo Ransome Kuti',
    ],
    explanation: 'According to the document, Michael Taiwo Akinkunmi designed the Nigerian flag.',
  },
  {
    question: 'When was the #EndSARS Protest & Lekki Toll Gate Shooting?',
    answer: 'October 20, 2020',
    options: ['October 20, 2020', 'May 31, 2018', 'October 2, 2012', 'April 14, 2014'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, the #EndSARS Protest & Lekki Toll Gate Shooting occurred on October 20, 2020.',
  },
  {
    question: 'Who is the Minister of Works in Nigeria according to the document?',
    answer: 'Dave Umahi',
    options: ['Bello Muhammad Goronyo', 'Dave Umahi', 'Nyesom Wike', 'Adebayo Adelabu'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Dave Umahi is listed as the Minister of Works.',
  },
  {
    question: 'What was the first political party in Nigeria?',
    answer: 'Nigerian National Democratic Party (NNDP)',
    options: [
      "Northern People's Congress",
      'Action Group',
      'Nigerian National Democratic Party (NNDP)',
      'National Council of Nigeria and the Cameroons',
    ],
    explanation:
      'According to the document, Nigerian National Democratic Party (NNDP) was the first political party in Nigeria.',
  },
  {
    question: 'When did Nigeria become independent?',
    answer: 'October 1, 1960',
    options: ['October 1, 1963', 'October 1, 1960', 'January 1, 1973', 'May 29, 1999'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, Nigeria gained Independence on October 1, 1960.',
  },
  {
    question: "Who was Nigeria's first Prime Minister?",
    answer: 'Abubakar Tafawa Balewa',
    options: [
      'Dr. Nnamdi Azikiwe',
      'Alhaji Shehu Aliyu Shagari',
      'Abubakar Tafawa Balewa',
      'Ahmadu Bello',
    ],
    explanation:
      "According to the document, Abubakar Tafawa Balewa was Nigeria's first Prime Minister.",
  },
  {
    question: 'How many Local Government Areas are there in Nigeria?',
    answer: '774',
    options: ['774', '250', '36', '44'],
    explanation: 'According to the document, there are 774 Local Government Areas in Nigeria.',
  },
  {
    question: 'Who is the current Minister of Information and National Orientation?',
    answer: 'Mohammed Idris Malagi',
    options: ['Mohammed Idris Malagi', 'Olubunmi Tunji-Ojo', 'Lateef Fagbemi', 'Nyesom Wike'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Mohammed Idris Malagi is listed as the Minister of Information and National Orientation.',
  },
  {
    question: 'When did Nigeria join OPEC?',
    answer: 'July 12, 1971',
    options: ['June 1, 1965', 'July 12, 1971', 'January 15, 1970', 'October 1, 1963'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, Nigeria joined OPEC on July 12, 1971.',
  },
  {
    question: 'Who stopped the killing of twins in Nigeria?',
    answer: 'Mary Slessor',
    options: ['Mary Slessor', 'Flora Shaw', 'Funmilayo Ransome Kuti', 'Chineyere Kalu'],
    explanation: 'According to the document, Mary Slessor stopped the killing of twins in Nigeria.',
  },
  {
    question: 'Who is the current Minister of Federal Capital Territory?',
    answer: 'Nyesom Wike',
    options: ['Nyesom Wike', 'Mariya Mahmoud Bunkure', 'Dave Umahi', 'Olubunmi Tunji-Ojo'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Nyesom Wike is listed as the Minister of Federal Capital Territory.',
  },
  {
    question: 'How many colors does the Nigerian flag have?',
    answer: 'Two colors: green and white',
    options: [
      'Three colors: green, white, and red',
      'Two colors: green and white',
      'Four colors: green, white, red, and black',
      'One color: green',
    ],
    explanation: 'According to the document, the Nigerian flag has two colors: green and white.',
  },
  {
    question: "When was the Aba Women's Riot?",
    answer: 'November 20, 1929',
    options: ['October 11, 1965', 'November 20, 1929', 'March 14, 1957', 'February 11, 1961'],
    explanation:
      "According to the NIGERIAN EVENTS AND ITS TIMELINE section, the Aba Women's Riot took place on November 20, 1929.",
  },
  {
    question: 'Who is the Minister of Aviation and Aerospace Development?',
    answer: 'Festus Keyamo',
    options: ['Festus Keyamo', 'Uche Nnaji', 'Dele Alake', 'Tunji Alausa'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Festus Keyamo is listed as the Minister of Aviation and Aerospace Development.',
  },
  {
    question: 'When did General Yakubu Gowon get overthrown?',
    answer: 'July 29, 1975',
    options: ['January 15, 1966', 'July 29, 1975', 'August 27, 1985', 'February 13, 1976'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, General Yakubu Gowon was overthrown on July 29, 1975.',
  },
  {
    question: "When did Abuja become Nigeria's capital?",
    answer: 'December 12, 1991',
    options: ['October 1, 1960', 'December 12, 1991', 'May 29, 1999', 'June 12, 1993'],
    explanation:
      "According to the NIGERIAN EVENTS AND ITS TIMELINE section, Abuja became Nigeria's capital on December 12, 1991.",
  },
  {
    question: 'Who is the Minister of Finance and the Economy?',
    answer: 'Wale Edun',
    options: ['Wale Edun', 'Doris Anite', 'Abubakar Atiku Bagudu', 'Olubunmi Tunji-Ojo'],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Wale Edun is listed as the Minister of Finance and the Economy.',
  },
  {
    question: 'When did the Nigerian First Republic begin?',
    answer: 'October 1, 1963',
    options: ['October 1, 1960', 'October 1, 1963', 'May 29, 1999', 'January 1, 1973'],
    explanation:
      'According to the NIGERIAN EVENTS AND ITS TIMELINE section, the Nigerian First Republic began on October 1, 1963.',
  },
  {
    question: 'Who is the Minister of Health and Social Welfare?',
    answer: 'Muhammad Ali Pate',
    options: [
      'Muhammad Ali Pate',
      'Iziaq Adekunle Salako',
      'Imaan Sulaiman-Ibrahim',
      'Tunji Alausa',
    ],
    explanation:
      'According to the MINISTERS AND THEIR PORTFOLIOS section, Muhammad Ali Pate is listed as the Minister of Health and Social Welfare.',
  },
]

export { currentAffairs }
