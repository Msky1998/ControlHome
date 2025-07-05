import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Flame, AlarmSmokeIcon } from "lucide-react"

type Props = {
  temperature?: number | null
  smoke?: number | null
  flame?: boolean | null
  alert?: boolean | null
}

export default function CarteInfos({ temperature, smoke, flame, alert }: Props) {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Température */}
      <Card className={temperature && temperature > 50 ? "border-red-500" : ""}>
        <CardContent className="flex flex-col items-center py-6">
          <Thermometer className="w-8 h-8 mb-2" />
          <p className="text-sm text-muted-foreground">Température</p>
          <p className="text-xl font-bold">{temperature?.toFixed(1)}°C</p>
        </CardContent>
      </Card>

      {/* Fumée */}
      <Card className={smoke && smoke > 800 ? "border-red-500" : ""}>
        <CardContent className="flex flex-col items-center py-6">
          <AlarmSmokeIcon className="w-8 h-8 mb-2" />
          <p className="text-sm text-muted-foreground">Fumée</p>
          <p className="text-xl font-bold">{smoke}</p>
        </CardContent>
      </Card>

      {/* Gaz (flamme) */}
      <Card className={flame === false ? "border-red-500" : ""}>
        <CardContent className="flex flex-col items-center py-6">
          <Flame className="w-8 h-8 mb-2" />
          <p className="text-sm text-muted-foreground">Gaz</p>
          <p className="text-xl font-bold">{flame === false ? "Oui" : "Non"}</p>
        </CardContent>
      </Card>
    </div>
    {alert ?<></>:<></>}
    </>
  )
}
