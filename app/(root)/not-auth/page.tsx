import { InfoBlock } from "@/shared/components";

export default function UnathorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <InfoBlock
        title="Denied access"
        text="You need to be logged in to access this page."
        imageUrl="/assets/lock.png"
      />
    </div>
  );
}
