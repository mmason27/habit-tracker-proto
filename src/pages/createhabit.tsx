// may want to move this over to the App Router, instead of what is now antiquated, the Pages Router

// when we click "button" here, we want to save this to our database of habits

import Link from "next/link";

const handleSubmit = (e: any) => {
  e.preventDefault(); // prevents page from default behavior, which is reloading, so we can do all this
  const formData = new FormData(e.target);
  const habit = formData.get("habit");
  const frequency = formData.get("frequency");

  console.log("Habit:", habit);
  console.log("Frequency:", frequency);
};

export default function CreateHabit() {
  return (
    <div>
      <Link href="..">Go back</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="habit" placeholder="Ex. Walk the dog..." />
        <>
          <input type="radio" id="daily" value="daily" name="frequency" />
          <label htmlFor="Daily">Daily</label>
        </>
        <>
          <input type="radio" id="weekly" value="weekly" name="frequency" />
          <label htmlFor="Weekly">Weekly</label>
        </>
        <>
          <input type="radio" id="monthly" value="weekly" name="frequency" />
          <label htmlFor="Monthly">Monthly</label>
        </>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
