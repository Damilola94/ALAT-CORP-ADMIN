import React, { useState } from "react";
import { ImDatabase } from "react-icons/im";
import EmptyState from "@/components/EmptyState";
import Image from "next/image";
import Switch from "@/components/ui/Switch";

const NotificationSettings = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between w-5/6 p-6">
        <div>
          <h1 className="font-bold text-xl mb-3">Notification</h1>
          <p className="text-gray-500 mb-6">
            Manage your account notifications here
          </p>
        </div>
        <div className="space-y-6 mt-10">
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between w-4/6">
            <p>Notification for email.</p>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
