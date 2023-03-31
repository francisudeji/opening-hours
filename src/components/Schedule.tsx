import { FormattedSchedule } from "src/utils";

interface ScheduleProps {
  schedule: FormattedSchedule;
}

export function Schedule({ schedule }: ScheduleProps) {
  const _schedule = Object.entries(schedule);

  return (
    <ul className="divide-y divide-slate-200 border-t border-t-gray-400 border-b border-b-gray-200 text-base">
      {_schedule.length > 0 ? (
        _schedule.map(([day, hours], index) => {
          const isToday = index + 1 === new Date().getDay();

          return (
            <li key={index} className="py-4 flex items-center justify-between">
              {isToday ? (
                <span className="text-gray-400 font-medium flex items-center space-x-3">
                  <span className="capitalize">{day}</span>
                  <span className="text-green text-xs font-bold">TODAY</span>
                </span>
              ) : (
                <span className="text-gray-400 font-medium capitalize">
                  {day}
                </span>
              )}

              <div className="flex flex-col text-right font-normal">
                {hours.length > 0 ? (
                  hours.map((hour, index) => (
                    <span className="text-gray-400" key={index}>
                      {hour.open} - {hour.close}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-300">Closed</span>
                )}
              </div>
            </li>
          );
        })
      ) : (
        <p className="text-gray-300 text-center py-10">
          No opening hours found
        </p>
      )}
    </ul>
  );
}
