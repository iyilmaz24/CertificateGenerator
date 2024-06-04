import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <main className="w-100 h-100 flex flex-column justify-center items-center">
      <section
        className="w-80 h-50 flex flex-column justify-center items-center content-block"
        style={{ maxHeight: "min(400px, 50%)", width: "min(500px, 80%)" }}
      >
        <InputAndLabel
          id="course"
          displayText="Course"
          locked={true}
          courseName="Professional React & Next.js"
        />

        <InputAndLabel id="firstName" displayText="First Name" />

        <InputAndLabel id="lastName" displayText="Last Name" />

        <span className="h-100 w-100 flex flex-column items-center justify-end">
          <Button
            className="gradient-background gradient-button w-40 ma4 grow"
            style={{ width: "max(40%, 135px)" }}
          ></Button>
        </span>
      </section>
    </main>
  );
}

type inputAndLabelProps = {
  id: string;
  displayText: string;
  locked?: boolean;
  courseName?: string;
};

function InputAndLabel({
  id,
  displayText,
  locked,
  courseName,
}: inputAndLabelProps) {
  return (
    <>
      <span className="w-80 mt3">
        <Label htmlFor={id} className="f7 flex justify-start fw2 mv2">
          {displayText}
        </Label>
        <Input
          id={id}
          name={id}
          disabled={locked}
          placeholder={courseName}
          className="f7 w-100 pa1"
        />
      </span>
    </>
  );
}
