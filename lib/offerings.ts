export const offerings = [
  {
    slug: "equipment",
    title: "Drone Sales & Rental",
    description: "Find an aircraft and equipment configuration that fits your task, timeline, and crew.",
    image: "/images/drone-equipment.webp",
    alt: "Drone, controller, batteries, and an open carrying case on a workbench",
    detailImage: "/images/drone-equipment-detail.webp",
    detailAlt: "Folded drone and controller fitted into a rugged travel case",
    action: "Ask about equipment",
    details: [
      "Start with the work the aircraft needs to do. An imaging assignment, a practice flight, and a payload test each call for a different combination of aircraft, controls, and accessories.",
      "Let us know whether you need a rental for a specific date or are evaluating equipment for recurring work. Include the components you already have so we can discuss compatibility and what the setup needs.",
    ],
    planning: ["Intended use and preferred aircraft type", "Purchase or rental and target dates", "Controller, battery, and accessory needs"],
    examples: [
      { title: "Aircraft selection", description: "Match the platform to the flight task and the conditions at the site." },
      { title: "Equipment configuration", description: "Plan the aircraft, power, controls, and transport as one kit." },
    ],
  },
  {
    slug: "training",
    title: "Pilot Training",
    description: "Explore preflight preparation, aircraft handling, and flight practice for your experience level.",
    image: "/images/drone-training.webp",
    alt: "Three people watching a drone while one operates the flight controller",
    detailImage: "/images/drone-training-detail.webp",
    detailAlt: "Person checking a controller with a parked drone on a landing mat nearby",
    action: "Ask about training",
    details: [
      "A practical session can focus on aircraft setup, checking the flight area, and getting comfortable with the controls before working through maneuvers.",
      "Share your experience level and the kind of flying you want to do. Include the aircraft you plan to use and whether you are looking for individual or team instruction.",
    ],
    planning: ["Pilot experience and number of participants", "Aircraft or controller you plan to use", "Skills you want to practice and preferred timing"],
    examples: [
      { title: "Flight practice", description: "Work on aircraft orientation and steady movement in an open area." },
      { title: "Preflight preparation", description: "Check the aircraft, controls, and surroundings before takeoff." },
    ],
  },
  {
    slug: "logistics",
    title: "Low-Altitude Logistics",
    description: "Explore drone transport for specific payloads, routes, and pickup and drop-off sites.",
    image: "/images/drone-logistics.webp",
    alt: "Cargo drone carrying a package beneath its airframe",
    detailImage: "/images/drone-logistics-detail.webp",
    detailAlt: "Cargo drone resting on its landing skids with a case secured beneath the airframe",
    action: "Discuss a route",
    details: [
      "Start with the payload and its destination. Weight, dimensions, access to both sites, and the surrounding terrain help determine whether a drone flight fits the job.",
      "Tell us where the route begins and ends, how the payload will be handed over, and when it needs to move. Flight planning depends on site conditions, aircraft capabilities, and applicable approvals.",
    ],
    planning: ["Pickup and drop-off locations", "Payload contents, weight, and dimensions", "Delivery window and access at both ends"],
    examples: [
      { title: "Aerial transport", description: "Assess the payload and pickup and drop-off conditions for a potential route." },
      { title: "Payload handling", description: "Plan how cargo will be secured, carried, and received." },
    ],
  },
  {
    slug: "agriculture",
    title: "Agricultural Drones",
    description: "Plan drone use for crop scouting, field mapping, or aerial application based on the needs of your operation.",
    image: "/images/drone-agriculture.webp",
    alt: "Agricultural drone over rows of crops",
    detailImage: "/images/drone-agriculture-detail.webp",
    detailAlt: "Overhead view of parallel rows in a cultivated field",
    action: "Discuss your field",
    details: [
      "Share what you want to learn or accomplish in the field. Crop scouting can use aerial imagery to guide closer inspection, while field mapping provides an overview of the area.",
      "For an aerial application inquiry, include the crop, approximate acreage, and timing. Equipment, site conditions, materials, and required approvals shape what can be planned.",
    ],
    planning: ["Field location, crop, and approximate acreage", "Scouting, mapping, or application objective", "Timing, field access, and site conditions"],
    examples: [
      { title: "Field operations", description: "Choose an aircraft and flight approach for the crop and field conditions." },
      { title: "Aerial field mapping", description: "Review crop rows and field boundaries from above to guide closer inspection." },
    ],
  },
] as const;

export const equipmentScenes = [
  {
    title: "Equipment storage",
    description: "A storage layout with transport cases, spares, and aircraft on staging benches.",
    image: "/images/drone-warehouse.webp",
    alt: "Drones on warehouse workbenches beside racks of transport cases",
  },
  {
    title: "Ground staging",
    description: "Aircraft on individual landing pads for equipment checks before flight.",
    image: "/images/drone-ground-array.webp",
    alt: "Rows of grounded quadcopters arranged on orange landing pads",
  },
  {
    title: "Camera quadcopter",
    description: "A compact aircraft configuration with a stabilized camera for aerial imaging.",
    image: "/images/drone-camera-product.webp",
    alt: "Compact gray quadcopter with a front-mounted camera gimbal",
  },
  {
    title: "Survey quadcopter",
    description: "An open-frame configuration with a downward-facing camera for mapping.",
    image: "/images/drone-survey-product.webp",
    alt: "Industrial survey quadcopter with carbon arms and landing skids",
  },
] as const;
