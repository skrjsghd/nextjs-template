import { Checkbox } from "@/components/checkbox";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <Link href="/button">버튼</Link>
      <Link href="/label">라벨</Link>
      <Link href="/checkbox">체크박스</Link>
    </div>
  );
}
