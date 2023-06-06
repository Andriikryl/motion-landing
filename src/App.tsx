import { Hero } from "./components/Hero";
import {
  Colors,
  Todo,
  Availability,
  Music,
  SchedulingLinks,
  Team,
} from "./components/featurs/Card";
import FeatureTitle from "./components/featurs/Title";
import { MusicVisual, OtherVisual } from "./components/featurs/Visual";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Music,
    visual: MusicVisual,
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team,
    visual: OtherVisual,
  },
];

function App() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      {features.map((feature) => (
        <feature.visual id={feature.id} key={feature.id} />
      ))}
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="relative w-full aspect-square bg-gray-100 rounded-2xl">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
