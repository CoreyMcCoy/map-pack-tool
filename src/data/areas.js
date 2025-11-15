const Areas = [
  {
    id: 'gbp-setup',
    name: 'GBP Setup & Relevance',
    description:
      "Get the Google Business Profile correctly configured and tightly aligned to local '{keyword}' style searches.",
    tactics: [
      {
        id: 'gbp-service-area-setup',
        title: 'Set up GBP correctly as a service area business',
        priority: 'High',
        reason:
          'If GBP is misconfigured (wrong business type, weak service areas, bad phone), Map Pack performance is capped from day one.',
        steps: [
          'Create or claim the GBP for {businessName} if it does not exist.',
          'Set the business as a Service Area Business rather than a storefront if you do not see customers at your address.',
          'Hide the residential address on the profile so it does not show in Maps.',
          'Add service areas that match where trucks actually run (for example: Waco, Woodway, Hewitt, Robinson, Bellmead, Lacy Lakeview).',
          'Use a real local phone number that you answer as the main business line (no call center as the primary number).',
          'Set realistic business hours that match when someone will pick up.',
          'Fill every core field: description, opening date, website, appointment link, services, and attributes.',
        ],
        example:
          'Service area business with address hidden, service areas set to Waco and nearby cities, local phone as main number, hours 7am–7pm, and an appointment link pointing to a simple booking page.',
      },
      {
        id: 'gbp-categories',
        title: 'Fix GBP primary and secondary categories',
        priority: 'High',
        reason:
          'Category choice is one of the strongest relevance signals for Map Pack. If the primary category is wrong, everything else underperforms.',
        steps: [
          "Set the primary category to 'Junk removal service' or the closest match to your core service.",
          "Add only secondary categories that match real services, such as 'Garbage collection service' or 'Debris removal service'.",
          'Remove any category that points to different work (for example, moving or general contractor categories).',
          'Compare categories with the top 3 Map Pack competitors and make sure you are not choosing something weaker than what they use.',
        ],
        example:
          'Primary category set to Junk removal service, secondary categories set to Garbage collection service and Debris removal service, nothing else added.',
      },
      {
        id: 'nap-consistency',
        title: 'Tighten NAP and service area consistency',
        priority: 'High',
        reason:
          'Name, address, and phone need to match across GBP, website, and major listings or Google treats the business as messy and less trustworthy.',
        steps: [
          'Choose one exact business name for {businessName} and lock it in across website, GBP, invoices, trucks, and major listings.',
          'Use one main local phone number across GBP and core citations.',
          "Make sure city and state formatting is consistent everywhere (for example, always 'Waco, TX').",
          'Confirm the service areas in GBP match the real coverage and what you list on the website.',
          'Update any old or conflicting business names, phone numbers, or city names found in existing listings.',
        ],
        example:
          "The business uses the exact same name and phone everywhere, and every listing clearly says 'Waco, TX' rather than random variations.",
      },
    ],
  },
  {
    id: 'reviews-photos',
    name: 'Reviews, Photos & Engagement',
    description:
      'Build review volume, fresh content, and visible activity on the GBP.',
    tactics: [
      {
        id: 'review-machine',
        title: 'Build a predictable review machine',
        priority: 'High',
        reason:
          'Review count, rating, and how often reviews are coming in are major Map Pack signals. No steady review flow means weak local authority.',
        steps: [
          "Make 'ask for a review' a standard step after every completed job (on site or same day).",
          'Create a short SMS template with a direct link to the GBP review form for {businessName}.',
          'Have techs send the SMS while still on site or right after payment.',
          'Politely encourage customers to mention the service and city in their own words (for example, {keyword}).',
          'Respond to every review with a short, specific reply that mentions the service type or area when natural.',
          'Track weekly review counts and aim for a slow, steady increase rather than random spikes.',
        ],
        example:
          'After each job, the crew sends a text with the review link and you consistently add 5 to 10 new reviews every week that mention {keyword}.',
      },
      {
        id: 'photos-posts-qa',
        title: 'Feed GBP with real photos, posts, and Q&A',
        priority: 'Medium',
        reason:
          'Regular photos and posts show Google and users that the business is active. More engagement tends to correlate with better local rankings.',
        steps: [
          'Set a weekly routine to upload new real job photos (trucks, crews, before and after piles).',
          'Avoid stock photos whenever possible and focus on your own work.',
          "Fill out the 'Services' section with specific items such as appliance removal, mattress disposal, and garage cleanouts.",
          'Post at least once per week using GBP posts, with simple offers or updates that matter to customers.',
          'Add common customer questions to the GBP Q&A section and answer them as the business.',
          'Review GBP Insights monthly to see which photos and posts get the most views and double down on what works.',
        ],
        example:
          'Every Friday, the business uploads three before and after junk removal photos, posts a short weekend offer, and answers one common question like whether they take old mattresses.',
      },
    ],
  },
  {
    id: 'website-content',
    name: 'Website & On-page Support',
    description:
      "Tune the website to clearly support '{keyword}' and key service types in the target area.",
    tactics: [
      {
        id: 'core-service-page',
        title: 'Build a focused core service page for the main keyword',
        priority: 'High',
        reason:
          "Google uses the linked website page to understand what {businessName} does in that city. A clear '{keyword}' page supports Map Pack relevance.",
        steps: [
          "Create a dedicated page targeting '{keyword}' instead of sending GBP traffic to a generic home page.",
          "Use a simple H1 such as '{keyword}' or a close variation that still includes the city.",
          'Include a short intro that clearly states what you do, who you serve, and where you work.',
          'List key services on the page: house cleanouts, garage cleanouts, construction debris removal, apartment cleanouts, and so on.',
          'Add clear call to action elements above the fold: call button, simple form, or booking link.',
          'Add your NAP (business name, city, phone) and an embedded Google Map or service area reference.',
        ],
        example:
          "GBP website link goes to a page built around '{keyword}' with a clear headline, list of junk removal services, visible phone number, and service area details.",
      },
      {
        id: 'supporting-service-pages',
        title: 'Create supporting pages for high value junk removal jobs',
        priority: 'Medium',
        reason:
          'Extra pages for specific jobs (garage cleanouts, construction debris) help build topical authority and capture more long tail local searches.',
        steps: [
          'Identify the top 3 to 5 high value job types (garage cleanouts, apartment cleanouts, construction debris, hoarder cleanouts, estate cleanouts).',
          'Create one simple page per service, each targeted at Waco and nearby cities.',
          'Mention Waco and the surrounding suburbs naturally in the copy, not stuffed.',
          'Link from the core keyword page to these supporting pages and link back up from each service page to the main page.',
          'Make sure each page has a fast, mobile friendly layout with a visible call button and form.',
        ],
        example:
          "The site has /garage-cleanout and /construction-debris-removal pages targeted to the city, each describing the service and linking back to the main '{keyword}' page.",
      },
    ],
  },
  {
    id: 'citations-links',
    name: 'Citations & Local Links',
    description:
      'Strengthen trust with consistent citations and a few real local backlinks.',
    tactics: [
      {
        id: 'core-citations',
        title: 'Lock in core local citations',
        priority: 'Medium',
        reason:
          'Consistent business listings on major sites help confirm NAP details and support Map Pack prominence.',
        steps: [
          'Claim or create listings on the core platforms: Google, Apple Maps, Bing Places, Yelp, BBB, Facebook, Angi, HomeAdvisor, Nextdoor, and YellowPages.',
          'Use the exact same business name, city, and phone number you set in GBP for {businessName}.',
          'Add the website URL and a short description that matches your junk removal positioning.',
          'Fix or remove duplicate or outdated listings that use old names or numbers.',
        ],
        example:
          'The business shows up with the same name and phone across Google, Apple Maps, Yelp, BBB, and a handful of major directories.',
      },
      {
        id: 'local-backlinks',
        title: 'Earn a handful of real local backlinks',
        priority: 'Medium',
        reason:
          'Local links from real organizations in your city are stronger than random links and help with both authority and relevance.',
        steps: [
          'List possible partners: property managers, realtors, HOAs, local charities, and youth sports teams.',
          'Offer something useful (discounted cleanouts, a free junk removal day, sponsorship) in exchange for a mention and link on their websites.',
          'Ask existing business partners if they can list {businessName} on their vendor or preferred provider pages.',
          "Make sure links point to your core '{keyword}' page, not just the home page, when possible.",
        ],
        example:
          "A local property manager lists you on a preferred vendors page and the local youth sports league links to you as a sponsor, both pointing to your '{keyword}' page.",
      },
    ],
  },
  {
    id: 'proximity-tracking',
    name: 'Proximity, Behavior & Tracking',
    description:
      "Respect distance, make it easy to convert, and track real Map Pack rankings for '{keyword}'.",
    tactics: [
      {
        id: 'location-strategy',
        title: 'Respect proximity and pick a smart base location',
        priority: 'High',
        reason:
          'You cannot fully beat distance. Being closer to the best demand pocket in the city usually wins when all else is equal.',
        steps: [
          'Identify the part of the city where you most want to rank and where most profitable jobs are located.',
          'If possible, place the official business address for {businessName} as close to that area as you can while staying legitimate.',
          'Avoid virtual offices or fake locations; these are risky and can be suspended.',
          'When the business grows, consider real secondary locations in new cities with their own GBPs and staff.',
        ],
        example:
          'Instead of listing a rural home 40 minutes away, the business rents a small bay in the main city and uses that as the address, which improves Map Pack coverage in the city.',
      },
      {
        id: 'conversion-path',
        title: 'Make the conversion path from Map Pack simple and fast',
        priority: 'High',
        reason:
          'Ranking is useless if users cannot quickly call or book. Junk removal is often an impulse decision once someone sees the junk.',
        steps: [
          "Set 'Call' and 'Directions' as primary actions on GBP so they show clearly on mobile.",
          'Add an appointment or booking URL that goes directly to a simple booking form, not a cluttered home page.',
          'Make sure someone answers calls quickly during stated business hours.',
          'Optimize the booking page for mobile: fast load, visible pricing or price ranges, simple form, and clear service area.',
          'Add a short FAQ section that answers common questions such as what items you take and rough pricing.',
        ],
        example:
          'User taps the listing for {businessName}, sees a big call button and a booking link, and can book a two hour arrival window from their phone in under a minute.',
      },
      {
        id: 'map-rank-tracking',
        title: 'Track local grid rankings and adjust',
        priority: 'Medium',
        reason:
          'Checking ranking from one device is misleading. A grid view across the city shows where you are winning and losing in the Map Pack.',
        steps: [
          'Use a local rank tracking tool that can show GBP rankings across a map grid for key terms.',
          "Track at least: '{keyword}', 'junk removal near me', and close variations.",
          'Review the grid monthly to spot strong and weak zones in your service area.',
          'Adjust tactics based on the grid: push reviews and photos in weak areas, refine service area targeting, or consider location changes if needed.',
        ],
        example:
          "The grid shows you are strong in the central area for '{keyword}' but weak in one suburb, so you encourage more reviews from that suburb and watch those grid points climb.",
      },
    ],
  },
];

export default Areas;
