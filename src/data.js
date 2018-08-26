export const schedules = [
  {
    day: 31,
    month: 'AUG',
    dayOfWeek: 'Friday',
    free: true,
    events: [
      {
        time: '5:15 PM',
        type: 'TALK',
        title: 'My type design philosophy',
        speaker: 'Martin Majoor',
        venue: 'Mahaweli Centre'
      }
    ]
  },
  {
    day: '01',
    month: 'SEP',
    dayOfWeek: 'Saturday',
    free: false,
    events: [
      {
        time: '8:00 AM',
        specialEventTitle: 'REGISTRATION',
        venue: 'RCU Skills Centre'
      },
      {
        time: '9:00 AM',
        specialEventTitle: 'WORKSHOPS',
        venue: 'RCU Skills Centre'
      },

      {
        time: '12:30 PM',
        specialEventTitle: 'WALK TO MAHAWELI CENTRE & LUNCH',
        venue: 'Mahaweli Centre'
      },
      {
        time: '2:00 PM',
        specialEventTitle: 'CONFERENCE STARTS',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '2:00 PM',
        type: 'WELCOME',
        title: 'Introduction to Dutch-Sri Lankan shared typography heritage project',
        speaker: 'Pathum Egodawatta',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '2:15 PM',
        type: 'KEYNOTE 1',
        title: 'History of sans-serifs',
        speaker: 'Martin Majoor',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '3:00 PM',
        type: 'TALK',
        title: 'The Dutch Press in Ceylon and its typography',
        speaker: 'Pathum Egodawatta',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '3:40 PM',
        type: 'TALK',
        title: 'Reconstruction of letterforms; from handwritten to print',
        speaker: 'Dr Sumantri Samarawickrama',
        venue: 'Mahaweli Centre Auditorium'
      },

      {
        time: '4:10 PM',
        specialEventTitle: 'BREAK',
        venue: 'Mahaweli Centre'
      },
      {
        time: '4:40 PM',
        type: 'SPEECH',
        title: 'Embassy of the Netherlands in Sri Lanka',
        speaker: 'by the Deputy Head of Mission',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '5:00 PM',
        type: 'SPEECH',
        title: 'Sinhala and Thamil on Coins and Currency of Dutch Ceylon',
        speaker: 'Dr Kavan Ratnatunga',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '5:40 PM',
        type: 'TALK',
        title: 'The last Dutch telephone book',
        speaker: 'Martin Majoor',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '6:20 PM',
        type: 'Galle fonts project launch',
        speaker: 'Mooniak',
        venue: 'Mahaweli Centre Auditorium'
      },
      {
        time: '6:40 PM',
        specialEventTitle: 'CLOSING REMARKS',
        venue: 'Mahaweli Centre',
        speaker: 'Tharique Azeez for Akuru Collective',
      }
    ]
  }
];

export const workshops = [

  {
    title: 'Introduction to font-making tools',
    speaker: 'Tharique Azeez & Pathum Egodawatta',
    details: `A workshop that focuses on providing an understanding on construction of letterforms while learning how to avoid or re-correct errors in the sketching process. Once a clear understanding of letter formation is gained, recreating the sketches is the next step, followed by creating the font using a font making software.
    Previous experience of type design will not be required for this workshop and participants will gain an intellectual understanding of typography, typeface sketching and knowledge on how to draw type using software.`,
    footer: 'MEDIUM:  English / Tamil / Sinhala | WHAT TO BRING: A laptop with password to install software (fontforge.org), Notebook & sketchbook, Pencils & Pencil sharpener, Eraser / Ruler'
  },
  {
    title: 'Experiencing Calligraphy! ආධුනිකයන්ට කැලිග්‍රෆි! ',
    speaker: 'Mahinda Bandara',
    details: `A beginners workshop introducing the basics of calligraphy for calligraphy and lettering enthusiasts. A basic understanding of different calligraphy styles will be gained along with practical guidance to help  develops skills.`,
    footer: ' MEDIUM: Sinhala / English | WHAT TO BRING:  Notebook & sketchbook, 80gsm drawing papers'
  },
  {
    title: 'Writing on palm-leaf manuscripts',
    speaker: 'Palm Leaf Manuscript Study & Research Library - University of Kelaniya.',
    details: `A workshop on Palm leaf manuscripts focusing on production and usage. A closer look at actual manuscripts, different writing styles along with the knowledge of the manuscript preparation process and writing techniques awaits participants. All taught by experts from the Palm Leaf Manuscript Study & Research Library - University of Kelaniya.`,
    footer: 'MEDIUM: Sinhala / English | WHAT TO BRING: Notebook & sketchbook, Pencils, Ruler, Magnifier glass'
  },
  {
    title: 'Play with Display - Sinhala display typography',
    speaker: 'Dr Sumanthri Samarawickrama',
    details: `A workshop to help start off the Sinhala type design process where a few old Sinhala display typefaces and their compositions will be discussed. Completion of this workshop allows participants to design display fonts using letterform knowledge inspired by Sinhala display typefaces of the 19th century.`,
    footer: 'MEDIUM:   Sinhala / English | WHAT TO BRING:  Notebook & sketchbook, Rulers, Pencils, Erasers, Black Markers (Pointed and Wedged)'  }
];
