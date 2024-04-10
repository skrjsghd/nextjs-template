import { Checkbox, Label } from "@/components";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start gap-4 p-4">
        <h1>라이트 모드</h1>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="right"
        >
          <Checkbox />
        </Label>
      </div>
      <div className="dark flex flex-col items-start gap-4 bg-background p-4 text-foreground">
        <h1>다크모드</h1>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="right"
        >
          <Checkbox />
        </Label>
      </div>
    </>
  );
}
