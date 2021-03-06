const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Gu Long", addedDate: "01/05/2020", updatedDate: "" },
  { id: 2, name: "Tamara Leigh", addedDate: "01/05/2020", updatedDate: "" },
  { id: 3, name: "Jane Austen", addedDate: "01/05/2020", updatedDate: "" },
  { id: 4, name: "Trisha McNary", addedDate: "01/05/2020", updatedDate: "" },
  { id: 5, name: "Talia Jager", addedDate: "01/05/2020", updatedDate: "" },
  { id: 6, name: "I Eat Tomatoes", addedDate: "01/05/2020", updatedDate: "" },
  { id: 7, name: "Er Gen", addedDate: "01/05/2020", updatedDate: "" },
  { id: 8, name: "Mars Gravity", addedDate: "01/05/2020", updatedDate: "" },
];

const books = [
  {
    id: 1,
    title: "7 Killers",
    authorId: 1,
    categoryIds: [1, 2, 7],
    synopsis:
      "From Wuxiaworld: Dragon Fifth is a powerful lord with incredible martial arts, and yet is wasting away from a fatal disease. The only medicine which can cure his sickness lies in the clutches of his venomous ex-wife, Madam Lovesickness, and is guarded by seven dangerous killers, fugitives of the martial world. Into this treacherous love spat tumbles Liu Changjie, a skilled martial artist who loves drinking and women, but has a mysterious past. All is not what it seems in this wuxia heist story. Can you decipher the mystery before the final reveal? (There are only seven chapters in this novel, but they are very long chapters. In total, the story is of equal length to roughly 20-25 average web novel chapters)",
    likes: 0,
    rating: 4.2,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/7k.png?ver=9b915c064823d7f0189651b7936c37f9cca9c355",
    isFeatured: false,
    slug: "7-killers",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [
      {
        id: 1,
        userName: "user001",
        comment: "This is awesome.",
      },
    ],
  },
  {
    id: 2,
    title: "The Unveiling",
    authorId: 2,
    categoryIds: [1],
    synopsis:
      "From Manybooks: 12th century England: Two men vie for the throne: King Stephen the usurper and young Duke Henry the rightful heir. Amid civil and private wars, alliances are forged, loyalties are betrayed, families are divided, and marriages are made. For four years, Lady Annyn Bretanne has trained at arms with one end in mind—to avenge her brother’s murder as God has not deemed it worthy to do. Disguised as a squire, she sets off to exact revenge on a man known only by his surname, Wulfrith. But when she holds his fate in her hands, her will wavers and her heart whispers that her enemy may not be an enemy after all. Baron Wulfrith, renowned trainer of knights, allows no women within his walls for the distraction they breed. What he never expects is that the impetuous young man sent to train under him is a woman who seeks his death—nor that her unveiling will test his faith and distract the warrior from his purpose.",
    likes: 0,
    rating: 3.1,
    imageUrl:
      "https://manybooks.net/sites/default/files/styles/220x330sc/public/2018-06/49.jpg?itok=mmlKB9p-",
    isFeatured: false,
    slug: "the-unveiling",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [
      {
        id: 2,
        userName: "user002",
        comment: "Just finished reading the book.",
      },
    ],
  },
  {
    id: 3,
    title: "Emma",
    authorId: 3,
    categoryIds: [1, 3],
    synopsis:
      "From Manybooks: The main character, Emma Woodhouse, is described in the opening paragraph as ''handsome, clever, and rich'' but is also rather spoiled. As a result of the recent marriage of her former governess, Emma prides herself on her ability to matchmake, and proceeds to take under her wing an illegitimate orphan, Harriet Smith, whom she hopes to marry off to the vicar, Mr Elton. So confident is she that she persuades Harriet to reject a proposal from a young farmer who is a much more suitable partner for the girl.",
    likes: 0,
    rating: 4.1,
    imageUrl:
      "https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-693.jpg?itok=GUgOTN8v",
    isFeatured: false,
    slug: "emma",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 4,
    title: "Alien Pets",
    authorId: 4,
    categoryIds: [5],
    synopsis:
      "From Manybooks: Life gets weird when you’re adopted by an alien. One million years in the future, young human Antaska and her psychic cat are adopted as pets by a gigantic alien. Traveling in outer space, she becomes telepathic in a world where that’s dangerous. Then she gets into a love triangle that’s even more dangerous. Her cat tries to tell Antaska what she’s doing wrong, but will she listen?",
    likes: 0,
    rating: 4.1,
    imageUrl:
      "https://manybooks.net/sites/default/files/styles/220x330sc/public/2020-03/alien.jpg?itok=H6gHtNPn",
    isFeatured: false,
    slug: "alien-pets",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 5,
    title: "Dark Promise",
    authorId: 5,
    categoryIds: [4],
    synopsis:
      "From Manybooks: Rylie has it all - great friends, dream boy, loving family. But on the eve of her sixteenth birthday, her perfect little world shatters. A stranger claiming to be her real mother appears with a secret: Rylie is a faery whose powers will be unleashed on her birthday. Captured and forced into a new life, Rylie struggles to keep everything she loves and discovers a terrifying truth: some promises cannot be broken.",
    likes: 0,
    rating: 4.1,
    imageUrl:
      "https://manybooks.net/sites/default/files/styles/220x330sc/public/2020-03/darkpromise.jpg?itok=Jq5Lg5La",
    isFeatured: false,
    slug: "dark-promise",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 6,
    title: "Desolate Era",
    authorId: 6,
    categoryIds: [2, 4],
    synopsis:
      "From Wuxiaworld: Fate had never been kind to Ji Ning. Wracked by illnesses and infirm his entire life on Earth, Ning knew early on that he would die as a teenager. What he didn’t know was that there really was such a thing as life after death, and that the universe was a far larger place than he thought. A lucky twist of fate (one of the few in Ning’s life) meant that Ning was reborn into a world of Immortals and monsters, of Ki Refiners and powerful Fiendgods, a world where Dynasties lasted for millions of years. A world which is both greater…and yet also smaller…than he ever could imagine. He would have the opportunity to join them, and in this life, Ning swore to himself, he would never let himself be weak again! The Era he was born into was a Desolate one, but Ning would make it his era.",
    likes: 0,
    rating: 4.6,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/de.jpg?ver=6a8b21616e397749f1a334a49aafe82e09ef2db9",
    isFeatured: false,
    slug: "desolate-era",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 7,
    title: "Coiling Dragon",
    authorId: 6,
    categoryIds: [2, 4],
    synopsis:
      "From Wuxiaworld: A.K.A. Panlong, aka Coiling Dragon, is a webnovel by popular Chinese Xianxia (fantasy/kung fu) writer I Eat Tomatoes. This novel has been fully translated by RWX. There are a total of 21 books spanning 800+ chapters, so sit back, buckle your seat belts, and get ready for one long ride! Empires rise and fall on the Yulan Continent. Saints, immortal beings of unimaginable power, battle using spells and swords, leaving swathes of destruction in their wake. Magical beasts rule the mountains, where the brave – or the foolish – go to test their strength. Even the mighty can fall, feasted on by those stronger. The strong live like royalty; the weak strive to survive another day. This is the world which Linley is born into. Raised in the small town of Wushan, Linley is a scion of the Baruch clan, the clan of the once-legendary Dragonblood Warriors. Their fame once shook the world, but the clan is now so decrepit that even the heirlooms of the clan have been sold off. Tasked with reclaiming the lost glory of his clan, Linley will go through countless trials and tribulations, making powerful friends but also deadly enemies. Come witness a new legend in the making. The legend of Linley Baruch",
    likes: 0,
    rating: 4.8,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/cdp.jpg?ver=bf51b81950352283e0e80d19aa4f97bc73fc2c54",
    isFeatured: false,
    slug: "coiling-dragon",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 8,
    title: "I Shall Seal the Heavens",
    authorId: 7,
    categoryIds: [1, 2, 3, 6],
    synopsis:
      "From Wuxiaworld: I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to “Seal the Heavens?” This is a secret that you will have to uncover along with Meng Hao!",
    likes: 0,
    rating: 4.8,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/issth.jpg?ver=2962ed3c79be0e1644ed376f7bcee8b5eac1d24b",
    isFeatured: false,
    slug: "i-shall-seal-the-heavens",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 9,
    title: "A Will Eternal",
    authorId: 7,
    categoryIds: [1, 2, 3, 6],
    synopsis:
      "From Wuxiaworld: A Will Eternal is the fourth major xianxia novel by the renowned Er Gen. It tells the tale of Bai Xiaochun, an endearing but exasperating young man who is driven primarily by his fear of death and desire to live forever, but who deeply values friendship and family. The story takes place in the same Universe as Er Gen's other novels, but is a separate story and can be read alone. That said, it does have connections to the other novels, especially I Shall Seal the Heavens. Those connections only pertain to a handful of chapters, so you can read the novel as a whole and enjoy it without first reading ISSTH. However, the best reading experience would begin with the later portions of ISSTH. This novel is much more comedic and light-hearted than Er Gen's previous works, although it has its fair share of action and drama. ",
    likes: 0,
    rating: 4.8,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/awe.jpg?ver=ad5a9a488196bf8529f2b6ec5a919531f8e57f52",
    isFeatured: false,
    slug: "a-will-eternal",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
  {
    id: 10,
    title: "Against the Gods",
    authorId: 8,
    categoryIds: [1, 2, 3, 4, 6, 7, 8],
    synopsis:
      "From Wuxiaworld: Hunted for possessing a heaven-defying object, Yun Che is a young man in both that life and the next. Throwing himself off a cliff to spite his pursuers, Yun Che is reincarnated as Xiao Che, a recently poisoned teen in another realm. Just as hated in this life as the previous one, Che must overcome his own hostile clan, his own inability to cultivate, and his own frosty fiancée.",
    likes: 0,
    rating: 4.8,
    imageUrl:
      "https://cdn.wuxiaworld.com/images/covers/atg.jpg?ver=b6377e1043744b345c0bdf83557f8b89a8018e94",
    isFeatured: false,
    slug: "against-the-gods",
    addedDate: "01-05-2020",
    updatedDate: "",
    comments: [],
  },
];

const categories = [
  {
    id: 1,
    name: "Romance",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 2,
    name: "Action",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 3,
    name: "Humor",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 4,
    name: "Fantasy",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 5,
    name: "Sci-Fi",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 6,
    name: "Tragedy",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 7,
    name: "Mystery",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 8,
    name: "Mature",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 9,
    name: "Drama",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
  {
    id: 10,
    name: "Inspirational",
    addedDate: "01/05/2020",
    updatedDate: "",
  },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const newBook = {
  id: null,
  title: "",
  authorId: null,
  categoryIds: [],
  synopsis: "",
  likes: 0,
  rating: 0,
  imageUrl: "",
  isFeatured: false,
  addedDate: "",
  updatedDate: "",
  comments: [],
};

const newAuthor = {
  id: null,
  name: "",
  addedDate: "",
  updatedDate: "",
};

const newCategory = {
  id: null,
  name: "",
  addedDate: "",
  updatedDate: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  newAuthor,
  newCategory,
  newBook,
  courses,
  authors,
  books,
  categories,
};
