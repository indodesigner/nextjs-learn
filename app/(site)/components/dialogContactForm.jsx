import React from "react";
import ContactForm from "@/components/contactForm";
import { BsXLg } from "react-icons/bs";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
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
          {language === "english" ? "Book now" : "今予約する"}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex flex-row justify-between items-center">
            {language === "english" ? (
              <AlertDialogTitle>
                Interested?
                <p className="text-sm font-normal">
                  Send your details we will get back to you within 24 Hrs
                </p>
              </AlertDialogTitle>
            ) : (
              <AlertDialogTitle>
                興味がある？
                <p className="text-sm font-normal">
                  詳細を送信してください。24 時間以内にご連絡いたします
                </p>
              </AlertDialogTitle>
            )}

            <AlertDialogCancel className="rounded-3xl">
              <BsXLg />
            </AlertDialogCancel>
          </AlertDialogHeader>

          <ContactForm
            indianPackDetails={indianPackDetails}
            japanesePackDetails={japanesePackDetails}
            currentPack={tourPackage}
            language={language}
          />
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogContactForm;
