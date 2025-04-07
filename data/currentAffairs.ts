const currentAffairs = [
  // === RA Current Affairs ===
  // MMU Presidents
  {
    question: "Who is listed as the most recent Past MMU President in the document?",
    options: [
      "Dn. Michael Kehinde Oyegbile",
      "Hon. Dr. Dawari George",
      "Dr. Soye Asawo", // Correct [cite: 485]
      "Bro. Ayo Badejo",
    ],
    answer: "Dr. Soye Asawo",
    explanation: "The list of Past MMU Presidents starts with Dr. Soye Asawo as the latest[cite: 485].",
  },
  {
    question: "Which Past MMU President is noted as 'late' in the provided list?",
    options: [
      "Dr. Soye Asawo",
      "Dn. Michael Kehinde Oyegbile", // Correct [cite: 485]
      "Hon. Dr. Dawari George",
      "Dn. James Akala",
    ],
    answer: "Dn. Michael Kehinde Oyegbile",
    explanation: "The document lists Dn. Michael Kehinde Oyegbile (late) as a Past MMU President[cite: 485].",
  },
  {
    question: "Who served as MMU President immediately before Dr. Soye Asawo, according to the list?",
    options: [
      "Hon. Dr. Dawari George",
      "Dn. Michael Kehinde Oyegbile", // Correct [cite: 485]
      "Bro. Ayo Badejo",
      "Dn. James Akala",
    ],
    answer: "Dn. Michael Kehinde Oyegbile",
    explanation: "Dn. Michael Kehinde Oyegbile is listed just before Dr. Soye Asawo in the list of Past MMU Presidents[cite: 485].",
  },
  // RAN Jamborees
  {
    question: "Where and when was the first recorded RAN National Jamboree held?",
    options: [
      "Lagos in 2000",
      "Jos in 1996", // Correct [cite: 487]
      "Port Harcourt in 2004",
      "Abuja in 2012",
    ],
    answer: "Jos in 1996",
    explanation: "The first RAN National Jamboree listed was hosted by Central Baptist Conference in Jos in 1996[cite: 487].",
  },
  {
    question: "Which conference hosted the RAN National Jamboree in 2008?",
    options: [
      "Lagos Baptist Conference",
      "Rivers Baptist Conference",
      "Ondo Baptist Conference", // Correct [cite: 487]
      "United Baptist Conference",
    ],
    answer: "Ondo Baptist Conference",
    explanation: "The RAN National Jamboree in 2008 was hosted by Ondo Baptist Conference in Akure[cite: 487].",
  },
  {
    question: "In which city was the 2012 RAN National Jamboree held?",
    options: [
      "Lagos",
      "Akure",
      "Port Harcourt",
      "Abuja", // Correct [cite: 487]
    ],
    answer: "Abuja",
    explanation: "The 2012 RAN National Jamboree was hosted by United Baptist Conference in Abuja[cite: 487].",
  },
  {
    question: "Which conference hosted the most recent RAN Jamboree listed (2024)?",
    options: [
      "Ibadan Conference",
      "Kaduna Conference", // Correct [cite: 487]
      "Lagos Conferences (East, West, Central)",
      "Rivers Baptist Conference",
    ],
    answer: "Kaduna Conference",
    explanation: "The document lists the 2024 RAN Jamboree as being hosted by Kaduna Conference in Kaduna[cite: 487].",
  },
   {
    question: "When was the RAN Jamboree hosted in Ibadan?",
    options: [
      "2012",
      "2016",
      "2021", // Correct [cite: 487]
      "2024",
    ],
    answer: "2021",
    explanation: "The Ibadan Conference hosted the RAN Jamboree in Ibadan in 2021[cite: 487].",
  },
  // RA Publications
  {
    question: "Which RA publication is described as the 'Ranking Program Booklet'?",
    options: [
      "RA Manual",
      "Embassy Watch",
      "Gifted Hands", // Correct [cite: 487]
      "Standing Tall",
    ],
    answer: "Gifted Hands",
    explanation: "The document lists 'Gifted Hands' as the Ranking Program Booklet[cite: 487].",
  },
  {
    question: "What is the name of the RA publication used for the ASVC program?",
    options: [
      "Gifted Hands",
      "Standing Tall", // Correct [cite: 487]
      "Embassy Watch",
      "Christ Ambassador",
    ],
    answer: "Standing Tall",
    explanation: "'Standing Tall' is listed as the ASVC Booklet[cite: 487].",
  },
  {
    question: "Which RA publication is described as an 'Annual Publication'?",
    options: [
      "RA Manual",
      "Christ Ambassador",
      "Gifted Hands",
      "Embassy Watch", // Correct [cite: 487]
    ],
    answer: "Embassy Watch",
    explanation: "'Embassy Watch' is identified as an Annual Publication[cite: 487].",
  },
   {
    question: "Which RA publication is typically used for weekly meetings?",
    options: [
      "RA Manual",
      "Gifted Hands",
      "Standing Tall",
      "Christ Ambassador", // Correct [cite: 487]
    ],
    answer: "Christ Ambassador",
    explanation: "The document states 'Christ Ambassador' is used for Weekly Meetings[cite: 487].",
  },
  // Marshals
  {
    question: "Who was the first Marshal of the Royal Ambassadors of Nigeria listed, serving from 1990-1996?",
    options: [
      "Couns Jonathan Oyeku",
      "Couns Dawari George",
      "Couns Bayo Oyeniyi", // Correct [cite: 488]
      "Couns FAS Akinola",
    ],
    answer: "Couns Bayo Oyeniyi",
    explanation: "Couns Bayo Oyeniyi from Central Baptist Conference is listed as the first Marshal (1990-1996)[cite: 488].",
  },
  {
    question: "From which conference did Couns Dawari George, who served as Marshal from 2002-2008, hail?",
    options: [
      "Kafanchan Baptist Conference",
      "Lagos Baptist Conference",
      "Oke Ogun Baptist Conference",
      "Rivers Baptist Conference", // Correct [cite: 488]
    ],
    answer: "Rivers Baptist Conference",
    explanation: "Couns Dawari George, Marshal from 2002-2008, was from Rivers Baptist Conference[cite: 488].",
  },
  {
    question: "Who served as the RAN Marshal immediately before the current Marshal, Coun. Bitebo Eregoba?",
    options: [
      "Couns FAS Akinola",
      "Couns Ayobami Adekunle", // Correct [cite: 488]
      "Couns Dawari George",
      "Couns Jonathan Oyeku",
    ],
    answer: "Couns Ayobami Adekunle",
    explanation: "Couns Ayobami Adekunle served from 2014-2021, preceding the current Marshal[cite: 488].",
  },
   {
    question: "Who is the current (6th) Marshal of the Royal Ambassadors of Nigeria as listed in the document?",
    options: [
      "Couns Ayobami Adekunle",
      "Couns FAS Akinola",
      "Coun. Bitebo Eregoba", // Correct [cite: 488, 493]
      "Amb. Okegbenle Taiwo",
    ],
    answer: "Coun. Bitebo Eregoba",
    explanation: "The document identifies Coun. Bitebo Eregoba from Rivers as the 6th and current Marshal, serving from 2021 onwards[cite: 488, 493].",
  },
  // Conference Officers (Example from list provided)
  {
    question: "Who is listed as the Conference Director in the provided example list of officers?",
    options: [
      "Amb. Pleni. Kehinde Adeyinka",
      "Amb. Obafeyisara Adesoji",
      "Amb. Pleni MOB Areo", // Correct
      "Amb. Gabriel Bamidele",
    ],
    answer: "Amb. Pleni MOB Areo",
    explanation: "The example list identifies Amb. Pleni MOB Areo as the Conference Director.",
  },
  {
    question: "What position is held by Amb. Pleni. Kayode Adediran in the example Conference Officers list?",
    options: [
      "Treasurer",
      "PRO",
      "Parade Commander", // Correct
      "Mission Officer",
    ],
    answer: "Parade Commander",
    explanation: "Amb. Pleni. Kayode Adediran (Gideon 2) is listed as the Parade Commander in the example Conference Officers list.",
  },
   {
    question: "Who holds the position of Treasurer in the example Conference Officers list?",
    options: [
        "Amb. Obafeyisara Adesoji",
        "Amb. Gabriel Bamidele", // Correct [cite: 490]
        "Amb. Tosin Adeojo",
        "Amb. Oluwadamilola Idowu"
    ],
    answer: "Amb. Gabriel Bamidele",
    explanation: "Amb. Gabriel Bamidele (Itesiwaju) is listed as the Treasurer in the example Conference Officers list[cite: 490]."
  },
   {
    question: "What position does Amb. Oyeleke Olalekan hold in the example Conference Officers list?",
    options: [
        "Mission Officer",
        "Ranking Officer", // Correct [cite: 492]
        "Recording Secretary",
        "Custodian"
    ],
    answer: "Ranking Officer",
    explanation: "Amb. Oyeleke Olalekan (Hephzibah) is listed as the Ranking Officer[cite: 492]."
  },
  // National Officers (RAN)
  {
    question: "Besides the Marshal, who holds the position of National Secretary for RAN?",
    options: [
      "Amb. Efeturi Kori-siakpere",
      "Amb. Wunjir Ninfas",
      "Amb. Okegbenle Taiwo", // Correct [cite: 493]
      "Amb. Orogun Ademola",
    ],
    answer: "Amb. Okegbenle Taiwo",
    explanation: "Amb. Okegbenle Taiwo is listed as the National Secretary[cite: 493].",
  },
  {
    question: "What position does Amb. Oluwasola Oyediran hold in the RAN National Executive?",
    options: [
      "Treasurer",
      "Financial Secretary",
      "Auditor",
      "Mission Officer", // Correct
    ],
    answer: "Mission Officer",
    explanation: "Amb. Oluwasola Oyediran is listed as the Mission Officer.",
  },
  {
    question: "Who is listed as the National ASVC Coordinator?",
    options: [
      "Amb. Segun Bolarinde",
      "Amb. Daniel Ayuba",
      "Amb. Eegundiran Biodun", // Correct
      "Coun. Ayo Adekunle",
    ],
    answer: "Amb. Eegundiran Biodun",
    explanation: "Amb. Eegundiran Biodun holds the position of National ASVC Coordinator.",
  },
   {
    question: "Who is the National Parade Commandant according to the list?",
    options: [
        "Amb. Adisa Buxton",
        "Amb. Segun Bolarinde",
        "Amb. Daniel Ayuba", // Correct [cite: 496]
        "Amb. Eegundiran Biodun"
    ],
    answer: "Amb. Daniel Ayuba",
    explanation: "Amb. Daniel Ayuba is listed as the National Parade Commandant[cite: 496]."
  },
   {
    question: "What position does Amb. Adisa Buxton hold in the RAN National list?",
    options: [
        "Auditor",
        "PRO", // Correct [cite: 495]
        "Ranking Officer",
        "Treasurer"
    ],
    answer: "PRO",
    explanation: "Amb. Adisa Buxton is listed as the Public Relations Officer (PRO)[cite: 495]."
  },

  // === Nigerian Current Affairs ===
  // Leaders & Facts
  {
    question: "Who was the first president of Nigeria?",
    options: [
      "Abubakar Tafawa Balewa",
      "Ahmadu Bello",
      "Dr. Nnamdi Azikiwe", // Correct
      "Herbert Macaulay",
    ],
    answer: "Dr. Nnamdi Azikiwe",
    explanation: "The document identifies Dr. Nnamdi Azikiwe as the first president of Nigeria.",
  },
  {
    question: "Who was Nigeria's first Inspector General of Police?",
    options: [
      "Kayode Egbetokun",
      "Mr. C. W. Duncan", // Correct [cite: 498]
      "Louis Edet",
      "Tafa Balogun",
    ],
    answer: "Mr. C. W. Duncan",
    explanation: "Mr. C. W. Duncan (serving 1930-1935) is listed as Nigeria's first IGP[cite: 498].",
  },
  {
    question: "Approximately how many ethnic groups are there in Nigeria?",
    options: [
      "About 100",
      "About 150",
      "About 250", // Correct [cite: 499]
      "About 350",
    ],
    answer: "About 250",
    explanation: "The document states there are about 250 ethnic groups in Nigeria[cite: 499].",
  },
  {
    question: "When does Nigeria now celebrate its Democracy Day?",
    options: [
      "October 1st",
      "May 29th",
      "January 15th",
      "June 12th", // Correct [cite: 499]
    ],
    answer: "June 12th",
    explanation: "Nigeria now celebrates Democracy Day on June 12th[cite: 499].",
  },
  {
    question: "Who is the current Inspector General of Police mentioned in the document?",
    options: [
      "Mr. C. W. Duncan",
      "Mohammed Adamu",
      "Kayode Egbetokun", // Correct
      "Ibrahim Idris",
    ],
    answer: "Kayode Egbetokun",
    explanation: "Kayode Egbetokun is listed as the current Inspector General of Police.",
  },
  {
    question: "Which state is the largest in Nigeria by landmass?",
    options: [
      "Borno State",
      "Taraba State",
      "Niger State", // Correct [cite: 501]
      "Kano State",
    ],
    answer: "Niger State",
    explanation: "Niger State is identified as the largest state in Nigeria by landmass[cite: 501].",
  },
  {
    question: "Which Nigerian state has the highest number of Local Government Areas (LGAs)?",
    options: [
      "Lagos State",
      "Kano State", // Correct [cite: 502]
      "Oyo State",
      "Kaduna State",
    ],
    answer: "Kano State",
    explanation: "Kano State is listed as having the highest number of LGAs, with 44[cite: 502].",
  },
  {
    question: "Which state is known for generating the highest Internally Generated Revenue (IGR) in Nigeria?",
    options: [
      "Rivers State",
      "Kano State",
      "Ogun State",
      "Lagos State", // Correct [cite: 503]
    ],
    answer: "Lagos State",
    explanation: "Lagos State is known for generating the highest IGR[cite: 503].",
  },
  {
    question: "Who is named as the current Chief Justice of the Supreme Court?",
    options: [
      "Tanko Muhammad",
      "Walter Onnoghen",
      "Olukayode Ariwoola", // Assuming previous CJN, document lists acting/next?
      "Justice Kudirat Kekere-Ekun", // Correct as listed [cite: 504]
    ],
    answer: "Justice Kudirat Kekere-Ekun",
    explanation: "The document lists Justice Kudirat Kekere-Ekun as the current Chief Justice[cite: 504]. (Note: This might reflect an acting capacity or specific time).",
  },
  {
    question: "What is the name of the current Speaker of the House of Representatives listed?",
    options: [
      "Femi Gbajabiamila",
      "Yakubu Dogara",
      "Tajudeen Abbas", // Correct [cite: 505]
      "Aminu Tambuwal",
    ],
    answer: "Tajudeen Abbas",
    explanation: "Tajudeen Abbas is identified as the current Speaker of the House of Representatives[cite: 505].",
  },
  {
    question: "Who is listed as the current Governor of the Central Bank of Nigeria (CBN)?",
    options: [
      "Godwin Emefiele",
      "Sanusi Lamido Sanusi",
      "Charles Soludo",
      "Mr. Olayemi Cardoso", // Correct [cite: 505, 528]
    ],
    answer: "Mr. Olayemi Cardoso",
    explanation: "Mr. Olayemi Cardoso (also Dr. Olayemi Michael Cardoso) is named as the current CBN Governor[cite: 505, 528].",
  },
  {
    question: "Who is Nigeria's Minister of Education according to the document?",
    options: [
      "Adamu Adamu",
      "Nyesom Wike",
      "Prof. Tahir Mamman", // Correct [cite: 506]
      "Tunji Alausa", // Listed as Education Minister, but Tahir Mamman is listed first. Check portfolios if different roles.
    ],
    answer: "Prof. Tahir Mamman",
    explanation: "Prof. Tahir Mamman is listed as Nigeria's Minister of Education[cite: 506]. (Note: Tunji Alausa is also listed as Education[cite: 541], possibly State or a different designation based on full list context).",
   },
   {
     question: "Which country borders Nigeria to the west?",
     options: [
       "Niger",
       "Chad",
       "Cameroon",
       "Republic of Benin", // Correct [cite: 507, 520]
     ],
     answer: "Republic of Benin",
     explanation: "Nigeria shares its western border with the Republic of Benin[cite: 507, 520].",
   },
   {
     question: "Who was the first Senate President of Nigeria?",
     options: [
       "Abubakar Tafawa Balewa",
       "Ahmadu Bello",
       "Herbert Macaulay",
       "Dr. Nnamdi Azikiwe", // Correct [cite: 507]
     ],
     answer: "Dr. Nnamdi Azikiwe",
     explanation: "Dr. Nnamdi Azikiwe was Nigeria's first Senate President[cite: 507].",
   },
   {
     question: "Who formed the first political party in Nigeria?",
     options: [
       "Nnamdi Azikiwe",
       "Obafemi Awolowo",
       "Herbert Macaulay", // Correct [cite: 508]
       "Ahmadu Bello",
     ],
     answer: "Herbert Macaulay",
     explanation: "Herbert Macaulay formed the first political party in Nigeria[cite: 508], the NNDP[cite: 519].",
   },
   {
     question: "What does the eagle in the Nigerian coat of arms represent?",
     options: [
       "Peace",
       "Agriculture",
       "Strength", // Correct [cite: 508]
       "Unity",
     ],
     answer: "Strength",
     explanation: "The eagle in the Nigerian coat of arms represents strength[cite: 508].",
   },
    {
     question: "How many colors are in the Nigerian flag?",
     options: [
       "One",
       "Two", // Correct [cite: 509]
       "Three",
       "Four",
     ],
     answer: "Two",
     explanation: "The Nigerian flag has two colors: green and white[cite: 509].",
   },
    {
     question: "How many geopolitical zones does Nigeria have?",
     options: [
       "Four",
       "Five",
       "Six", // Correct [cite: 510]
       "Seven",
     ],
     answer: "Six",
     explanation: "Nigeria is divided into six geopolitical zones[cite: 510].",
   },
    {
     question: "What was the first capital city of Nigeria?",
     options: [
       "Lagos",
       "Abuja",
       "Calabar", // Correct [cite: 510]
       "Kano",
     ],
     answer: "Calabar",
     explanation: "Calabar was the first capital city of Nigeria[cite: 510].",
   },
   {
     question: "In which town and state was crude oil first discovered in Nigeria?",
     options: [
       "Port Harcourt, Rivers State",
       "Warri, Delta State",
       "Oloibiri, Bayelsa State", // Correct [cite: 511]
       "Eket, Akwa Ibom State",
     ],
     answer: "Oloibiri, Bayelsa State",
     explanation: "Crude oil was first discovered in the Oloibiri Oilfield, located in Oloibiri, Ogbia LGA of Bayelsa State[cite: 511].",
   },
   {
     question: "Who was the first Nigerian to win a Nobel Prize in Literature?",
     options: [
       "Chinua Achebe",
       "Wole Soyinka", // Correct [cite: 512]
       "Ben Okri",
       "Chimamanda Ngozi Adichie",
     ],
     answer: "Wole Soyinka",
     explanation: "Wole Soyinka was the first Nigerian Nobel Laureate in Literature[cite: 512].",
   },
   {
     question: "When was the Nigerian Naira introduced as the official currency?",
     options: [
       "October 1, 1960",
       "January 15, 1966",
       "January 1, 1973", // Correct [cite: 512]
       "October 1, 1979",
     ],
     answer: "January 1, 1973",
     explanation: "The Nigerian Naira was introduced on January 1, 1973[cite: 512].",
   },
    {
     question: "Which constitution did the N.C.N.C delegation protest against in London in 1947?",
     options: [
       "Clifford Constitution",
       "Lyttleton Constitution",
       "Macpherson Constitution",
       "The Richard's Constitution", // Correct
     ],
     answer: "The Richard's Constitution",
     explanation: "In 1947, the N.C.N.C sent a delegation to London to protest against the Richard's Constitution.",
   },
   {
     question: "Who was the first Governor-General of colonial Nigeria?",
     options: [
       "Sir Hugh Clifford",
       "Sir Arthur Richards",
       "Lord Fredrick Lugard", // Correct [cite: 515]
       "Sir James Robertson",
     ],
     answer: "Lord Fredrick Lugard",
     explanation: "Lord Fredrick Lugard served as the first Governor-General of colonial Nigeria[cite: 515].",
   },
    {
     question: "When was the first general election held in Nigeria?",
     options: [
       "1922",
       "1947",
       "1954",
       "1959", // Correct [cite: 516]
     ],
     answer: "1959",
     explanation: "The first general election in Nigeria was held in 1959[cite: 516].",
   },
   {
     question: "In which year were traditional rulers restricted to ceremonial roles by local government reforms?",
     options: [
       "1966",
       "1976", // Correct [cite: 517]
       "1979",
       "1983",
     ],
     answer: "1976",
     explanation: "The local government reforms of 1976 restricted traditional rulers to ceremonial roles[cite: 517].",
   },
   {
     question: "Which constitution first recognized local government as the third tier of government in Nigeria?",
     options: [
       "The 1963 Constitution",
       "The 1976 Local Government Reform",
       "The 1979 Constitution", // Correct [cite: 518]
       "The 1999 Constitution",
     ],
     answer: "The 1979 Constitution",
     explanation: "The 1979 Constitution recognized local government as the third tier of government[cite: 518].",
   },
    {
     question: "Who was the leader of the Northern People's Congress (NPC)?",
     options: [
       "Abubakar Tafawa Balewa",
       "Herbert Macaulay",
       "Nnamdi Azikiwe",
       "Ahmadu Bello", // Correct [cite: 518]
     ],
     answer: "Ahmadu Bello",
     explanation: "Ahmadu Bello was the leader of the Northern People's Congress (NPC)[cite: 518].",
   },
   {
     question: "What was the name of the first political party in Nigeria?",
     options: [
       "Northern People's Congress (NPC)",
       "Action Group (AG)",
       "National Council of Nigeria and the Cameroons (NCNC)",
       "Nigerian National Democratic Party (NNDP)", // Correct [cite: 519]
     ],
     answer: "Nigerian National Democratic Party (NNDP)",
     explanation: "The Nigerian National Democratic Party (NNDP), formed by Herbert Macaulay, was the first political party in Nigeria[cite: 508, 519].",
   },
   {
     question: "Which of these countries does NOT share a boundary with Nigeria?",
     options: [
       "Niger",
       "Chad",
       "Ghana", // Correct
       "Cameroon",
     ],
     answer: "Ghana",
     explanation: "Nigeria shares boundaries with the Republic of Benin (west), Chad and Cameroon (east), and Niger (north)[cite: 520]. Ghana is further west.",
   },
    {
     question: "What was the name of the colonial flag replaced by the current Nigerian flag?",
     options: [
       "The Nigerian Ensign",
       "The Royal Niger Company Flag",
       "The Union Jack", // Correct [cite: 521]
       "The Green Ensign",
     ],
     answer: "The Union Jack",
     explanation: "The current Nigerian flag replaced the colonial flag known as the Union Jack[cite: 521].",
   },
   {
     question: "Who is the current Senate President listed in the document?",
     options: [
       "Bukola Saraki",
       "Ahmed Lawan",
       "David Mark",
       "Obong Godswill Obot Akpabio", // Correct
     ],
     answer: "Obong Godswill Obot Akpabio",
     explanation: "Obong Godswill Obot Akpabio is named as the current Senate President.",
   },
   {
     question: "When was the 1000 Naira note introduced in Nigeria?",
     options: [
       "1999",
       "2000",
       "2001",
       "October 12, 2005", // Correct [cite: 523]
     ],
     answer: "October 12, 2005",
     explanation: "The 1000 Naira note was introduced on October 12, 2005[cite: 523].",
   },
    {
     question: "When was the 200 Naira note introduced?",
     options: [
       "1999",
       "2000", // Correct [cite: 523]
       "2001",
       "2005",
     ],
     answer: "2000",
     explanation: "The 200 Naira note was introduced in the year 2000[cite: 523].",
   },
   {
     question: "Who served as Nigeria's first Prime Minister?",
     options: [
       "Nnamdi Azikiwe",
       "Abubakar Tafawa Balewa", // Correct [cite: 524]
       "Ahmadu Bello",
       "Shehu Shagari",
     ],
     answer: "Abubakar Tafawa Balewa",
     explanation: "Abubakar Tafawa Balewa was Nigeria's first Prime Minister[cite: 524].",
   },
   {
     question: "Who was Nigeria's first Executive President?",
     options: [
       "Nnamdi Azikiwe",
       "Abubakar Tafawa Balewa",
       "Alhaji Shehu Aliyu Shagari", // Correct [cite: 524]
       "Yakubu Gowon",
     ],
     answer: "Alhaji Shehu Aliyu Shagari",
     explanation: "Alhaji Shehu Aliyu Shagari is identified as Nigeria's first Executive President[cite: 524].",
   },
    {
     question: "In which year was the first military coup carried out in Nigeria?",
     options: [
       "1960",
       "1963",
       "1966", // Correct [cite: 525, 536]
       "1975",
     ],
     answer: "1966",
     explanation: "The first military coup in Nigeria occurred in 1966[cite: 525], specifically January 15, 1966[cite: 536].",
   },
   {
     question: "How many Local Government Areas (LGAs) are there currently in Nigeria?",
     options: [
       "36",
       "44",
       "774", // Correct [cite: 525]
       "109",
     ],
     answer: "774",
     explanation: "Nigeria currently has 774 Local Government Areas[cite: 525].",
   },
   {
     question: "Who is listed as the current Minister of Petroleum?",
     options: [
       "Heineken Lokpobiri",
       "Timipre Sylva",
       "Alhaji Bola Ahmed Tinubu", // Correct [cite: 526]
       "Ibe Kachikwu",
     ],
     answer: "Alhaji Bola Ahmed Tinubu",
     explanation: "Alhaji Bola Ahmed Tinubu (the President) is listed as the current Minister of Petroleum[cite: 526, 538].",
   },
    {
     question: "Who holds the position of Minister of State for Petroleum Resources (Oil) according to the ministerial list?",
     options: [
       "Ekperikpe Ekpo",
       "Senator Heineken Lokpobiri", // Correct [cite: 527, 539]
       "Dele Alake",
       "Bosun Tijani",
     ],
     answer: "Senator Heineken Lokpobiri",
     explanation: "Senator Heineken Lokpobiri is listed as the Minister of State for Petroleum Resources (Oil)[cite: 527, 539].",
   },
    {
     question: "What was the name of the first TV station in Nigeria?",
     options: [
       "NTA (Nigerian Television Authority)",
       "AIT (Africa Independent Television)",
       "WNTV (Western Nigerian Government Broadcasting Corporation)", // Correct [cite: 528]
       "Channels Television",
     ],
     answer: "WNTV (Western Nigerian Government Broadcasting Corporation)",
     explanation: "The first TV station in Nigeria was the Western Nigerian Government Broadcasting Corporation (WNTV), established in 1959[cite: 528].",
   },
   {
     question: "Who is credited with stopping the killing of twins in Nigeria?",
     options: [
       "Flora Shaw",
       "Funmilayo Ransome Kuti",
       "Mary Slessor", // Correct [cite: 529]
       "Queen Elizabeth II",
     ],
     answer: "Mary Slessor",
     explanation: "Mary Slessor is credited with stopping the practice of killing twins in certain parts of Nigeria[cite: 529].",
   },
   {
     question: "Who was the first woman to drive a car in Nigeria?",
     options: [
       "Mary Slessor",
       "Chineyere Kalu",
       "Funmilayo Ransome Kuti", // Correct [cite: 530]
       "Flora Shaw",
     ],
     answer: "Funmilayo Ransome Kuti",
     explanation: "Funmilayo Ransome Kuti is known as the first woman to drive a car in Nigeria[cite: 530].",
   },
   {
     question: "Who was the first woman to pilot an aircraft in Nigeria?",
     options: [
       "Funmilayo Ransome Kuti",
       "Chineyere Kalu", // Correct [cite: 531]
       "Blessing Liman",
       "Hadiza Lantana Oboh",
     ],
     answer: "Chineyere Kalu",
     explanation: "Chineyere Kalu holds the distinction of being the first woman to pilot an aircraft in Nigeria[cite: 531].",
   },
    {
     question: "Who was the first man recorded to buy a car in Nigeria?",
     options: [
       "Herbert Macaulay",
       "Lord Lugard",
       "Bob Jensen", // Correct [cite: 531]
       "Nnamdi Azikiwe",
     ],
     answer: "Bob Jensen",
     explanation: "The document lists Bob Jensen as the first man to buy a car in Nigeria[cite: 531].",
   },
   {
     question: "Who designed the Nigerian flag?",
     options: [
       "Flora Shaw",
       "Ben Enwonwu",
       "Michael Taiwo Akinkunmi", // Correct [cite: 532]
       "Wole Soyinka",
     ],
     answer: "Michael Taiwo Akinkunmi",
     explanation: "Michael Taiwo Akinkunmi designed the Nigerian flag[cite: 532].",
   },
   {
     question: "Who is credited with giving Nigeria its name?",
     options: [
       "Lord Lugard",
       "Queen Victoria",
       "Flora Shaw", // Correct [cite: 532]
       "Herbert Macaulay",
     ],
     answer: "Flora Shaw",
     explanation: "Flora Shaw, who later married Lord Lugard, is credited with coining the name 'Nigeria'[cite: 532].",
   },
  // Nigerian Events Timeline
  {
    question: "On what date was the removal of fuel subsidy announced by President Tinubu?",
    options: [
      "January 19, 2023",
      "May 29, 2023", // Correct [cite: 532]
      "October 20, 2020",
      "April 7, 2014",
    ],
    answer: "May 29, 2023",
    explanation: "The removal of the fuel subsidy by President Tinubu occurred on May 29, 2023[cite: 532].",
  },
   {
    question: "When did the #EndSARS protests, including the Lekki Toll Gate shooting, primarily occur?",
    options: [
      "March 20, 2021",
      "May 31, 2018",
      "October 20, 2020", // Correct [cite: 532]
      "April 14, 2014",
    ],
    answer: "October 20, 2020",
    explanation: "The #EndSARS protest and Lekki Toll Gate shooting event date is listed as October 20, 2020[cite: 532].",
  },
   {
    question: "In which year did Nollywood become recognized as the second largest film industry globally, according to the timeline?",
    options: [
      "2015",
      "2018",
      "2019", // Correct [cite: 532]
      "2021",
    ],
    answer: "2019",
    explanation: "The timeline notes Nollywood becoming the second largest film industry on July 12, 2019[cite: 532].",
  },
   {
    question: "When was the #NotTooYoungToRun bill passed?",
    options: [
      "May 29, 2015",
      "May 31, 2018", // Correct [cite: 533]
      "April 14, 2014",
      "December 16, 2011",
    ],
    answer: "May 31, 2018",
    explanation: "The #NotTooYoungToRun bill was passed on May 31, 2018[cite: 533].",
  },
   {
    question: "When were the Chibok girls kidnapped by Boko Haram?",
    options: [
      "October 2, 2012",
      "April 7, 2014",
      "April 14, 2014", // Correct [cite: 533]
      "May 29, 2015",
    ],
    answer: "April 14, 2014",
    explanation: "The Chibok girls kidnapping occurred on April 14, 2014[cite: 533].",
  },
   {
    question: "When did Nigeria become Africa's largest economy, according to the timeline?",
    options: [
      "May 5, 2010",
      "April 21, 2005",
      "May 29, 1999",
      "April 7, 2014", // Correct [cite: 533]
    ],
    answer: "April 7, 2014",
    explanation: "Nigeria became Africa's largest economy on April 7, 2014[cite: 533].",
  },
   {
    question: "Who became President of Nigeria on May 29, 2007?",
    options: [
      "Olusegun Obasanjo",
      "Goodluck Jonathan",
      "Umaru Musa Yar'Adua", // Correct [cite: 533]
      "Muhammadu Buhari",
    ],
    answer: "Umaru Musa Yar'Adua",
    explanation: "Umaru Musa Yar'Adua became President on May 29, 2007[cite: 533].",
  },
   {
    question: "In which year did Nigeria clear its $30 billion Paris Club debt?",
    options: [
      "1999",
      "2005", // Correct [cite: 533]
      "2007",
      "2010",
    ],
    answer: "2005",
    explanation: "Nigeria cleared its Paris Club debt on April 21, 2005[cite: 533].",
  },
   {
    question: "When did the Fourth Republic of Nigeria begin?",
    options: [
      "October 1, 1979",
      "August 27, 1993",
      "June 8, 1998",
      "May 29, 1999", // Correct [cite: 533]
    ],
    answer: "May 29, 1999",
    explanation: "The start of the Fourth Republic is dated May 29, 1999[cite: 533].",
  },
   {
    question: "In which year did Nigeria win its first Olympic Gold medal in Football?",
    options: [
      "1994",
      "1996", // Correct [cite: 534]
      "1998",
      "2000",
    ],
    answer: "1996",
    explanation: "Nigeria won Olympic Gold in Football on August 3, 1996[cite: 534].",
  },
   {
    question: "Who was overthrown by General Sani Abacha on November 17, 1993?",
    options: [
      "Ibrahim Babangida",
      "Ernest Shonekan", // Correct [cite: 534]
      "MKO Abiola",
      "Shehu Shagari",
    ],
    answer: "Ernest Shonekan",
    explanation: "General Sani Abacha overthrew Ernest Shonekan on November 17, 1993[cite: 534].",
  },
    {
    question: "The annulment of which presidential election occurred on June 12, 1993?",
    options: [
      "1979 Election",
      "1983 Election",
      "1993 Election", // Correct [cite: 534]
      "1999 Election",
    ],
    answer: "1993 Election",
    explanation: "The Presidential Election held on June 12, 1993, was famously annulled[cite: 534].",
  },
    {
    question: "When did Abuja officially become Nigeria's capital city?",
    options: [
      "October 1, 1960",
      "February 13, 1976",
      "June 4, 1986",
      "December 12, 1991", // Correct [cite: 534]
    ],
    answer: "December 12, 1991",
    explanation: "Abuja became Nigeria's capital on December 12, 1991[cite: 534].",
  },
    {
    question: "What major economic policy was introduced by the Babangida regime in 1986?",
    options: [
      "Naira Redesign",
      "Fuel Subsidy Removal",
      "Structural Adjustment Program (SAP)", // Correct [cite: 534]
      "Cashless Policy",
    ],
    answer: "Structural Adjustment Program (SAP)",
    explanation: "The Structural Adjustment Program (SAP) was introduced on June 4, 1986[cite: 534].",
  },
   {
    question: "In which year did Nigeria win its first Africa Cup of Nations (AFCON) title?",
    options: [
      "1976",
      "1980", // Correct [cite: 535]
      "1994",
      "2013",
    ],
    answer: "1980",
    explanation: "Nigeria won its first AFCON title on March 22, 1980[cite: 535].",
  },
  {
    question: "When was the National Youth Service Corps (NYSC) introduced?",
    options: [
      "July 29, 1975",
      "February 13, 1976",
      "May 22, 1977", // Correct [cite: 535] (Note: Manual has 1977, common knowledge often 1973. Going by manual.)
      "October 1, 1979",
    ],
    answer: "May 22, 1977",
    explanation: "The timeline lists the introduction of NYSC as May 22, 1977[cite: 535].",
  },
   {
    question: "When did the Nigerian Civil War (Biafran War) end?",
    options: [
      "July 6, 1967",
      "January 15, 1970", // Correct [cite: 535]
      "July 29, 1975",
      "October 1, 1979",
    ],
    answer: "January 15, 1970",
    explanation: "The end of the Biafran War is dated January 15, 1970[cite: 535].",
  },
   {
    question: "When did the Nigerian Civil War (Biafran War) start?",
    options: [
      "January 15, 1966",
      "July 29, 1966",
      "February 23, 1966",
      "July 6, 1967", // Correct [cite: 535]
    ],
    answer: "July 6, 1967",
    explanation: "The start of the Biafran War is listed as July 6, 1967[cite: 535].",
  },
    {
    question: "When did Nigeria gain independence?",
    options: [
      "October 1, 1954",
      "March 4, 1958",
      "October 1, 1960", // Correct [cite: 537]
      "October 1, 1963",
    ],
    answer: "October 1, 1960",
    explanation: "Nigeria gained independence on October 1, 1960[cite: 537].",
  },
  {
    question: "When was the Central Bank of Nigeria (CBN) established?",
    options: [
      "October 1, 1960",
      "October 22, 1954",
      "March 14, 1957",
      "March 4, 1958", // Correct [cite: 537]
    ],
    answer: "March 4, 1958",
    explanation: "The CBN was established on March 4, 1958[cite: 537].",
  },
    {
    question: "When was the Clifford Constitution introduced?",
    options: [
      "1914",
      "1922", // Correct [cite: 537]
      "1929",
      "1946",
    ],
    answer: "1922",
    explanation: "The Clifford Constitution was introduced on March 12, 1922[cite: 537].",
  },
   {
    question: "In what year did the Aba Women's Riot occur?",
    options: [
      "1922",
      "1929", // Correct [cite: 537]
      "1946",
      "1954",
    ],
    answer: "1929",
    explanation: "The Aba Women's Riot took place on November 20, 1929[cite: 537].",
  },
  // Ministers and Portfolios
  {
    question: "Who holds the portfolio for Budget and Economic Planning?",
    options: [
      "Abubakar Kyari",
      "Abubakar Momoh",
      "Abubakar Atiku Bagudu", // Correct [cite: 537]
      "Adebayo Adelabu",
    ],
    answer: "Abubakar Atiku Bagudu",
    explanation: "Abubakar Atiku Bagudu is the Minister of Budget and Economic Planning[cite: 537].",
  },
  {
    question: "What is the portfolio of Adebayo Adelabu?",
    options: [
      "Agriculture and Food Security",
      "Housing and Urban Development",
      "Power", // Correct [cite: 537]
      "Budget and Economic Planning",
    ],
    answer: "Power",
    explanation: "Adebayo Adelabu is the Minister of Power[cite: 537].",
  },
  {
    question: "Who is the Minister of State for Defence?",
    options: [
      "Aliyu Sabi Abdullahi",
      "Ayodele Olawande",
      "Balarabe Abbas Lawal",
      "Bello Matawalle", // Correct
    ],
    answer: "Bello Matawalle",
    explanation: "Bello Matawalle is listed as the Minister of State for Defence.",
  },
  {
    question: "What is the portfolio of Bosun Tijani?",
    options: [
      "Works",
      "Solid Minerals Development",
      "Communications, Innovation and Digital Economy", // Correct [cite: 539]
      "Finance (State)",
    ],
    answer: "Communications, Innovation and Digital Economy",
    explanation: "Bosun Tijani is the Minister of Communications, Innovation and Digital Economy[cite: 539].",
  },
  {
    question: "Who is the Minister of Works?",
    options: [
      "Bosun Tijani",
      "Dave Umahi", // Correct [cite: 539]
      "Dele Alake",
      "Festus Keyamo",
    ],
    answer: "Dave Umahi",
    explanation: "Dave Umahi holds the portfolio for Works[cite: 539].",
  },
   {
    question: "Who is the Minister of Solid Minerals Development?",
    options: [
      "Dave Umahi",
      "Dele Alake", // Correct [cite: 539]
      "Doris Anite",
      "Ekperikpe Ekpo",
    ],
    answer: "Dele Alake",
    explanation: "Dele Alake is listed as the Minister of Solid Minerals Development[cite: 539].",
  },
   {
    question: "What portfolio does Festus Keyamo hold?",
    options: [
      "Petroleum Resources (Gas) (State)",
      "Aviation and Aerospace Development", // Correct [cite: 539]
      "Marine and Blue Economy",
      "Art, Culture and the Creative Economy",
    ],
    answer: "Aviation and Aerospace Development",
    explanation: "Festus Keyamo is the Minister of Aviation and Aerospace Development[cite: 539].",
  },
    {
    question: "Who is the Minister for Marine and Blue Economy?",
    options: [
      "Festus Keyamo",
      "Gboyega Oyetola", // Correct [cite: 539]
      "Hannatu Musawa",
      "Heineken Lokpobiri",
    ],
    answer: "Gboyega Oyetola",
    explanation: "Gboyega Oyetola holds the portfolio for Marine and Blue Economy[cite: 539].",
  },
   {
    question: "What is the portfolio of Hannatu Musawa?",
    options: [
      "Marine and Blue Economy",
      "Art, Culture and the Creative Economy", // Correct [cite: 539]
      "Petroleum Resources (Oil) (State)",
      "Police Affairs",
    ],
    answer: "Art, Culture and the Creative Economy",
    explanation: "Hannatu Musawa is the Minister of Art, Culture and the Creative Economy[cite: 539].",
  },
   {
    question: "Who is the Minister of Justice?",
    options: [
      "Jumoke Oduwole",
      "Lateef Fagbemi", // Correct
      "Mariya Mahmoud Bunkure",
      "Mohammed Badaru Abubakar",
    ],
    answer: "Lateef Fagbemi",
    explanation: "Lateef Fagbemi holds the position of Minister of Justice.",
  },
   {
    question: "What is the portfolio of Mohammed Badaru Abubakar?",
    options: [
      "Justice",
      "Federal Capital Territory (State)",
      "Defence", // Correct [cite: 540]
      "Information and National Orientation",
    ],
    answer: "Defence",
    explanation: "Mohammed Badaru Abubakar is the Minister of Defence[cite: 540].",
  },
   {
    question: "Who is the Minister of Information and National Orientation?",
    options: [
      "Mohammed Badaru Abubakar",
      "Mohammed Idris Malagi", // Correct [cite: 540]
      "Mohammed Maigari Dingyadi",
      "Muhammad Ali Pate",
    ],
    answer: "Mohammed Idris Malagi",
    explanation: "Mohammed Idris Malagi is the Minister of Information and National Orientation[cite: 540].",
  },
   {
    question: "What portfolio does Muhammad Ali Pate hold?",
    options: [
      "Labour and Employment",
      "Health and Social Welfare", // Correct [cite: 540]
      "Livestock Development",
      "Humanitarian Affairs and Poverty Reduction",
    ],
    answer: "Health and Social Welfare",
    explanation: "Muhammad Ali Pate is the Minister of Health and Social Welfare[cite: 540].",
  },
   {
    question: "Who is the Minister for the Federal Capital Territory?",
    options: [
      "Nkiruka Onyejeocha",
      "Nyesom Wike", // Correct [cite: 541]
      "Olubunmi Tunji-Ojo",
      "Sa’idu Ahmed Alkali",
    ],
    answer: "Nyesom Wike",
    explanation: "Nyesom Wike is listed as the Minister of the Federal Capital Territory[cite: 541].",
  },
   {
    question: "What is the portfolio of Olubunmi Tunji-Ojo?",
    options: [
      "Federal Capital Territory",
      "Interior", // Correct [cite: 541]
      "Transportation",
      "Steel Development",
    ],
    answer: "Interior",
    explanation: "Olubunmi Tunji-Ojo is the Minister of Interior[cite: 541].",
  },
   {
    question: "Who is the Minister of Innovation, Science and Technology?",
    options: [
      "Uba Maigari Ahmadu",
      "Uche Nnaji", // Correct [cite: 541]
      "Wale Edun",
      "Yusuf Sununu",
    ],
    answer: "Uche Nnaji",
    explanation: "Uche Nnaji holds the portfolio for Innovation, Science and Technology[cite: 541].",
  },
   {
    question: "What is the portfolio of Wale Edun?",
    options: [
      "Innovation, Science and Technology",
      "Finance and the Economy", // Correct [cite: 541]
      "Housing and Urban Development (State)",
      "Humanitarian Affairs and Poverty Reduction (State)",
    ],
    answer: "Finance and the Economy",
    explanation: "Wale Edun is the Minister of Finance and the Economy[cite: 541].",
  },
   {
    question: "Who is the Minister of Foreign Affairs?",
    options: [
      "Yusuf Sununu",
      "Yusuf Tuggar", // Correct [cite: 541]
      "Zephaniah Jisalo",
      "Bianca Odumegwu-Ojukwu", // Minister of State for Foreign Affairs [cite: 538]
    ],
    answer: "Yusuf Tuggar",
    explanation: "Yusuf Tuggar is listed as the Minister of Foreign Affairs[cite: 541].",
  },
   {
    question: "What portfolio does Zephaniah Jisalo hold?",
    options: [
      "Foreign Affairs",
      "Special Duties and Inter-governmental Affairs", // Correct [cite: 541]
      "Finance and the Economy",
      "Steel Development",
    ],
    answer: "Special Duties and Inter-governmental Affairs",
    explanation: "Zephaniah Jisalo is the Minister of Special Duties and Inter-governmental Affairs[cite: 541].",
  },
];


export { currentAffairs }
