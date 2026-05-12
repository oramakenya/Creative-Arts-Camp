/**
 * ORAMA Creative Arts Program - Editable Content Configuration
 * 
 * All text content on the website can be edited from this file.
 * Simply modify the values below and rebuild the project.
 */

export const SITE_CONTENT = {
  // Hero Section
  hero: {
    badge: 'June 2026 · Hidden Gardens, Karen · Ages 7–16',
    title: 'The Garden of Creativity',
    subtitle: 'A 4-day immersive arts residency where young minds explore performing arts, visual arts, and literary expression — building emotional intelligence through creative collaboration.',
    tracks: [
      { name: 'Performing Arts', icon: 'mic' },
      { name: 'Visual Arts', icon: 'palette' },
      { name: 'Literary Arts', icon: 'book' },
    ],
  },

  // About Section
  about: {
    subtitle: 'About ORAMA',
    title: 'Where Imagination Takes Root',
    description: 'ORAMA Creative Arts Camp is a 4-day immersive residency designed for children aged 7–16. Through performing, visual, and literary arts, we nurture emotional intelligence, collaborative problem-solving, and creative confidence.',
    mission: {
      title: 'Our Mission',
      text: 'To provide a safe, nurturing environment where children discover their creative voice through structured arts education, building the emotional and social skills they\'ll carry for life.',
    },
    vision: {
      title: 'Our Vision',
      text: 'A world where every child has access to transformative arts education — where creativity is recognized as essential to human development, not a luxury.',
    },
    why: {
      title: 'Why ORAMA?',
      text: 'Unlike traditional camps, ORAMA integrates three arts disciplines with emotional intelligence development. Every child leaves with a tangible creative outcome, new friendships, and the confidence that comes from public performance.',
    },
    stats: [
      { value: '4 Days', label: 'Immersive Residency' },
      { value: '7–16', label: 'Age Range' },
      { value: '3 Tracks', label: 'Arts Disciplines' },
      { value: '100%', label: 'Creative Outcomes' },
    ],
    location: {
      when: { label: 'When', value: 'June 2026', detail: '4 consecutive days' },
      where: { label: 'Where', value: 'Hidden Gardens', detail: 'Karen, Nairobi' },
      culmination: { label: 'Culmination', value: 'Gallery & Concert', detail: 'Public showcase for families' },
    },
  },

  // Program Schedule
  program: {
    subtitle: 'The 4-Day Journey',
    title: 'From Discovery to Showcase',
    description: 'Each day builds upon the last, guiding children from exploration to technical mastery, collaborative refinement, and a confident public showcase for families.',
    days: [
      {
        day: 1,
        title: 'The Root System',
        theme: 'Discovery & Orientation: exploration and selecting a primary focus track.',
        color: 'from-amber-400 to-orange-500',
        activities: [
          { time: '08:30 AM - 09:30 AM', title: 'Arrival & Botanical Icebreakers', description: 'Campers settle into the garden environment through quick creative games that help them relax, meet one another, and feel ready to participate.' },
          { time: '09:30 AM - 10:15 AM', title: 'Collective Meeting for the Campers', description: 'A guided group conversation introduces the camp values, encourages spiritual grounding, and builds a shared sense of purpose for the day.' },
          { time: '10:15 AM - 11:00 AM', title: 'Instrument Experimentation Session', description: 'Students rotate through short workshops in Performing Arts, Visual Arts, and Writing so they can discover the discipline that excites them most.' },
          { time: '11:00 AM - 11:30 AM', title: 'Garden Snack Break', description: 'A healthy refreshment break gives campers time to recharge, socialize, and prepare for the deeper learning sessions ahead.' },
          { time: '11:30 AM - 01:00 PM', title: 'Track Selection & Core Foundations', description: 'Campers choose their primary focus track and begin basic technique, from camera settings and brush handling to rhythm, voice, movement, and writing fundamentals.' },
          { time: '01:00 PM - 02:00 PM', title: 'Lunch Break', description: 'A supervised lunch period gives students time to rest, connect with peers, and reset before afternoon creation.' },
          { time: '02:00 PM - 04:00 PM', title: 'Foundational Creation', description: 'Each track begins its first tangible project: visual artists start landscape or nature studies, performers learn an ensemble piece, and writers journal first impressions into lyrics or stories.' },
        ],
      },
      {
        day: 2,
        title: 'The Watering Hole',
        theme: 'Technical Deep-Dive & Recreation: skill building balanced with physical recreation.',
        color: 'from-orange-400 to-red-500',
        activities: [
          { time: '08:30 AM - 09:00 AM', title: 'Creative Devotion/Mindfulness', description: 'A quiet session by the lagoon helps campers focus, reflect on inspiration, and connect creativity with gratitude and intention.' },
          { time: '09:00 AM - 09:45 AM', title: 'Collective Meeting for the Campers', description: 'The group gathers for a short talk and spiritual enlightenment conversation that reinforces confidence, discipline, and community.' },
          { time: '09:45 AM - 12:30 PM', title: 'Masterclasses', description: 'Track leaders guide intensive practice: performers rehearse concert material, artists study light and shadow for final pieces, and writers develop songs, poems, or short stories.' },
          { time: '12:30 PM - 01:30 PM', title: 'Lunch', description: 'Campers pause for lunch, hydration, and informal bonding before the high-energy afternoon session.' },
          { time: '01:30 PM - 03:00 PM', title: 'Garden Water Games & Team Building', description: 'Outdoor games such as water balloon tosses and relay races encourage physical play, teamwork, trust, and camper camaraderie.' },
          { time: '03:00 PM - 04:00 PM', title: 'Cross-Pollination Lab', description: 'Disciplines begin to merge as performers and writers shape lyrics into melody while visual media teams document the creative process for behind-the-scenes storytelling.' },
        ],
      },
      {
        day: 3,
        title: 'The Collaborative Lab',
        theme: 'Refinement & Curation: merging disciplines and preparing the box-free presentation.',
        color: 'from-red-400 to-pink-500',
        activities: [
          { time: '08:00 AM - 08:45 AM', title: 'Collective Meeting for the Campers', description: 'The day begins with a focused talk and spiritual reflection that prepares students for refinement, responsibility, and showcase readiness.' },
          { time: '08:45 AM - 10:30 AM', title: 'Final Refinements', description: 'Campers complete paintings, edit photographs, polish writing, and tighten performance arrangements with facilitator feedback.' },
          { time: '10:30 AM - 12:30 PM', title: 'The Curation Workshop', description: 'Students learn how finished work is presented: visual artists frame and title pieces, performers practice stage presence, and writers prepare spoken transitions.' },
          { time: '12:30 PM - 01:30 PM', title: 'Lunch', description: 'A midday break gives students time to rest before the full showcase run-through.' },
          { time: '01:30 PM - 04:00 PM', title: 'The Dress Rehearsal', description: 'The group runs the full concert and gallery flow, with writers rehearsing spoken word or storytelling transitions between performance moments.' },
        ],
      },
      {
        day: 4,
        title: 'The Harvest',
        theme: 'Gallery & Concert: the public showcase.',
        color: 'from-pink-400 to-purple-500',
        activities: [
          { time: '09:00 AM - 11:00 AM', title: 'Final Setup', description: 'Campers and facilitators hang paintings and photography, arrange the Literary Corner, and complete sound checks for marimbas, vocals, percussion, and the PA system.' },
          { time: '11:00 AM - 12:30 PM', title: 'Pre-Show Reflection', description: 'A final group bonding activity helps students calm nerves, celebrate progress, and step into the showcase with confidence.' },
          { time: '12:30 PM - 01:30 PM', title: 'Lunch & Certificates', description: 'Campers share a celebration meal or picnic with families and receive certificates recognizing their participation and creative growth.' },
          { time: '02:00 PM - 03:00 PM', title: 'Part I: The Gallery Presentation', description: 'Parents and guests take a guided or self-guided tour of visual and literary works while students explain their process, choices, and creative discoveries.' },
          { time: '03:00 PM - 04:30 PM', title: 'Part II: The Grand Concert', description: 'The live performance brings together marimba ensemble pieces, vocalists, percussion, and literary readings in a shared public celebration.' },
          { time: '04:30 PM - 05:00 PM', title: 'Closing Reception', description: 'The camp closes with photos, informal networking, appreciation, and site teardown, giving families a final moment to celebrate the children.' },
        ],
      },
    ],
  },

  // Showcase Section
  showcase: {
    badge: 'The Grand Finale — Day 4',
    title: 'Gallery & Concert',
    description: 'The camp culminates in a public showcase where families witness the creative transformation. Children present their artwork, perform live music, and share literary creations — a celebration of every child\'s unique voice.',
    features: [
      { icon: 'palette', title: 'Art Gallery Exhibition', description: 'Curated gallery of paintings, drawings, and mixed-media artwork created during the camp.' },
      { icon: 'mic', title: 'Live Concert', description: 'Musical performances including solo pieces, ensemble work, and collaborative compositions.' },
      { icon: 'users', title: 'Family Interactive Stations', description: 'Hands-on art stations where families create together, guided by the campers themselves.' },
      { icon: 'camera', title: 'Professional Documentation', description: 'Photography and video of the showcase. Families receive a digital album of the journey.' },
      { icon: 'star', title: 'Awards & Certificates', description: 'Every child receives a certificate and personalized recognition for their creative contribution.' },
      { icon: 'sparkles', title: 'Closing Celebration', description: 'A heartfelt closing circle where children reflect, share gratitude, and celebrate new bonds.' },
    ],
    invitation: {
      title: "You're Invited!",
      text: 'The Gallery & Concert is open to all families, sponsors, and community members. Join us on Day 4 to witness the magic that happens when children are given the space to create.',
      cta: 'Register Now',
    },
  },

  // Safety Section
  safety: {
    badge: 'Your Child\'s Safety Is Our Priority',
    title: 'Safe Hands, Creative Minds',
    description: 'We understand that entrusting your child to us is a significant decision. Here\'s how we ensure their safety, well-being, and growth throughout the camp.',
    features: [
      {
        icon: 'shield',
        title: 'Child Protection Policy',
        description: 'Comprehensive safeguarding policy aligned with international best practices. Every staff member and volunteer is bound by our Child Protection Policy.',
      },
      {
        icon: 'users',
        title: 'Two-Adult Protocol',
        description: 'No child is ever alone with a single adult. Our two-adult minimum rule applies at all times — during activities, breaks, and transitions.',
      },
      {
        icon: 'filecheck',
        title: 'Vetted Staff & Volunteers',
        description: 'All instructors, facilitators, and volunteers undergo thorough background checks and reference verification before joining the camp.',
      },
      {
        icon: 'award',
        title: 'Qualified Instructors',
        description: 'Our arts facilitators are experienced professionals with credentials in their respective disciplines and training in child-centered pedagogy.',
      },
      {
        icon: 'heartpulse',
        title: 'First Aid & Emergency Ready',
        description: 'Certified first aid personnel on-site at all times. Clear emergency protocols, medical consent forms, and parent contact procedures in place.',
      },
      {
        icon: 'lock',
        title: 'Secure Environment',
        description: 'Controlled access to the venue, sign-in/sign-out procedures for all children, and supervised movement throughout the camp grounds.',
      },
    ],
    trustBanner: {
      title: 'Parental Consent & Transparency',
      text: 'Every parent receives a detailed consent form, camp handbook, and daily updates. You\'ll know exactly what your child is doing, who they\'re with, and how they\'re progressing. Our open-door policy means you can reach us at any time during the camp.',
    },
    stats: [
      { value: '1:8', label: 'Adult-to-Child Ratio' },
      { value: '100%', label: 'Staff Background Checked' },
      { value: '24/7', label: 'Parent Communication Line' },
    ],
  },

  // Testimonials
  testimonials: {
    subtitle: 'Voices from the Garden',
    title: 'What Our Community Says',
    items: [
      {
        quote: "My daughter came home from the camp buzzing with excitement. She couldn't stop talking about the painting she created and the song she performed. The confidence she gained in just 4 days was remarkable.",
        name: 'Wanjiku M.',
        role: 'Parent of a 10-year-old',
      },
      {
        quote: "As a volunteer, I was blown away by the organization and the genuine care for every child. The two-adult protocol and safety measures gave me confidence, and seeing the children's transformation was deeply rewarding.",
        name: 'David O.',
        role: 'Camp Volunteer, 2025',
      },
      {
        quote: "Our company sponsored the camp as part of our CSR initiative. The transparency was exceptional — we received a detailed financial report and saw exactly how our contribution impacted children's lives. We're sponsoring again this year.",
        name: 'Amina K.',
        role: 'Corporate Sponsor',
      },
    ],
  },

  // Parent Section
  parents: {
    subtitle: 'For Parents & Guardians',
    title: 'Unlock the Gift of Creativity in your child',
    description: 'Registration is simple, payment is flexible, and your child\'s safety is our absolute priority. Here\'s everything you need to know.',
    whatsIncluded: [
      { icon: 'palette', text: 'All art supplies & materials' },
      { icon: 'mic', text: 'Musical instruments & equipment' },
      { icon: 'book', text: 'Literary arts workbooks & journals' },
      { icon: 'camera', text: 'Professional photography of showcase' },
      { icon: 'gift', text: 'Refreshments, Game equipment' },
      { icon: 'users', text: 'Expert instruction across all tracks' },
    ],
    paymentPlans: [
      {
        name: 'Full Payment',
        price: '7,000',
        description: 'Pay in full and secure your child\'s spot immediately',
        features: ['Immediate confirmation', 'Refreshments, Game equipment', 'All materials & supplies', 'Gallery & Concert access', 'Certificate of completion'],
        highlight: false,
      },
      {
        name: '2-Installment Plan',
        price: '3,500',
        description: 'Split into two equal payments for flexibility',
        features: ['6,000 KES on registration', '6,000 KES due May 30, 2026', 'Refreshments, Game equipment', 'All materials & supplies', 'Gallery & Concert access'],
        highlight: true,
      },
      {
        name: '3-Installment Plan',
        price: '2,333',
        description: 'Three manageable monthly payments',
        features: ['4,000 KES on registration', '4,000 KES due April 30, 2026', '4,000 KES due May 30, 2026', 'All materials & supplies', 'Gallery & Concert access'],
        highlight: false,
      },
    ],
    faqs: [
      { q: 'What age groups are accepted?', a: 'Children aged 7–16 are welcome. Activities are adapted for different age groups within the three tracks.' },
      { q: 'Does my child need prior arts experience?', a: 'Not at all! The camp is designed for all skill levels — from complete beginners to young artists looking to expand their horizons.' },
      { q: 'What should my child bring?', a: 'A water bottle, sunscreen, comfortable clothing, and an open mind. All art supplies, instruments, and materials are provided.' },
      { q: 'Is lunch provided?', a: 'Please pack a lunch and snacks for your child. We provide scheduled snack breaks and ensure hydration throughout the day.' },
      { q: 'Can I attend the Gallery & Concert?', a: 'Absolutely! The Day 4 showcase is open to all families. It\'s the highlight of the camp where children present their creative work.' },
    ],
  },

  // Volunteer Section
  volunteers: {
    subtitle: 'For Volunteers',
    title: 'Shape Young Creative Minds',
    description: 'Join our team of dedicated volunteers and make a tangible difference in children\'s lives. No payment required — just your passion, time, and commitment.',
    keyInfo: [
      { icon: 'clock', title: 'Time Commitment', text: '4 days, 8:00 AM – 4:30 PM (flexible roles available)' },
      { icon: 'mappin', title: 'Location', text: 'Hidden Gardens, Karen, Nairobi' },
      { icon: 'shield', title: 'Requirements', text: 'Background check & Code of Conduct agreement' },
    ],
    roles: [
      {
        title: 'Track Facilitator',
        description: 'Lead arts workshops in Performing Arts, Visual Arts, or Literary Arts. Guide children through creative exercises and help them prepare for the showcase.',
        commitment: 'Full 4 days, 8:00 AM – 4:30 PM',
        icon: 'bookopen',
      },
      {
        title: 'Group Mentor',
        description: 'Support a small group of 8 children throughout the camp. Ensure they stay engaged, feel included, and get the most from each activity.',
        commitment: 'Full 4 days, 8:00 AM – 4:30 PM',
        icon: 'users',
      },
      {
        title: 'Logistics & Operations',
        description: 'Help with setup, registration, materials management, snack coordination, and ensuring smooth day-to-day operations.',
        commitment: 'Flexible — full days or half days available',
        icon: 'calendar',
      },
      {
        title: 'Gallery & Concert Support',
        description: 'Assist with the Day 4 showcase — stage setup, guest coordination, photography, and creating a memorable experience for families.',
        commitment: 'Day 3 afternoon + Day 4 full day',
        icon: 'heart',
      },
    ],
    benefits: [
      'Certificate of Volunteer Service',
      'Professional development in arts education',
      'Networking with creative professionals',
      'Meals provided during camp days',
      'Camp t-shirt & volunteer badge',
      'Letter of recommendation upon request',
    ],
  },

  // Donor Section
  donors: {
    subtitle: 'For Sponsors & Donors',
    title: 'Invest in Creative Futures',
    description: 'Your sponsorship directly transforms children\'s lives. Every shilling is accounted for, every contribution is recognized, and every child benefits.',
    stats: [
      { icon: 'trendingup', value: '30+', label: 'Children Impacted' },
      { icon: 'barchart', value: '100%', label: 'Fund Transparency' },
      { icon: 'heart', value: '3', label: 'Arts Disciplines' },
      { icon: 'checkcircle', value: '4 Days', label: 'Transformative Experience' },
    ],
    tiers: [
      {
        name: 'Gold Partner',
        amount: '100,000+',
        description: 'Premier sponsorship with maximum impact and visibility',
        impact: 'Funds the entire camp — instructor honorariums, venue, materials, meals, and showcase production for 30+ children.',
        benefits: [
          '5 complimentary camp slots for sponsored children',
          'Prime logo placement on all camp materials & banners',
          'Speaking opportunity at Gallery & Concert',
          'Dedicated social media spotlight (pre, during, post camp)',
          'Full financial transparency report post-camp',
          'VIP invitation to the Gallery & Concert',
          'Co-branding on camp photography & video documentation',
        ],
      },
      {
        name: 'Silver Partner',
        amount: '50,000',
        description: 'Significant impact with strong brand recognition',
        impact: 'Covers instructor honorariums and venue costs — ensuring quality facilitation and a safe, inspiring environment.',
        benefits: [
          'Logo placement on camp banners & programs',
          'Social media recognition (pre & post camp)',
          '2 complimentary camp slots for sponsored children',
          'Financial transparency report post-camp',
          'Invitation to the Gallery & Concert',
          'Named acknowledgment on camp certificates',
        ],
      },
      {
        name: 'Art Supporter',
        amount: '15,000',
        description: 'Directly sponsors art supplies for underprivileged children',
        impact: 'Provides complete art supply kits for 5 children from underprivileged backgrounds — paints, canvases, journals, instruments, and more.',
        benefits: [
          'Name listed on camp program & website',
          'Social media thank-you post',
          'Personal thank-you letter from a sponsored child',
          'Invitation to the Gallery & Concert',
          'Photo updates of children using your sponsored supplies',
        ],
      },
    ],
    transparency: {
      title: 'Financial Transparency',
      text: 'We believe in complete accountability. Here\'s exactly how the camp budget of 120,000 KES is allocated. Sponsors receive a detailed financial report after the camp.',
      note: 'Full financial suite available on request',
      breakdown: [
        { category: 'Instructor Honorariums', percentage: 35, amount: '42,000 KES' },
        { category: 'Venue & Facilities', percentage: 20, amount: '24,000 KES' },
        { category: 'Art Supplies & Materials', percentage: 20, amount: '24,000 KES' },
        { category: 'Meals & Refreshments', percentage: 10, amount: '12,000 KES' },
        { category: 'Showcase Production', percentage: 10, amount: '12,000 KES' },
        { category: 'Admin & Contingency', percentage: 5, amount: '6,000 KES' },
      ],
    },
  },

  // Footer
  footer: {
    cta: {
      title: 'Ready to Be Part of Something Beautiful?',
      text: 'Whether you\'re registering a child, volunteering your time, or sponsoring a creative future — every action plants a seed in the Garden of Creativity.',
      buttons: [
        { text: 'Register Your Child', href: '#parents' },
        { text: 'Volunteer With Us', href: '#volunteers' },
        { text: 'Become a Sponsor', href: '#sponsors' },
      ],
    },
    description: 'The Garden of Creativity — a 4-day immersive arts residency for children aged 7–16 at Hidden Gardens, Karen.',
    policies: [
      'Child Protection Policy',
      'Volunteer Code of Conduct',
      'Parental Consent Form',
      'Financial Management Suite',
      'Sponsorship Document',
    ],
    contact: {
      email: 'orama.kenya@gmail.com',
      phone: '+254 743 224 556',
      address: 'Hidden Gardens, Karen, Nairobi',
    },
    copyright: '© 2026 ORAMA Creative Arts Program. All rights reserved.',
    tagline: 'Made with ❤️ for Kenya\'s young creatives',
  },
};
