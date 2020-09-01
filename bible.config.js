const Bible = [
    {
        name: 'Genesis', 
        abbr: 'Ge',
        chapters: 50,
        verses: [
            31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 
            21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 
            35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 
            34, 34, 28, 34, 31, 22, 33, 26]
    },
    {
        name: 'Exodus', 
        abbr: 'Ex',
        chapters: 40,
        verses: [
            22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 
            27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 
            46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]
    }, 
    {
        name: 'Leviticus', 
        abbr: 'Le',
        chapters: 27,
        verses: [
            17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 
            33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34
        ]
    },
    { 
        name: 'Numbers', 
        abbr: 'Nu',
        chapters: 36,
        verses: [
            54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 
            41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 
            40, 16, 54, 42, 56, 29, 34, 13
        ]
    },
    { 
        name: 'Deuteronomy', 
        abbr: 'Dt',
        chapters: 34,
        verses: [
            46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 
            23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 
            29, 20, 30, 52, 29, 12
        ]
    },
    { 
        name: 'Joshua', 
        abbr: 'Jos',
        chapters: 24,
        verses: [
            18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 
            63, 10, 18, 28, 51, 9, 45, 34, 16, 33
        ]
    },
    { 
        name: 'Judges', 
        abbr: 'Jdg',
        chapters: 21,
        verses: [
            36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 
            20, 31, 13, 31, 30, 48, 25
        ]
    },
    { 
        name: 'Ruth', 
        abbr: 'Ru',
        chapters: 4,
        verses: [
            22, 23, 18, 22
        ]
    },
    { 
        name: '1 Samuel', 
        abbr: '1Sa',
        chapters: 31,
        verses: [
            28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 
            35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 
            11, 31, 13
        ]
    },
    { 
        name: '2 Samuel', 
        abbr: '2Sa',
        chapters: 24,
        verses: [
            27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 
            37, 23, 29, 33, 43, 26, 22, 51, 39, 25
        ]
    },
    { 
        name: '1 Kings', 
        abbr: '1Ki',
        chapters: 22,
        verses: [
            53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 
            34, 34, 24, 46, 21, 43, 29, 53
        ]
    },
    { 
        name: '2 Kings', 
        abbr: '2Ki',
        chapters: 25,
        verses: [
            18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 
            38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30
        ]
    },
    { 
        name: '1 Chronicles', 
        abbr: '1Ch',
        chapters: 29,
        verses: [
            54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 
            29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 
            30
        ]
    },
    { 
        name: '2 Chronicles', 
        abbr: '2Ch',
        chapters: 36,
        verses: [
            17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 
            19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 
            36, 27, 21, 33, 25, 33, 27, 23
        ]
    },
    { 
        name: 'Ezra', 
        abbr: 'Ezr',
        chapters: 10,
        verses: [
            11, 70, 13, 24, 17, 22, 28, 36, 15, 44
        ]
    },
    { 
        name: 'Nehemiah', 
        abbr: 'Ne',
        chapters: 13,
        verses: [
            11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31
        ]
    },
    { 
        name: 'Esther', 
        abbr: 'Es',
        chapters: 10,
        verses: [
            22, 23, 15, 17, 14, 14, 10, 17, 32, 3
        ]
    },
    { 
        name: 'Job', 
        abbr: 'Job',
        chapters: 42,
        verses: [
            22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 
            35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 
            25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17
        ]
    },
    { 
        name: 'Psalms', 
        abbr: 'Ps',
        chapters: 150,
        verses: [
            6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 
            15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 
            11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 
            11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 
            8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 
            12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 
            16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 
            48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 
            8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 
            24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6
        ]
    },
    { 
        name: 'Proverbs', 
        abbr: 'Pr',
        chapters: 31,
        verses: [
            33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 
            33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 
            27, 33, 31
        ]
    },
    { 
        name: 'Ecclesiastes', 
        abbr: 'Ec',
        chapters: 12,
        verses: [
            18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14
        ]
    },
    { 
        name: 'Song of Solomon', 
        abbr: 'So',
        chapters: 8,
        verses: [
            17, 17, 11, 16, 16, 13, 13, 14
        ]
    },
    { 
        name: 'Isaiah', 
        abbr: 'Is',
        chapters: 66,
        verses: [
            31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 
            14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 
            9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 
            13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 
            22, 11, 12, 19, 12, 25, 24
        ]
    },
    { 
        name: 'Jeremiah', 
        abbr: 'Je',
        chapters: 52,
        verses: [
            19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 
            21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 
            32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 
            13, 30, 5, 28, 7, 47, 39, 46, 64, 34
        ]
    },
    { 
        name: 'Lamentations', 
        abbr: 'La',
        chapters: 5,
        verses: [
            22, 22, 66, 22, 22
        ]
    },
    { 
        name: 'Ezekiel', 
        abbr: 'Eze',
        chapters: 48,
        verses: [
            28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 
            8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 
            21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 
            27, 31, 25, 24, 23, 35
        ]
    },
    { 
        name: 'Daniel', 
        abbr: 'Da',
        chapters: 12,
        verses: [
            21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13
        ]
    },
    { 
        name: 'Hosea', 
        abbr: 'Ho',
        chapters: 14,
        verses: [
            11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9
        ]
    },
    { 
        name: 'Joel', 
        abbr: 'Joe',
        chapters: 3,
        verses: [
            20, 32, 21
        ]
    },
    { 
        name: 'Amos', 
        abbr: 'Am',
        chapters: 9,
        verses: [
            15, 16, 15, 13, 27, 14, 17, 14, 15
        ]
    },
    { 
        name: 'Obadiah', 
        abbr: 'Ob',
        chapters: 1,
        verses: [
            21
        ]
    },
    { 
        name: 'Jonah', 
        abbr: 'Jon',
        chapters: 4,
        verses: [
            17, 10, 10, 11
        ]
    },
    { 
        name: 'Micah', 
        abbr: 'Mic',
        chapters: 7,
        verses: [
            16, 13, 12, 13, 15, 16, 20
        ]
    },
    { 
        name: 'Nahum', 
        abbr: 'Na',
        chapters: 3,
        verses: [
            15, 13, 19
        ]
    },
    { 
        name: 'Habakkuk', 
        abbr: 'Hab',
        chapters: 3,
        verses: [
            17, 20, 19
        ]
    },
    { 
        name: 'Zephaniah', 
        abbr: 'Zep',
        chapters: 3,
        verses: [
            18, 15, 20
        ]
    },
    { 
        name: 'Haggai', 
        abbr: 'Hag',
        chapters: 2,
        verses: [
            15, 23
        ]
    },
    { 
        name: 'Zechariah', 
        abbr: 'Zec',
        chapters: 14,
        verses: [
            21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21
        ]
    },
    { 
        name: 'Malachi', 
        abbr: 'Mal',
        chapters: 4,
        verses: [
            14, 17, 18, 6
        ]
    },
    { 
        name: 'Matthew', 
        abbr: 'Mt',
        chapters: 28,
        verses: [
            25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 
            39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20
        ]
    },
    { 
        name: 'Mark', 
        abbr: 'Mk',
        chapters: 16,
        verses: [
            45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 
            47, 20
        ]
    },
    { 
        name: 'Luke', 
        abbr: 'Lk',
        chapters: 24,
        verses: [
            80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 
            32, 31, 37, 43, 48, 47, 38, 71, 56, 53
        ]
    },
    { 
        name: 'John', 
        abbr: 'Jn',
        chapters: 21,
        verses: [
            51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 
            27, 33, 26, 40, 42, 31, 25
        ]
    },
    { 
        name: 'Acts', 
        abbr: 'Ac',
        chapters: 28,
        verses: [
            26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 
            41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31
        ]
    },
    { 
        name: 'Romans', 
        abbr: 'Ro',
        chapters: 16,
        verses: [
            32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 
            33, 27
        ]
    },
    { 
        name: '1 Corinthians', 
        abbr: '1Co',
        chapters: 16,
        verses: [
            31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 
            58, 24
        ]
    },
    { 
        name: '2 Corinthians', 
        abbr: '2Co',
        chapters: 13,
        verses: [
            24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14
        ]
    },
    { 
        name: 'Galatians', 
        abbr: 'Ga',
        chapters: 6,
        verses: [
            24, 21, 29, 31, 26, 18
        ]
    },
    { 
        name: 'Ephesians', 
        abbr: 'Eph',
        chapters: 6,
        verses: [
            23, 22, 21, 32, 33, 24
        ]
    },
    { 
        name: 'Philippians', 
        abbr: 'Php',
        chapters: 4,
        verses: [
            30, 30, 21, 23
        ]
    },
    { 
        name: 'Colossians', 
        abbr: 'Col',
        chapters: 4,
        verses: [
            29, 23, 25, 18
        ]
    },
    { 
        name: '1 Thessalonians', 
        abbr: '1Th',
        chapters: 5,
        verses: [
            10, 20, 13, 18, 28
        ]
    },
    { 
        name: '2 Thessalonians', 
        abbr: '2Th',
        chapters: 3,
        verses: [
            12, 17, 18
        ]
    },
    { 
        name: '1 Timothy', 
        abbr: '1Ti',
        chapters: 6,
        verses: [
            20, 15, 16, 16, 25, 21
        ]
    },
    { 
        name: '2 Timothy', 
        abbr: '2Ti',
        chapters: 4,
        verses: 
            [
                18, 26, 17, 22
            ]
    },
    { 
        name: 'Titus', 
        abbr: 'Tt',
        chapters: 3,
        verses: [
            16, 15, 15
        ]
    },
    { 
        name: 'Philemon', 
        abbr: 'Phm',
        chapters: 1,
        verses: [
            25
        ]
    },
    { 
        name: 'Hebrews', 
        abbr: 'Heb',
        chapters: 13,
        verses: [
            14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25
        ]
    },
    { 
        name: 'James', 
        abbr: 'Jas',
        chapters: 5,
        verses: [
            27, 26, 18, 17, 20
        ]
    },
    { 
        name: '1 Peter', 
        abbr: '1Pe',
        chapters: 5,
        verses: [
            25, 25, 22, 19, 14
        ]
    },
    { 
        name: '2 Peter', 
        abbr: '2Pe',
        chapters: 3,
        verses: [
            21, 22, 18
        ]
    },
    { 
        name: '1 John', 
        abbr: '1Jo',
        chapters: 5,
        verses: [
            10, 29, 24, 21, 21
        ]
    },
    { 
        name: '2 John', 
        abbr: '2Jo',
        chapters: 1,
        verses: [
            13
        ]
    
    },
    { 
        name: '3 John', 
        abbr: '3Jo',
        chapters: 1,
        verses: [
            15
        ]
    },
    { 
        name: 'Jude', 
        abbr: 'Jud',
        chapters: 1,
        verses: [
            25
        ]
    },
    { 
        name: 'Revelation', 
        abbr: 'Re',
        chapters: 22,
        verses: [
            20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 
            8, 21, 18, 24, 21, 15, 27, 21
        ]
    }
]

export default Bible