import Link from "next/link";
import fs from "node:fs";

export default async function Home() {
  const files = fs
    .readdirSync("./src/app", { recursive: true })
    .filter((v) => !v.includes("."));

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      {files.map((href, i) => (
        <Link key={i} href={`/${href}`}>
          {href}
        </Link>
      ))}
    </div>
  );
}
