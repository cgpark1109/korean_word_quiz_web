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
    {
      korean: '산',
      meanings: [
        { english: 'Mountain', emoji: '🏔️', example: '산에 오르다 (Climb a mountain)' },
        { english: 'Acid / sour taste', emoji: '🍋', example: '산맛이 나다 (Taste sour)' },
        { english: 'Coral', emoji: '🪸', example: '산호가 자라다 (Coral grows)' },
      ],
    },
    {
      korean: '문',
      meanings: [
        { english: 'Door', emoji: '🚪', example: '문을 열다 (Open the door)' },
        { english: 'Question / inquiry', emoji: '❓', example: '문의하다 (Make an inquiry)' },
        { english: 'Seam / clothing pattern', emoji: '👔', example: '옷의 문이 맞다 (The seam of the clothes fits)' },
      ],
    },
    {
      korean: '불',
      meanings: [
        { english: 'Fire', emoji: '🔥', example: '불이 붙다 (Fire catches)' },
        { english: 'Buddha / Buddhist', emoji: '🙏', example: '불상을 모시다 (Enshrine a Buddha statue)' },
      ],
    },
    {
      korean: '곧',
      meanings: [
        { english: 'Soon', emoji: '⏳', example: '곧 도착한다 (Arriving soon)' },
        { english: 'Straight / upright', emoji: '📏', example: '곧은 길 (A straight road)' },
      ],
    },
    {
      korean: '길',
      meanings: [
        { english: 'Road / path', emoji: '🛣️', example: '길을 걷다 (Walk on the road)' },
        { english: 'Luck / fortune', emoji: '🍀', example: '길이 열리다 (Luck opens up)' },
        { english: 'Pickled side dish', emoji: '🥒', example: '오이를 길로 담그다 (Pickle cucumbers)' },
      ],
    },
    {
      korean: '심',
      meanings: [
        { english: 'Heart / mind', emoji: '❤️', example: '심이 통하다 (Hearts connect)' },
        { english: 'Deep', emoji: '🏊', example: '심한 추위 (Severe cold)' },
        { english: 'To plant (seeds)', emoji: '🌱', example: '씨를 심다 (Plant seeds)' },
      ],
    },
    {
      korean: '나',
      meanings: [
        { english: 'I / me', emoji: '🙋', example: '나는 학생이다 (I am a student)' },
        { english: 'Tree', emoji: '🌳', example: '나 한 그루를 심다 (Plant one tree)' },
        { english: 'River branch / fork', emoji: '🌊', example: '강줄기가 나뉘다 (The river branches off)' },
      ],
    },
    {
      korean: '박',
      meanings: [
        { english: 'Pumpkin / gourd', emoji: '🎃', example: '박을 심다 (Plant pumpkins)' },
        { english: 'Box / crate', emoji: '📦', example: '박에 담다 (Put in a box)' },
        { english: 'To strike / hit', emoji: '👊', example: '등을 박다 (Strike the back)' },
      ],
    },
    {
      korean: '땅',
      meanings: [
        { english: 'Land / earth', emoji: '🌍', example: '땅이 넓다 (The land is vast)' },
        { english: 'Crack / gap', emoji: '🕳️', example: '땅이 갈라지다 (A crack forms)' },
      ],
    },
    {
      korean: '내',
      meanings: [
        { english: 'My (possessive)', emoji: '🙋', example: '내 책 (My book)' },
        { english: 'Inside', emoji: '🏠', example: '집 안내 (Inside the house)' },
        { english: 'Rain', emoji: '🌧️', example: '농사에 내가 필요하다 (Rain is needed for farming)' },
      ],
    },
    {
      korean: '벗',
      meanings: [
        { english: 'Friend', emoji: '👫', example: '벗을 만나다 (Meet a friend)' },
        { english: 'To take off / undress', emoji: '👕', example: '신을 벗다 (Take off shoes)' },
      ],
    },
    {
      korean: '돈',
      meanings: [
        { english: 'Money', emoji: '💰', example: '돈을 벌다 (Earn money)' },
        { english: 'Pumice stone', emoji: '🪨', example: '돌로 발을 닦다 (Scrub feet with a pumice stone)' },
      ],
    },
    {
      korean: '식',
      meanings: [
        { english: 'Meal', emoji: '🍽️', example: '식사를 하다 (Have a meal)' },
        { english: 'Type / formula', emoji: '📐', example: '식을 풀다 (Solve an equation)' },
        { english: 'Tree-planting day', emoji: '🌳', example: '식목일에 나무를 심다 (Plant trees on Arbor Day)' },
      ],
    },
    {
      korean: '두',
      meanings: [
        { english: 'Two (number)', emoji: '2️⃣', example: '두 개 (Two items)' },
        { english: 'Head / skull', emoji: '🧠', example: '두가 크다 (Have a big head)' },
        { english: 'Barrel / large container', emoji: '🛢️', example: '두에 담다 (Store in a barrel)' },
      ],
    },
    {
      korean: '누',
      meanings: [
        { english: 'Who', emoji: '❓', example: '누가 왔니? (Who came?)' },
        { english: 'To leak', emoji: '💧', example: '물이 누다 (Water leaks)' },
      ],
    },
    {
      korean: '창',
      meanings: [
        { english: 'Window', emoji: '🪟', example: '창을 열다 (Open the window)' },
        { english: 'Spear', emoji: '🗡️', example: '창을 들다 (Raise a spear)' },
        { english: 'Warehouse / storehouse', emoji: '🏭', example: '창고에 넣다 (Put in a warehouse)' },
      ],
    },
    {
      korean: '방',
      meanings: [
        { english: 'Room', emoji: '🛏️', example: '방이 넓다 (The room is spacious)' },
        { english: 'Direction', emoji: '🧭', example: '동쪽 방향 (Eastward direction)' },
        { english: 'To release / let go', emoji: '🔓', example: '화살을 방출하다 (Release an arrow)' },
      ],
    },
    {
      korean: '종',
      meanings: [
        { english: 'End', emoji: '🏁', example: '종점에 도착하다 (Arrive at the terminal)' },
        { english: 'Bell', emoji: '🔔', example: '종이 울리다 (A bell rings)' },
        { english: 'Species / kind', emoji: '🐾', example: '동물의 종 (A species of animal)' },
        { english: 'Servant (archaic)', emoji: '👤', example: '종을 부리다 (Employ a servant)' },
      ],
    },
    {
      korean: '실',
      meanings: [
        { english: 'Thread', emoji: '🧵', example: '실로 꿰매다 (Sew with thread)' },
        { english: 'Fruit / berry', emoji: '🍇', example: '열매가 실하다 (The fruit is plump)' },
        { english: 'Failure', emoji: '❌', example: '실패하다 (Fail)' },
        { english: 'Floor / room (building layer)', emoji: '🏢', example: '3층 실 (The third floor)' },
      ],
    },
    {
      korean: '고',
      meanings: [
        { english: 'Old / ancient', emoji: '📜', example: '고대 유적 (Ancient ruins)' },
        { english: 'Curved / bent', emoji: '🌀', example: '고개를 숙이다 (Bow one\'s head)' },
        { english: 'Bitter (taste)', emoji: '😣', example: '맛이 고하다 (The taste is bitter)' },
      ],
    },
    {
      korean: '부',
      meanings: [
        { english: 'Abdomen / belly', emoji: '🫃', example: '부가 아프다 (Stomach hurts)' },
        { english: 'Rich / wealthy', emoji: '💎', example: '부자가 되다 (Become rich)' },
        { english: 'Father', emoji: '👨', example: '부친을 모시다 (Respect one\'s father)' },
        { english: 'Part / portion', emoji: '🧩', example: '일부만 읽다 (Read only a part)' },
      ],
    },
    {
      korean: '수',
      meanings: [
        { english: 'Number', emoji: '🔢', example: '수를 세다 (Count numbers)' },
        { english: 'Water', emoji: '💧', example: '수돗물 (Tap water)' },
        { english: 'Head / chief', emoji: '👑', example: '회사 수장 (Company head)' },
      ],
    },
    {
      korean: '참',
      meanings: [
        { english: 'Really / truly', emoji: '✅', example: '참 맛있다 (Really delicious)' },
        { english: 'Pillow', emoji: '🛏️', example: '참을 베다 (Use a pillow)' },
        { english: 'Silkworm', emoji: '🐛', example: '누에에서 실이 나온다 (Silk comes from silkworms)' },
      ],
    },
    {
      korean: '군',
      meanings: [
        { english: 'Soldier / military', emoji: '🪖', example: '군인이 되다 (Become a soldier)' },
        { english: 'Group / crowd', emoji: '👥', example: '군중이 모이다 (A crowd gathers)' },
        { english: 'Gentleman / husband (archaic)', emoji: '👨', example: '군자의 도 (The way of a gentleman)' },
      ],
    },
    {
      korean: '색',
      meanings: [
        { english: 'Color', emoji: '🎨', example: '색이 밝다 (The color is bright)' },
        { english: 'Lust / desire', emoji: '💋', example: '색욕을 버리다 (Abandon lust)' },
        { english: 'Prescription / recipe', emoji: '📋', example: '한약 색 (A herbal prescription)' },
      ],
    },
    {
      korean: '화',
      meanings: [
        { english: 'Fire', emoji: '🔥', example: '화재가 발생하다 (A fire breaks out)' },
        { english: 'Flower', emoji: '🌸', example: '화초를 가꾸다 (Grow potted plants)' },
        { english: 'Speech / talk', emoji: '💬', example: '화를 나누다 (Have a conversation)' },
        { english: 'Anger', emoji: '😠', example: '화가 나다 (Get angry)' },
      ],
    },
    {
      korean: '사',
      meanings: [
        { english: 'Four (number)', emoji: '4️⃣', example: '사 시에 만나다 (Meet at four o\'clock)' },
        { english: 'Death', emoji: '⚰️', example: '사망하다 (Die)' },
        { english: 'Affair / work', emoji: '📋', example: '일을 처리하다 (Handle affairs)' },
        { english: 'Company / firm', emoji: '🏢', example: '사장이 회사를 이끌다 (The president leads the company)' },
      ],
    },
    {
      korean: '머리',
      meanings: [
        { english: 'Head (body)', emoji: '🧠', example: '머리가 아프다 (Head hurts)' },
        { english: 'Hair', emoji: '💇', example: '머리를 자르다 (Cut hair)' },
        { english: 'Leader / head', emoji: '👑', example: '팀의 머리 (Team leader)' },
        { english: 'Intelligence / brains', emoji: '💡', example: '머리가 좋다 (Be smart)' },
      ],
    },
    {
      korean: '원',
      meanings: [
        { english: 'Circle', emoji: '⭕', example: '원을 그리다 (Draw a circle)' },
        { english: 'Garden', emoji: '🏡', example: '정원이 아름답다 (The garden is beautiful)' },
        { english: 'Source / origin', emoji: '🌊', example: '강의 원류 (The source of a river)' },
        { english: 'Cliff', emoji: '🏔️', example: '절벽이 높다 (The cliff is high)' },
      ],
    },
    {
      korean: '등',
      meanings: [
        { english: 'Back (body)', emoji: '🔙', example: '등이 아프다 (Back hurts)' },
        { english: 'Lamp / light', emoji: '💡', example: '등을 켜다 (Turn on the light)' },
        { english: 'Grade / class rank', emoji: '📊', example: '1등을 하다 (Get first place)' },
        { english: 'Ridge / loin (meat)', emoji: '🥩', example: '등심을 구워 먹다 (Grill sirloin)' },
      ],
    },
    {
      korean: '달',
      meanings: [
        { english: 'Moon', emoji: '🌙', example: '달이 뜨다 (The moon rises)' },
        { english: 'Trap (for animals)', emoji: '🪤', example: '사냥감을 달로 잡다 (Catch game with a trap)' },
      ],
    },
    {
      korean: '함',
      meanings: [
        { english: 'Box / case', emoji: '📦', example: '함에 넣다 (Put in a box)' },
        { english: 'Warship', emoji: '🚢', example: '전함이 출항하다 (A warship departs)' },
        { english: 'Salty taste', emoji: '🧂', example: '짠맛이 함하다 (Taste very salty)' },
      ],
    },
    {
      korean: '품',
      meanings: [
        { english: 'Quality / item', emoji: '📦', example: '품질이 좋다 (Good quality)' },
        { english: 'Breath / sigh', emoji: '💨', example: '한숨을 품다 (Take a deep breath)' },
      ],
    },
    {
      korean: '축',
      meanings: [
        { english: 'Axis / center', emoji: '🎯', example: '축을 잡다 (Hold the axis)' },
        { english: 'Celebration', emoji: '🎉', example: '축하하다 (Congratulate)' },
        { english: 'To shrink / contraction', emoji: '📉', example: '옷이 축다 (Clothes shrink)' },
      ],
    },
    {
      korean: '강',
      meanings: [
        { english: 'River', emoji: '🌊', example: '강을 건너다 (Cross a river)' },
        { english: 'Strong', emoji: '💪', example: '강한 의지 (Strong will)' },
        { english: 'Broth / stock', emoji: '🍲', example: '곰탕 국물이 진하다 (The broth is rich)' },
      ],
    },
    {
      korean: '국',
      meanings: [
        { english: 'Soup', emoji: '🍲', example: '국을 끓이다 (Boil soup)' },
        { english: 'Country / nation', emoji: '🏳️', example: '우리 국가 (Our country)' },
        { english: 'Musical piece / tune', emoji: '🎵', example: '국악을 연주하다 (Play traditional music)' },
      ],
    },
    {
      korean: '양',
      meanings: [
        { english: 'Sheep', emoji: '🐑', example: '양이 풀을 먹다 (Sheep eat grass)' },
        { english: 'Amount / quantity', emoji: '📊', example: '양이 많다 (The amount is large)' },
        { english: 'Both (pair)', emoji: '👥', example: '양쪽 모두 (Both sides)' },
        { english: 'Foster / adopt', emoji: '🤱', example: '양자를 입양하다 (Adopt a foster child)' },
      ],
    },
    {
      korean: '봉',
      meanings: [
        { english: 'Peak / summit', emoji: '🏔️', example: '봉우리가 높다 (The peak is high)' },
        { english: 'Envelope', emoji: '📬', example: '봉투에 넣다 (Put in an envelope)' },
        { english: 'Salary / pay', emoji: '💵', example: '봉급을 받다 (Receive a salary)' },
        { english: 'Stick / club', emoji: '🪵', example: '봉으로 치다 (Hit with a stick)' },
      ],
    },
    {
      korean: '청',
      meanings: [
        { english: 'Blue (color)', emoji: '💙', example: '하늘색이 청색이다 (Sky blue is cerulean)' },
        { english: 'Request / petition', emoji: '📝', example: '청원을 하다 (Submit a petition)' },
        { english: 'Youth / young age', emoji: '🧑', example: '청춘을 즐기다 (Enjoy youth)' },
      ],
    },
    {
      korean: '골',
      meanings: [
        { english: 'Bone', emoji: '🦴', example: '골이 굵다 (Bones are thick)' },
        { english: 'Goal (sports)', emoji: '⚽', example: '골을 넣다 (Score a goal)' },
        { english: 'Valley', emoji: '🏞️', example: '골짜기가 깊다 (The valley is deep)' },
      ],
    },
    {
      korean: '맞다',
      meanings: [
        { english: 'Correct / Right', emoji: '✅', example: '답이 맞다 (The answer is correct)' },
        { english: 'To get hit / struck', emoji: '👊', example: '비를 맞다 (Get hit by rain)' },
        { english: 'To fit (size)', emoji: '👕', example: '옷이 맞다 (The clothes fit)' },
      ],
    },
    {
      korean: '맡다',
      meanings: [
        { english: 'To entrust / take charge', emoji: '🤝', example: '일을 맡다 (Take charge of work)' },
        { english: 'To sniff / smell', emoji: '👃', example: '꽃향기를 맡다 (Smell the flower scent)' },
      ],
    },
    {
      korean: '말다',
      meanings: [
        { english: 'To stop (doing)', emoji: '🛑', example: '그만 말아 (Stop it)' },
        { english: 'To wind / coil', emoji: '🧵', example: '실을 말다 (Wind thread)' },
      ],
    },
    {
      korean: '나다',
      meanings: [
        { english: 'To be born', emoji: '👶', example: '아기가 나다 (A baby is born)' },
        { english: 'To break out / appear', emoji: '🔴', example: '두드러기가 나다 (A rash breaks out)' },
      ],
    },
    {
      korean: '배다',
      meanings: [
        { english: 'To be jealous', emoji: '😒', example: '시기가 배다 (Feel jealous)' },
        { english: 'To soak through / permeate', emoji: '💧', example: '냄새가 배다 (The smell soaks in)' },
      ],
    },
    {
      korean: '꾸다',
      meanings: [
        { english: 'To dream', emoji: '💤', example: '좋은 꿈을 꾸다 (Have a good dream)' },
        { english: 'To harbor / hold (a wish)', emoji: '🌟', example: '소원을 꾸다 (Harbor a wish)' },
      ],
    },
    {
      korean: '돌',
      meanings: [
        { english: 'Stone / rock', emoji: '🪨', example: '돌을 던지다 (Throw a stone)' },
        { english: 'Birthday year (age milestone)', emoji: '🎂', example: '돌잔치를 하다 (Hold a first birthday party)' },
      ],
    },
    {
      korean: '담',
      meanings: [
        { english: 'Wall / fence', emoji: '🧱', example: '담을 쌓다 (Build a wall)' },
        { english: 'Freshwater (not saltwater)', emoji: '💧', example: '담수어 (Freshwater fish)' },
      ],
    },
    {
      korean: '타다',
      meanings: [
        { english: 'To ride', emoji: '🚌', example: '버스를 타다 (Ride a bus)' },
        { english: 'To burn', emoji: '🔥', example: '불에 타다 (Burn in fire)' },
        { english: 'To lose (weight)', emoji: '📉', example: '살이 타다 (Lose weight)' },
      ],
    },
    {
      korean: '치다',
      meanings: [
        { english: 'To hit / strike', emoji: '👊', example: '공을 치다 (Hit a ball)' },
        { english: 'To play (instrument)', emoji: '🎹', example: '피아노를 치다 (Play the piano)' },
        { english: 'To do (laundry)', emoji: '🧺', example: '빨래를 치다 (Do the laundry)' },
      ],
    },
    {
      korean: '걸다',
      meanings: [
        { english: 'To hang', emoji: '🖼️', example: '옷을 걸다 (Hang clothes)' },
        { english: 'To bet / wager', emoji: '🎲', example: '내기를 걸다 (Place a bet)' },
        { english: 'To catch (a cold)', emoji: '🤧', example: '감기에 걸리다 (Catch a cold)' },
      ],
    },
    {
      korean: '역',
      meanings: [
        { english: 'Station (train/subway)', emoji: '🚉', example: '역에 도착하다 (Arrive at the station)' },
        { english: 'Reverse / opposite', emoji: '↩️', example: '역방향 (Opposite direction)' },
        { english: 'Role / part', emoji: '🎭', example: '주역을 맡다 (Take the leading role)' },
      ],
    },
    {
      korean: '열',
      meanings: [
        { english: 'Fever / heat', emoji: '🌡️', example: '열이 나다 (Have a fever)' },
        { english: 'Row / line', emoji: '➡️', example: '한 열로 서다 (Stand in a row)' },
        { english: 'Ten (number)', emoji: '🔟', example: '열 명 (Ten people)' },
      ],
    },
    {
      korean: '영',
      meanings: [
        { english: 'Zero', emoji: '0️⃣', example: '영 점 (Zero points)' },
        { english: 'Spirit / soul', emoji: '👻', example: '영혼 (Soul)' },
        { english: 'Hero / brave person', emoji: '🦸', example: '영웅이 되다 (Become a hero)' },
      ],
    },
    {
      korean: '예',
      meanings: [
        { english: 'Yes', emoji: '👍', example: '예, 알겠습니다 (Yes, I understand)' },
        { english: 'Ceremony / ritual', emoji: '🎎', example: '예식을 올리다 (Hold a wedding ceremony)' },
        { english: 'Previous / before', emoji: '⏮️', example: '예고편 (Preview / trailer)' },
      ],
    },
    {
      korean: '욕',
      meanings: [
        { english: 'Bath / bathing', emoji: '🛁', example: '목욕을 하다 (Take a bath)' },
        { english: 'Swearing / curse words', emoji: '🤬', example: '욕을 하다 (Swear / use bad language)' },
      ],
    },
    {
      korean: '은',
      meanings: [
        { english: 'Silver (metal)', emoji: '🥈', example: '은반지 (Silver ring)' },
        { english: 'Grace / kindness', emoji: '💝', example: '은혜를 입다 (Receive kindness)' },
      ],
    },
    {
      korean: '인',
      meanings: [
        { english: 'Person / human', emoji: '🧑', example: '인간 (Human being)' },
        { english: 'Seal / stamp', emoji: '🔏', example: '도장을 찍다 (Stamp a seal)' },
        { english: 'Benevolence / virtue', emoji: '❤️', example: '인을 베풀다 (Show benevolence)' },
      ],
    },
    {
      korean: '재',
      meanings: [
        { english: 'Again / re-', emoji: '🔁', example: '재시험 (Retest)' },
        { english: 'Ash', emoji: '🌫️', example: '재가 되다 (Turn to ash)' },
        { english: 'Talent / ability', emoji: '🌟', example: '재능이 있다 (Have talent)' },
      ],
    },
    {
      korean: '제',
      meanings: [
        { english: 'My (humble)', emoji: '🙇', example: '제 이름은 (My name is)' },
        { english: 'Rule / regulation', emoji: '📜', example: '규칙과 제도 (Rules and systems)' },
        { english: 'Offering / tribute', emoji: '🎁', example: '제물을 바치다 (Offer a tribute)' },
      ],
    },
    {
      korean: '조',
      meanings: [
        { english: 'Group / faction', emoji: '👥', example: '같은 조 (Same group)' },
        { english: 'Tune / melody', emoji: '🎵', example: '조를 맞추다 (Match the tune)' },
        { english: 'Morning (archaic)', emoji: '🌅', example: '조야 (Late night to early morning)' },
      ],
    },
    {
      korean: '주',
      meanings: [
        { english: 'Lord / master', emoji: '👑', example: '주인 (Master / owner)' },
        { english: 'Main / principal', emoji: '⭐', example: '주요한 일 (Main task)' },
        { english: 'Week', emoji: '📅', example: '이번 주 (This week)' },
      ],
    },
    {
      korean: '지',
      meanings: [
        { english: 'Knowledge / wisdom', emoji: '📚', example: '지식이 풍부하다 (Rich in knowledge)' },
        { english: 'Letter / written note', emoji: '✉️', example: '한지에 글씨를 쓰다 (Write on traditional paper)' },
        { english: 'Earth / ground', emoji: '🌍', example: '지구 (The Earth)' },
      ],
    },
    {
      korean: '짐',
      meanings: [
        { english: 'Luggage / baggage', emoji: '🧳', example: '짐을 싸다 (Pack luggage)' },
        { english: 'Burden / trouble', emoji: '😓', example: '짐이 되다 (Become a burden)' },
      ],
    },
    {
      korean: '천',
      meanings: [
        { english: 'Thousand', emoji: '🔢', example: '천 원 (One thousand won)' },
        { english: 'Heaven / sky', emoji: '☁️', example: '하늘과 땅 (Heaven and earth)' },
        { english: 'Fabric / cloth', emoji: '🧵', example: '천을 자르다 (Cut fabric)' },
      ],
    },
    {
      korean: '친',
      meanings: [
        { english: 'Friend', emoji: '👫', example: '친구 (Friend)' },
        { english: 'Close / intimate', emoji: '🤗', example: '친한 사이 (Close relationship)' },
      ],
    },
    {
      korean: '토',
      meanings: [
        { english: 'Soil / earth', emoji: '🟤', example: '흙과 토양 (Soil and earth)' },
        { english: 'To vomit', emoji: '🤢', example: '토하다 (Vomit)' },
      ],
    },
    {
      korean: '편',
      meanings: [
        { english: 'Side', emoji: '↔️', example: '왼쪽 편 (Left side)' },
        { english: 'Convenient / comfortable', emoji: '😌', example: '편하다 (Be comfortable)' },
        { english: 'Volume (of a book)', emoji: '📚', example: '1편 (Volume one)' },
      ],
    },
    {
      korean: '폐',
      meanings: [
        { english: 'Lung', emoji: '🫁', example: '폐가 약하다 (Have weak lungs)' },
        { english: 'To abolish', emoji: '🚫', example: '제도를 폐지하다 (Abolish a system)' },
        { english: 'Harm / damage', emoji: '💔', example: '폐를 끼치다 (Cause harm)' },
      ],
    },
    {
      korean: '필',
      meanings: [
        { english: 'Certainly / surely', emoji: '✅', example: '필히 오다 (Surely come)' },
        { english: 'Writing brush', emoji: '🖌️', example: '붓을 들다 (Hold a brush)' },
      ],
    },
    {
      korean: '학',
      meanings: [
        { english: 'School / learning', emoji: '🏫', example: '학교에 가다 (Go to school)' },
        { english: 'Crane (bird)', emoji: '🦩', example: '학이 날다 (A crane flies)' },
      ],
    },
    {
      korean: '형',
      meanings: [
        { english: 'Older brother', emoji: '👦', example: '형이 있다 (I have an older brother)' },
        { english: 'Form / type', emoji: '📋', example: '형태 (Form / shape)' },
        { english: 'Punishment / penalty', emoji: '⚖️', example: '형을 선고하다 (Sentence punishment)' },
      ],
    },
    {
      korean: '후',
      meanings: [
        { english: 'After / later', emoji: '⏭️', example: '이후 (After this)' },
        { english: 'Candidate / successor', emoji: '🗳️', example: '후보 (Candidate)' },
      ],
    },
    {
      korean: '끝',
      meanings: [
        { english: 'End / finish', emoji: '🏁', example: '끝이 나다 (Come to an end)' },
        { english: 'Tip / edge (of something)', emoji: '✂️', example: '머리끝 (Tip of hair)' },
      ],
    },
    {
      korean: '걸',
      meanings: [
        { english: 'Crab', emoji: '🦀', example: '게와 걸 (Crabs)' },
        { english: 'About (time duration)', emoji: '⏱️', example: '한 시간 걸리다 (Take about an hour)' },
      ],
    },
    {
      korean: '과',
      meanings: [
        { english: 'Fruit', emoji: '🍎', example: '과일 (Fruit)' },
        { english: 'Department / section', emoji: '🏢', example: '영업과 (Sales department)' },
        { english: 'Excess / too much', emoji: '⚠️', example: '과식하다 (Overeat)' },
      ],
    },
    {
      korean: '관',
      meanings: [
        { english: 'Pipe / tube', emoji: '🔧', example: '수도관 (Water pipe)' },
        { english: 'Government office', emoji: '🏛️', example: '관청 (Government office)' },
        { english: 'Coffin', emoji: '⚰️', example: '관에 넣다 (Place in a coffin)' },
      ],
    },
    {
      korean: '구',
      meanings: [
        { english: 'District / ward', emoji: '🗺️', example: '강남구 (Gangnam district)' },
        { english: 'Nine (number)', emoji: '9️⃣', example: '구 명 (Nine people)' },
        { english: 'Sphere / bead', emoji: '🔮', example: '구슬을 굴리다 (Roll a marble)' },
      ],
    },
    {
      korean: '굽',
      meanings: [
        { english: 'Heel (of shoe)', emoji: '👠', example: '굽이 높다 (High heels)' },
        { english: 'To bake', emoji: '🍞', example: '빵을 굽다 (Bake bread)' },
      ],
    },
    {
      korean: '금',
      meanings: [
        { english: 'Gold (metal)', emoji: '🥇', example: '금반지 (Gold ring)' },
        { english: 'Forbidden / not allowed', emoji: '🚫', example: '금지하다 (Forbid)' },
        { english: 'Crack / fissure', emoji: '💔', example: '금이 가다 (A crack forms)' },
      ],
    },
  ],
};
