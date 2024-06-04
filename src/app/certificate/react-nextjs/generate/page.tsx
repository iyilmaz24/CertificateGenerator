"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputAndLabel from "../../_components/input-label";
import { useRouter } from "next/navigation";
import { TSearchParams } from "@/lib/validations";
import { VIEW_URL } from "@/lib/constants";

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

    console.log(`${VIEW_URL}?${newSearchParams.toString()}`);

    router.replace(`${VIEW_URL}?${newSearchParams.toString()}`);
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
