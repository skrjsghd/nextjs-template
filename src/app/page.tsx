import { Button, Icon } from "@/components";

export default function Home() {
  return (
    <main className="grid h-dvh grid-cols-2">
      <div className="flex flex-col items-start gap-4 p-4">
        <h1>라이트 모드</h1>
        <Button size={"sm"}>Click me</Button>
        <Button>Click me</Button>
        <Button size={"lg"}>Click me</Button>
        <Button size={"icon"}>
          <Icon name="HandThumbUpIcon" />
        </Button>
        <Button variant={"outline"}>Click me</Button>
        <Button variant={"secondary"}>Click me</Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button variant={"link"}>Click me</Button>
      </div>
      <div className="dark flex flex-col items-start gap-4 bg-background p-4 text-foreground">
        <h1>다크모드</h1>
        <Button size={"sm"}>Click me</Button>
        <Button>Click me</Button>
        <Button size={"lg"}>Click me</Button>
        <Button size={"icon"}>
          <Icon name="HandThumbUpIcon" />
        </Button>
        <Button variant={"outline"}>Click me</Button>
        <Button variant={"secondary"}>Click me</Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button variant={"link"}>Click me</Button>
      </div>
    </main>
  );
}
