import Habits from "@/components/Habits";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Habits />
      <Link href="/createhabit">Add New Habit</Link>
    </div>
  );
}
