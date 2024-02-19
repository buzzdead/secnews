import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

interface Props {
  containerStyles: string;
  tags: { id: string; name: string }[];
}

const MobileNav: React.FC<Props> = ({ containerStyles, tags }: Props) => {
  return (
    <div className={containerStyles}>
      <Sheet >
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="border-l border-gray-600 bg-gray-900">
            <div className="flex flex-col items-center align-center gap-y-4 mt-5">
              
          {tags.map((t, id) => {
            return <div key={id}>{t.name}</div>;
          })}
          
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
