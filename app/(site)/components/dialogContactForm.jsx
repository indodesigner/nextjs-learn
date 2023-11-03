import React from "react";
import ContactForm from "@/components/contactForm";
import { BsXLg } from "react-icons/bs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DialogContactForm = ({
  indianPackDetails,
  japanesePackDetails,
  tourPackage,
  language,
}) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="font-medium text-white bg-neutral-950 dark:text-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 hover:dark:bg-neutral-300 p-2 px-4 ms-4 rounded-lg transition">
          Book now
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex flex-row justify-between items-center">
            <AlertDialogTitle>
              Interested?
              <p className="text-sm font-normal">
                Send your details we will get back to you within 24 Hrs
              </p>
            </AlertDialogTitle>

            <AlertDialogCancel className="rounded-3xl">
              <BsXLg />
            </AlertDialogCancel>
          </AlertDialogHeader>

          <AlertDialogDescription className="flex justify-center mt-2">
            <ContactForm
              indianPackDetails={indianPackDetails}
              japanesePackDetails={japanesePackDetails}
              currentPack={tourPackage}
              language={language}
            />
          </AlertDialogDescription>
          <AlertDialogFooter>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogContactForm;
