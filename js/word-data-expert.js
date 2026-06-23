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
        { english: 'Intestine', emoji: '🫃', example: '장이 약하다 (Have a weak stomach/intestine)' },
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
        { english: 'Pumice stone', emoji: '🪨', example: '돈돌로 발을 닦다 (Scrub feet with a pumice stone)' },
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
    {
      korean: '녹',
      meanings: [
        { english: 'Green (color)', emoji: '🟢', example: '녹색 (Green color)' },
        { english: 'Record / recording', emoji: '🎙️', example: '녹음하다 (Record audio)' },
        { english: 'To melt', emoji: '🔥', example: '얼음이 녹다 (Ice melts)' },
        { english: 'Rust', emoji: '🦠', example: '쇠가 녹슬다 (Iron rusts)' },
      ],
    },
    {
      korean: '띠',
      meanings: [
        { english: 'Belt / band', emoji: '👔', example: '허리띠 (Belt)' },
        { english: 'Zodiac year', emoji: '🐉', example: '용띠 (Year of the Dragon)' },
      ],
    },
    {
      korean: '답',
      meanings: [
        { english: 'Answer', emoji: '✅', example: '정답 (Correct answer)' },
        { english: 'Tower / pagoda', emoji: '🗼', example: '석탑 (Stone pagoda)' },
        { english: 'To tread / step on', emoji: '👣', example: '땅을 답다 (Tread upon the ground)' },
      ],
    },
    {
      korean: '뢰',
      meanings: [
        { english: 'Thunder', emoji: '⚡', example: '천둥 (Thunder)' },
        { english: 'Tired / fatigued', emoji: '😩', example: '체력이 뢰하다 (Feel fatigued)' },
        { english: 'To rely on', emoji: '🤝', example: '친구를 뢰하다 (Rely on a friend)' },
      ],
    },
    {
      korean: '물',
      meanings: [
        { english: 'Water', emoji: '💧', example: '물을 마시다 (Drink water)' },
        { english: 'Goods / things', emoji: '📦', example: '물건 (Goods)' },
        { english: 'Opportunity / chance', emoji: '🎯', example: '기회의 물 (A wave of opportunity)' },
      ],
    },
    {
      korean: '몸',
      meanings: [
        { english: 'Body', emoji: '🧍', example: '몸이 아프다 (My body hurts)' },
        { english: 'Group / cluster', emoji: '👥', example: '한 몸 (One body / united group)' },
      ],
    },
    {
      korean: '몰',
      meanings: [
        { english: 'Mall / shopping center', emoji: '🏬', example: '쇼핑몰 (Shopping mall)' },
        { english: 'Hidden / concealed', emoji: '🙈', example: '몰래 (Secretly)' },
        { english: 'To drive / herd', emoji: '🐄', example: '가축을 몰다 (Herd livestock)' },
      ],
    },
    {
      korean: '막',
      meanings: [
        { english: 'To block / stop', emoji: '🛑', example: '길을 막다 (Block the road)' },
        { english: 'The end / last', emoji: '🔚', example: '막바지 (The final stretch)' },
        { english: 'Tree bark', emoji: '🌳', example: '나무껍질 (Tree bark)' },
        { english: 'Just now / a moment ago', emoji: '⏱️', example: '막 도착했다 (Just arrived)' },
      ],
    },
    {
      korean: '묵',
      meanings: [
        { english: 'Black ink', emoji: '🖊️', example: '먹으로 쓰다 (Write with ink)' },
        { english: 'Silence / keeping quiet', emoji: '🤫', example: '묵묵부답 (Silent, no reply)' },
        { english: 'To eat (solid food)', emoji: '🍚', example: '밥을 먹다 (Eat a meal)' },
      ],
    },
    {
      korean: '무',
      meanings: [
        { english: 'Nothing / none', emoji: '0️⃣', example: '아무것도 없다 (There is nothing)' },
        { english: 'Dance', emoji: '💃', example: '춤을 추다 (Dance)' },
        { english: 'Radish', emoji: '🥕', example: '무김치 (Radish kimchi)' },
        { english: 'Military service', emoji: '🪖', example: '입대하다 (Enlist for military service)' },
      ],
    },
    {
      korean: '가',
      meanings: [
        { english: 'Price / gap', emoji: '💲', example: '값이 가격이다 (The price is the cost)' },
        { english: 'To add', emoji: '➕', example: '숫자를 가하다 (Add numbers)' },
      ],
    },
    {
      korean: '갈',
      meanings: [
        { english: 'Thirst', emoji: '🏜️', example: '목이 마르다 (Feel thirsty)' },
        { english: 'To sip / gulp', emoji: '🥤', example: '물을 갈갈 마시다 (Gulp down water)' },
      ],
    },
    {
      korean: '개',
      meanings: [
        { english: 'Dog', emoji: '🐕', example: '개가 짖다 (A dog barks)' },
        { english: 'Each / apiece', emoji: '🔢', example: '개당 천 원 (One thousand won each)' },
      ],
    },
    {
      korean: '거',
      meanings: [
        { english: 'Thing / matter', emoji: '📦', example: '그런 거 없다 (There is no such thing)' },
        { english: 'Giant / huge', emoji: '🦣', example: '거대한 건물 (A giant building)' },
      ],
    },
    {
      korean: '격',
      meanings: [
        { english: 'Rank / level', emoji: '🏅', example: '격이 높다 (Of high rank)' },
        { english: 'To strike / hit', emoji: '👊', example: '격투기를 하다 (Do martial arts)' },
      ],
    },
    {
      korean: '결',
      meanings: [
        { english: 'To tie / knot', emoji: '🪢', example: '매듭을 짓다 (Tie a knot)' },
        { english: 'Frost', emoji: '❄️', example: '결빙 도로 (An icy road)' },
        { english: 'Farewell / parting', emoji: '👋', example: '결별하다 (Part ways)' },
      ],
    },
    {
      korean: '곡',
      meanings: [
        { english: 'Song / tune', emoji: '🎵', example: '곡을 부르다 (Sing a song)' },
        { english: 'Grain / cereal', emoji: '🌾', example: '오곡밥 (Five-grain rice)' },
      ],
    },
    {
      korean: '권',
      meanings: [
        { english: 'Authority / right', emoji: '⚖️', example: '권리를 주장하다 (Assert one\'s rights)' },
        { english: 'Volume (of a book)', emoji: '📚', example: '1권 (Volume one)' },
        { english: 'To recommend', emoji: '👍', example: '책을 권하다 (Recommend a book)' },
      ],
    },
    {
      korean: '근',
      meanings: [
        { english: 'Root', emoji: '🌱', example: '뿌리가 깊다 (The roots run deep)' },
        { english: 'Near / close', emoji: '📍', example: '가까운 곳 (A nearby place)' },
        { english: 'Diligent', emoji: '💪', example: '근면하다 (Be diligent)' },
      ],
    },
    {
      korean: '급',
      meanings: [
        { english: 'Urgent', emoji: '🚨', example: '급한 일 (An urgent matter)' },
        { english: 'Grade / rank', emoji: '📊', example: '1급 자격증 (A grade-one certificate)' },
      ],
    },
    {
      korean: '낙',
      meanings: [
        { english: 'To fall / drop', emoji: '⬇️', example: '낙하하다 (Fall down)' },
        { english: 'Pleasure / enjoyment', emoji: '😄', example: '오락을 즐기다 (Enjoy entertainment)' },
      ],
    },
    {
      korean: '남',
      meanings: [
        { english: 'Man / male', emoji: '👨', example: '남자 (A man)' },
        { english: 'South', emoji: '🧭', example: '남쪽 (The south)' },
        { english: 'To remain / stay', emoji: '⏳', example: '집에 남다 (Stay at home)' },
      ],
    },
    {
      korean: '년',
      meanings: [
        { english: 'Year', emoji: '📅', example: '새해 복 많이 받으세요 (Happy New Year)' },
        { english: 'Sticky / glutinous', emoji: '🍡', example: '찹쌀떡 (Sticky rice cake)' },
      ],
    },
    {
      korean: '단',
      meanings: [
        { english: 'Section / paragraph', emoji: '📄', example: '1단 (Section one)' },
        { english: 'To break / cut off', emoji: '✂️', example: '단절하다 (Cut off ties)' },
        { english: 'Group / squad', emoji: '👥', example: '한 단 (One squad)' },
      ],
    },
    {
      korean: '당',
      meanings: [
        { english: 'Political party', emoji: '🏛️', example: '정당 (A political party)' },
        { english: 'Sugar', emoji: '🍬', example: '설탕 (Sugar)' },
        { english: 'When / at the time', emoji: '⏰', example: '그 당시 (At that time)' },
      ],
    },
    {
      korean: '도',
      meanings: [
        { english: 'Road / way', emoji: '🛤️', example: '길을 걷다 (Walk on the road)' },
        { english: 'Degree / extent', emoji: '🌡️', example: '30도 (Thirty degrees)' },
        { english: 'Map / diagram', emoji: '🗺️', example: '지도를 보다 (Look at a map)' },
      ],
    },
    {
      korean: '동',
      meanings: [
        { english: 'Same / together', emoji: '🤝', example: '동갑이다 (We are the same age)' },
        { english: 'East', emoji: '🌅', example: '동쪽 (The east)' },
        { english: 'Neighborhood / district', emoji: '🏘️', example: '우리 동네 (Our neighborhood)' },
      ],
    },
    {
      korean: '류',
      meanings: [
        { english: 'To flow', emoji: '🌊', example: '강물이 흐르다 (River water flows)' },
        { english: 'Willow tree', emoji: '🌳', example: '버들이 흔들리다 (Willows sway)' },
        { english: 'Type / kind', emoji: '🏷️', example: '종류가 다양하다 (There are many types)' },
      ],
    },
    {
      korean: '마',
      meanings: [
        { english: 'Hemp / flax', emoji: '🧵', example: '삼베 옷 (Hemp clothing)' },
        { english: 'Horse', emoji: '🐴', example: '말을 타다 (Ride a horse)' },
        { english: 'Numb', emoji: '😵', example: '다리가 저리다 (Legs feel numb)' },
      ],
    },
    {
      korean: '망',
      meanings: [
        { english: 'Net', emoji: '🕸️', example: '그물을 치다 (Cast a net)' },
        { english: 'Death / to perish', emoji: '💀', example: '망하다 (Perish)' },
        { english: 'To forget', emoji: '🧠', example: '잊어버리다 (Forget completely)' },
      ],
    },
    {
      korean: '매',
      meanings: [
        { english: 'Every / each', emoji: '🔁', example: '매일 (Every day)' },
        { english: 'Hawk', emoji: '🦅', example: '매가 사냥하다 (A hawk hunts)' },
        { english: 'To sell', emoji: '💰', example: '물건을 팔다 (Sell goods)' },
      ],
    },
    {
      korean: '면',
      meanings: [
        { english: 'Face', emoji: '😊', example: '얼굴을 씻다 (Wash your face)' },
        { english: 'Noodles', emoji: '🍜', example: '라면을 끓이다 (Boil ramen)' },
        { english: 'Cotton fabric', emoji: '🧵', example: '면 티셔츠 (A cotton T-shirt)' },
      ],
    },
    {
      korean: '명',
      meanings: [
        { english: 'Name', emoji: '🪪', example: '이름이 무엇입니까? (What is your name?)' },
        { english: 'Order / command', emoji: '📢', example: '명령을 따르다 (Follow an order)' },
        { english: 'Bright / clear', emoji: '✨', example: '별이 밝다 (Stars are bright)' },
      ],
    },
    {
      korean: '민',
      meanings: [
        { english: 'People / citizens', emoji: '👥', example: '국민 (The people / citizens)' },
        { english: 'Quick / agile', emoji: '⚡', example: '민첩하다 (Be agile)' },
      ],
    },
    {
      korean: '법',
      meanings: [
        { english: 'Law', emoji: '⚖️', example: '법을 지키다 (Obey the law)' },
        { english: 'Punishment / penalty', emoji: '⛓️', example: '형벌을 받다 (Receive punishment)' },
      ],
    },
    {
      korean: '벽',
      meanings: [
        { english: 'Wall', emoji: '🧱', example: '벽에 그림을 걸다 (Hang a picture on the wall)' },
        { english: 'Jade green', emoji: '💚', example: '벽돌색 (Jade-green color)' },
      ],
    },
    {
      korean: '병',
      meanings: [
        { english: 'Bottle', emoji: '🍾', example: '병에 담다 (Put in a bottle)' },
        { english: 'Illness / disease', emoji: '🤒', example: '병에 걸리다 (Fall ill)' },
        { english: 'Together / side by side', emoji: '👥', example: '병행하다 (Do in parallel)' },
      ],
    },
    {
      korean: '보',
      meanings: [
        { english: 'Treasure', emoji: '💎', example: '보물을 찾다 (Search for treasure)' },
        { english: 'Step / pace', emoji: '👣', example: '한 보 전진하다 (Advance one step)' },
      ],
    },
    {
      korean: '복',
      meanings: [
        { english: 'Luck / fortune', emoji: '🍀', example: '행운이 오다 (Good luck comes)' },
        { english: 'Clothes / uniform', emoji: '👔', example: '복장을 갖추다 (Dress properly)' },
        { english: 'Belly / abdomen', emoji: '🫃', example: '복부가 아프다 (Stomach hurts)' },
      ],
    },
    {
      korean: '본',
      meanings: [
        { english: 'Origin / root', emoji: '🌳', example: '근본 (The root cause)' },
        { english: 'Volume (counter)', emoji: '📖', example: '책 한 권 (One book)' },
      ],
    },
    {
      korean: '분',
      meanings: [
        { english: 'Minute', emoji: '⏱️', example: '5분 후 (In five minutes)' },
        { english: 'Anger / resentment', emoji: '😤', example: '분노하다 (Feel angry)' },
        { english: 'Part / portion', emoji: '🧩', example: '일부분 (A portion)' },
      ],
    },
    {
      korean: '빈',
      meanings: [
        { english: 'Empty / poor', emoji: '🏚️', example: '빈집 (An empty house)' },
        { english: 'Guest', emoji: '🧑‍🤝‍🧑', example: '귀빈 (An honored guest)' },
      ],
    },
    {
      korean: '삼',
      meanings: [
        { english: 'Three (number)', emoji: '3️⃣', example: '세 명 (Three people)' },
        { english: 'Ginseng', emoji: '🌿', example: '인삼 (Ginseng)' },
        { english: 'To participate', emoji: '🙋', example: '회의에 참석하다 (Attend a meeting)' },
      ],
    },
    {
      korean: '서',
      meanings: [
        { english: 'West', emoji: '🌇', example: '서쪽 (The west)' },
        { english: 'Book / writing', emoji: '📖', example: '독서를 하다 (Read books)' },
      ],
    },
    {
      korean: '석',
      meanings: [
        { english: 'Stone / rock', emoji: '🪨', example: '돌멩이 (A stone)' },
        { english: 'Seat', emoji: '💺', example: '자리에 앉다 (Take a seat)' },
        { english: 'To analyze', emoji: '🔬', example: '해석하다 (Analyze and interpret)' },
      ],
    },
    {
      korean: '선',
      meanings: [
        { english: 'Line', emoji: '📏', example: '직선 (A straight line)' },
        { english: 'Ship / vessel', emoji: '🚢', example: '배를 타다 (Board a ship)' },
        { english: 'Good / virtuous', emoji: '😇', example: '선한 사람 (A good person)' },
      ],
    },
    {
      korean: '설',
      meanings: [
        { english: 'Snow', emoji: '❄️', example: '눈이 내리다 (Snow falls)' },
        { english: 'Theory / doctrine', emoji: '📚', example: '이론을 배우다 (Learn a theory)' },
        { english: 'Tongue', emoji: '👅', example: '혀를 내밀다 (Stick out your tongue)' },
      ],
    },
    {
      korean: '숙',
      meanings: [
        { english: 'Lodging', emoji: '🏨', example: '숙소를 잡다 (Book lodging)' },
        { english: 'Ripe / mature', emoji: '🍑', example: '과일이 익다 (Fruit ripens)' },
        { english: 'Solemn / grave', emoji: '😐', example: '숙연하다 (Be solemn)' },
      ],
    },
    {
      korean: '순',
      meanings: [
        { english: 'Order / sequence', emoji: '🔢', example: '순서대로 (In order)' },
        { english: 'Pure', emoji: '💧', example: '순수하다 (Be pure)' },
        { english: 'Moment / instant', emoji: '⚡', example: '순간 (A moment)' },
      ],
    },
    {
      korean: '쇠',
      meanings: [
        { english: 'Iron / metal', emoji: '🔩', example: '쇠붙이 (Iron scraps)' },
        { english: 'To decay / decline', emoji: '📉', example: '기운이 쇠하다 (Strength declines)' },
      ],
    },
    {
      korean: '시',
      meanings: [
        { english: 'Poem', emoji: '📜', example: '시를 읊다 (Recite a poem)' },
        { english: 'City', emoji: '🏙️', example: '도시에 살다 (Live in a city)' },
        { english: 'To try / attempt', emoji: '🎯', example: '시험을 보다 (Take a test)' },
      ],
    },
    {
      korean: '신',
      meanings: [
        { english: 'God / deity', emoji: '⛩️', example: '신을 믿다 (Believe in God)' },
        { english: 'Body', emoji: '🧍', example: '신체 (The body)' },
        { english: 'New', emoji: '🆕', example: '신제품 (A new product)' },
      ],
    },
    {
      korean: '쌍',
      meanings: [
        { english: 'Pair / double', emoji: '👯', example: '한 쌍 (A pair)' },
        { english: 'Twin', emoji: '👫', example: '쌍둥이 (Twins)' },
      ],
    },
    {
      korean: '씨',
      meanings: [
        { english: 'Seed', emoji: '🌰', example: '씨앗을 심다 (Plant seeds)' },
        { english: 'Mr. / Ms. (honorific)', emoji: '🪪', example: '김 씨 (Mr./Ms. Kim)' },
      ],
    },
    {
      korean: '악',
      meanings: [
        { english: 'Evil / bad', emoji: '😈', example: '악몽 (A nightmare)' },
        { english: 'Music', emoji: '🎶', example: '음악을 듣다 (Listen to music)' },
      ],
    },
    {
      korean: '야',
      meanings: [
        { english: 'Night', emoji: '🌙', example: '밤에 공부하다 (Study at night)' },
        { english: 'Field / wilderness', emoji: '🌾', example: '들판 (An open field)' },
      ],
    },
    {
      korean: '어',
      meanings: [
        { english: 'Language / words', emoji: '💬', example: '한국어 (Korean language)' },
        { english: 'Fish', emoji: '🐟', example: '생선을 먹다 (Eat fish)' },
      ],
    },
    {
      korean: '억',
      meanings: [
        { english: 'Hundred million', emoji: '💰', example: '1억 원 (One hundred million won)' },
        { english: 'To suppress / restrain', emoji: '🤐', example: '감정을 억누르다 (Suppress emotions)' },
      ],
    },
    {
      korean: '여',
      meanings: [
        { english: 'Woman / female', emoji: '👩', example: '여자 (A woman)' },
        { english: 'Excess / surplus', emoji: '📈', example: '여유가 있다 (Have leeway)' },
      ],
    },
    {
      korean: '연',
      meanings: [
        { english: 'Smoke', emoji: '💨', example: '연기가 나다 (Smoke rises)' },
        { english: 'Lotus', emoji: '🪷', example: '연꽃 (A lotus flower)' },
        { english: 'Soft / tender', emoji: '🪶', example: '연한 색 (A soft color)' },
      ],
    },
    {
      korean: '염',
      meanings: [
        { english: 'Salt', emoji: '🧂', example: '소금을 뿌리다 (Sprinkle salt)' },
        { english: 'Thought / concern', emoji: '💭', example: '걱정하다 (Worry)' },
      ],
    },
    {
      korean: '오',
      meanings: [
        { english: 'Five (number)', emoji: '5️⃣', example: '다섯 명 (Five people)' },
        { english: 'Noon', emoji: '🕛', example: '정오 (Noon)' },
        { english: 'Mistake / error', emoji: '❌', example: '오해하다 (Misunderstand)' },
      ],
    },
    {
      korean: '옥',
      meanings: [
        { english: 'Jade', emoji: '💚', example: '옥으로 만든 반지 (A jade ring)' },
        { english: 'Prison / jail', emoji: '🔒', example: '감옥에 갇히다 (Be imprisoned)' },
      ],
    },
    {
      korean: '외',
      meanings: [
        { english: 'Outside', emoji: '🚪', example: '밖에 나가다 (Go outside)' },
        { english: 'Foreign', emoji: '🌍', example: '외국 (A foreign country)' },
      ],
    },
    {
      korean: '요',
      meanings: [
        { english: 'To need / require', emoji: '📌', example: '필요하다 (Be necessary)' },
        { english: 'Brilliance / glory', emoji: '✨', example: '영광 (Glory)' },
      ],
    },
    {
      korean: '용',
      meanings: [
        { english: 'Dragon', emoji: '🐉', example: '용이 나타나다 (A dragon appears)' },
        { english: 'To use', emoji: '🔧', example: '도구를 쓰다 (Use a tool)' },
      ],
    },
    {
      korean: '우',
      meanings: [
        { english: 'Rain', emoji: '🌧️', example: '비가 오다 (It rains)' },
        { english: 'Right (direction)', emoji: '➡️', example: '오른쪽 (The right side)' },
        { english: 'Foolish', emoji: '🤪', example: '우스운 농담 (A silly joke)' },
      ],
    },
    {
      korean: '운',
      meanings: [
        { english: 'Luck / fortune', emoji: '🍀', example: '운이 좋다 (Have good luck)' },
        { english: 'Cloud', emoji: '☁️', example: '구름이 끼다 (Clouds gather)' },
      ],
    },
    {
      korean: '위',
      meanings: [
        { english: 'Stomach', emoji: '🫃', example: '위가 아프다 (Stomach hurts)' },
        { english: 'Danger', emoji: '⚠️', example: '위험하다 (Be dangerous)' },
        { english: 'Above / on top', emoji: '⬆️', example: '위에 올리다 (Put on top)' },
      ],
    },
    {
      korean: '유',
      meanings: [
        { english: 'Oil', emoji: '🛢️', example: '기름을 넣다 (Add oil)' },
        { english: 'To flow', emoji: '🌊', example: '강이 흐르다 (A river flows)' },
        { english: 'Reason / cause', emoji: '💡', example: '이유가 있다 (There is a reason)' },
      ],
    },
    {
      korean: '육',
      meanings: [
        { english: 'Meat', emoji: '🥩', example: '고기를 먹다 (Eat meat)' },
        { english: 'Six (number)', emoji: '6️⃣', example: '여섯 개 (Six items)' },
      ],
    },
    {
      korean: '음',
      meanings: [
        { english: 'Sound', emoji: '🔊', example: '소리가 크다 (The sound is loud)' },
        { english: 'Yin / shade', emoji: '🌑', example: '음양 (Yin and yang)' },
        { english: 'To drink', emoji: '🥤', example: '물을 마시다 (Drink water)' },
      ],
    },
    {
      korean: '의',
      meanings: [
        { english: 'Clothes', emoji: '👕', example: '옷을 입다 (Wear clothes)' },
        { english: 'Meaning / intention', emoji: '💭', example: '의미가 있다 (It has meaning)' },
        { english: 'Righteousness / justice', emoji: '⚖️', example: '정의롭다 (Be just)' },
      ],
    },
    {
      korean: '일',
      meanings: [
        { english: 'One (number)', emoji: '1️⃣', example: '하나 (One)' },
        { english: 'Work / task', emoji: '💼', example: '일을 하다 (Do work)' },
        { english: 'Day', emoji: '📅', example: '하루 (One day)' },
      ],
    },
    {
      korean: '임',
      meanings: [
        { english: 'Forest', emoji: '🌲', example: '숲속 (In the forest)' },
        { english: 'Duty / term of office', emoji: '📋', example: '임기 (A term of office)' },
      ],
    },
    {
      korean: '좌',
      meanings: [
        { english: 'Seat', emoji: '💺', example: '자리에 앉다 (Take a seat)' },
        { english: 'Left (direction)', emoji: '⬅️', example: '왼쪽 (The left side)' },
      ],
    },
    {
      korean: '진',
      meanings: [
        { english: 'True / real', emoji: '✅', example: '진짜 (Real / true)' },
        { english: 'To advance / progress', emoji: '🚀', example: '전진하다 (Advance forward)' },
        { english: 'Battle formation', emoji: '⚔️', example: '진을 치다 (Set up a formation)' },
      ],
    },
    {
      korean: '질',
      meanings: [
        { english: 'Quality', emoji: '⭐', example: '품질이 좋다 (Good quality)' },
        { english: 'Question', emoji: '❓', example: '질문하다 (Ask a question)' },
      ],
    },
    {
      korean: '착',
      meanings: [
        { english: 'To wear / put on', emoji: '👕', example: '옷을 입다 (Put on clothes)' },
        { english: 'Wrong / mistaken', emoji: '❌', example: '착각하다 (Be mistaken)' },
      ],
    },
    {
      korean: '책',
      meanings: [
        { english: 'Book', emoji: '📚', example: '책을 읽다 (Read a book)' },
        { english: 'Responsibility / blame', emoji: '⚖️', example: '책임지다 (Take responsibility)' },
      ],
    },
    {
      korean: '처',
      meanings: [
        { english: 'Wife', emoji: '👩', example: '처가 (Wife\'s family)' },
        { english: 'Place / spot', emoji: '📍', example: '그곳에서 (At that place)' },
      ],
    },
    {
      korean: '초',
      meanings: [
        { english: 'Beginning / first', emoji: '🌱', example: '초보 (A beginner)' },
        { english: 'Grass / herb', emoji: '🌿', example: '초원 (A grassland)' },
        { english: 'Second (time)', emoji: '⏱️', example: '3초 (Three seconds)' },
      ],
    },
    {
      korean: '총',
      meanings: [
        { english: 'Gun / rifle', emoji: '🔫', example: '총을 쏘다 (Fire a gun)' },
        { english: 'Total / sum', emoji: '🔢', example: '총합 (The total sum)' },
        { english: 'Green onion', emoji: '🧅', example: '파를 썰다 (Slice green onion)' },
      ],
    },
    {
      korean: '출',
      meanings: [
        { english: 'To go out / exit', emoji: '🚪', example: '밖으로 나가다 (Go outside)' },
        { english: 'To be born / originate', emoji: '👶', example: '태어나다 (Be born)' },
      ],
    },
    {
      korean: '춘',
      meanings: [
        { english: 'Spring (season)', emoji: '🌸', example: '봄이 오다 (Spring comes)' },
        { english: 'Camellia', emoji: '🌺', example: '동백꽃 (Camellia flowers)' },
      ],
    },
    {
      korean: '태',
      meanings: [
        { english: 'Attitude / manner', emoji: '🧍', example: '태도가 좋다 (Have a good attitude)' },
        { english: 'Fetus', emoji: '🤰', example: '태아 (A fetus)' },
        { english: 'Great peace', emoji: '☮️', example: '태평하다 (Be peaceful)' },
      ],
    },
    {
      korean: '탕',
      meanings: [
        { english: 'Soup / broth', emoji: '🍲', example: '국을 끓이다 (Boil soup)' },
        { english: 'Hot bath', emoji: '🛁', example: '목욕탕 (A public bathhouse)' },
      ],
    },
    {
      korean: '판',
      meanings: [
        { english: 'Board / plank', emoji: '🪵', example: '나무판 (A wooden board)' },
        { english: 'Edition / issue', emoji: '📰', example: '신문 한 판 (One edition of the paper)' },
        { english: 'To judge', emoji: '⚖️', example: '판결하다 (Pass judgment)' },
      ],
    },
    {
      korean: '평',
      meanings: [
        { english: 'Flat / level', emoji: '📏', example: '평평하다 (Be flat)' },
        { english: 'Critique / review', emoji: '📝', example: '평가하다 (Evaluate)' },
        { english: 'Bottle', emoji: '🍾', example: '술병 (A liquor bottle)' },
      ],
    },
    {
      korean: '포',
      meanings: [
        { english: 'Package / bundle', emoji: '📦', example: '소포를 보내다 (Send a parcel)' },
        { english: 'Cannon', emoji: '💣', example: '대포를 쏘다 (Fire a cannon)' },
        { english: 'To capture / arrest', emoji: '🚔', example: '범인을 잡다 (Capture a criminal)' },
      ],
    },
    {
      korean: '풍',
      meanings: [
        { english: 'Wind', emoji: '💨', example: '바람이 불다 (The wind blows)' },
        { english: 'Abundant / rich', emoji: '🌾', example: '풍년 (A bountiful harvest)' },
      ],
    },
    {
      korean: '피',
      meanings: [
        { english: 'Blood', emoji: '🩸', example: '피가 나다 (Bleed)' },
        { english: 'Skin / hide', emoji: '🧴', example: '피부 (Skin)' },
        { english: 'To bloom', emoji: '🌸', example: '꽃이 피다 (Flowers bloom)' },
      ],
    },
    {
      korean: '합',
      meanings: [
        { english: 'To combine / join', emoji: '🤝', example: '합치다 (Combine)' },
        { english: 'Box / case', emoji: '📦', example: '상자 (A box)' },
      ],
    },
    {
      korean: '해',
      meanings: [
        { english: 'Year', emoji: '📅', example: '새해 (The new year)' },
        { english: 'Harm / damage', emoji: '💔', example: '해를 끼치다 (Cause harm)' },
        { english: 'Sea / ocean', emoji: '🌊', example: '바다 (The sea)' },
      ],
    },
    {
      korean: '행',
      meanings: [
        { english: 'To walk / go', emoji: '🚶', example: '길을 걷다 (Walk on the road)' },
        { english: 'Luck / fortune', emoji: '🍀', example: '행운 (Good luck)' },
      ],
    },
    {
      korean: '허',
      meanings: [
        { english: 'Empty / hollow', emoji: '🕳️', example: '허무하다 (Feel empty)' },
        { english: 'To permit / allow', emoji: '✅', example: '허락하다 (Give permission)' },
      ],
    },
    {
      korean: '현',
      meanings: [
        { english: 'Present / current', emoji: '🕐', example: '현재 (The present)' },
        { english: 'Mystery / arcane', emoji: '🔮', example: '신비롭다 (Be mysterious)' },
      ],
    },
    {
      korean: '호',
      meanings: [
        { english: 'Number / title', emoji: '🔢', example: '3호 (Number three)' },
        { english: 'Tiger', emoji: '🐯', example: '호랑이 (A tiger)' },
        { english: 'Lake', emoji: '🏞️', example: '호수 (A lake)' },
      ],
    },
    {
      korean: '환',
      meanings: [
        { english: 'To exchange', emoji: '🔄', example: '환전하다 (Exchange currency)' },
        { english: 'Ring / loop', emoji: '💍', example: '고리 (A ring)' },
        { english: 'Illness', emoji: '🤒', example: '질환 (A disease)' },
      ],
    },
    {
      korean: '활',
      meanings: [
        { english: 'To live / active', emoji: '❤️', example: '활기차다 (Be lively)' },
        { english: 'Bow (weapon)', emoji: '🏹', example: '활을 쏘다 (Shoot a bow)' },
      ],
    },
    {
      korean: '황',
      meanings: [
        { english: 'Yellow (color)', emoji: '💛', example: '노란색 (Yellow)' },
        { english: 'Emperor', emoji: '👑', example: '황제 (An emperor)' },
      ],
    },
    {
      korean: '흉',
      meanings: [
        { english: 'Bad omen', emoji: '🔮', example: '흉조 (A bad omen)' },
        { english: 'Chest / breast', emoji: '🫁', example: '가슴 (The chest)' },
      ],
    },
    {
      korean: '흑',
      meanings: [
        { english: 'Black (color)', emoji: '⬛', example: '검은색 (The color black)' },
        { english: 'Darkness', emoji: '🌑', example: '어둠 (Darkness)' },
      ],
    },
    {
      korean: '희',
      meanings: [
        { english: 'Hope', emoji: '🌟', example: '희망을 갖다 (Have hope)' },
        { english: 'Rare / scarce', emoji: '💎', example: '희귀하다 (Be rare)' },
        { english: 'Joy / delight', emoji: '😊', example: '기쁨 (Joy)' },
      ],
    },
    {
      korean: '갱',
      meanings: [
        { english: 'Mine shaft / pit', emoji: '⛏️', example: '갱도 (A mine tunnel)' },
        { english: 'To renew / replace', emoji: '🔄', example: '갱신하다 (Renew / update)' },
      ],
    },
    {
      korean: '검',
      meanings: [
        { english: 'Sword', emoji: '⚔️', example: '검을 휘두르다 (Swing a sword)' },
        { english: 'To examine / inspect', emoji: '🔍', example: '검사하다 (Inspect)' },
      ],
    },
    {
      korean: '곱',
      meanings: [
        { english: 'Pretty / beautiful', emoji: '✨', example: '얼굴이 곱다 (Have a pretty face)' },
        { english: 'To multiply', emoji: '✖️', example: '2에 3을 곱하다 (Multiply 2 by 3)' },
      ],
    },
    {
      korean: '광',
      meanings: [
        { english: 'Light / ray', emoji: '💡', example: '빛이 나다 (Light shines)' },
        { english: 'Mad / obsessed', emoji: '🤯', example: '광적으로 좋아하다 (Be obsessed with)' },
      ],
    },
    {
      korean: '교',
      meanings: [
        { english: 'Bridge', emoji: '🌉', example: '다리를 건너다 (Cross a bridge)' },
        { english: 'To teach', emoji: '👨‍🏫', example: '학생을 가르치다 (Teach students)' },
      ],
    },
    {
      korean: '균',
      meanings: [
        { english: 'Balance / equilibrium', emoji: '⚖️', example: '균형을 잡다 (Keep balance)' },
        { english: 'Germ / bacteria', emoji: '🦠', example: '세균 (Bacteria)' },
      ],
    },
    {
      korean: '덕',
      meanings: [
        { english: 'Virtue / merit', emoji: '😇', example: '덕이 있다 (Have virtue)' },
        { english: 'Pot lid', emoji: '🫕', example: '뚜껑을 덮다 (Cover with a lid)' },
      ],
    },
    {
      korean: '독',
      meanings: [
        { english: 'Poison', emoji: '☠️', example: '독이 있다 (It is poisonous)' },
        { english: 'Alone / solo', emoji: '1️⃣', example: '독주하다 (Go solo)' },
      ],
    },
    {
      korean: '둔',
      meanings: [
        { english: 'Dull / blunt', emoji: '🔪', example: '칼이 둔하다 (The knife is dull)' },
        { english: 'Slow / sluggish', emoji: '🐢', example: '반응이 둔하다 (Reactions are slow)' },
      ],
    },
    {
      korean: '노',
      meanings: [
        { english: 'Old / aged', emoji: '👴', example: '늙다 (Grow old)' },
        { english: 'Labor / effort', emoji: '💪', example: '노력하다 (Make an effort)' },
      ],
    },
    {
      korean: '맛',
      meanings: [
        { english: 'Taste / flavor', emoji: '👅', example: '맛이 좋다 (It tastes good)' },
        { english: 'To lose (in betting)', emoji: '🎲', example: '내기에서 지다 (Lose a bet)' },
      ],
    },
    {
      korean: '맥',
      meanings: [
        { english: 'Pulse / vein', emoji: '💓', example: '맥박을 재다 (Take a pulse)' },
        { english: 'Wheat', emoji: '🌾', example: '밀가루 (Wheat flour)' },
      ],
    },
    {
      korean: '몽',
      meanings: [
        { english: 'Dream', emoji: '💤', example: '꿈을 꾸다 (Have a dream)' },
        { english: 'Hood / cover', emoji: '🧥', example: '덮개를 씌우다 (Put on a cover)' },
      ],
    },
    {
      korean: '묘',
      meanings: [
        { english: 'Tomb / grave', emoji: '🪦', example: '무덤을 찾다 (Visit a grave)' },
        { english: 'Excellent / skillful', emoji: '⭐', example: '묘기를 부리다 (Show a skillful trick)' },
      ],
    },
    {
      korean: '봄',
      meanings: [
        { english: 'Spring (season)', emoji: '🌸', example: '봄이 왔다 (Spring has come)' },
        { english: 'First attempt / try', emoji: '🎯', example: '첫 시도 (A first try)' },
      ],
    },
    {
      korean: '북',
      meanings: [
        { english: 'North', emoji: '🧭', example: '북쪽 (The north)' },
        { english: 'Drum', emoji: '🥁', example: '북을 치다 (Beat a drum)' },
      ],
    },
    {
      korean: '범',
      meanings: [
        { english: 'Tiger', emoji: '🐯', example: '호랑이 (A tiger)' },
        { english: 'Crime / offense', emoji: '🚔', example: '범죄 (A crime)' },
      ],
    },
    {
      korean: '번',
      meanings: [
        { english: 'Number / turn', emoji: '🔢', example: '3번 (Number three)' },
        { english: 'Troubled / annoyed', emoji: '😩', example: '번거롭다 (Be troublesome)' },
      ],
    },
    {
      korean: '먹',
      meanings: [
        { english: 'Black ink', emoji: '🖊️', example: '먹으로 쓰다 (Write with ink)' },
        { english: 'To eat (verb stem)', emoji: '🍚', example: '밥을 먹다 (Eat a meal)' },
      ],
    },
    {
      korean: '모',
      meanings: [
        { english: 'All / every', emoji: '🔢', example: '모두 (Everyone)' },
        { english: 'Gathering / meeting', emoji: '👥', example: '모임 (A gathering)' },
      ],
    },
    {
      korean: '목',
      meanings: [
        { english: 'Neck / throat', emoji: '🗣️', example: '목이 마르다 (Throat is dry)' },
        { english: 'Tree / wood', emoji: '🌳', example: '목재 (Lumber)' },
        { english: 'Goal / aim', emoji: '🎯', example: '목표 (A goal)' },
      ],
    },
    {
      korean: '땀',
      meanings: [
        { english: 'Sweat', emoji: '💦', example: '땀을 흘리다 (Break a sweat)' },
        { english: 'Pit / hole in ground', emoji: '🕳️', example: '구덩이 (A pit)' },
      ],
    },
    {
      korean: '뜻',
      meanings: [
        { english: 'Meaning / sense', emoji: '💭', example: '뜻이 통하다 (Meanings align)' },
        { english: 'Will / intention', emoji: '🎯', example: '뜻을 이루다 (Fulfill one\'s will)' },
      ],
    },
    {
      korean: '떼',
      meanings: [
        { english: 'Group / gang', emoji: '👥', example: '떼를 지어 (In a group)' },
        { english: 'To peel off', emoji: '🍊', example: '껍질을 벗기다 (Peel the skin)' },
      ],
    },
    {
      korean: '붓',
      meanings: [
        { english: 'Writing brush', emoji: '🖌️', example: '붓으로 그리다 (Draw with a brush)' },
        { english: 'To pour', emoji: '🫗', example: '물을 붓다 (Pour water)' },
      ],
    },
    {
      korean: '삽',
      meanings: [
        { english: 'Shovel', emoji: '🔧', example: '삽으로 파다 (Dig with a shovel)' },
        { english: 'To insert / plug in', emoji: '🔌', example: '코드를 꽂다 (Plug in a cord)' },
      ],
    },
    {
      korean: '세',
      meanings: [
        { english: 'World / generation', emoji: '🌍', example: '세계 (The world)' },
        { english: 'Tax', emoji: '💰', example: '세금을 내다 (Pay taxes)' },
        { english: 'Age (years)', emoji: '🎂', example: '스무 살 (Twenty years old)' },
      ],
    },
    {
      korean: '소',
      meanings: [
        { english: 'Cow', emoji: '🐄', example: '소가 풀을 먹다 (A cow eats grass)' },
        { english: 'Small / little', emoji: '🔬', example: '소리 (A small sound)' },
        { english: 'To burn', emoji: '🔥', example: '불에 타다 (Burn in fire)' },
      ],
    },
    {
      korean: '송',
      meanings: [
        { english: 'Pine tree', emoji: '🌲', example: '소나무 (A pine tree)' },
        { english: 'To send', emoji: '📮', example: '편지를 보내다 (Send a letter)' },
      ],
    },
    {
      korean: '숲',
      meanings: [
        { english: 'Forest / woods', emoji: '🌳', example: '숲속을 걷다 (Walk through the woods)' },
        { english: 'Cluster / grove', emoji: '🌿', example: '나무 숲 (A grove of trees)' },
      ],
    },
    {
      korean: '틈',
      meanings: [
        { english: 'Gap / crack', emoji: '🕳️', example: '벽 틈 (A gap in the wall)' },
        { english: 'Spare time / opening', emoji: '⏳', example: '틈을 내다 (Make time)' },
      ],
    },
    {
      korean: '얼',
      meanings: [
        { english: 'Face / countenance', emoji: '😊', example: '얼굴 (Face)' },
        { english: 'To freeze (stem)', emoji: '❄️', example: '꽃이 얼다 (Flowers freeze)' },
      ],
    },
    {
      korean: '업',
      meanings: [
        { english: 'Work / business', emoji: '💼', example: '사업을 하다 (Run a business)' },
        { english: 'Karma / deed', emoji: '☯️', example: '업보 (Karmic retribution)' },
      ],
    },
    {
      korean: '약',
      meanings: [
        { english: 'Medicine / drug', emoji: '💊', example: '약을 먹다 (Take medicine)' },
        { english: 'Weak / frail', emoji: '🪶', example: '약하다 (Be weak)' },
        { english: 'Approximately / about', emoji: '≈', example: '약 10명 (About ten people)' },
      ],
    },
    {
      korean: '압',
      meanings: [
        { english: 'Pressure', emoji: '🫠', example: '압력이 세다 (Pressure is high)' },
        { english: 'To press / squeeze', emoji: '🤏', example: '꽉 쥐다 (Squeeze tightly)' },
      ],
    },
    {
      korean: '아',
      meanings: [
        { english: 'Child (archaic/dialect)', emoji: '👶', example: '아이 (A child)' },
        { english: 'Oh! (exclamation)', emoji: '😮', example: '아, 그렇구나! (Oh, I see!)' },
      ],
    },
    {
      korean: '온',
      meanings: [
        { english: 'Warm / mild', emoji: '🌡️', example: '날씨가 온화하다 (The weather is mild)' },
        { english: 'All / entire', emoji: '🌐', example: '온 세상 (The whole world)' },
      ],
    },
    {
      korean: '완',
      meanings: [
        { english: 'Complete / perfect', emoji: '✅', example: '완벽하다 (Be perfect)' },
        { english: 'Bowl / dish', emoji: '🥣', example: '그릇 (A bowl)' },
      ],
    },
    {
      korean: '울',
      meanings: [
        { english: 'To cry / weep', emoji: '😢', example: '울다 (Cry)' },
        { english: 'Fence / railing', emoji: '🚧', example: '울타리 (A fence)' },
      ],
    },
    {
      korean: '쌓',
      meanings: [
        { english: 'To pile up / stack', emoji: '📚', example: '책을 쌓다 (Stack books)' },
        { english: 'To train / forge', emoji: '⚒️', example: '기술을 쌓다 (Build up skills)' },
      ],
    },
    {
      korean: '썰',
      meanings: [
        { english: 'To slice / cut', emoji: '🔪', example: '야채를 썰다 (Slice vegetables)' },
        { english: 'Story / tale', emoji: '📖', example: '이야기를 하다 (Tell a story)' },
      ],
    },
    {
      korean: '빗',
      meanings: [
        { english: 'Comb', emoji: '💇', example: '빗으로 머리를 빗다 (Comb your hair)' },
        { english: 'Rain (archaic/poetic)', emoji: '🌧️', example: '빗방울 (Raindrops)' },
      ],
    },
    {
      korean: '삯',
      meanings: [
        { english: 'Wages / pay', emoji: '💵', example: '삯을 받다 (Receive wages)' },
        { english: 'Hired labor', emoji: '👷', example: '일당 (Daily wages)' },
      ],
    },
    {
      korean: '솟',
      meanings: [
        { english: 'To rise / spring up', emoji: '⬆️', example: '샘물이 솟다 (Spring water gushes up)' },
        { english: 'To sprout', emoji: '🌱', example: '싹이 트다 (A bud sprouts)' },
      ],
    },
    {
      korean: '숨',
      meanings: [
        { english: 'Breath', emoji: '💨', example: '숨을 쉬다 (Breathe)' },
        { english: 'To hide / conceal', emoji: '🙈', example: '숨다 (Hide)' },
      ],
    },
    {
      korean: '쉬',
      meanings: [
        { english: 'To rest', emoji: '😌', example: '쉬다 (Rest)' },
        { english: 'Easy / simple', emoji: '👌', example: '쉬운 문제 (An easy problem)' },
      ],
    },
    {
      korean: '쓰',
      meanings: [
        { english: 'To write / use', emoji: '✍️', example: '글을 쓰다 (Write)' },
        { english: 'Bitter (taste)', emoji: '😣', example: '맛이 쓰다 (Taste bitter)' },
      ],
    },
    {
      korean: '탈',
      meanings: [
        { english: 'To escape / flee', emoji: '🏃', example: '감옥에서 탈출하다 (Escape from prison)' },
        { english: 'Mask / disguise', emoji: '🎭', example: '탈을 쓰다 (Wear a mask)' },
      ],
    },
    {
      korean: '애',
      meanings: [
        { english: 'Child / kid', emoji: '👶', example: '애기 (A baby)' },
        { english: 'Effort / hardship', emoji: '😓', example: '애쓰다 (Make an effort)' },
      ],
    },
    {
      korean: '엽',
      meanings: [
        { english: 'Leaf (of a plant)', emoji: '🍃', example: '나뭇잎 (A tree leaf)' },
        { english: 'Page / sheet', emoji: '📄', example: '한 장 (One sheet)' },
      ],
    },
    {
      korean: '옆',
      meanings: [
        { english: 'Beside / next to', emoji: '↔️', example: '옆에 앉다 (Sit beside)' },
        { english: 'Side / flank', emoji: '📐', example: '옆면 (A side face)' },
      ],
    },
    {
      korean: '익',
      meanings: [
        { english: 'Ripe / mature', emoji: '🍎', example: '과일이 익다 (Fruit ripens)' },
        { english: 'To familiarize / get used to', emoji: '📚', example: '익숙하다 (Be familiar)' },
      ],
    },
    {
      korean: '잎',
      meanings: [
        { english: 'Leaf', emoji: '🍃', example: '나뭇잎이 떨어지다 (Leaves fall)' },
        { english: 'Blade (of tool)', emoji: '🔪', example: '칼날 (A blade)' },
      ],
    },
    {
      korean: '잔',
      meanings: [
        { english: 'Cup / glass', emoji: '🥛', example: '컵에 따르다 (Pour into a cup)' },
        { english: 'Remaining / leftover', emoji: '🍽️', example: '잔반 (Leftovers)' },
      ],
    },
    {
      korean: '잠',
      meanings: [
        { english: 'Sleep', emoji: '😴', example: '잠을 자다 (Sleep)' },
        { english: 'Saliva / drool', emoji: '💧', example: '잠이 고이다 (Saliva pools)' },
      ],
    },
    {
      korean: '적',
      meanings: [
        { english: 'Enemy', emoji: '⚔️', example: '적과 싸우다 (Fight an enemy)' },
        { english: 'Red (color)', emoji: '🔴', example: '빨간색 (Red color)' },
        { english: 'To pile up / accumulate', emoji: '📚', example: '경험이 쌓이다 (Experience accumulates)' },
      ],
    },
  ],
};
