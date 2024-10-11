// NOT USED MOVED CODE INTO getInTouch.jsx

// "use client";
// import ContactForm from "@/components/contactForm";
// import { BsXLg } from "react-icons/bs";
// import { useLanguage } from "/contexts/languageContext";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// const GetInTouchSection = ({ indianPackDetails, japanesePackDetails }) => {
//   const { language } = useLanguage();

//   return (
//     <div className="gradient-bg-light shadow-lg p-6 rounded-2xl">
//       <h3 className="font-bold text-2xl mb-2">
//         {language === "english" ? "Get in Touch" : "連絡する"}
//       </h3>
//       <div>
//         {language === "english" ? (
//           <p className="mb-3">
//             Ready to embark on a personalized journey with Niko Travels? Contact
//             us today to start planning your dream vacation, whether it's a
//             leisurely escape to Kerala or a business and leisure combination in
//             Japan.
//           </p>
//         ) : (
//           <p className="mb-3">
//             Niko Travels
//             でパーソナライズされた旅に乗り出す準備はできていますか?接触
//             今日から夢の休暇の計画を始めましょう。
//             ケーララ州へのゆっくりとした休暇、またはビジネスとレジャーの組み合わせ
//             日本。
//           </p>
//         )}

//         <AlertDialog>
//           <AlertDialogTrigger className="font-medium text-white bg-neutral-950 dark:text-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 hover:dark:bg-neutral-300 p-2 px-4 rounded-lg transition">
//             {language === "english" ? "Book now" : "今予約する"}
//           </AlertDialogTrigger>
//           <AlertDialogContent>
//             <AlertDialogHeader className="flex flex-row justify-between items-center">
//               {language === "english" ? (
//                 <AlertDialogTitle>
//                   Interested?
//                   <p className="text-sm font-normal">
//                     Send your details we will get back to you within 24 Hrs
//                   </p>
//                 </AlertDialogTitle>
//               ) : (
//                 <AlertDialogTitle>
//                   興味がある？
//                   <p className="text-sm font-normal">
//                     詳細を送信してください。24 時間以内にご連絡いたします
//                   </p>
//                 </AlertDialogTitle>
//               )}

//               <AlertDialogCancel className="rounded-3xl">
//                 <BsXLg />
//               </AlertDialogCancel>
//             </AlertDialogHeader>

//             <ContactForm
//               indianPackDetails={indianPackDetails}
//               japanesePackDetails={japanesePackDetails}
//               language={language}
//               currentPack={null}
//             />
//             <AlertDialogFooter></AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialog>
//       </div>
//     </div>
//   );
// };

// export default GetInTouchSection;
