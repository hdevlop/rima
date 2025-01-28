"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { format, startOfYear, endOfYear, eachMonthOfInterval } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateInputProps } from "@/components/types";
import { Label } from "@/components/ui/label";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import BaseInput from "../Box";



const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  placeholder = "Pick a date",
  className = "",
  icon,
  showIcon = true,
  variant = 'default',
  status = 'default',
}) => {
  const [month, setMonth] = React.useState<number>(
    value ? value.getMonth() : new Date().getMonth()
  );
  const [year, setYear] = React.useState<number>(
    value ? value.getFullYear() : new Date().getFullYear()
  );

  const years = React.useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from(
      { length: currentYear - 1900 + 1 },
      (_, i) => currentYear - i
    );
  }, []);

  const months = React.useMemo(() => {
    return eachMonthOfInterval({
      start: startOfYear(new Date(year, 0, 1)),
      end: endOfYear(new Date(year, 0, 1)),
    });
  }, [year]);

  React.useEffect(() => {
    if (value) {
      setMonth(value.getMonth());
      setYear(value.getFullYear());
    }
  }, [value]);

  const handleYearChange = (selectedYear: string) => {
    const newYear = parseInt(selectedYear, 10);
    setYear(newYear);
    if (value) {
      const newDate = new Date(value);
      newDate.setFullYear(newYear);
      onChange(newDate);
    } else {
      onChange(new Date(newYear, month, 1));
    }
  };

  const handleMonthChange = (selectedMonth: string) => {
    const newMonth = parseInt(selectedMonth, 10);
    setMonth(newMonth);
    if (value) {
      const newDate = new Date(value);
      newDate.setMonth(newMonth);
      onChange(newDate);
    } else {
      onChange(new Date(year, newMonth, 1));
    }
  };

  const shouldDisplayIcon = Boolean(icon) && showIcon;

  return (
    <BaseInput variant={variant} status={status} className={cn('h-9', className)}>
      {shouldDisplayIcon && (
        <Icon icon={icon} className=" h-4 w-4 text-muted-foreground " />
      )}
      <Popover>
        <PopoverTrigger asChild>
          <div className={cn(
            "w-full flex px-2  items-center cursor-pointer gap-2 justify-start text-left font-normal relative",
            !value && "text-muted-foreground",
          )}
          >

            {value ? format(value, "PPP") : <Label className="font-normal">{placeholder}</Label>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 " align="start">
          <div className="flex justify-between p-2 ">
            <Select onValueChange={handleYearChange} value={year.toString()}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y.toString()}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleMonthChange} value={month.toString()}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {format(m, "MMMM")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            month={new Date(year, month)}
            onMonthChange={(newMonth) => {
              setMonth(newMonth.getMonth());
              setYear(newMonth.getFullYear());
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </BaseInput>
  );
};

export default DateInput