import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import Bedroom from "./Bedroom"

function FloorPlan() {
  return (
    <>
    <Bedroom bedNum="Bedroom1" />
    <Kitchen/>
    <Bath size="FullBath" />
    <Bedroom  bedNum="Bedroom2" />
    <LivingRoom/>
    <Bath size="HalfBath" />
    <Bedroom bedNum="Bedroom3" />
    </>
  )
}

export default FloorPlan