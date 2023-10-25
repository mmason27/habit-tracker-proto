import HabitItem from "./HabitItem";

export default function Habits() {
  // this should be coming from our database
  const habits = [
    {
      title: "Call dad",
      completed: false,
      frequency: "weekly",
    },
    {
      title: "Walk Sadie",
      completed: false,
      frequency: "daily",
    },
  ];

  return (
    <div>
      <h1>Habits</h1>
      <ul>
        {habits.map((habit) => (
          <HabitItem key={habit.title} title={habit.title} />
        ))}
      </ul>
    </div>
  );
}
