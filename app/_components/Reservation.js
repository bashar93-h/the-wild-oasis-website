import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  return (
    // <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
    <div className="border border-primary-800 min-h-[400px] mb-10">
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
      />
    </div>
  );
}

export default Reservation;
