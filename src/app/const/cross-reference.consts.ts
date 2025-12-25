import {
  CrossReferenceContent,
  CrossReferenceKey,
} from '../model/cross-reference.model';

export const CROSS_REFERENCES = {
  m4g_switch_durability: [
    '20M ops according to',
    {
      type: 'url',
      url: 'https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D',
      content: 'the switch detail page',
    },
    '.',
  ],
  cc2_switch_durability: [
    'According to',
    {
      type: 'url',
      url: 'https://www.charachorder.com/products/cc2#:~:text=CC2%20switches%20are%20built%20tougher%2C%20and%20are%20engineered%20to%20last%205X%20longer%20than%20switches%20from%20the%201st%20generation',
      content: 'the CC2 product page',
    },
    ', CC2 switches are built tougher, and are engineered to last 5X longer than switches from the 1st generation.',
  ],
  cc1_switch_durability: [
    '200,000 cycles for each direction according to',
    {
      type: 'url',
      url: 'https://discord.com/channels/861730583092658206/938239528454475787/1068002221855363082',
      content: 'this Discord message',
    },
    '.',
  ],
  ccx_memory: [
    '65,000 chords according to',
    {
      type: 'url',
      url: 'https://www.kickstarter.com/projects/charachorder/charachorder-x-type-at-the-speed-of-thought/description#:~:text=CharaChorder%20X%20can%20store%20%2B65%2C000%20custom%20chords!',
      content: 'the CCX Kickstarter page',
    },
  ],
  ccx_dependence: [
    "It depends on the spec of the connected keyboard so it doesn't seem to be the spec of CCX itself.",
  ],
  ccx_size: [
    'Shell size of CCX from',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder%20X.html#id1:~:text=CharaChorder%20X%20Dimensions',
      content: 'the CharaChorder official documentation',
    },
  ],
  ccx_possible_input: [
    'CharaChorder Lite has over 17 billion possible input according to',
    {
      type: 'url',
      url: 'https://www.charachorder.com/products/charachorder-lite#:~:text=Limitless%20Customization-,Over%2017%20Billion',
      content: 'the product page of it',
    },
    ', so I think that CCX probably has a similar amount when using with a normal 60% keyboard.',
  ],
  m4g_actuation_force: [
    '55 gF is from',
    {
      type: 'url',
      url: 'https://youtu.be/x2swE9URxeA?feature=shared&t=613',
      content: 'the comparison table in the specs reveal video',
    },
    '. 57 gF is from',
    {
      type: 'url',
      url: 'https://youtu.be/x2swE9URxeA?feature=shared&t=562',
      content: 'the measurement result in that video',
    },
    ". Therefore I listed it as a range (55-57 gF) in table. Besides, regarding the press-down actuation force, since M4G doesn't have 3D press keys, I would define it as N/A here.",
  ],
  cclite_memory: [
    'According to',
    {
      type: 'url',
      url: 'https://charachorder.notion.site/FAQs-List-Lite-4a08faf376204974adaa57e8d098ad6d',
      content: 'this outdated wiki',
    },
    ', 65k chords up to 247 actions (eg characters) in length can be stored in the memory.',
  ],
  cclite_switch: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder_Lite.html#switches',
      content: 'the Switches section in the official CCLite documentation',
    },
  ],
  cc2_size: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/FAQs.html#dimensions-and-weight',
      content: 'CC2 Dimension and Weight in official CharaChorder document',
    },
    ', 11 ⅝" x 4 ⅜" x 1 ⅛".',
  ],
  cc2_weight: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/FAQs.html#dimensions-and-weight',
      content: 'CC2 Dimension and Weight in official CharaChorder document',
    },
    ', 10.7 oz without USB-C.',
  ],
  cclite_weight: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/FAQs.html#id1:~:text=or%200.52%20lbs-,CharaChorder%20Lite%20FAQs,Dimensions%20and%20Weight,-%EF%83%81',
      content: 'CC Lite Dimensions and Weight',
    },
    ', 1 lb 0.5 oz.',
  ],
  cclite_size: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/FAQs.html#id1:~:text=or%200.52%20lbs-,CharaChorder%20Lite%20FAQs,Dimensions%20and%20Weight,-%EF%83%81',
      content: 'CC Lite Dimensions and Weight',
    },
    ', 11 ⅝" (length) x 4 ⅛" (width) x 1 5/16" (height).',
  ],
  cc2_half_material: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder%20Two.html#the-halves',
      content: 'the official CC2 documentation',
    },
    '.',
  ],
  cc1_half_material: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder%20One.html#the-halves',
      content: 'the official CC1 documentation',
    },
    '.',
  ],
  cclite_base_material: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder_Lite.html#base',
      content: 'the official CCLite documentation',
    },
    '.',
  ],
  cclite_shell_material: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder_Lite.html#key-plate',
      content: 'the official CCLite documentation',
    },
    '.',
  ],
  ccx_shell_material: [
    'According to',
    {
      type: 'url',
      url: 'https://docs.charachorder.com/CharaChorder%20X.html#the-body',
      content: 'the official CCX documentation',
    },
    '.',
  ],
  m4g_base_material: [
    'The baseplate (called endoskeleton) is made by 3D printing according to ',
    {
      type: 'url',
      url: 'https://youtu.be/7wb-JlZ2qP0?feature=shared&t=299',
      content: 'this video',
    },
    '.',
  ],
  m4g_shell_material: [
    'The shell (called exoskeleton) is made of 5052 aluminium alloy according to',
    {
      type: 'url',
      url: 'https://youtu.be/7wb-JlZ2qP0?feature=shared&t=693',
      content: 'this video',
    },
    '.',
  ],
  sval_weight: [
    'According to',
    {
      type: 'url',
      url: 'https://discord.com/channels/1053081626898337902/1124364902811844739/1150412902457692221',
      content: 'this message in Svalboard Discord server',
    },
    ', 275 g per side.',
  ],
  sval_size: [
    'According to',
    {
      type: 'url',
      url: 'https://discord.com/channels/1053081626898337902/1124364902811844739/1224420873663156224',
      content: 'this message in Svalboard Discord server',
    },
  ],
  sval_input_style: [
    'It is possible to use the combo feature of qmk to achieve the chording entry, but it seems that not many users do it.',
  ],
  pointing_device: [
    'The default pointing devices on each device are listed. You can remap the cursor movement keys on CC devices, Master Forge, and Svalboard.',
  ],
  m4g_pointing_device: [
    "Some tiers of Master Forge bundle don't include the Trackball Bolt-on.",
  ],
  m4g_keys_per_switch: [
    "Unlike CC1 and CC2, M4G doesn't have 3D press keys. When you do a 3D press on M4G, you hit all four keys on that switch.",
  ],
  m4g_number_of_3d_switches: [
    'M4G has two thumb switches fewer than CC1 and CC2. Multiple types of mouse control bolt-ons are planned to be offered on the Forge ecosystem instead of the digital mouse switches on CC1 and CC2. On M4G, the third thumb switch keys have moved to where the digital mouse control keys are.',
  ],
  m4g_key_travel: [
    "The 4-direction key travel is derived from the conservation of energy. According to the datasheet, the switch component's actuation force is 61 gf, and it's travel distance is 0.3 mm. Therefore, if we use the measured actuation force on the keycap, which is 55 gf, the finger travel to generate the same amount of energy to actuate the switch is calculated as ",
    {
      type: 'math',
      content: '$\\frac{61\\times0.3}{55}=0.33\\ mm$',
    },
    '.',
  ],
  cc2_key_travel: [
    "The 4-direction key travel is derived from the conservation of energy. According to the datasheet, the switch component's actuation force (4-direction) is 122 gf (1.2 N), and it's travel distance is 0.25 mm. Therefore, if we use the measured actuation force on the keycap, which is 42 gf, the finger travel to generate the same amount of energy to actuate the switch is calculated as ",
    {
      type: 'math',
      content: '$\\frac{122\\times0.25}{42}=0.73\\ mm$',
    },
    '. The press-down key travel is the travel of center push on the datasheet.',
  ],
  cc1_key_travel: [
    "The 4-direction key travel is derived from the conservation of energy. According to the datasheet, the switch component's actuation force (4-direction) is 125 gf (1.23 N), and it's travel distance is 0.25 mm. Therefore, if we use the measured actuation force on the keycap, which is 70 gf, the finger travel to generate the same amount of energy to actuate the switch is calculated as ",
    {
      type: 'math',
      content: '$\\frac{125\\times0.25}{70}=0.45\\ mm$',
    },
    '. The press-down key travel is the travel of center push on the datasheet.',
  ],
  cc2_mounting_hole_depth: [
    'I measured this depth. I screwed a long and straight ¼"-20 screw into a CC2 til the end, marked the position, and measured the length between the screw tip and the mark.',
  ],
  ccu_externals_dependence: [
    'You can customize the externals of CCU, and this spec will depend on the externals.',
  ],
  ccu_key_cap_dependence: [
    'You can customize the key caps of CCU, and this spec will depend on the shape of the key caps.',
  ],
} satisfies Record<CrossReferenceKey, CrossReferenceContent>;
