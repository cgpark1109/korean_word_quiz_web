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
        { english: 'Zero / None', emoji: '0️⃣', example: '3 대 공으로 이기다 (Win 3 to zero)' },
      ],
    },
    {
      korean: '기사',
      meanings: [
        { english: 'News Article', emoji: '📰', example: '기사를 읽다 (Read a news article)' },
        { english: 'Driver / Chauffeur', emoji: '🚖', example: '택시 기사 (Taxi driver)' },
        { english: 'Knight', emoji: '⚔️', example: '기사가 용을 물리치다 (The knight defeats the dragon)' },
      ],
    },
    {
      korean: '감사',
      meanings: [
        { english: 'Gratitude / Thanks', emoji: '🙏', example: '감사합니다 (Thank you)' },
        { english: 'Audit / Inspection', emoji: '🔍', example: '회계 감사 (Financial audit)' },
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
        { english: 'Material / Cloth', emoji: '🧵', example: '이 감으로 옷을 만들다 (Make clothes with this material)' },
      ],
    },
    {
      korean: '수도',
      meanings: [
        { english: 'Capital city', emoji: '🏙️', example: '서울은 한국의 수도다 (Seoul is the capital of Korea)' },
        { english: 'Running water / Tap water', emoji: '🚰', example: '수도를 틀다 (Turn on the tap)' },
        { english: 'Religious training', emoji: '🧘', example: '절에서 수도하다 (Practice ascetic training at a temple)' },
      ],
    },
    {
      korean: '파',
      meanings: [
        { english: 'Green onion / Spring onion', emoji: '🧅', example: '파를 썰다 (Slice green onion)' },
        { english: 'Wave', emoji: '🌊', example: '파가 넘실대다 (Waves roll in)' },
        { english: 'Faction / Group', emoji: '🤝', example: '같은 파에 속하다 (Belong to the same faction)' },
      ],
    },
    {
      korean: '장',
      meanings: [
        { english: 'Market (fair day)', emoji: '🛍️', example: '장을 보다 (Do grocery shopping)' },
        { english: 'Chapter / Section', emoji: '📖', example: '1장을 읽다 (Read chapter one)' },
        { english: 'Intestine', emoji: '🫁', example: '장이 약하다 (Have a weak stomach/intestine)' },
      ],
    },
    {
      korean: '벌',
      meanings: [
        { english: 'Bee', emoji: '🐝', example: '벌이 날아다니다 (A bee is flying around)' },
        { english: 'Punishment / penalty', emoji: '⚖️', example: '벌을 받다 (Receive a penalty)' },
      ],
    },
    {
      korean: '굴',
      meanings: [
        { english: 'Oyster', emoji: '🦪', example: '굴을 먹다 (Eat oysters)' },
        { english: 'Cave', emoji: '🕳️', example: '굴 안으로 들어가다 (Go into a cave)' },
      ],
    },
    {
      korean: '자',
      meanings: [
        { english: 'Ruler / Measuring stick', emoji: '📏', example: '자로 길이를 재다 (Measure length with a ruler)' },
        { english: 'Character / Letter', emoji: '🔤', example: '한 자씩 읽다 (Read one character at a time)' },
      ],
    },
    {
      korean: '성',
      meanings: [
        { english: 'Castle / Fortress', emoji: '🏰', example: '성을 쌓다 (Build a fortress)' },
        { english: 'Surname / Family name', emoji: '🪪', example: '성함이 어떻게 되세요? (What is your name?)' },
      ],
    },
    {
      korean: '상',
      meanings: [
        { english: 'Table', emoji: '🪑', example: '상을 차리다 (Set the table)' },
        { english: 'Prize / Award', emoji: '🏅', example: '상을 받다 (Receive an award)' },
      ],
    },
    {
      korean: '달다',
      meanings: [
        { english: 'To hang / attach', emoji: '🖼️', example: '벽에 그림을 달다 (Hang a picture on the wall)' },
        { english: 'To be sweet', emoji: '🍬', example: '사탕이 달다 (Candy is sweet)' },
      ],
    },
    {
      korean: '안',
      meanings: [
        { english: 'Inside', emoji: '🏠', example: '집 안이 따뜻하다 (Inside the house is warm)' },
        { english: 'Not (negation)', emoji: '❌', example: '오늘은 안 간다 (I am not going today)' },
      ],
    },
    {
      korean: '사장',
      meanings: [
        { english: 'Company president / Boss', emoji: '💼', example: '사장님을 만나다 (Meet the company president)' },
        { english: 'To become obsolete/discontinued', emoji: '🗃️', example: '그 기술은 사장됐다 (That technology became obsolete)' },
      ],
    },
    {
      korean: '풀',
      meanings: [
        { english: 'Grass', emoji: '🌿', example: '풀이 자라다 (Grass grows)' },
        { english: 'Glue / Paste', emoji: '🧴', example: '풀을 붙이다 (Apply glue)' },
      ],
    },
    {
      korean: '배우',
      meanings: [
        { english: 'Actor / Actress', emoji: '🎭', example: '유명한 배우 (Famous actor)' },
        { english: 'To learn (verb root)', emoji: '📘', example: '한국어를 배우다 (Learn Korean)' },
      ],
    },
    {
      korean: '대',
      meanings: [
        { english: 'Versus / against', emoji: '⚔️', example: '한국 대 일본 경기 (Korea vs Japan match)' },
        { english: 'Bamboo', emoji: '🎋', example: '대를 엮어 바구니를 만들다 (Weave bamboo into a basket)' },
      ],
    },
    {
      korean: '이상',
      meanings: [
        { english: 'Strange / abnormal', emoji: '🤨', example: '몸에 이상이 있다 (There is something wrong with the body)' },
        { english: 'Over / more than', emoji: '🔢', example: '10명 이상 왔다 (More than 10 people came)' },
      ],
    },
    {
      korean: '정',
      meanings: [
        { english: 'Affection / attachment', emoji: '❤️', example: '정이 많다 (Have a lot of affection)' },
        { english: 'Surname Jeong', emoji: '🪪', example: '정 선생님 (Mr. or Ms. Jeong)' },
      ],
    },
    {
      korean: '새',
      meanings: [
        { english: 'Bird', emoji: '🐦', example: '새가 날다 (A bird flies)' },
        { english: 'New', emoji: '🆕', example: '새 가방을 샀다 (Bought a new bag)' },
      ],
    },
    {
      korean: '김',
      meanings: [
        { english: 'Steam / vapor', emoji: '♨️', example: '국에서 김이 난다 (Steam rises from soup)' },
        { english: 'Seaweed laver', emoji: '🍙', example: '김을 싸 먹다 (Wrap and eat with laver)' },
        { english: 'Common Korean surname Kim', emoji: '🪪', example: '김 선생님 (Mr./Ms. Kim)' },
      ],
    },
    {
      korean: '도로',
      meanings: [
        { english: 'Road', emoji: '🛣️', example: '도로가 막히다 (The road is jammed)' },
        { english: 'Again / back to previous state', emoji: '↩️', example: '도로 제자리다 (It is back to square one)' },
      ],
    },
    {
      korean: '미',
      meanings: [
        { english: 'Beauty', emoji: '✨', example: '미를 추구하다 (Pursue beauty)' },
        { english: 'Musical note Mi', emoji: '🎵', example: '도레미 중 미 (Mi in do-re-mi)' },
      ],
    },
    {
      korean: '팔',
      meanings: [
        { english: 'Arm', emoji: '💪', example: '팔이 아프다 (My arm hurts)' },
        { english: 'To sell', emoji: '💰', example: '옷을 팔다 (Sell clothes)' },
      ],
    },
    {
      korean: '살',
      meanings: [
        { english: 'To live', emoji: '🏠', example: '서울에 살다 (Live in Seoul)' },
        { english: 'Flesh / meat', emoji: '🥩', example: '살이 부드럽다 (The meat is tender)' },
        { english: 'Age (years)', emoji: '🎂', example: '스무 살이다 (I am twenty years old)' },
      ],
    },
    {
      korean: '입',
      meanings: [
        { english: 'Mouth', emoji: '👄', example: '입을 다물다 (Close your mouth)' },
        { english: 'To wear (clothes)', emoji: '👕', example: '옷을 입다 (Wear clothes)' },
      ],
    },
    {
      korean: '밀',
      meanings: [
        { english: 'Wheat', emoji: '🌾', example: '밀을 재배하다 (Grow wheat)' },
        { english: 'To push', emoji: '🤜', example: '문을 밀다 (Push the door)' },
      ],
    },
    {
      korean: '속',
      meanings: [
        { english: 'Inside', emoji: '📦', example: '상자 속 (Inside the box)' },
        { english: 'To deceive', emoji: '🎭', example: '사람을 속이다 (Deceive someone)' },
      ],
    },
    {
      korean: '날',
      meanings: [
        { english: 'Day / Date', emoji: '📅', example: '오늘은 좋은 날이다 (Today is a good day)' },
        { english: 'Blade / Edge', emoji: '🔪', example: '날이 서다 (The blade is sharp)' },
        { english: 'Raw / Uncooked', emoji: '🥩', example: '날것으로 먹다 (Eat raw)' },
      ],
    },
    {
      korean: '이',
      meanings: [
        { english: 'Tooth', emoji: '🦷', example: '이가 아프다 (My tooth hurts)' },
        { english: 'Head lice', emoji: '🐛', example: '이가 생기다 (Get head lice)' },
        { english: 'This (demonstrative)', emoji: '👆', example: '이 책이 좋다 (This book is good)' },
      ],
    },
    {
      korean: '술',
      meanings: [
        { english: 'Alcoholic drink', emoji: '🍶', example: '술을 마시다 (Drink alcohol)' },
        { english: 'Tassel / Fringe', emoji: '🪡', example: '술이 달린 장식 (A decorative tassel)' },
      ],
    },
    {
      korean: '반',
      meanings: [
        { english: 'Half', emoji: '½', example: '반만 먹다 (Eat only half)' },
        { english: 'Class / group', emoji: '🏫', example: '우리 반 친구 (My classmate)' },
      ],
    },
    {
      korean: '통',
      meanings: [
        { english: 'Barrel / container', emoji: '🛢️', example: '통에 담다 (Put in a container)' },
        { english: 'Through / via', emoji: '🔀', example: '전화로 통하다 (Communicate by phone)' },
      ],
    },
    {
      korean: '못',
      meanings: [
        { english: 'Nail', emoji: '🔨', example: '못을 박다 (Hammer a nail)' },
        { english: 'Cannot / Unable to', emoji: '🚫', example: '오늘은 못 간다 (I cannot go today)' },
        { english: 'Pond', emoji: '🌊', example: '연못에 오리가 헤엄친다 (Ducks swim in the pond)' },
      ],
    },
    {
      korean: '차다',
      meanings: [
        { english: 'To kick', emoji: '🦵', example: '공을 차다 (Kick a ball)' },
        { english: 'Cold (to the touch)', emoji: '🧊', example: '물이 차다 (The water is cold)' },
        { english: 'To wear / fasten', emoji: '⌚', example: '시계를 차다 (Wear a watch)' },
      ],
    },
    {
      korean: '회',
      meanings: [
        { english: 'Times / occasion', emoji: '🔁', example: '3회 반복하다 (Repeat 3 times)' },
        { english: 'Raw fish (sashimi)', emoji: '🍣', example: '회를 먹다 (Eat sashimi)' },
      ],
    },
    {
      korean: '전',
      meanings: [
        { english: 'Before / previous', emoji: '⏮️', example: '전날 (The day before)' },
        { english: 'Fried (food)', emoji: '🍳', example: '전을 부치다 (Pan-fry a pancake)' },
      ],
    },
    {
      korean: '기',
      meanings: [
        { english: 'Energy / spirit', emoji: '⚡', example: '기가 세다 (Have strong energy)' },
        { english: 'Flag', emoji: '🚩', example: '기를 올리다 (Raise a flag)' },
        { english: 'Opportunity / Chance', emoji: '🎯', example: '기를 잡다 (Seize the opportunity)' },
      ],
    },
    {
      korean: '표',
      meanings: [
        { english: 'Ticket', emoji: '🎫', example: '표를 사다 (Buy a ticket)' },
        { english: 'Vote / ballot', emoji: '🗳️', example: '표를 던지다 (Cast a vote)' },
      ],
    },
    {
      korean: '점',
      meanings: [
        { english: 'Point / dot', emoji: '•', example: '점을 찍다 (Mark a dot)' },
        { english: 'Fortune telling', emoji: '🔮', example: '점을 보다 (Get fortune telling)' },
      ],
    },
    {
      korean: '낮',
      meanings: [
        { english: 'Daytime', emoji: '☀️', example: '낮에 공부하다 (Study during the day)' },
        { english: 'Low (height)', emoji: '📏', example: '낮은 탁자 (A low table)' },
      ],
    },
    {
      korean: '쥐',
      meanings: [
        { english: 'Mouse / Rat', emoji: '🐭', example: '쥐가 나타나다 (A mouse appears)' },
        { english: 'Muscle cramp', emoji: '😖', example: '다리에 쥐가 나다 (Get a cramp in the leg)' },
      ],
    },
    {
      korean: '때',
      meanings: [
        { english: 'Time / moment', emoji: '⏰', example: '그때가 그립다 (I miss those times)' },
        { english: 'Dirt / grime', emoji: '🧼', example: '목욕탕에서 때를 밀다 (Scrub off grime at the bathhouse)' },
      ],
    },
  ],
};
