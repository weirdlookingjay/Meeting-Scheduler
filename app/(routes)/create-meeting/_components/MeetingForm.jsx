"use client";

import LocationOption from "@/app/_utils/LocationOption";
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
  const [location, setLocation] = useState();
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
        <Input placeholder="Name of your meeting event" />

        <h2>* Duration</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              30 Min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>15 Min</DropdownMenuItem>
            <DropdownMenuItem>30 Min</DropdownMenuItem>
            <DropdownMenuItem>45 Min</DropdownMenuItem>
            <DropdownMenuItem>60 Min</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="font-bold">* Location</h2>
        <div className="grid grid-cols-4 gap-3">
          {LocationOption.map((option, index) => (
            <div
              className={`border flex flex-col justify-center items-center p-3 rounded-lg
             hover:bg-blue-100 hover:border-primary cursor-pointer ${
               location == option.name && "bg-blue-100 border-primary"
             }`}
              onClick={() => setLocation(option.name)}
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
        {location && (
          <>
            <h2 className="font-bold">Add {location} Url</h2>
            <Input placeholder="Add Url" />
          </>
        )}
      </div>
      <Button className="w-full mt-9">Create</Button>
    </div>
  );
}

export default MeetingForm;
