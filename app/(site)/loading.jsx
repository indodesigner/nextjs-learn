import { Skeleton } from "../../components/ui/skeleton";
const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg py-2 px-4 mt-24 md:mt-56 gap-5">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-4 w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-4 w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-4 w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
          <Skeleton className="h-4 w-[200px] bg-neutral-500 dark:bg-neutral-300 bg-opacity-20 dark:bg-opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default loading;
