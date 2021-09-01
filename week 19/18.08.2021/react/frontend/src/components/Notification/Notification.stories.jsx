import React from "react";
import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const PrimaryNotification = () => (
  <Notification>Any text here</Notification>
);
