'use client';

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/app/lib/utils";
import { toast } from 'sonner';

export function Form() {
  function handleSubmit(formData: { get: (arg0: string) => any; }) {
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    toast(`Thanks ${lastname}, we will contact you soon via email ${email}`);
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-center font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Welcome to <label className="text-sky-500 block md:inline-block">TN Technology</label>
      </h2>
      <p className="text-neutral-600 max-w-lg mt-2 dark:text-neutral-300 text-center">
        Thank you for your interest, complete the form below so we can contact you.
      </p>

      <form className="my-8" action={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="First name" type="text" required/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input name="lastname" id="lastname" placeholder="Last name" type="text" required/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input name="email" id="email" placeholder="user@email.com" type="email" required/>
        </LabelInputContainer>

        <button
          className="hover:shadow-xl hover:shadow-sky-500 bg-gradient-to-br relative from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
