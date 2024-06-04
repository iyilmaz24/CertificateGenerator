"use client";

import { Button } from "@/components/ui/button";
import z from "zod";
import { useState } from "react";
import InputAndLabel from "../../_components/input-label";
import { useRouter } from "next/navigation";

const schema = z.object({
  course: z.string().min(1).max(50),
  firstName: z.string().min(1).max(15),
  lastName: z.string().min(1).max(15),
});
export type TSearchParams = z.infer<typeof schema>;

export default function Page() {
  const [searchParams, setSearchParams] = useState<TSearchParams>({
    course: "Professional React & Next.js",
    firstName: "",
    lastName: "",
  });

  const router = useRouter();

  const handleGenerate = () => {
    const newSearchParams = new URLSearchParams({
      ...searchParams,
    });

    console.log(newSearchParams.toString());
    router.push(`/?${newSearchParams.toString()}`);
  };

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
          courseName={searchParams.course}
          setSearchParams={setSearchParams}
        />

        <InputAndLabel
          id="firstName"
          displayText="First Name"
          setSearchParams={setSearchParams}
        />

        <InputAndLabel
          id="lastName"
          displayText="Last Name"
          setSearchParams={setSearchParams}
        />

        <span className="h-100 w-100 flex flex-column items-center justify-end">
          <Button
            onClick={() => handleGenerate()}
            className="gradient-background gradient-button ma4 grow"
            style={{ width: "max(40%, 135px)", height: "40px" }}
          ></Button>
        </span>
      </section>
    </main>
  );
}
