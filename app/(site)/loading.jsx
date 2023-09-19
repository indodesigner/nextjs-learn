import { Skeleton } from "/components/ui/skeleton";
// import Logo from "/public/images/logo.png";
// import Image from "next/image";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg py-2 px-4 mt-24 md:mt-56 gap-5">
      {/* <Image src={Logo} width={80} height={48} alt="logo image"></Image> */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-6 sm:h-12 sm:w-12 rounded-lg bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px] sm:h-4 sm:w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-2 w-[100px] sm:h-4 sm:w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-6 sm:h-12 sm:w-12 rounded-lg bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px] sm:h-4 sm:w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-2 w-[100px] sm:h-4 sm:w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-6 sm:h-12 sm:w-12 rounded-lg bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px] sm:h-4 sm:w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-2 w-[100px] sm:h-4 sm:w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-6 sm:h-12 sm:w-12 rounded-lg bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px] sm:h-4 sm:w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-2 w-[100px] sm:h-4 sm:w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default loading;
