import CarteInfos from "@/components/CarteInfos";
import VoidComponent from "@/components/VoidComponent";
import { CapteurData } from "@/lib/dataType";

export default async function Home() {
  const res = await fetch("https://control-house.vercel.app/api/capteurs/1");
  const data: CapteurData = await res.json();
  
  return (
   <section className="p-8">
    Tonton
    {!data &&
    <>
    <VoidComponent/>
    </>
    }
    {data &&
        <CarteInfos temperature={data.temperature} smoke={data.smoke} flame={data.flame} alert={data.alert}/>
    }
   </section>
  );
}
