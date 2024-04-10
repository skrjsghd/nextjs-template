import { Label } from "@/components";

export default function LabelPage() {
  return (
    <>
      <div className="flex flex-col items-start gap-4 p-4">
        <h1>라이트 모드</h1>
        <Label title="Label" description="description here">
          <div>hello world</div>
        </Label>
        <Label title="Label" description="description here" side="left">
          <div>hello world</div>
        </Label>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="left"
        >
          <div>hello world</div>
        </Label>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="right"
        >
          <div>hello world</div>
        </Label>
      </div>
      <div className="dark flex flex-col items-start gap-4 bg-background p-4 text-foreground">
        <h1>다크모드</h1>
        <Label title="Label" description="description here">
          <div>hello world</div>
        </Label>
        <Label title="Label" description="description here" side="left">
          <div>hello world</div>
        </Label>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="left"
        >
          <div>hello world</div>
        </Label>
        <Label
          title="Label"
          description="description here, if could be too long."
          side="right"
        >
          <div>hello world</div>
        </Label>
      </div>
    </>
  );
}
