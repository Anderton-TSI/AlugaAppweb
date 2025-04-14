import { SectionFunciona } from "@/components/SectionFunciona";
import { SectionInfos } from "@/components/SectionInfos";
import { SectionProprietario } from "@/components/SectionProprietario";
import { SectionSobre } from "@/components/SectionSobre";
import { SectionTrabalhe } from "@/components/SectionTabalhe";


export default function Home() {
  return (
    <>
      <SectionInfos/>
      <SectionSobre/>
      <SectionProprietario/>
      <SectionFunciona/>
      <SectionTrabalhe/>
    </>

  );
}
