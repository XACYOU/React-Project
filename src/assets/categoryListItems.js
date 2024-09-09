const menuItems = [
  {
    label: "Health Resource Center",
    options: [
      {
        heading: "All Diseases",
        subOptions: null,
      },
      {
        heading: "All Medicines",
        subOptions: null,
      },
      {
        heading: "Medicines by Therapeutic Class",
        subOptions: null,
      },
    ],
  },
  {
    label: "Vitamins & Nutrition",
    options: [
      {
        heading: "Vitamins & Supplements",
        subOptions: [
          "Multivitamins",
          "Vitamin C",
          "Minerals",
          "Calcium",
          "Vitamin B12 & B Complex",
          "Other Vitamins",
        ],
      },
      {
        heading: "Nutrional Drinks",
        subOptions: [
          "Adult Daily Nutrition",
          "Kids Nutrition (2-15 Yrs)",
          "Women Nutrition",
        ],
      },
      {
        heading: "Global Supplements",
        subOptions: ["Now Foods", "Solgar", "Nordic naturals"],
      },
      {
        heading: "Nutrional Supplements",
        subOptions: [
          "Dr. Morepen",
          "Power Gummies",
          "Tata 1mg",
          "HealthKart",
          "Carbamide Forte",
          "Swisse",
          "Zingavita",
        ],
      },
      {
        heading: "Fitness Supplements",
        subOptions: [
          "Whey Protein",
          "Amino Acids",
          "Mass Gainers",
          "Workout Essential",
          "Fat Burners",
        ],
      },
      {
        heading: "Diet & Nutrition",
        subOptions: [
          "Green Tea & Herbal Tea",
          "Healthy Snacks",
          "Rehydration Beverages",
          "Apple Cider Vinegar",
          "Nuts & Cereals",
          "Chyawanprasha",
        ],
      },
      {
        heading: "Omega & Fish Oil",
        subOptions: ["Fish Oil", "Cod Liver Oil", "Flax Seed Oil"],
      },
      {
        heading: "Speciality Supplements",
        subOptions: [
          "Pre and Probiotics",
          "Glucosamine",
          "Collagen",
          "Antioxidants",
          "Biotin",
        ],
      },
      {
        heading: "Supplements by Category",
        subOptions: [
          "Kid",
          "Adult 50+",
          "Vegetarian",
          "Sports",
          "Women",
          "Men",
        ],
      },
      {
        heading: "Supplements by Concern",
        subOptions: [
          "Weight Management",
          "Daily Wellness",
          "Energy",
          "Immunity Boosters",
          "Hair, skin & nails",
          "Sleep",
          "Bone & Joint",
        ],
      },
    ],
  },
  {
    label: "Personal Care",
    options: [
      {
        heading: "Skin Care",
        subOptions: [
          "Sunscreen",
          "Cleanser",
          "Body Wash",
          "Face Cream",
          "Soaps",
          "Face Moisturisers",
          "Facewash",
          "Talcum Powder",
          "Hair Removal",
          "Skin Care Wipes",
        ],
      },
      {
        heading: "Baby Care",
        subOptions: [
          "Baby Diapers, wipes & more",
          "Baby Bath Essentials",
          "Baby Oral Health",
          "Nursing & Feeding",
          "Baby & Infant Food",
          "Baby Healthcare",
          "Baby Skin Care",
        ],
      },
      {
        heading: "Hair Care",
        subOptions: [
          "Shampoo",
          "Hair Serum",
          "Hair Conditioners",
          "Hair Oils",
          "Hair Creams, Masks, Gels",
          "Hair Growth Supplements",
          "Hair Growth Products",
        ],
      },
      {
        heading: "Elderly Care",
        subOptions: [
          "Adult Diapers",
          "Bone & Joint Health",
          "Orthopaedic Supports",
          "Underpads",
        ],
      },
      {
        heading: "Skin Care",
        subOptions: [
          "Sunscreen",
          "Cleanser",
          "Body Wash",
          "Face Cream",
          "Soaps",
          "Face Moisturisers",
          "Facewash",
          "Talcum Powder",
          "Hair Removal",
          "Skin Care Wipes",
        ],
      },
      {
        heading: "Sexual Wellness",
        subOptions: [
          "Condoms",
          "Lubricants & Massage Gels",
          "Personal body massagers",
          "Men Performance Enhancers",
          "Sexual Health Supplements",
        ],
      },
      {
        heading: "Men Care",
        subOptions: ["Men Grooming"],
      },
      {
        heading: "Women Care",
        subOptions: [
          "Feminine Care",
          "Women Care Supplements",
          "Mother Care",
          "Menopause",
          "Polycystic Ovary Syndrome",
        ],
      },
      {
        heading: "Oral Care",
        subOptions: [
          "Toothbrush",
          "Toothpaste",
          "Mouthwash",
          "Oral Care Supplements",
          "Dental Floss & Tongue Cleaners",
          "Tooth Powder",
        ],
      },
      {
        heading: "Pet Care",
        subOptions: ["Pet Grooming", "Pet Food", "Pet Health Care"],
      },
    ],
  },
  {
    label: "Healthcare Devices",
    options: [
      {
        heading: "Top Selling Categories",
        subOptions: [
          "BP Monitors",
          "Nebulizers & Vaporizers",
          "Smart Wearables",
          "Weighing Scales",
          "Thermometers",
          "Respiratory & Surgical Mask",
          "Pulse Oximeter",
          "Stethoscopes",
        ],
      },
      {
        heading: "Diabeties Devices",
        subOptions: [
          "Blood Glucose Monitors",
          "Test Strips & Lancets",
          "Syringes & Pens",
          "Continuous glucose monitors",
          "Insulin Coolers",
          "Diabetic Footwear",
        ],
      },
      {
        heading: "Pain Management",
        subOptions: [
          "Electric heating pads",
          "Hot Water Bottles",
          "Hot & Cold packs",
          "Body Massager",
        ],
      },
      {
        heading: "Wound Care & Dressings",
        subOptions: ["Adhesive bandage", "Crepe Bandage", "Surgical tapes"],
      },
      {
        heading: "Supports & Braces",
        subOptions: [
          "Knee Support",
          "Back & Abdomen Support",
          "Arm & Elbow Support",
          "Ankle, Foot & Leg Support",
          "Hand & Wrist Braces",
          "Neck & Shoulder Support",
          "Cervical Pillows & Mattress",
          "Compression support & socks",
        ],
      },
      {
        heading: "Surgicals",
        subOptions: [
          "Needles & Syringes",
          "Gloves",
          "Catheter",
          "Cannula",
          "Swab",
        ],
      },
      {
        heading: "Mobility Aids",
        subOptions: ["Walking Sticks", "Walkers & Rollators", "Wheelchair"],
      },
      {
        heading: "Daily Living Aids",
        subOptions: [
          "Hearing Aid",
          "Commode Chair",
          "Bed Pan and Urinal Pot",
          "Pill Box Organizer",
        ],
      },
    ],
  },
  {
    label: "Ayurveda Products",
    options: [
      {
        heading: "Top Categories",
        subOptions: [
          "Herbal Juice",
          "Chyawanparash",
          "Ayurvedic Immunity Boosters",
          "Unani Medicines",
          "Ayurvedic Supplements",
        ],
      },
      {
        heading: "Ayurveda Personal Care",
        subOptions: [
          "Ayurveda Oral Care",
          "Ayurveda Baby Care",
          "Ayurveda Skin Care",
          "Ayurveda Hair Care",
        ],
      },
      {
        heading: "Best Selling Brands",
        subOptions: [
          "Dabur",
          "Baidyanath",
          "Dhootapapeshwar",
          "Aimil",
          "Zandu",
          "Kapiva Ayurveda",
          "Patanjali",
          "Himalaya",
        ],
      },
      {
        heading: "Top Selling Herbs",
        subOptions: [
          "Ashwagandha (Immunity & Stress)",
          "Aloevera",
          "Giloy or Guduchi",
          "Shilajit (Men Sexual Wellness)",
          "Brahmi",
        ],
      },
      {
        heading: "Top Health Concerns",
        subOptions: [
          "Cough, Cold & Fever",
          "Sexual Wellness",
          "Bone, Joint and Muscle Care",
          "Ayurvedic Stomach Care",
          "Diabetic Care",
          "Liver Care",
          "Mind Care",
          "Cardiac Care",
          "Ayurveda Women's Health",
        ],
      },
      {
        heading: "Dosha Balancing",
        subOptions: ["Vata Balancing", "Pitta Balancing", "Kapha Balancing"],
      },
    ],
  },
  {
    label: "Diabetes",
    options: [
      {
        heading: "Diabetics Medicines",
        subOptions: [
          "Vitamins, Minerals & Antioxidants",
          "Homeopathy Medicines",
        ],
      },
      {
        heading: "Diabetic Diet",
        subOptions: ["Juices & Vinegars", "Diabetic Nutrition Supplements"],
      },
    ],
  },
  {
    label: "Health Conditions",
    options: [
      {
        heading: "Stomach Care",
        subOptions: [
          "Constipation",
          "General Digestion/Indigestion",
          "Loose motion/Diarrhoea",
        ],
      },
      {
        heading: "Pain Relief",
        subOptions: ["Omnigel products", "Volini", "Iodex", "Moov"],
      },
      {
        heading: "Eye Care",
        subOptions: ["Eye Lubricants"],
      },
      {
        heading: "Cold & Cough",
        subOptions: ["Chest Rubs & Balms", "Cough Syrups", "Lozenges"],
      },
      {
        heading: "Fever & Headache",
        subOptions: ["Crocin", "Calpol", "Saridon"],
      },
      {
        heading: "Smoking Cessation",
        subOptions: ["2baconil", "Ryze", "Nicotex"],
      },
      {
        heading: "Derma Care",
        subOptions: [
          "Antifungal Creams and Powders",
          "Dry & Itchy Skin",
          "Wounds & Insect Bite",
          "Acne & Pimples",
          "Skin Infection & Psoriasis",
        ],
      },
    ],
  },
  {
    label: "Homeopathy",
    options: [
      {
        heading: "Homeopathy Top Brands",
        subOptions: [
          "SBL Homoeopathy",
          "Dr Reckeweg",
          "Dr Willmar Schwabe India",
          "Adel Pekana",
          "BJAIN Homeopathy",
          "Bakson's",
          "Allen",
          "Wheezal",
          "Dr Willmar Schwabe Germany",
          "Haslab",
          "Medisynth",
          "Boiron",
          "Bhandari",
          "Dr Bakshi Bakson",
          "Dr Batra's",
        ],
      },
      {
        heading: "Homeopathy Popular Categories",
        subOptions: [
          "Homeopathic Care for Cold & Cough",
          "Homeopathic Respiratory Care",
          "Homeopathy Covid Essentials",
          "Sexual Health",
          "Hair Care Products",
          "Skin Care Products",
          "Children's Health",
          "Women's Health",
        ],
      },
      {
        heading: "Homeopathy Medicines",
        subOptions: [
          "Homeopathic Drops",
          "Dilutions",
          "Mother Tinctures",
          "Triturations",
          "Bio Combinations",
          "Millesimal LM Potencies",
          "Biochemics",
          "Bach Flower Remedies",
        ],
      },
    ],
  },
  {
    label: "Featured",
    options: [
      {
        heading: "Tata 1mg Healthcare Products",
        subOptions: null,
      },
      {
        heading: "Summer Essentials",
        subOptions: null,
      },
      {
        heading: "Treanding Now",
        subOptions: null,
      },
      {
        heading: "New Arrivals on Tata1MG",
        subOptions: null,
      },
      {
        heading: "Buy More, Save More",
        subOptions: null,
      },
      {
        heading: "Minimum 33% Off",
        subOptions: null,
      },
      {
        heading: "Deals of the Day",
        subOptions: null,
      },
      {
        heading: "Popular Combo Deals",
        subOptions: null,
      },
      {
        heading: "Super Saving",
        subOptions: null,
      },
    ],
  },
];

export default menuItems;