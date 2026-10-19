export type ModelSlug = "apex" | "pulse" | "horizon";

export interface Model {
  id: ModelSlug;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  specs: {
    label: string;
    value: string;
  }[];
  highlights: {
    title: string;
    body: string;
  }[];
  performance: {
    label: string;
    value: string;
    note?: string;
  }[];
  powertrain: string;
  chassis: string;
  interior: string;
}

export const models: Model[] = [
  {
    id: "apex",
    name: "Apex",
    tagline: "Grand Touring Hybrid",
    headline: "Continent-crossing presence. Visceral V8 soul.",
    description:
      "The ultimate expression of Posada. Twin-turbo 4.0L V8 mated to high-output electric motors. Effortless continent-crossing speed with visceral soundtrack.",
    longDescription:
      "Apex is built for the driver who refuses to choose between grand-touring refinement and supercar intensity. A twin-turbo 4.0-liter V8 works in concert with dual high-output electric motors to deliver seamless thrust, instant response, and a soundtrack that remains unmistakably mechanical. Adaptive air suspension, active aero, and a carbon-intensive structure keep the car composed from coastal highways to mountain passes.",
    image: "/models/apex.jpg",
    price: "From $285,000",
    specs: [
      { label: "Powertrain", value: "Twin-turbo 4.0L V8 + dual e-motors" },
      { label: "Combined output", value: "1,250 hp" },
      { label: "0–60 mph", value: "2.1 s" },
      { label: "Top speed", value: "220 mph" },
      { label: "Torque", value: "1,050 lb-ft" },
      { label: "Transmission", value: "8-speed dual-clutch" },
      { label: "Drive", value: "All-wheel drive" },
      { label: "Weight", value: "3,420 lb" },
    ],
    highlights: [
      {
        title: "Hybrid torque fill",
        body: "Electric motors eliminate turbo lag and fill every gap in the power curve, so acceleration feels continuous from idle to redline.",
      },
      {
        title: "Grand touring chassis",
        body: "Adaptive air suspension and multi-mode damping balance long-distance comfort with composed high-speed stability.",
      },
      {
        title: "Active aero",
        body: "Deployable rear wing and underbody elements manage downforce and drag automatically for efficiency and grip.",
      },
      {
        title: "Crafted cabin",
        body: "Hand-finished leather, carbon, and aluminum with a driver-focused layout and dual curved displays.",
      },
    ],
    performance: [
      { label: "0–60 mph", value: "2.1 s", note: "Launch control" },
      { label: "0–100 mph", value: "4.6 s" },
      { label: "Quarter mile", value: "9.8 s" },
      { label: "Top speed", value: "220 mph", note: "Electronically limited" },
    ],
    powertrain:
      "A 4.0-liter twin-turbo V8 produces the core character of Apex. Two electric motors — one on each axle — add instant torque, enable all-wheel drive, and support short pure-electric running in urban conditions. Combined system output: 1,250 hp and 1,050 lb-ft.",
    chassis:
      "Carbon-fiber intensive structure with aluminum subframes. Adaptive air suspension, active roll control, and carbon-ceramic brakes as standard. Steering is electro-hydraulic for precise, natural feedback.",
    interior:
      "Four seats with optional rear package. Full leather or Alcantara, configurable ambient lighting, and a 12.3-inch driver display plus 14.5-inch center touchscreen. Bose 3D audio available.",
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Track-bred intensity",
    headline: "Lap times first. Compromise nowhere.",
    description:
      "Carbon-intensive architecture, active aero, and a hybrid system tuned for maximum lap times. Pure kinetic art for the dedicated driver.",
    longDescription:
      "Pulse is Posada’s most extreme expression. Every surface, every calibration, and every kilogram exists in service of lap time and driver connection. A higher-output hybrid system, aggressive active aero including a large fixed rear wing option, and a motorsport-derived chassis deliver 1,480 hp with ruthless precision. Built for the track — yet fully homologated for the road.",
    image: "/models/pulse.jpg",
    price: "From $365,000",
    specs: [
      { label: "Powertrain", value: "Twin-turbo 4.0L V8 + dual e-motors" },
      { label: "Combined output", value: "1,480 hp" },
      { label: "0–60 mph", value: "1.9 s" },
      { label: "Top speed", value: "230 mph" },
      { label: "Torque", value: "1,180 lb-ft" },
      { label: "Transmission", value: "8-speed dual-clutch" },
      { label: "Drive", value: "All-wheel drive" },
      { label: "Weight", value: "3,180 lb" },
    ],
    highlights: [
      {
        title: "Track hybrid map",
        body: "Power delivery and regen are optimized for consistent lap times, with aggressive energy recovery under braking.",
      },
      {
        title: "Extreme aero",
        body: "Large rear wing, deep front splitter, and underfloor venturi tunnels generate significant downforce at speed.",
      },
      {
        title: "Carbon architecture",
        body: "Extensive carbon fiber body and structure cut weight while increasing torsional stiffness for sharper response.",
      },
      {
        title: "Motorsport brakes",
        body: "Carbon-ceramic rotors with multi-piston calipers sized for repeated high-speed stops on circuit.",
      },
    ],
    performance: [
      { label: "0–60 mph", value: "1.9 s", note: "Launch control" },
      { label: "0–100 mph", value: "4.1 s" },
      { label: "Quarter mile", value: "9.2 s" },
      { label: "Top speed", value: "230 mph" },
    ],
    powertrain:
      "The same twin-turbo V8 architecture as Apex, with higher boost, revised intake and exhaust, and more powerful electric motors. Peak combined output reaches 1,480 hp. A track-specific hybrid strategy prioritizes sustained performance over pure efficiency.",
    chassis:
      "Lower, stiffer suspension with adjustable coilover geometry available. Carbon-ceramic brakes, forged wheels, and sticky performance tires are standard. Optional fixed rear wing for maximum downforce.",
    interior:
      "Two seats. Lightweight sport seats with extensive bolstering, Alcantara and carbon throughout, minimal luxury weight. Digital cluster focused on lap timing, tire temps, and hybrid state of charge.",
  },
  {
    id: "horizon",
    name: "Horizon",
    tagline: "Open-air presence",
    headline: "Open sky. Same V8 hybrid heart.",
    description:
      "Roadster freedom with supercar performance. Retractable hardtop, adaptive chassis, and the same V8 hybrid heart — refined for open skies.",
    longDescription:
      "Horizon brings Posada’s hybrid V8 character into the open air. A lightweight retractable hardtop transforms the cabin in seconds, while structural reinforcements and adaptive chassis tuning preserve the precision and composure of the closed cars. With 1,180 hp and a more relaxed grand-touring bias, Horizon is the Posada for coastal roads, mountain passes, and nights when the roof stays down.",
    image: "/models/horizon.jpg",
    price: "From $315,000",
    specs: [
      { label: "Powertrain", value: "Twin-turbo 4.0L V8 + dual e-motors" },
      { label: "Combined output", value: "1,180 hp" },
      { label: "0–60 mph", value: "2.4 s" },
      { label: "Top speed", value: "210 mph" },
      { label: "Torque", value: "980 lb-ft" },
      { label: "Transmission", value: "8-speed dual-clutch" },
      { label: "Drive", value: "All-wheel drive" },
      { label: "Weight", value: "3,580 lb" },
    ],
    highlights: [
      {
        title: "Retractable hardtop",
        body: "A rigid folding roof opens or closes in under 15 seconds at speeds up to 30 mph, preserving structural integrity and cabin quietness when closed.",
      },
      {
        title: "Open-air chassis tune",
        body: "Reinforced structure and adaptive damping calibrated for the different weight distribution and aero of the roadster body.",
      },
      {
        title: "Wind management",
        body: "Invisible aerodynamic elements and a deployable wind deflector keep turbulence low with the top down at highway speeds.",
      },
      {
        title: "Same hybrid heart",
        body: "Full V8 hybrid powertrain shared with the closed models, tuned for smooth, progressive delivery suited to open-road driving.",
      },
    ],
    performance: [
      { label: "0–60 mph", value: "2.4 s", note: "Launch control" },
      { label: "0–100 mph", value: "5.2 s" },
      { label: "Quarter mile", value: "10.4 s" },
      { label: "Top speed", value: "210 mph", note: "Top up or down" },
    ],
    powertrain:
      "Horizon uses the twin-turbo V8 hybrid system in a calibration focused on progressive response and refinement. Combined output of 1,180 hp still delivers supercar acceleration while remaining approachable on everyday roads.",
    chassis:
      "Additional structural bracing for open-top rigidity. Adaptive air suspension with roadster-specific maps. Carbon-ceramic brakes standard. All-wheel drive for confidence in varied conditions.",
    interior:
      "Two seats with optional 2+2. Weather-resistant materials available, heated seats and neck-level heating for top-down comfort. Same dual-display digital interface as Apex, with a focus on open-air driving modes.",
  },
];

export function getModel(slug: string): Model | undefined {
  return models.find((m) => m.id === slug);
}

export function getAllModelSlugs(): ModelSlug[] {
  return models.map((m) => m.id);
}
