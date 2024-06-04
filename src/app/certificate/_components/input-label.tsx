import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TSearchParams } from "../react-nextjs/generate/page";

type inputAndLabelProps = {
  id: string;
  displayText: string;
  locked?: boolean;
  courseName?: string;
  setSearchParams: React.Dispatch<React.SetStateAction<TSearchParams>>;
};

export default function InputAndLabel({
  id,
  displayText,
  locked,
  courseName,
  setSearchParams,
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
          onChange={(e) => {
            const newVal = e.currentTarget.value;
            const id = e.currentTarget.id;
            setSearchParams((prev: TSearchParams) => ({
              ...prev,
              [id]: newVal,
            }));
          }}
          className="f7 w-100 pa1"
        />
      </span>
    </>
  );
}
