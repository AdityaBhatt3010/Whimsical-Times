export interface Story {
  headline: string;
  content: string;
  category: string;
  image?: string;
}

export const mockNews: Story[] = [
  {
    headline: "BREAKING: For the first time! Airplanes booked. Cities rushed. Just to see a sloth running in the night time",
    content: "In an unprecedented global event, flights sold out and cities emptied as people gather just to vitness a rare phenomenon - a sloth running at night. Experts are baffled, but sloth enthusiasts are thrilled. 'I've never seen anything like it,' said one excited fan. 'It's like witnessing a unicorn in the wild!'",
    category: "MUNICIPAL CHAOS",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    headline: "Bears in Cremerica revolted against less sugar in honey",
    content: "Furious over the new honey regulations, bears across Cremerica have staged a massive protest, demanding sweeter honey. 'We won't stand for this travesty!' roared one bear leader. The government is in talks with bear representatives to find a solution.",
    category: "TIME CRIMES",
    image: "https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    headline: "Local Cat Elected as CEO of Major Corporation, Demands Tuna-Based Economy",
    content: "Mr. Whiskers, a 3-year-old tabby, won the corporate election by a landslide after promising unlimited nap breaks and mandatory laser pointer meetings. The company's stock has mysteriously risen 400% since the announcement.",
    category: "FELINE TAKEOVER",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    headline: "Quantum Coffee Shop Serves Yesterday's Orders Tomorrow, Customers Confused but Caffeinated",
    content: "Café Paradox has revolutionized the coffee industry by utilizing quantum mechanics to deliver beverages across time zones. Customers report receiving their morning latte before they've even decided to order it. 'I got my coffee from next Tuesday,' said bewildered patron Sarah Jenkins.",
    category: "TEMPORAL DINING",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    headline: "Dream Police Issue Citations for Nighttime Thought Violations",
    content: "The newly formed Dream Enforcement Division has been patrolling the subconscious realm, issuing tickets for illegal imagination and unlicensed fantasy scenarios. Chief Dream Officer Rodriguez reports a 300% increase in surreal crime.",
    category: "SLEEP CRIME",
    image: "https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  }
];