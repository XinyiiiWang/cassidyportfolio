import Image from "next/image";
import Sidebar from "@/components/sidebar";
import ProjectIcons from "@/components/projecticons";

export default function Home() {
  return (
    <main className="flex-1 p-4">
      <div className="flex h-full">
        <div className="ml-8">
          {" "}
          {/* Added margin-left */}
          <Sidebar />
        </div>
        <div className="flex-1">
          {" "}
          {/* Takes up the remaining space */}
          <ProjectIcons />
        </div>
      </div>
    </main>
  );
}
