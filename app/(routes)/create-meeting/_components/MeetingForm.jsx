"use client";

import LocationOption from "@/app/_utils/LocationOption";
import ThemeOptions from "@/app/_utils/ThemeOptions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function MeetingForm() {
  const [themeColor, setThemeColor] = useState();
  const [eventName, setEventName] = useState();
  const [duration, setDuration] = useState(30);
  const [locationType, setLocationType] = useState();
  const [locationUrl, setLocationUrl] = useState();

  return (
    <div className="p-8">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2">
          <ChevronLeft /> Cancel
        </h2>
      </Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event</h2>
        <hr />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">* Event Name</h2>
        <Input
          placeholder="Name of your meeting event"
          onChange={(event) => setEventName(event.target.value)}
        />

        <h2>* Duration</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              {duration} Min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={(event) => setDuration(15)}>
              15 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(event) => setDuration(30)}>
              30 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(event) => setDuration(45)}>
              45 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(event) => setDuration(60)}>
              60 Min
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="font-bold">* Location</h2>
        <div className="grid grid-cols-4 gap-3">
          {LocationOption.map((option, index) => (
            <div
              className={`border flex flex-col justify-center items-center p-3 rounded-lg
             hover:bg-blue-100 hover:border-primary cursor-pointer ${
               locationType == option.name && "bg-blue-100 border-primary"
             }`}
              onClick={() => setLocationType(option.name)}
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={30}
                height={30}
              />
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>
        {locationType && (
          <>
            <h2 className="font-bold">* Add {locationType} Url</h2>
            <Input
              placeholder="Add Url"
              onChange={(event) => setLocationUrl(event.target.value)}
            />
          </>
        )}
        <h2 className="font-bold">Select Theme Color</h2>
        <div className="flex justify-evenly">
          {ThemeOptions.map((color, index) => (
            <div
              className={`h-7 w-7 rounded-full ${
                themeColor == color && "border-4 border-black"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setThemeColor(color)}
            ></div>
          ))}
        </div>
      </div>
      <Button
        className="w-full mt-9"
        disabled={!eventName || !duration || !locationType || !locationUrl}
      >
        Create
      </Button>
    </div>
  );
}

export default MeetingForm;
