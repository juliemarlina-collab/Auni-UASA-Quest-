const EN_RUB=[['Content',5],['Communicative achievement',5],['Organisation',5],['Language',5]];
const ul=(n,w)=>`<span class="ul"><sup>${n}</sup><u>${w}</u></span>`;

/* ================= ENGLISH SAMPLE 1 ================= */
PAPERS.en1={id:'en1',subj:'EN',lang:'en',title:'English · Sample 1',short:'English Sample 1',color:'sky',
kertas:[
{k:'Paper 1 (12/1) Reading & Use of English',time:90,mk:40,sec:[
 {h:'Part 1',mk:8,ins:'You should spend about 15 minutes on this part. Read the text in each question. Choose the correct answer A, B or C.',g:[
  {stim:'<div class="sign">📚 LIBRARY<br>Return books by Friday.<br>Late returns: 20 sen per day.</div>',items:[
   M('1','What does the sign say?',['You can only borrow books on Friday.','You must pay if you return books late.','The library closes on Friday.'],1)]},
  {stim:'<div class="msg">Hi Amir, the badminton match is moved to 4 pm because the hall is being cleaned in the morning. See you! — Coach Lim</div>',items:[
   M('2','Why is the time of the match changed?',['Coach Lim is busy in the morning.','The hall cannot be used in the morning.','The match has been cancelled.'],1)]},
  {stim:'<div class="sign">🧁 BAKE SALE!<br>Saturday, 10 am – 1 pm · School canteen<br>All money goes to the flood victims’ fund.</div>',items:[
   M('3','What is the purpose of the bake sale?',['To raise money for flood victims','To sell lunch to teachers','To teach students how to bake'],0)]},
  {stim:'<div class="sign">Keep refrigerated after opening.<br>Best before 12/12/2026.</div>',items:[
   M('4','What does the label tell you?',['Keep it in the fridge once you open it.','Finish it before you open it.','Do not put it in the fridge.'],0)]},
  {stim:'<div class="msg">Dear Mum, Langkawi is beautiful! We went island hopping today, but I forgot my hat, so my face is as red as a tomato! Tomorrow we’re taking the cable car. Love, Aina</div>',items:[
   M('5','What happened to Aina?',['She lost her phone.','She got sunburnt.','She missed the cable car.'],1)]},
  {stim:'<div class="msg"><b>Subject: Science Club meeting</b><br>The meeting will be held in Lab 2 instead of Lab 1. Please bring your project notes.</div>',items:[
   M('6','What is the email about?',['The place of the meeting has changed.','The meeting is cancelled.','Members must buy new notes.'],0)]},
  {stim:'<div class="sign">🏊 SWIMMING POOL<br>No running.<br>Children under 12 must be with an adult.</div>',items:[
   M('7','What does the sign say?',['Twelve-year-olds cannot swim here.','Young children need an adult with them.','Adults are not allowed to run.'],1)]},
  {stim:'<div class="msg">Can you buy bread on your way home? We have eggs but no bread for breakfast. — Kak Long</div>',items:[
   M('8','What does Kak Long want?',['Some eggs','Some bread','Someone to cook breakfast'],1)]}
 ]},
 {h:'Part 2',mk:8,ins:'You should spend about 15 minutes on this part. Read the text. Each underlined word has a mistake. Write the correct word.',g:[
  {stim:`<div class="passage"><p>Last Saturday, my family ${ul(9,'go')} to Port Dickson for a picnic. We ${ul(10,'leaves')} home early in the morning. My father ${ul(11,'drived')} the car while my mother ${ul(12,'prepare')} sandwiches in the back seat. When we ${ul(13,'arrives')}, the beach was already very ${ul(14,'crowd')}. My younger brother and I ${ul(15,'build')} a sandcastle near the water. We ${ul(16,'was')} tired but very happy when we got home.</p></div>`,items:[
   S('9','Correct word for (9)',['went']),S('10','Correct word for (10)',['left']),S('11','Correct word for (11)',['drove']),S('12','Correct word for (12)',['prepared']),
   S('13','Correct word for (13)',['arrived']),S('14','Correct word for (14)',['crowded']),S('15','Correct word for (15)',['built']),S('16','Correct word for (16)',['were'],1,'The story happened last Saturday, so use the <b>past tense</b>. <i>Crowd</i> (noun) → <b>crowded</b> (adjective).')]}
 ]},
 {h:'Part 3',mk:8,ins:'You should spend about 20 minutes on this part. Read the text and complete the notes. Use <b>no more than three words</b> from the text for each answer.',g:[
  {stim:`<div class="passage"><p><b>Problems Are Just Ideas Waiting to Happen</b></p><p>Thirteen-year-old Sofea Hani from Kuala Pilah has always loved fixing things. When she was nine, she repaired her grandfather’s old radio using a guide she found in a library book. Last year, she noticed that the dustbins at her school were always overflowing because the cleaners did not know when they were full. Sofea decided to solve the problem.</p><p>With help from her science teacher, Mr Ganesh, she built a “Smart Bin”. The bin has a small sensor under its lid. When the rubbish reaches the top, a light on the outside turns red and a message is sent to the school office. It took Sofea four months and many failed attempts to get it right. “I almost gave up, but my mother told me that every mistake teaches you something,” she said.</p><p>In August, Sofea’s Smart Bin won first prize in a state-level young innovators’ competition. The school now has ten Smart Bins. Sofea is already working on her next idea: a plant pot that waters itself.</p></div><div class="notes-box"><b>Notes: Young Inventor Sofea Hani</b></div>`,items:[
   S('17','Hometown:',['kuala pilah']),
   S('18','Fixed at the age of nine: her grandfather’s ________',['radio','old radio']),
   S('19','Problem at school: dustbins were always ________',['overflowing']),
   S('20','Helped by: her science teacher, ________',['mr ganesh','ganesh']),
   S('21','Location of the sensor: under the ________',['lid','its lid','bin lid']),
   S('22','Time taken to complete the bin: ________',['four months','4 months']),
   S('23','Result in the competition: ________',['first prize','1st prize','won first prize']),
   S('24','Next invention: a self-watering ________',['plant pot','pot'],1,'Copy the <b>exact words</b> from the text. Spelling counts!')]}
 ]},
 {h:'Part 4',mk:8,ins:'You should spend about 15 minutes on this part. Study the information. For questions 25–28, choose <b>True</b> or <b>False</b>. For questions 29–32, write a <b>short answer</b>.',g:[
  {stim:`<div class="nltable"><div class="nlh">📚 PORT DICKSON LIBRARY · SCHOOL HOLIDAY PROGRAMME</div><div style="overflow-x:auto"><table class="dtab"><tr><th>Activity</th><th>Day</th><th>Time</th><th>Age</th><th>Fee</th></tr><tr><td>Comic Drawing Class</td><td>Monday</td><td>9.00 – 11.00 am</td><td>12 – 15</td><td>RM10</td></tr><tr><td>Robotics for Beginners</td><td>Tuesday & Wednesday</td><td>2.00 – 4.30 pm</td><td>13 – 17</td><td>RM25 (kit included)</td></tr><tr><td>Storytelling Hour</td><td>Thursday</td><td>10.00 – 11.00 am</td><td>7 – 10</td><td>Free</td></tr><tr><td>Science Quiz Challenge</td><td>Friday</td><td>3.00 – 5.00 pm</td><td>12 – 15</td><td>RM5 per team (3 members)</td></tr></table></div><div class="nlnote">✏️ Register at the counter by <b>1 November</b>. Bring your <b>library card</b>. Only 20 places for each activity.</div></div>`,items:[
   M('25','The Comic Drawing Class is held in the morning.',['True','False'],0),
   M('26','A 13-year-old can join the Storytelling Hour.',['True','False'],1,'Storytelling Hour is for ages 7 – 10.'),
   M('27','The fee for Robotics for Beginners includes a kit.',['True','False'],0),
   M('28','Students join the Science Quiz Challenge alone.',['True','False'],1,'It is for teams of 3 members.'),
   S('29','On which day is the Storytelling Hour held?',['thursday','on thursday']),
   S('30','How much does a team pay for the Science Quiz Challenge?',['rm5','rm 5','rm5 per team','5']),
   S('31','What must participants bring?',['library card','a library card','their library card','your library card']),
   S('32','What is the last day to register?',['1 november','by 1 november','november 1','1st november'])]}
 ]},
 {h:'Part 5',mk:8,ins:'You should spend about 20 minutes on this part. Eight sentences have been removed from the text. Choose the sentence <b>(A–I)</b> that best fits each gap. There is <b>one extra sentence</b> that you do not need.',g:[
  {stim:`<div class="passage"><p><b>My First Camping Trip</b></p><p>Last month, my class went on a three-day camping trip to Bukit Damai. <b>(33)</b> ________ We left school at seven o’clock in the morning and arrived at the campsite before lunch.</p><p>As soon as we arrived, our teacher divided us into groups of five. <b>(34)</b> ________ My group was in charge of collecting firewood, while another group had to set up the tents.</p><p>On the first night, it rained heavily. <b>(35)</b> ________ Luckily, our teacher had told us to dig small drains around the tents, so we stayed dry.</p><p>The next morning, we went jungle trekking with a ranger. <b>(36)</b> ________ He also showed us a plant that can be used to treat insect bites.</p><p>In the afternoon, we had a cooking competition. <b>(37)</b> ________ Although our fried rice was a little salty, we won second place!</p><p>On the last night, we sat around the campfire and sang songs. <b>(38)</b> ________ I felt proud because I had learned to do so many things on my own.</p><p>Before we left, we cleaned the whole campsite. <b>(39)</b> ________ Our teacher said that good campers always leave a place cleaner than they found it.</p><p>I will never forget this trip. <b>(40)</b> ________</p></div><div class="sentbank"><b>Sentences</b><ol type="A"><li>Each group had to cook a meal using only the ingredients given.</li><li>Everyone was excited because it was our first trip without our parents.</li><li>He taught us how to identify animal tracks on the muddy path.</li><li>Each group was given a different task.</li><li>The water flowed all around our tents.</li><li>We picked up every piece of rubbish, even the tiny sweet wrappers.</li><li>Some of my friends even performed funny sketches.</li><li>I hope we can go camping again next year.</li><li>The bus broke down on the way home.</li></ol></div>`,items:[
   M('33','Gap (33)',['A','B','C','D','E','F','G','H','I'],1),M('34','Gap (34)',['A','B','C','D','E','F','G','H','I'],3),M('35','Gap (35)',['A','B','C','D','E','F','G','H','I'],4),M('36','Gap (36)',['A','B','C','D','E','F','G','H','I'],2),
   M('37','Gap (37)',['A','B','C','D','E','F','G','H','I'],0),M('38','Gap (38)',['A','B','C','D','E','F','G','H','I'],6),M('39','Gap (39)',['A','B','C','D','E','F','G','H','I'],5),M('40','Gap (40)',['A','B','C','D','E','F','G','H','I'],7,'Sentence I is the extra one: the text never talks about the trip home.')]}
 ]}
]},
{k:'Paper 2 (12/2) Writing',time:60,mk:40,sec:[
 {h:'Part 1',mk:20,ins:'You should spend about 20 minutes on this part.',g:[
  {stim:`Read the email from your friend, Jason.<div class="msg mail"><b>From:</b> Jason<br><b>Subject:</b> Class trip!<br><br>Hi!<br>Our class is planning a trip during the school holidays. We can go to the zoo or to a waterfall. Which place would you like to go to? Why? What should we bring?<br>Write back soon!<br>Jason</div>Write an email to Jason. Answer his questions. Write about <b>80 words</b>.`,items:[
   W('P1','Write your reply.',60,100,EN_RUB,'<b>Sample answer:</b><br>Hi Jason,<br>Thanks for your email! I would like to go to the waterfall. It is cooler than the zoo, and we can swim and have a picnic together. I think it will be more fun because we can relax and enjoy nature. We should bring towels, extra clothes, sandwiches and plenty of drinking water. Don’t forget to bring a plastic bag for our rubbish too!<br>See you soon,<br>'+CONFIG.shortName+' <i>(about 70 words)</i><br><br><b>Checklist:</b> greeting ✓ answer all 3 questions ✓ reason ✓ friendly closing ✓')]}
 ]},
 {h:'Part 2',mk:20,ins:'You should spend about 40 minutes on this part.',g:[
  {stim:`In your English class, you have been talking about places in your home. Write an essay about <b>your favourite place in your home</b>. Write <b>70 – 90 words</b>.<div class="mindmap en"><div class="mm-c">My favourite place at home</div><div class="mm-n">Where is it?</div><div class="mm-n">What do you do there?</div><div class="mm-n">Why do you like it?</div></div>`,items:[
   W('P2','Write your essay.',70,90,EN_RUB,'<b>Sample answer:</b><br>My favourite place in my home is my bedroom. It is upstairs, next to my sister’s room, and it has a big window that faces the garden. In my room, I do my homework, read comics and play games on my tablet. Sometimes I just lie on my bed and listen to music. I like my bedroom because it is quiet and comfortable. It is the best place for me to relax after a long day at school. <i>(about 80 words)</i>')]}
 ]}
]}
]};

/* ================= ENGLISH SAMPLE 2 ================= */
PAPERS.en2={id:'en2',subj:'EN',lang:'en',title:'English · Sample 2',short:'English Sample 2',color:'leaf',
kertas:[
{k:'Paper 1 (12/1) Reading & Use of English',time:90,mk:40,sec:[
 {h:'Part 1',mk:8,ins:'You should spend about 15 minutes on this part. Read the text in each question. Choose the correct answer A, B or C.',g:[
  {stim:'<div class="sign">⚠️ WET FLOOR<br>Please use the side door.</div>',items:[M('1','What should you do?',['Use another door.','Clean the floor.','Wait outside.'],0)]},
  {stim:'<div class="msg">Class 1 Bestari, please wear your sports attire tomorrow. We will be planting trees behind the hall. — Puan Aida</div>',items:[M('2','Why must the students wear sports attire?',['It is Sports Day.','There is a tree-planting activity.','The hall is being cleaned.'],1)]},
  {stim:'<div class="sign">LOST!<br>Black water bottle with a dinosaur sticker.<br>Last seen at the field. Please return to Class 1C.</div>',items:[M('3','What is the notice about?',['Someone found a water bottle.','Someone is looking for their water bottle.','Water bottles are on sale.'],1)]},
  {stim:'<div class="sign">💻 The Computer Lab is closed for repairs until 3 November.<br>ICT classes will be held in the library.</div>',items:[M('4','What does the notice say?',['ICT classes will take place in the library.','The library is closed until 3 November.','The computers are new.'],0)]},
  {stim:'<div class="msg"><b>Pancakes</b><br>1. Mix the flour and eggs.<br>2. Add the milk slowly.<br>3. Stir until smooth.</div>',items:[M('5','What should you add slowly?',['Flour','Eggs','Milk'],2)]},
  {stim:'<div class="msg">Sorry Danish, I can’t come to your birthday party. My cousin is getting married that day. Happy birthday though! — Wei Jie</div>',items:[M('6','Why can’t Wei Jie go to the party?',['He has to attend a wedding.','He is sick.','He forgot the date.'],0)]},
  {stim:'<div class="sign">🚌 NOTICE<br>Bus 12 now arrives every 20 minutes instead of every 30 minutes.</div>',items:[M('7','What has changed?',['The buses come more often.','The buses come less often.','Bus 12 has stopped running.'],0)]},
  {stim:'<div class="msg">Your library book <i>Space Adventures</i> is ready for collection at the counter. We will keep it for you until Friday.</div>',items:[M('8','What should you do?',['Collect the book by Friday.','Return the book by Friday.','Buy the book at the counter.'],0)]}
 ]},
 {h:'Part 2',mk:8,ins:'You should spend about 15 minutes on this part. Read the text. Each underlined word has a mistake. Write the correct word.',g:[
  {stim:`<div class="passage"><p><b>Dear Diary,</b></p><p>Today ${ul(9,'are')} a special day. This morning, my mother ${ul(10,'bake')} a chocolate cake for my birthday. In the afternoon, all my friends ${ul(11,'comes')} to my house. We ${ul(12,'play')} games and ${ul(13,'sing')} songs together. My best friend Adam gave me a new storybook. ${ul(14,'Him')} also made me a funny card. It ${ul(15,'were')} the best birthday ever! I ${ul(16,'feels')} very lucky to have such good friends.</p></div>`,items:[
   S('9','Correct word for (9)',['is']),S('10','Correct word for (10)',['baked']),S('11','Correct word for (11)',['came']),S('12','Correct word for (12)',['played']),
   S('13','Correct word for (13)',['sang']),S('14','Correct word for (14)',['he']),S('15','Correct word for (15)',['was']),S('16','Correct word for (16)',['feel','felt'],1,'Today <b>is</b> (present). Things that happened this morning/afternoon use the <b>past tense</b>. <i>Him</i> → <b>He</b> (subject).')]}
 ]},
 {h:'Part 3',mk:8,ins:'You should spend about 20 minutes on this part. Read the text and complete the notes. Use <b>no more than three words</b> from the text for each answer.',g:[
  {stim:`<div class="passage"><p><b>Every Egg Matters</b></p><p>The Pantai Seri Penyu Turtle Centre was opened in 2015 by a group of volunteers. It is located on the east coast, about 20 kilometres from Kuala Terengganu. Every year, from April to August, green turtles come to the beach at night to lay their eggs. Each turtle lays about 100 eggs in a hole in the sand.</p><p>Because eggs left on the beach are often stolen or eaten by animals, volunteers collect them and rebury them in a fenced hatchery. After about 55 days, the baby turtles hatch. They are released into the sea at night so that birds cannot catch them.</p><p>Visitors are welcome to watch the release, but they must not use torchlights because bright lights confuse the baby turtles. Last year, more than 12,000 baby turtles were released. “Only about one in a thousand baby turtles survives to become an adult,” says Encik Hairul, the centre manager.</p></div><div class="notes-box"><b>Notes: Pantai Seri Penyu Turtle Centre</b></div>`,items:[
   S('17','Year opened:',['2015']),
   S('18','Distance from Kuala Terengganu: about ________',['20 kilometres','20 km','twenty kilometres','20 kilometers']),
   S('19','Nesting season: from ________',['april to august','april - august','april-august']),
   S('20','Number of eggs laid by each turtle: about ________',['100','one hundred','100 eggs']),
   S('21','Eggs are reburied in a ________',['fenced hatchery','hatchery']),
   S('22','Days before the eggs hatch: about ________',['55','55 days','fifty-five']),
   S('23','Visitors must not use ________',['torchlights','torchlight','torches']),
   S('24','Survival rate: only about one in ________',['a thousand','1000','one thousand','1 000'],1,'Copy the <b>exact words</b> from the text. Spelling counts!')]}
 ]},
 {h:'Part 4',mk:8,ins:'You should spend about 15 minutes on this part. Study the information. For questions 25–28, choose <b>True</b> or <b>False</b>. For questions 29–32, write a <b>short answer</b>.',g:[
  {stim:`<div class="nltable"><div class="nlh">🏃 SMK INTAN JAYA · SPORTS DAY PROGRAMME</div><div style="overflow-x:auto"><table class="dtab"><tr><th>Event</th><th>Time</th><th>Venue</th><th>Who</th></tr><tr><td>Opening march-past</td><td>7.30 – 8.30 am</td><td>Main field</td><td>All houses</td></tr><tr><td>100 m sprint (Form 1)</td><td>8.45 am</td><td>Track</td><td>Boys & girls</td></tr><tr><td>Tug-of-war</td><td>10.00 am</td><td>Main field</td><td>Teachers vs prefects</td></tr><tr><td>Telematch</td><td>11.00 am</td><td>Basketball court</td><td>Form 1 & Form 2</td></tr><tr><td>Prize-giving</td><td>12.30 pm</td><td>School hall</td><td>Everyone</td></tr></table></div><div class="nlnote">👕 Wear your <b>house T-shirt</b>. 💧 Water stations at the field and the court. ☔ If it rains, all events move to the <b>school hall</b>.</div></div>`,items:[
   M('25','The opening march-past lasts for one hour.',['True','False'],0),
   M('26','Form 3 students can take part in the telematch.',['True','False'],1,'Only Form 1 & Form 2.'),
   M('27','In the tug-of-war, teachers compete against students.',['True','False'],0,'Prefects are students.'),
   M('28','The prize-giving takes place on the main field.',['True','False'],1,'It is in the school hall.'),
   S('29','What time does the Form 1 100 m sprint start?',['8.45 am','8.45am','8.45','8:45','8:45 am','8:45am','at 8.45 am']),
   S('30','Where is the telematch held?',['basketball court','the basketball court','at the basketball court']),
   S('31','What should students wear?',['house t-shirt','their house t-shirt','a house t-shirt','house tshirt','your house t-shirt']),
   S('32','Where will the events be held if it rains?',['school hall','the school hall','in the school hall'])]}
 ]},
 {h:'Part 5',mk:8,ins:'You should spend about 20 minutes on this part. Eight sentences have been removed from the text. Choose the sentence <b>(A–I)</b> that best fits each gap. There is <b>one extra sentence</b> that you do not need.',g:[
  {stim:`<div class="passage"><p><b>Our Class Recycling Project</b></p><p>Earlier this year, my class started a recycling project. <b>(33)</b> ________ Our class teacher, Puan Aida, suggested that we collect old newspapers and plastic bottles.</p><p>First, we made a poster to tell other students about the project. <b>(34)</b> ________ Soon, students from other classes began bringing their items too.</p><p>Every Friday, we sorted the items. <b>(35)</b> ________ It was hard work, but we enjoyed doing it together.</p><p>At the end of each month, a lorry from the recycling centre came to collect everything. <b>(36)</b> ________ We used the money to buy new books for our class library.</p><p>In June, we had a problem. <b>(37)</b> ________ Some students were throwing food waste into our recycling boxes, so we put up signs to remind everyone to throw only clean items.</p><p>Our project became so successful that the principal noticed it. <b>(38)</b> ________ We were so proud when she announced it during assembly.</p><p>Now, the whole school takes part in recycling. <b>(39)</b> ________</p><p>I have learned that small actions can make a big difference. <b>(40)</b> ________</p></div><div class="sentbank"><b>Sentences</b><ol type="A"><li>The centre paid us according to the weight of the items.</li><li>We wanted to do something useful for the environment.</li><li>We put it up on the notice board near the canteen.</li><li>Newspapers went into one box and plastic bottles into another.</li><li>The boxes started to smell terrible.</li><li>She gave our class a special award for being the “Greenest Class”.</li><li>Every class now has its own recycling corner.</li><li>I hope more people will start recycling at home too.</li><li>Our school football team won the district championship.</li></ol></div>`,items:[
   M('33','Gap (33)',['A','B','C','D','E','F','G','H','I'],1),M('34','Gap (34)',['A','B','C','D','E','F','G','H','I'],2),M('35','Gap (35)',['A','B','C','D','E','F','G','H','I'],3),M('36','Gap (36)',['A','B','C','D','E','F','G','H','I'],0),
   M('37','Gap (37)',['A','B','C','D','E','F','G','H','I'],4),M('38','Gap (38)',['A','B','C','D','E','F','G','H','I'],5),M('39','Gap (39)',['A','B','C','D','E','F','G','H','I'],6),M('40','Gap (40)',['A','B','C','D','E','F','G','H','I'],7,'Sentence I is the extra one: football has nothing to do with recycling.')]}
 ]}
]},
{k:'Paper 2 (12/2) Writing',time:60,mk:40,sec:[
 {h:'Part 1',mk:20,ins:'You should spend about 20 minutes on this part.',g:[
  {stim:`Read the message from your cousin, Hana.<div class="msg mail">Hi! Guess what? I’m coming to stay with you during the school holidays next month! What can we do together? What food should I try in your town? Is there anything I should bring?<br>— Hana</div>Write a reply to Hana. Answer her questions. Write about <b>80 words</b>.`,items:[
   W('P1','Write your reply.',60,100,EN_RUB,'<b>Sample answer:</b><br>Hi Hana,<br>That’s great news! I can’t wait to see you. We can go to the beach in Port Dickson and cycle around my neighbourhood in the evening. You must try the nasi lemak at the stall near my house because the sambal is really tasty. My mum also makes delicious masak lemak cili api. Please bring your swimsuit, a hat and some comfortable shoes for walking.<br>See you soon!<br>'+CONFIG.shortName+' <i>(about 70 words)</i>')]}
 ]},
 {h:'Part 2',mk:20,ins:'You should spend about 40 minutes on this part.',g:[
  {stim:`In your English class, you have been talking about people you look up to. Write an essay about <b>a person you admire</b>. Write <b>70 – 90 words</b>.<div class="mindmap en"><div class="mm-c">A person I admire</div><div class="mm-n">Who is the person?</div><div class="mm-n">What does he or she do?</div><div class="mm-n">Why do you admire him or her?</div></div>`,items:[
   W('P2','Write your essay.',70,90,EN_RUB,'<b>Sample answer:</b><br>The person I admire most is my mother. She is a nurse at a hospital, where she takes care of sick people. Even though she is busy, she always finds time to help me with my homework and cook my favourite food. She also bakes delicious cakes for our neighbours. I admire her because she works hard and never gives up. She always tells me that I can do anything if I try my best. I hope I can be like her one day. <i>(about 85 words)</i>')]}
 ]}
]}
]};
