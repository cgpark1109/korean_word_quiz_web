// Quiz type: Korean homophone + one meaning's emoji & example displayed
//   → choose the correct English meaning (4-choice)
// After answering, ALL meanings for that word are revealed.
const WordData = {
  expert: [
    {
      korean: '눈',
      meanings: [
        { english: 'Eye', emoji: '👁️', example: '눈이 크다 (Big eyes)' },
        { english: 'Snow', emoji: '❄️', example: '눈이 내리다 (Snow is falling)' },
      ],
    },
    {
      korean: '배',
      meanings: [
        { english: 'Belly / Stomach', emoji: '🫃', example: '배가 고프다 (I am hungry)' },
        { english: 'Ship / Boat', emoji: '🚢', example: '배를 타다 (Ride a ship)' },
        { english: 'Pear (fruit)', emoji: '🍐', example: '배를 먹다 (Eat a pear)' },
      ],
    },
    {
      korean: '말',
      meanings: [
        { english: 'Word / Speech', emoji: '💬', example: '말을 하다 (To speak)' },
        { english: 'Horse', emoji: '🐴', example: '말을 타다 (Ride a horse)' },
      ],
    },
    {
      korean: '차',
      meanings: [
        { english: 'Car / Vehicle', emoji: '🚗', example: '차를 운전하다 (Drive a car)' },
        { english: 'Tea', emoji: '☕', example: '차를 마시다 (Drink tea)' },
      ],
    },
    {
      korean: '밤',
      meanings: [
        { english: 'Night', emoji: '🌙', example: '밤이 깊다 (The night is deep)' },
        { english: 'Chestnut', emoji: '🌰', example: '밤을 먹다 (Eat chestnuts)' },
      ],
    },
    {
      korean: '발',
      meanings: [
        { english: 'Foot', emoji: '🦶', example: '발이 크다 (Big feet)' },
        { english: 'Bamboo blind / Curtain', emoji: '🎋', example: '발을 치다 (Put up a blind)' },
      ],
    },
    {
      korean: '손',
      meanings: [
        { english: 'Hand', emoji: '✋', example: '손을 씻다 (Wash hands)' },
        { english: 'Guest', emoji: '🧑‍🤝‍🧑', example: '손이 오셨다 (A guest has arrived)' },
      ],
    },
    {
      korean: '귀',
      meanings: [
        { english: 'Ear', emoji: '👂', example: '귀가 밝다 (Good hearing)' },
        { english: 'Noble / Precious', emoji: '💎', example: '귀한 손님 (A precious guest)' },
      ],
    },
    {
      korean: '사과',
      meanings: [
        { english: 'Apple', emoji: '🍎', example: '사과를 먹다 (Eat an apple)' },
        { english: 'Apology', emoji: '🙏', example: '사과를 하다 (Make an apology)' },
      ],
    },
    {
      korean: '다리',
      meanings: [
        { english: 'Leg', emoji: '🦵', example: '다리가 길다 (Long legs)' },
        { english: 'Bridge', emoji: '🌉', example: '다리를 건너다 (Cross a bridge)' },
      ],
    },
    {
      korean: '모자',
      meanings: [
        { english: 'Hat / Cap', emoji: '🎩', example: '모자를 쓰다 (Wear a hat)' },
        { english: 'Mother and Child', emoji: '👩‍👦', example: '모자가 함께 산책하다 (Mother and child walk together)' },
      ],
    },
    {
      korean: '별',
      meanings: [
        { english: 'Star', emoji: '⭐', example: '별이 빛나다 (Stars are shining)' },
        { english: 'Special / Extraordinary', emoji: '✨', example: '별일 없다 (Nothing special / Nothing unusual)' },
      ],
    },
    {
      korean: '비',
      meanings: [
        { english: 'Rain', emoji: '🌧️', example: '비가 오다 (It is raining)' },
        { english: 'Broom', emoji: '🧹', example: '비로 쓸다 (Sweep with a broom)' },
      ],
    },
    {
      korean: '가지',
      meanings: [
        { english: 'Eggplant / Aubergine', emoji: '🍆', example: '가지를 볶다 (Stir-fry eggplant)' },
        { english: 'Branch / Twig', emoji: '🌿', example: '나뭇가지를 꺾다 (Break off a branch)' },
      ],
    },
    {
      korean: '공',
      meanings: [
        { english: 'Ball', emoji: '⚽', example: '공을 차다 (Kick a ball)' },
        { english: 'Merit / Achievement', emoji: '🏆', example: '공을 세우다 (Achieve merit)' },
        { english: 'Empty / Zero', emoji: '0️⃣', example: '공백 (Empty space / Blank)' },
      ],
    },
    {
      korean: '기사',
      meanings: [
        { english: 'News Article', emoji: '📰', example: '기사를 읽다 (Read a news article)' },
        { english: 'Driver / Chauffeur', emoji: '🚖', example: '택시 기사 (Taxi driver)' },
        { english: 'Knight', emoji: '⚔️', example: '기사도 정신 (Spirit of chivalry)' },
      ],
    },
    {
      korean: '인사',
      meanings: [
        { english: 'Greeting', emoji: '👋', example: '인사를 하다 (To greet someone)' },
        { english: 'Personnel / HR', emoji: '📋', example: '인사 부서 (HR department)' },
      ],
    },
    {
      korean: '시장',
      meanings: [
        { english: 'Market', emoji: '🛒', example: '시장에 가다 (Go to the market)' },
        { english: 'Mayor', emoji: '🏛️', example: '서울 시장 (Mayor of Seoul)' },
      ],
    },
    {
      korean: '바람',
      meanings: [
        { english: 'Wind', emoji: '💨', example: '바람이 불다 (The wind blows)' },
        { english: 'Wish / Desire', emoji: '🌟', example: '내 바람이다 (It is my wish)' },
        { english: 'Affair / Cheating', emoji: '💔', example: '바람을 피우다 (Have an affair)' },
      ],
    },
    {
      korean: '감',
      meanings: [
        { english: 'Persimmon (fruit)', emoji: '🟠', example: '감이 달다 (The persimmon is sweet)' },
        { english: 'Intuition / Gut feeling', emoji: '💭', example: '감이 좋다 (Good intuition)' },
        { english: 'Material / Cloth', emoji: '🧵', example: '옷감 (Clothing material)' },
      ],
    },
  ],
};
